"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

function RollingLink({ label, href }: { label: string; href: string }) {
  const letters = label.split("");

  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="font-michroma text-xs tracking-widest h-[35px] flex items-center group cursor-pointer"
    >
      <div className="flex overflow-hidden relative">
        {letters.map((char, index) => (
          <div
            key={index}
            className="flex flex-col relative transition-transform duration-300 ease-out group-hover:-translate-y-5"
            style={{ transitionDelay: `${index * 20}ms` }}
          >
            <span className="text-white/60 group-hover:text-white transition-colors duration-300">
              {char === " " ? "\u00A0" : char}
            </span>
            <span className="absolute top-5 text-white">
              {char === " " ? "\u00A0" : char}
            </span>
          </div>
        ))}
      </div>
      <ArrowUpRight
        size={14}
        className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-white ml-1"
      />
    </a>
  );
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <header className="h-16 w-full relative z-50">
      <nav
        ref={navRef}
        className="h-full max-w-[1240px] px-5 mx-auto border-r border-l border-b border-white/10 flex items-center justify-between"
      >
        {/* Logo */}
        <button
          id="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Back to Top"
        >
          <Image
            src="/sajadur-logo.svg"
            alt={siteConfig.name}
            width={36}
            height={36}
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </button>

        {/* Desktop Rolling Links */}
        <div className="hidden md:flex items-center gap-7">
          {siteConfig.navSocials.map((link) => (
            <RollingLink key={link.label} {...link} />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
        >
          <div className="w-6 h-4 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-16 bg-[#0c0c1a]/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col p-6 transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col gap-4">
          {siteConfig.navSocials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-michroma text-sm tracking-widest text-white/70 hover:text-white p-3 border-b border-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
