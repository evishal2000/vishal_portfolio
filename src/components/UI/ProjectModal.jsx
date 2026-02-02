import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ExternalLink, Github } from "lucide-react";

export const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto
                       bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl"
          >
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-cyan-400 text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-slate-100">
                    {project.title}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300
                             transition-all duration-300 hover:rotate-90 shrink-0
                             focus:outline-none focus:ring-0"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 flex-wrap">
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {project.duration || project.period || "2024"}
                </span>
                <span>•</span>
                <span>{project.role || "Lead Developer"}</span>

                {project.metrics && (
                  <span
                    className="px-3 py-1 bg-cyan-950/30 border border-cyan-800/30 text-cyan-400
                                   rounded-full text-xs font-medium ml-auto"
                  >
                    {project.metrics}
                  </span>
                )}
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {project.fullDescription || project.description}
              </p>

              {project.features?.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Key Features
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-400 text-sm p-3 bg-slate-950/50
                                   rounded-lg border border-slate-800/50"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-500/50 rounded-full mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies?.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg
                                   text-slate-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-6 border-t border-slate-800">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600
                               hover:bg-cyan-500 text-white rounded-xl font-medium transition-all
                               focus:outline-none focus:ring-0"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700
                                border border-slate-700 text-slate-200 rounded-xl font-medium transition-all
                                focus:outline-none focus:ring-0 ${!project.demo ? "flex-1" : ""}`}
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
