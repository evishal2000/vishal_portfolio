import React, { useState } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Code, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";
import { SkillTag } from "../UI/SkillTag";
import { ProjectModal } from "../UI/ProjectModal";
import { projects, skills } from "../../data/techData";

const iconMap = {
  database: Database,
  cpu: Cpu,
  code: Code,
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="Production systems designed for scale, reliability, and measurable impact"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, idx) => {
            const IconComponent = iconMap[project.icon] || Code;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-cyan-600/5 group-hover:via-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500" />

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:bg-cyan-950/30 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="text-cyan-400" size={28} />
                    </div>
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/30 px-3 py-1.5 rounded-full border border-cyan-900/30">
                      {project.metrics}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2.5 py-1 text-slate-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
            <Sparkles size={14} className="text-cyan-400" />
            <span>Technical Arsenal</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
