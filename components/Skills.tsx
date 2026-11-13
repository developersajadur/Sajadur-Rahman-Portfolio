"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    color: "from-violet-500 to-purple-500",
    border: "border-violet-500/20",
    skills: ["JavaScript", "TypeScript", "Go (Intermediate)"],
  },
  {
    title: "Backend",
    color: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/20",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "SQL",
      "Mongoose",
      "Prisma",
      "Microservices",
      "RabbitMQ",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Frontend",
    color: "from-pink-500 to-rose-500",
    border: "border-pink-500/20",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "ShadCN"],
  },
  {
    title: "AI Engineering",
    color: "from-amber-500 to-orange-500",
    border: "border-amber-500/20",
    skills: ["RAG", "MCP", "Embeddings", "Vector Search", "pgvector", "Semantic Search"],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-green-500",
    border: "border-emerald-500/20",
    skills: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    color: "from-sky-500 to-indigo-500",
    border: "border-sky-500/20",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS",
      "VPS",
      "Vercel",
      "Vitest",
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      const skillCards = cardsRef.current?.querySelectorAll(".skill-card");
      if (skillCards) {
        gsap.fromTo(
          skillCards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Individual skill pill stagger
      cardsRef.current?.querySelectorAll(".skill-pill").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <div ref={headerRef} className="mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
            02 / Skills
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Tech Stack
          </h2>
          <p className="mt-4 text-white/40 max-w-lg">
            A battle-tested toolkit for building everything from microservices to AI-powered pipelines.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`skill-card group relative p-6 rounded-2xl border ${cat.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Category gradient bar */}
              <div
                className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${cat.color} opacity-60 group-hover:opacity-100 transition-opacity`}
              />

              <h3
                className={`text-sm font-bold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r ${cat.color}`}
              >
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill px-3 py-1 rounded-lg border border-white/8 bg-white/5 text-white/70 text-xs font-medium hover:text-white hover:border-white/20 transition-colors cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
