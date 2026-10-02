"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function PageReveal() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsLoaded(true), 850);
      return () => clearTimeout(timer);
    } else {
      setIsLoaded(true);
    }
  }, [pathname]);

  if (!isVisible && !isLoaded) {
    return (
      <div className="fixed inset-0 z-[9999] flex" aria-hidden="true">
        <div
          className="w-1/2 h-full bg-[#0C8654]"
          style={{
            transform: isVisible ? "translateX(-100%)" : "translateX(0)",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          className="w-1/2 h-full bg-[#0C8654]"
          style={{
            transform: isVisible ? "translateX(100%)" : "translateX(0)",
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    );
  }

  return null;
}
