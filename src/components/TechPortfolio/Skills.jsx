import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Cloud, Database, Brain, Sparkles } from "lucide-react";
import { skills } from "../../data/techData";

const skillCategories = [
  {
    key: "languages",
    icon: Code,
    label: "Languages",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    key: "backend",
    icon: Server,
    label: "Backend",
    color: "blue",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    key: "frontend",
    icon: Code,
    label: "Frontend",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    key: "cloud",
    icon: Cloud,
    label: "Cloud & DevOps",
    color: "orange",
    gradient: "from-orange-500 to-red-500",
  },
  {
    key: "data",
    icon: Database,
    label: "Data",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    key: "concepts",
    icon: Brain,
    label: "Concepts",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
  },
];

export const TechSkills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-sm mb-6"
          >
            <Sparkles size={14} />
            <span>Technical Expertise</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-slate-400">
            Tools I use to build scalable systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = hoveredCategory === cat.key;
            const items = skills[cat.key];

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredCategory(cat.key)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 overflow-hidden group"
                style={{
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition:
                    "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease",
                }}
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${
                      cat.color === "cyan"
                        ? "rgba(6,182,212,0.3)"
                        : cat.color === "blue"
                          ? "rgba(59,130,246,0.3)"
                          : cat.color === "purple"
                            ? "rgba(168,85,247,0.3)"
                            : cat.color === "orange"
                              ? "rgba(249,115,22,0.3)"
                              : cat.color === "green"
                                ? "rgba(34,197,94,0.3)"
                                : "rgba(236,72,153,0.3)"
                    }, transparent)`,
                    opacity: isHovered ? 1 : 0,
                    padding: "1px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />

                {/* Background glow */}
                <div
                  className="absolute -inset-px rounded-2xl blur-xl transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${
                      cat.color === "cyan"
                        ? "rgba(6,182,212,0.2)"
                        : cat.color === "blue"
                          ? "rgba(59,130,246,0.2)"
                          : cat.color === "purple"
                            ? "rgba(168,85,247,0.2)"
                            : cat.color === "orange"
                              ? "rgba(249,115,22,0.2)"
                              : cat.color === "green"
                                ? "rgba(34,197,94,0.2)"
                                : "rgba(236,72,153,0.2)"
                    }, transparent)`,
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-3 rounded-xl transition-colors duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? cat.color === "cyan"
                            ? "rgba(6,182,212,0.2)"
                            : cat.color === "blue"
                              ? "rgba(59,130,246,0.2)"
                              : cat.color === "purple"
                                ? "rgba(168,85,247,0.2)"
                                : cat.color === "orange"
                                  ? "rgba(249,115,22,0.2)"
                                  : cat.color === "green"
                                    ? "rgba(34,197,94,0.2)"
                                    : "rgba(236,72,153,0.2)"
                          : "rgba(30,41,59,1)",
                      }}
                      animate={{ scale: isHovered ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className={`transition-colors duration-300`}
                        style={{
                          color: isHovered
                            ? cat.color === "cyan"
                              ? "#22d3ee"
                              : cat.color === "blue"
                                ? "#60a5fa"
                                : cat.color === "purple"
                                  ? "#c084fc"
                                  : cat.color === "orange"
                                    ? "#fb923c"
                                    : cat.color === "green"
                                      ? "#4ade80"
                                      : "#f472b6"
                            : "#94a3b8",
                        }}
                        size={24}
                      />
                    </motion.div>
                    <h3
                      className="font-bold text-lg transition-colors duration-300"
                      style={{ color: isHovered ? "#f1f5f9" : "#94a3b8" }}
                    >
                      {cat.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIdx) => {
                      const isSkillHovered =
                        hoveredSkill === `${cat.key}-${skill}`;

                      return (
                        <motion.span
                          key={skill}
                          onHoverStart={() =>
                            setHoveredSkill(`${cat.key}-${skill}`)
                          }
                          onHoverEnd={() => setHoveredSkill(null)}
                          className="text-xs px-3 py-1.5 rounded-full border cursor-default transition-all duration-300"
                          style={{
                            backgroundColor: isSkillHovered
                              ? cat.color === "cyan"
                                ? "rgba(6,182,212,0.2)"
                                : cat.color === "blue"
                                  ? "rgba(59,130,246,0.2)"
                                  : cat.color === "purple"
                                    ? "rgba(168,85,247,0.2)"
                                    : cat.color === "orange"
                                      ? "rgba(249,115,22,0.2)"
                                      : cat.color === "green"
                                        ? "rgba(34,197,94,0.2)"
                                        : "rgba(236,72,153,0.2)"
                              : "rgba(30,41,59,0.5)",
                            borderColor: isSkillHovered
                              ? cat.color === "cyan"
                                ? "rgba(6,182,212,0.5)"
                                : cat.color === "blue"
                                  ? "rgba(59,130,246,0.5)"
                                  : cat.color === "purple"
                                    ? "rgba(168,85,247,0.5)"
                                    : cat.color === "orange"
                                      ? "rgba(249,115,22,0.5)"
                                      : cat.color === "green"
                                        ? "rgba(34,197,94,0.5)"
                                        : "rgba(236,72,153,0.5)"
                              : "rgba(51,65,85,1)",
                            color: isSkillHovered ? "#f1f5f9" : "#cbd5e1",
                            transform: isSkillHovered
                              ? "scale(1.05)"
                              : "scale(1)",
                          }}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {skill}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
