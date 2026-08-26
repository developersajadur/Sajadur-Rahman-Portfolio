import CustomCursor from "@/components/CustomCursor";
import BackgroundNoise from "@/components/BackgroundNoise";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0c0c1a] text-white overflow-x-hidden selection:bg-purple-600/30 selection:text-purple-200">
      <CustomCursor />
      <BackgroundNoise />
      <Navbar />
      <Hero />
      <MarqueeRibbon />
      <About />
      <Footer />
    </main>
  );
}
