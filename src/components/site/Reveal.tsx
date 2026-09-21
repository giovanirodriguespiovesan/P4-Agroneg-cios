import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    setLight(small);

    if (reduce) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      {
        threshold: small ? 0.05 : 0.12,
        rootMargin: small ? "0px 0px -20px 0px" : "0px 0px -60px 0px",
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${light ? Math.min(delay, 120) / 2 : delay}ms` }}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
