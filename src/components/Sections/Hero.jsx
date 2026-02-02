import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Terminal,
  Camera,
  MapPin,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../../data/techData";

export const Hero = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm backdrop-blur-sm">
            <Sparkles size={14} />
            <span>{personalInfo.availability}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {personalInfo.name.split(" ")[1]}
            </span>
          </h1>

          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate("experience")}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-medium transition-all flex items-center gap-2 group shadow-lg shadow-cyan-600/20"
            >
              <Terminal size={18} />
              View My Work
            </button>
            <button
              onClick={() => onNavigate("photography")}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all flex items-center gap-2 group"
            >
              <Camera size={18} />
              Photography
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6 text-slate-500">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <span className="flex items-center gap-2 text-sm border-l border-slate-800 pl-6">
              <MapPin size={16} /> {personalInfo.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-1 shadow-2xl shadow-cyan-500/20">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-5xl font-bold text-cyan-400">
                    {personalInfo.initials}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm bg-cyan-950/30 px-4 py-2 rounded-full border border-cyan-800/30">
                    <Terminal size={14} />
                    <span>Software Engineer</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-sm bg-purple-950/30 px-4 py-2 rounded-full border border-purple-800/30">
                    <Camera size={14} />
                    <span>Photographer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-slate-700 shadow-xl"
          >
            <Terminal className="text-cyan-400" size={24} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-4 -left-4 p-4 bg-slate-800/90 backdrop-blur rounded-xl border border-slate-700 shadow-xl"
          >
            <Camera className="text-purple-400" size={24} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors"
        onClick={() => onNavigate("experience")}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};
