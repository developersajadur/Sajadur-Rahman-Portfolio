"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function StarIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M40.4888 20.4888C23.4776 22.1389 22.1404 23.4775 20.4888 40.4888C18.8387 23.4775 17.5001 22.1389 0.488831 20.4888C17.5001 18.8386 18.8387 17.5 20.4888 0.48877C22.139 17.5 23.4776 18.8372 40.4888 20.4888Z"
        fill="#FF1CF7"
      />
    </svg>
  );
}

const RIBBON_1_ITEMS = [
  "Backend Engineer",
  "Cloud Architect",
  "RAG Builder",
  "TypeScript",
  "Go Specialist",
  "SaaS Developer",
  "Creative Coder",
  "Microservices",
];

const RIBBON_2_ITEMS = [
  "Docker",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "AWS Solutions",
  "Tech Aficionado",
  "Clean Architecture",
  "AI Engineering",
];

function RibbonTrack({
  items,
  reverse = false,
  duration = 65,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;

    const anim = gsap.fromTo(
      el,
      { x: reverse ? -totalWidth : 0 },
      {
        x: reverse ? 0 : -totalWidth,
        duration: duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      anim.kill();
    };
  }, [reverse, duration]);

  // Duplicate for seamless infinite marquee loop
  const list = [...items, ...items, ...items];

  return (
    <div ref={trackRef} className="flex items-center shrink-0 whitespace-nowrap">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-6 md:gap-10 mr-6 md:mr-10 shrink-0"
        >
          <span className="font-michroma text-base md:text-3xl text-white uppercase tracking-wider">
            {item}
          </span>
          <StarIcon />
        </div>
      ))}
    </div>
  );
}

export default function MarqueeRibbon() {
  return (
    <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden my-6 select-none pointer-events-none">
      {/* Ribbon 1 - Rotated Forward */}
      <div className="absolute top-[28%] md:top-[25%] left-[-15%] w-[130vw] h-16 md:h-20 bg-[#111026]/40 backdrop-blur-2xl border-t border-b border-white/10 shadow-2xl rotate-[12deg] md:rotate-[8deg] flex items-center z-10 overflow-hidden">
        <RibbonTrack items={RIBBON_1_ITEMS} reverse={false} duration={65} />
      </div>

      {/* Ribbon 2 - Rotated Negative (Crossing) */}
      <div className="absolute top-[48%] md:top-[42%] left-[-15%] w-[130vw] h-16 md:h-20 bg-[#111026]/40 backdrop-blur-2xl border-t border-b border-white/10 shadow-2xl -rotate-[20deg] md:-rotate-[12deg] flex items-center z-20 overflow-hidden">
        <RibbonTrack items={RIBBON_2_ITEMS} reverse={true} duration={72} />
      </div>
    </div>
  );
}
