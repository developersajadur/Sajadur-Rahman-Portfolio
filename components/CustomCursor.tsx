"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(follower, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
    const xFollower = gsap.quickTo(follower, "x", { duration: 0.28, ease: "power2.out" });
    const yFollower = gsap.quickTo(follower, "y", { duration: 0.28, ease: "power2.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, follower], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xFollower(e.clientX);
      yFollower(e.clientY);
    };

    const onMouseLeave = () => {
      gsap.to([dot, follower], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Setup interactive hover effects
    const initHovers = () => {
      // 1. Logo & Nav links hover (medium zoom)
      const navElements = document.querySelectorAll("nav a, nav button, #logo");
      navElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(follower, {
            scale: 2.2,
            backgroundColor: "rgba(240, 230, 210, 0.2)",
            borderColor: "rgba(240, 230, 210, 0.8)",
            duration: 0.3,
          });
          gsap.to(dot, { scale: 0.4, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(follower, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "rgba(237, 232, 232, 0.4)",
            duration: 0.3,
          });
          gsap.to(dot, { scale: 1, duration: 0.2 });
        });
      });

      // 2. Name & Hero Headline Hover (Huge Cream Spotlight Zoom like Screenshot 3!)
      const heroName = document.querySelectorAll(".hero-zoom-target, #hero-name-svg");
      heroName.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(follower, {
            scale: 4.5,
            backgroundColor: "#EDE4CE",
            borderColor: "#EDE4CE",
            opacity: 0.9,
            mixBlendMode: "difference",
            duration: 0.35,
            ease: "power2.out",
          });
          gsap.to(dot, { opacity: 0, duration: 0.2 });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(follower, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "rgba(237, 232, 232, 0.4)",
            opacity: 1,
            mixBlendMode: "normal",
            duration: 0.3,
          });
          gsap.to(dot, { opacity: 1, scale: 1, duration: 0.2 });
        });
      });
    };

    const timer = setTimeout(initHovers, 400);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Center pinpoint dot */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-[#EDE8E8] pointer-events-none z-[9999]"
      />
      {/* Outer trailing circle / spotlight */}
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-10 h-10 rounded-full border border-[#EDE8E8]/40 pointer-events-none z-[9998]"
        style={{ willChange: "transform, background-color, border-color" }}
      />
    </>
  );
}
