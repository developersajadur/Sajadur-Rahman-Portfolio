"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "AI-Powered RAG Platform",
    description:
      "A Retrieval-Augmented Generation platform with semantic search using pgvector and embeddings, built for enterprise document intelligence. Features multi-tenant architecture with NestJS microservices.",
    tags: ["NestJS", "PostgreSQL", "pgvector", "RAG", "Docker"],
    accent: "from-violet-600 to-purple-600",
    accentBorder: "border-violet-500/20",
    accentGlow: "shadow-violet-500/10",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "ERP & e-Commerce Suite",
    description:
      "Full-featured ERP system with integrated e-commerce capabilities, Stripe payment processing, role-based access, and real-time inventory management. Deployed on AWS with CI/CD via GitHub Actions.",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe", "AWS"],
    accent: "from-cyan-600 to-blue-600",
    accentBorder: "border-cyan-500/20",
    accentGlow: "shadow-cyan-500/10",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "03",
    title: "SaaS Microservices Backend",
    description:
      "Scalable SaaS backend using NestJS microservices communicating via RabbitMQ message queues. Features JWT auth, Prisma ORM, automated testing with Vitest, and containerized deployment.",
    tags: ["NestJS", "RabbitMQ", "Prisma", "Docker", "Vitest", "TypeScript"],
    accent: "from-emerald-600 to-green-600",
    accentBorder: "border-emerald-500/20",
    accentGlow: "shadow-emerald-500/10",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "04",
    title: "Go Microservice API",
    description:
      "High-performance REST API written in Go, designed for low latency and high throughput. Includes PostgreSQL integration, Docker deployment, and Supabase auth integration.",
    tags: ["Go", "PostgreSQL", "Docker", "Supabase", "REST API"],
    accent: "from-amber-600 to-orange-600",
    accentBorder: "border-amber-500/20",
    accentGlow: "shadow-amber-500/10",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

      // Animate each card from alternating sides
      sectionRef.current?.querySelectorAll(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5">
        <div ref={headerRef} className="mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium">
            03 / Projects
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-white/40 max-w-lg">
            A selection of projects that showcase my approach to engineering complex,
            production-ready systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className={`project-card group relative p-7 rounded-2xl border ${project.accentBorder} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${project.accentGlow} overflow-hidden`}
            >
              {/* Top gradient line */}
              <div
                className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${project.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
              />

              {/* Background glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Number + links */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${project.accent} opacity-20 group-hover:opacity-40 transition-opacity`}
                  >
                    {project.number}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                    <a
                      href={project.githubUrl}
                      className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/8 text-white/40 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-white/30 text-sm tracking-wide transition-all group"
          >
            View All on GitHub
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
