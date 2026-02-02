import React from "react";
import { motion } from "framer-motion";

export const SectionTitle = ({ title, subtitle, align = "center" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-6 ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
};
