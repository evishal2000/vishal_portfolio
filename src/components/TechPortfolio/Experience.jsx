import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experiences, education } from "../../data/techData";

export const TechExperience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400">Building production systems at scale</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-transparent" />

          {experiences.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                idx % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900 ${
                  idx % 2 === 0
                    ? "left-4 md:left-auto md:-right-2"
                    : "left-4 md:-left-2"
                }`}
              />

              <div className="ml-12 md:ml-0 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-800/50 transition-all group">
                <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {job.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                  {job.role}
                </h3>
                <p
                  className={`text-${job.color}-400 font-medium mb-3 flex items-center gap-2`}
                >
                  <Briefcase size={16} />
                  {job.company}
                </p>

                <p className="text-slate-400 text-sm mb-4">{job.description}</p>

                <ul className="space-y-2 mb-4">
                  {job.achievements.slice(0, 2).map((achievement, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-300 flex items-start gap-2"
                    >
                      <ChevronRight
                        size={14}
                        className="text-cyan-400 mt-1 shrink-0"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-800/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-lg text-slate-100">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-cyan-400 font-mono">
                    {edu.gpa}
                  </span>
                </div>
                <p className="text-slate-400 mb-2">{edu.school}</p>
                <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-2 py-1 bg-cyan-950/30 text-cyan-400 rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
