"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Jika elemen masuk ke dalam layar pengguna
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target); // Hanya fade-in sekali
        }
      });
    }, { rootMargin: "0px 0px -100px 0px" }); // Ter-trigger saat 100px sebelum elemen muncul sepenuhnya

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </div>
  );
}