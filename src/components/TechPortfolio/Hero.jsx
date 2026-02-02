import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Cloud,
  Cpu,
  Terminal,
  FileText,
} from "lucide-react";
import { personalInfo } from "../../data/techData";
import profileImage from "../../assets/images/vishal_image.jpg";

export const TechHero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-10 text-cyan-500/20"
      >
        <Cloud size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-1/4 right-10 text-blue-500/20"
      >
        <Cpu size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-400 text-sm mb-6"
            >
              <Terminal size={14} />
              <span>{personalInfo.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-slate-400 mb-6 font-light"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                onClick={() => onNavigate("experience")}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40"
              >
                <Code2 size={20} />
                View Experience
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-semibold transition-all flex items-center gap-2 group"
              >
                <FileText size={20} />
                Contact
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50TB+", label: "Data Processed Daily" },
                { value: "3M+", label: "Users Served" },
              ].map((stat, idx) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings behind photo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-cyan-500/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border border-blue-500/10"
              />

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl opacity-50" />

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient with initials if image fails
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback if no image */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 items-center justify-center">
                  <span className="text-6xl font-bold text-white">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium shadow-lg"
              >
                Open to Work
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium shadow-lg flex items-center gap-2"
              >
                <Cloud size={14} />
                Cloud Architect
              </motion.div>

              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 text-xs border border-slate-700"
              >
                Java
              </motion.div>

              <motion.div
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                className="absolute top-1/3 -left-8 px-3 py-1.5 bg-slate-800 rounded-lg text-slate-300 text-xs border border-slate-700"
              >
                React
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 cursor-pointer hover:text-cyan-400 transition-colors"
        onClick={() => onNavigate("experience")}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
