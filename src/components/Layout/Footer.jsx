import React from "react";
import { Heart, Code2 } from "lucide-react";
import { personalInfo } from "../../data/techData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1">
          © {currentYear} {personalInfo.name}. Crafted with
          <Code2 size={14} className="text-cyan-400 mx-1" />
          and
          <Heart size={14} className="text-red-400 mx-1" />
        </p>
      </div>
    </footer>
  );
};
