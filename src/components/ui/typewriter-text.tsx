import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursorClassName?: string;
  onDone?: () => void;
}

export function TypewriterText({
  text,
  speed = 45,
  startDelay = 150,
  className,
  cursorClassName,
  onDone,
}: TypewriterTextProps) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [displayed, setDisplayed] = useState(prefersReducedMotion ? text : "");
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      onDone?.();
      return;
    }
    let i = 0;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const start = setTimeout(() => {
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          setDone(true);
          onDone?.();
          return;
        }
        const ch = text[i - 1];
        const jitter = ch === " " ? 20 : ch === "," || ch === "?" ? 180 : 0;
        timers.push(setTimeout(tick, speed + jitter));
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(start);
      timers.forEach(clearTimeout);
    };
  }, [text, speed, startDelay, prefersReducedMotion, onDone]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayed}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-block w-[0.08em] h-[0.9em] align-[-0.1em] mr-1 bg-primary rounded-sm",
          done ? "animate-pulse" : "opacity-100",
          cursorClassName,
        )}
        style={{
          animation: done
            ? "typewriter-blink 1s steps(1) infinite"
            : undefined,
        }}
      />
      <style>{`@keyframes typewriter-blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
