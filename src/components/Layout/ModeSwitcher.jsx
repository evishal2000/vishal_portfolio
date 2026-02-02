import React from "react";
import { motion } from "framer-motion";
import { Code2, Camera } from "lucide-react";
import { usePortfolio } from "../../contexts/PortfolioMode";

export const ModeSwitcher = () => {
  const { mode, toggleMode } = usePortfolio();

  return (
    <motion.button
      onClick={toggleMode}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900/90 backdrop-blur border border-slate-700 rounded-full shadow-2xl hover:border-cyan-500/50 transition-all group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-12 h-6 bg-slate-800 rounded-full p-1">
        <motion.div
          className={`absolute top-1 w-4 h-4 rounded-full ${
            mode === "tech" ? "bg-cyan-400" : "bg-purple-400"
          }`}
          animate={{ left: mode === "tech" ? "4px" : "28px" }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      <span className="text-sm font-medium text-slate-300">
        {mode === "tech" ? (
          <span className="flex items-center gap-2">
            <Code2 size={14} className="text-cyan-400" />
            Engineering
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Camera size={14} className="text-purple-400" />
            Photography
          </span>
        )}
      </span>
    </motion.button>
  );
};
