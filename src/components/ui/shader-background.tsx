import { useEffect, useRef } from "react";

const vsSource = `
  attribute vec4 aVertexPosition;
  void main() { gl_Position = aVertexPosition; }
`;

const fsSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;

  // Deep purple wave field — driven by the uploaded "wave signals the purple" reference.
  const vec3 bgDeep = vec3(0.024, 0.004, 0.055);        // #05010e
  const vec3 bgMid  = vec3(0.045, 0.008, 0.090);        // #0b0517
  const vec3 purpleCore = vec3(0.49, 0.22, 0.93);     // #7c3aed
  const vec3 purpleSoft = vec3(0.66, 0.33, 0.98);     // #a855f7
  const vec3 purpleGlow = vec3(0.85, 0.53, 1.00);     // #d88bff

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = rand(i);
    float b = rand(i + vec2(1.0, 0.0));
    float c = rand(i + vec2(0.0, 1.0));
    float d = rand(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float waveY(float x, float t, float freq, float amp, float phase) {
    return sin(x * freq + t + phase) * amp
         + sin(x * freq * 2.1 + t * 1.3 + phase) * amp * 0.35
         + sin(x * freq * 0.5 + t * 0.7 + phase) * amp * 0.6;
  }

  float line(vec2 uv, float y, float w, float glow) {
    float d = abs(uv.y - y);
    float core = smoothstep(w, 0.0, d);
    float halo = smoothstep(w * 4.0, w, d) * glow;
    return core + halo;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 p = (gl_FragCoord.xy - iResolution.xy * 0.5) / iResolution.y;

    // Dark vignette + subtle gradient.
    vec3 color = mix(bgDeep, bgMid, uv.y * 0.6 + uv.x * 0.2);
    float vignette = 1.0 - smoothstep(0.4, 1.6, length(p));
    color *= 0.75 + vignette * 0.35;

    // Layered flowing wave lines.
    float t = iTime * 0.25;
    const int lineCount = 14;

    for (int i = 0; i < lineCount; i++) {
      float fi = float(i);
      float idx = fi / float(lineCount);
      float phase = fi * 1.47;
      float offset = (fi - float(lineCount) * 0.5) * 0.13;

      float y = waveY(p.x, t + phase * 0.6, 1.8 + idx * 0.7, 0.25 + idx * 0.08, phase) + offset;

      // Horizontal fade keeps lines gentle at the edges.
      float edgeFade = 1.0 - smoothstep(0.6, 1.3, abs(p.x));
      float w = mix(0.001, 0.004, fract(fi * 7.13)) * edgeFade;
      float glow = mix(0.15, 0.45, fract(fi * 3.71));

      float l = line(p, y, w, glow) * edgeFade;
      float sparkle = noise(vec2(p.x * 30.0 + fi * 12.0, p.y * 30.0 + t * 2.0));
      l += sparkle * 0.04 * edgeFade;

      vec3 lineCol = mix(purpleCore, purpleSoft, fract(fi * 9.23));
      lineCol = mix(lineCol, purpleGlow, smoothstep(0.35, 0.85, l));
      color += lineCol * l * (0.7 + 0.3 * edgeFade);
    }

    // Add a faint horizontal "signal" sweep.
    float sweep = sin(p.y * 6.0 - t * 2.0) * 0.5 + 0.5;
    color += purpleCore * sweep * 0.015;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initShaderProgram(gl: WebGLRenderingContext) {
  const vs = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;
  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program link error:", gl.getProgramInfoLog(program));
    return null;
  }
  return program;
}

export default function ShaderBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { premultipliedAlpha: false });
    if (!gl) return;

    const program = initShaderProgram(gl);
    if (!program) return;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const attribLoc = gl.getAttribLocation(program, "aVertexPosition");
    const resLoc = gl.getUniformLocation(program, "iResolution");
    const timeLoc = gl.getUniformLocation(program, "iTime");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const start = Date.now();
    let raf = 0;
    const render = () => {
      resize();
      const t = (Date.now() - start) / 1000;
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, t);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(attribLoc, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attribLoc);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={`block h-full w-full ${className}`} aria-hidden="true" />;
}
