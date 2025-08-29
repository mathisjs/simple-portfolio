"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "fade" | "scale";
  delay?: number;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ...(delay ? ({ ["--reveal-delay" as any]: `${delay}ms` } as any) : {}) }}
    >
      {children}
    </div>
  );
}

