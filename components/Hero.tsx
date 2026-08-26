"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ROLES = [
  "I build scalable cloud solutions.",
  "I engineer RAG-powered AI systems.",
  "I develop backend services in Node & Go.",
  "I design scalable ERP & SaaS platforms.",
  "I craft clean, high-performance web experiences.",
];

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const hiRef = useRef<HTMLParagraphElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const typeContainerRef = useRef<HTMLDivElement>(null);

  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  // GSAP Entrance Timeline
  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Fade out blur overlay
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1.1,
      ease: "power2.inOut",
      onComplete: () => {
        if (overlayRef.current) overlayRef.current.style.display = "none";
      },
    });

    // 2. Reveal "Hi, I am"
    tl.fromTo(
      hiRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.5"
    );

    // 3. Reveal Name SVG elements with stagger
    const nameGroups = svgRef.current?.querySelectorAll(".name-item");
    if (nameGroups) {
      tl.fromTo(
        nameGroups,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }

    // 4. Reveal Typewriter
    tl.fromTo(
      typeContainerRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => setAnimationStarted(true),
      },
      "-=0.2"
    );
  }, []);

  // Typewriter Loop
  useEffect(() => {
    if (!animationStarted) return;
    const speed = isDeleting ? 30 : 65;
    const current = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setRoleText(current.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setRoleText(current.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, animationStarted]);

  return (
    <section className="relative w-full h-[calc(100vh-64px)] min-h-[520px] max-h-[900px] flex items-center justify-center">
      {/* Initial load blur overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[80px] pointer-events-none"
      />

      {/* Main Container Frame */}
      <div className="w-full max-w-[1240px] h-full px-5 md:px-10 mx-auto flex flex-col justify-center border-l border-r border-white/10 relative select-none">
        <div className="w-full flex flex-col justify-start max-w-4xl py-6">
          {/* Subtitle "Hi, I am" */}
          <p
            ref={hiRef}
            className="font-michroma text-xs md:text-sm text-white/50 tracking-widest uppercase mb-1 md:mb-3 opacity-0"
          >
            Hi, I am
          </p>

          {/* SVG Typography with Hatch Patterns (matches reference layout & typography) */}
          <div className="w-full max-w-[850px] overflow-visible hero-zoom-target">
            <svg
              ref={svgRef}
              id="hero-name-svg"
              viewBox="0 0 850 290"
              className="w-full h-auto cursor-pointer"
              style={{ overflow: "visible" }}
            >
              <defs>
                {/* Diagonal striped fill pattern */}
                <pattern
                  id="hatch-fill"
                  width="12"
                  height="12"
                  patternTransform="rotate(45 0 0)"
                  patternUnits="userSpaceOnUse"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="12"
                    stroke="#EDE8E8"
                    strokeWidth="2.2"
                    strokeOpacity="0.4"
                  />
                </pattern>

                {/* Masks for Hatch Blocks behind letters */}
                <mask id="hatch-box-1">
                  <rect x="290" y="30" width="160" height="95" fill="white" />
                </mask>
                <mask id="hatch-box-2">
                  <rect x="470" y="160" width="160" height="95" fill="white" />
                </mask>
              </defs>

              {/* Decorative Hatch Boxes behind letter areas (like reference) */}
              <g className="name-item" opacity="0.45">
                <rect
                  x="300"
                  y="25"
                  width="135"
                  height="95"
                  fill="url(#hatch-fill)"
                  mask="url(#hatch-box-1)"
                />
                <rect
                  x="480"
                  y="160"
                  width="140"
                  height="95"
                  fill="url(#hatch-fill)"
                  mask="url(#hatch-box-2)"
                />
              </g>

              {/* Line 1: Saja dur */}
              <g className="name-item">
                <text
                  x="0"
                  y="110"
                  className="font-michroma"
                  fill="#EDE8E8"
                  fontSize="122"
                  fontWeight="900"
                  letterSpacing="-1"
                >
                  Saja
                </text>
                <text
                  x="365"
                  y="110"
                  className="font-michroma"
                  fill="#EDE8E8"
                  fontSize="122"
                  fontWeight="900"
                  letterSpacing="-1"
                >
                  dur
                </text>
              </g>

              {/* Line 2: Rahman */}
              <g className="name-item">
                <text
                  x="0"
                  y="245"
                  className="font-michroma"
                  fill="#EDE8E8"
                  fontSize="122"
                  fontWeight="900"
                  letterSpacing="-1"
                >
                  Rah
                </text>
                <text
                  x="355"
                  y="245"
                  className="font-michroma"
                  fill="#EDE8E8"
                  fontSize="122"
                  fontWeight="900"
                  letterSpacing="-1"
                >
                  man
                </text>
              </g>
            </svg>
          </div>

          {/* Typewriter Line */}
          <div
            ref={typeContainerRef}
            className="mt-3 md:mt-6 flex items-center h-6 opacity-0"
          >
            <p className="font-michroma text-xs md:text-sm text-white/70 tracking-wider">
              {roleText}
            </p>
            <span className="w-2.5 h-0.5 bg-violet-400 ml-1.5 animate-pulse inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
}
