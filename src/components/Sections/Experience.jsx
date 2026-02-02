import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";
import { experiences, education } from "../../data/techData";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-slate-900/30 relative">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Professional Journey"
          subtitle="Building scalable systems and delivering impact across healthcare and fintech domains"
        />

        <div className="space-y-12">
          {experiences.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${job.color}-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur`}
              />
              <div className="relative p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-800/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-slate-100">
                        {job.role}
                      </h3>
                      <a
                        href="#"
                        className="text-slate-600 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <p
                      className={`text-${job.color}-400 font-semibold text-lg`}
                    >
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-sm text-slate-500 gap-1">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-slate-800 text-${job.color}-400 text-sm rounded-full border border-slate-700`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-800/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-lg text-slate-100">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-slate-500 whitespace-nowrap ml-2">
                    {edu.period}
                  </span>
                </div>
                <p className="text-cyan-400 font-medium mb-3">{edu.school}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
