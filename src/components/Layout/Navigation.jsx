import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Briefcase,
  User,
  FolderGit2,
  Mail,
  Code2,
  Camera,
  Sparkles,
} from "lucide-react";
import { usePortfolio } from "../../contexts/PortfolioMode";

const techNavItems = [
  { id: "home", label: "Home", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { mode, setMode } = usePortfolio();

  // Track scroll for background opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = techNavItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(techNavItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (mode !== "tech") return null;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50 shadow-lg shadow-black/20"
            : "backdrop-blur-md bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          {/* Logo with hover glow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group relative"
            onClick={() => scrollToSection("home")}
          >
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-shadow">
              VE
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-slate-100 leading-tight group-hover:text-cyan-400 transition-colors">
                Vishal Elaka
              </h1>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Sparkles size={10} className="text-cyan-400" />
                Software Engineer
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {techNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 group"
                >
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500/10 border border-cyan-500/20"
                        : "bg-transparent group-hover:bg-slate-800/50"
                    }`}
                  />

                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    />
                  )}

                  <span
                    className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                    />
                    {item.label}
                  </span>
                </button>
              );
            })}

            <div className="h-6 w-px bg-slate-800 mx-2" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => switchMode("photo")}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-purple-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              <Camera
                size={16}
                className="relative text-purple-400 group-hover:text-purple-300 transition-colors"
              />
              <span className="relative text-sm font-medium text-slate-300 group-hover:text-purple-300 transition-colors hidden lg:inline">
                Photography
              </span>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-xl bg-slate-950/95 border-b border-slate-800 overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {techNavItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        isActive
                          ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <button
                    onClick={() => switchMode("photo")}
                    className="w-full flex items-center gap-3 px-4 py-4 rounded-xl bg-gradient-to-r from-purple-950/50 to-pink-950/50 border border-purple-800/50 text-purple-300"
                  >
                    <Camera size={20} />
                    <span className="font-medium">Switch to Photography</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-20" />
    </>
  );
};
