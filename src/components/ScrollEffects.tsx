"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!nodes.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${index * 28}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
