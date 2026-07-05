import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string | string[];
  speed?: number;          // ms per char while typing
  deleteSpeed?: number;    // ms per char while deleting
  holdDelay?: number;      // ms to hold a completed phrase
  startDelay?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
}

/**
 * Typewriter — inspired by hextaui/typewriter-text.
 * Types phrase, holds, deletes, moves to next. Respects prefers-reduced-motion.
 */
export function Typewriter({
  text,
  speed = 60,
  deleteSpeed = 35,
  holdDelay = 1600,
  startDelay = 120,
  loop = true,
  className,
  cursorClassName,
}: TypewriterProps) {
  const phrases = Array.isArray(text) ? text : [text];
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const [display, setDisplay] = useState(reduced ? phrases[0] : "");
  const idxRef = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) return;
    let cancelled = false;
    let charCount = 0;
    let deleting = false;

    const clear = () => timer.current && clearTimeout(timer.current);
    const schedule = (fn: () => void, ms: number) => {
      clear();
      timer.current = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const step = () => {
      const phrase = phrases[idxRef.current];
      if (!deleting) {
        charCount += 1;
        setDisplay(phrase.slice(0, charCount));
        if (charCount === phrase.length) {
          const isLast = idxRef.current === phrases.length - 1;
          if (!loop && isLast) return;
          deleting = true;
          schedule(step, holdDelay);
          return;
        }
        const ch = phrase[charCount - 1];
        const jitter = ch === " " ? 15 : ch === "," || ch === "?" ? 140 : 0;
        schedule(step, speed + jitter);
      } else {
        charCount -= 1;
        setDisplay(phrase.slice(0, charCount));
        if (charCount === 0) {
          deleting = false;
          idxRef.current = (idxRef.current + 1) % phrases.length;
          schedule(step, 220);
          return;
        }
        schedule(step, deleteSpeed);
      }
    };

    schedule(step, startDelay);
    return () => {
      cancelled = true;
      clear();
    };
    // phrases identity change is intentional trigger
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, deleteSpeed, holdDelay, startDelay, loop, reduced]);

  return (
    <span className={className} aria-label={phrases.join(". ")}>
      <span aria-hidden="true">{display}</span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-block w-[3px] h-[0.95em] align-[-0.12em] mr-1 bg-primary rounded-[1px]",
          cursorClassName,
        )}
        style={{ animation: "typewriter-blink 1s steps(1) infinite" }}
      />
      <style>{`@keyframes typewriter-blink { 50% { opacity: 0; } }`}</style>
    </span>
  );
}
