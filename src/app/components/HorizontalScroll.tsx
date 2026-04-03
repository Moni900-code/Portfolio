import { useState, ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const [paused, setPaused] = useState(false);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className="relative w-full overflow-hidden py-32">
      <div
        className="flex gap-12 w-fit items-center"
        style={{
          animation: "scroll 40s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {[...childrenArray, ...childrenArray].map((child, index) => (
          <div
            key={index}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {child}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}