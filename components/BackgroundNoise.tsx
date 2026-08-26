"use client";

export default function BackgroundNoise() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Purple/Violet Mesh Lighting */}
      <div
        className="absolute w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full blur-[140px] opacity-70"
        style={{
          top: "10%",
          right: "5%",
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, rgba(88, 28, 135, 0.25) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[160px] opacity-50"
        style={{
          top: "40%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.3) 0%, rgba(30, 27, 75, 0.15) 60%, transparent 80%)",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full blur-[150px] opacity-40"
        style={{
          bottom: "5%",
          right: "15%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* SVG Noise Grain Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] mix-blend-overlay">
        <filter id="site-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#site-noise)" />
      </svg>
    </div>
  );
}

