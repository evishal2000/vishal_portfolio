import React, { useState, useEffect } from "react";
import { PortfolioProvider, usePortfolio } from "./contexts/PortfolioMode";
import { ModeSwitcher } from "./components/Layout/ModeSwitcher";
import { Navigation } from "./components/Layout/Navigation";
import { Footer } from "./components/Layout/Footer";

// Tech Portfolio Sections
import { TechHero } from "./components/TechPortfolio/Hero";
import { TechExperience } from "./components/TechPortfolio/Experience";
import { TechProjects } from "./components/TechPortfolio/Projects";
import { TechSkills } from "./components/TechPortfolio/Skills";
import { TechContact } from "./components/TechPortfolio/Contact";

// Photo Portfolio Sections
import { PhotoHero } from "./components/PhotoPortfolio/PhotoHero";
import { Gallery } from "./components/PhotoPortfolio/Gallery";
import { PhotoAbout } from "./components/PhotoPortfolio/PhotoAbout";
import { Services } from "./components/PhotoPortfolio/Services";
import { PhotoContact } from "./components/PhotoPortfolio/PhotoContact";

// Global Mouse Gradient Component
const MouseGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { mode } = usePortfolio();

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const gradientColor =
    mode === "tech"
      ? "rgba(6, 182, 212, 0.08)" // Cyan for tech
      : "rgba(168, 85, 247, 0.08)"; // Purple for photo

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 40%)`,
      }}
    />
  );
};

const TechPortfolio = () => (
  <>
    <TechHero
      onNavigate={(id) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }
    />
    <TechExperience />
    <TechProjects />
    <TechSkills />
    <TechContact />
  </>
);

const PhotoPortfolio = () => (
  <>
    <PhotoHero />
    <Gallery />
    <PhotoAbout />
    {/* <Services /> */}
    <PhotoContact />
  </>
);

const AppContent = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 relative overflow-x-hidden">
      {/* Global Mouse Gradient - This appears on entire page */}
      <MouseGradient />

      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <Navigation />

      <main className="relative z-10">
        {mode === "tech" ? <TechPortfolio /> : <PhotoPortfolio />}
      </main>

      {mode === "tech" && <Footer />}
      <ModeSwitcher />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}
