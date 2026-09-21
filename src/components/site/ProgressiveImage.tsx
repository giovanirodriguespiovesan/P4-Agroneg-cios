import { useState } from "react";

export function ProgressiveImage({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      onLoad={() => setLoaded(true)}
      className={`transition-[filter,opacity,transform] duration-700 ease-out ${
        loaded ? "blur-0 opacity-100" : "scale-[1.015] blur-lg opacity-70"
      } ${className}`}
    />
  );
}