import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Cpu, Code, ArrowUpRight, X } from "lucide-react";
import { projects } from "../../data/techData";

const iconMap = { database: Database, cpu: Cpu, code: Code };

export const TechProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400">
            Production systems designed for scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon] || Code;
            const isHovered = hoveredId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 cursor-pointer overflow-hidden"
                style={{
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",
                }}
              >
                {/* Animated border glow */}
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                  style={{
                    boxShadow: isHovered
                      ? "0 0 30px rgba(6, 182, 212, 0.15), inset 0 0 30px rgba(6, 182, 212, 0.05)"
                      : "none",
                    opacity: isHovered ? 1 : 0,
                    border: isHovered
                      ? "1px solid rgba(6, 182, 212, 0.3)"
                      : "1px solid transparent",
                  }}
                />

                {/* Background gradient on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-blue-600/5 to-purple-600/5 rounded-2xl transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <motion.div
                      className="p-4 bg-slate-800 rounded-2xl transition-colors duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? "rgba(6, 182, 212, 0.1)"
                          : "rgba(30, 41, 59, 1)",
                      }}
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-cyan-400" size={28} />
                    </motion.div>

                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? "rgba(6, 182, 212, 0.2)"
                          : "rgba(6, 182, 212, 0.1)",
                        color: "#22d3ee",
                        border: isHovered
                          ? "1px solid rgba(34, 211, 238, 0.4)"
                          : "1px solid transparent",
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: isHovered ? "#22d3ee" : "#f1f5f9" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300 transition-all duration-300 hover:bg-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-cyan-400 text-sm font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    View Details
                    <motion.div
                      animate={{ x: isHovered ? 4 : 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal - same as before */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto"
          >
            <div className="min-h-screen flex items-center justify-center p-4 py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-200
               transition-all duration-300 hover:rotate-90 focus:outline-none focus:ring-0"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-cyan-400 text-sm font-medium mb-2 block">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-3xl font-bold text-slate-100 mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{selectedProject.duration}</span>
                        <span>•</span>
                        <span>{selectedProject.role}</span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 rounded-full text-sm font-medium whitespace-nowrap">
                      {selectedProject.metrics}
                    </span>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-200 mb-3">
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-200 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-cyan-500/30 hover:bg-slate-700 transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
