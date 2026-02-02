import React from "react";
import { motion } from "framer-motion";

export const SkillTag = ({ skill }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
  >
    {skill}
  </motion.span>
);
