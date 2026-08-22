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
          } else {
            target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    nodes.forEach((node, index) => {
      node.style.setProperty("--reveal-delay", `${index * 40}ms`);
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
