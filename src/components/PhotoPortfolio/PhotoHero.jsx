import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { photographerInfo } from "../../data/photoData";

export const PhotoHero = () => {
  // Using gradient instead of image for now
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/50 border border-purple-800/50 text-purple-400 text-sm mb-6"
        >
          <Camera size={14} />
          <span>Visual Storyteller</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
            {photographerInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8 font-light"
        >
          {photographerInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#gallery"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-full font-semibold transition-all"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 rounded-full font-semibold transition-all"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};
