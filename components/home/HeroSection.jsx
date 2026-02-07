"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HomeImages from '../../app/data/HomeData'

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;
    let rafId;

    const animate = () => {
      frame++;
      if (frame % 6 === 0) { // ~10 FPS on 60Hz screens
        setActiveIndex((prev) => (prev + 1) % HomeImages.length);
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main className="relative mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pb-20 md:pt-12">
      <div className="pointer-events-none absolute left-1/2 top-8 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-white/15 blur-3xl sm:h-[420px] sm:w-[420px] md:h-[520px] md:w-[520px]" />

      <div className="relative z-10 text-center">
        <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/70 sm:text-xs">
          Sugar Rush
        </p>
        <h1 className="font-serif text-[36px] leading-[0.98] tracking-[0.05em] sm:text-[64px] md:text-[90px] lg:text-[110px]">
          BAKED TO BLISS
        </h1>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="relative mx-auto h-[320px] w-[240px] sm:h-[380px] sm:w-[290px] md:h-[420px] md:w-[320px] overflow-hidden">
          <Image
            src={HomeImages[activeIndex].image}
            alt="Hero frame"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 240px, 320px"
            priority={activeIndex === 0}
            loading="eager"
            unoptimized
          />
        </div>
      </div>
    </main>
  );
}
