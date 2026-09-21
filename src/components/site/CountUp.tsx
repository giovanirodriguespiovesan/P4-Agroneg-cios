import { useEffect, useRef, useState } from "react";

export function CountUp({ value, prefix = "+", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      if (reduce) {
        setCount(value);
      } else {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / 1100, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      observer.disconnect();
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}