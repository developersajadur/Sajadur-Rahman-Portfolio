"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate diagonal stripes on scroll / hover
      const leftSlides = stripesRef.current?.querySelectorAll(".left-slide");
      const rightSlides = stripesRef.current?.querySelectorAll(".right-slide");

      if (leftSlides) {
        gsap.to(leftSlides, {
          x: 40,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
        });
      }
      if (rightSlides) {
        gsap.to(rightSlides, {
          x: -40,
          repeat: -1,
          yoyo: true,
          duration: 3.5,
          ease: "sine.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="w-full my-8 md:my-16">
      {/* Main About Me Container */}
      <div
        ref={containerRef}
        className="max-w-[1240px] mx-auto border border-white/10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-[#0c0c1a]/40 backdrop-blur-sm"
      >
        {/* Left Side: Photo with Diagonal Grayscale Stripes */}
        <div className="border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden min-h-[380px] md:min-h-[520px] flex items-center justify-center bg-[#0d0d1a]">
          {/* Animated Diagonal Stripes Overlay */}
          <div
            ref={stripesRef}
            className="absolute inset-0 pointer-events-none z-10 opacity-40 overflow-hidden"
          >
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? "right-slide" : "left-slide"
                } absolute w-[220%] h-14 -rotate-[35deg] bg-white/[0.04] backdrop-grayscale`}
                style={{ top: `${i * 65 - 180}px`, right: "-60%" }}
              />
            ))}
          </div>

          {/* User Photo */}
          <Image
            src="/sajadur-rahman.jpeg"
            alt={siteConfig.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center select-none"
            priority
          />
        </div>

        {/* Right Side: Header + Bio */}
        <div className="flex flex-col justify-start">
          {/* Header */}
          <div className="border-b border-white/10 py-8 md:py-10 px-8 flex flex-col items-center justify-center relative">
            <h2 className="font-michroma uppercase text-2xl md:text-4xl text-white tracking-[0.25em]">
              About Me
            </h2>
            {/* Dot Accent */}
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-4 shadow-[0_0_10px_#a855f7]" />
          </div>

          {/* Bio Text */}
          <div className="p-6 md:p-10 text-[15px] md:text-[17px] leading-relaxed text-white/80 space-y-4 text-justify">
            <p>
              Hi, I&apos;m{" "}
              <span className="font-michroma text-white text-sm md:text-base font-bold tracking-wide">
                {siteConfig.name}
              </span>
              , a dedicated Software Developer with international remote experience,
              skilled in designing cloud-based solutions with{" "}
              <span className="text-violet-300 font-medium">Docker</span> and developing robust
              backend services using{" "}
              <span className="text-violet-300 font-medium">Node.js, Express.js, and NestJS</span>.
            </p>
            <p>
              I write clean, efficient{" "}
              <span className="text-cyan-300 font-medium">TypeScript and Go</span> code, build{" "}
              <span className="text-violet-300 font-medium">RAG-powered AI solutions</span> using
              semantic embeddings and vector search (pgvector), develop{" "}
              <span className="text-violet-300 font-medium">MCP (Model Context Protocol)</span> tools &amp; servers,
              and create scalable ERP, e-commerce, and SaaS platforms equipped with secure payment gateways.
            </p>
            <p>
              My focus is always on engineering scalable, maintainable architectures that deliver
              seamless user experiences. Whether optimizing distributed database queries,
              orchestrating microservices with RabbitMQ, or automating CI/CD pipelines on AWS
              and VPS environments, I bring engineering rigor and passion to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
