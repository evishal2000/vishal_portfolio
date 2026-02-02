import React from "react";
import { motion } from "framer-motion";
import { Camera, Award, Globe } from "lucide-react";
import { photographerInfo } from "../../data/photoData";

export const PhotoAbout = () => {
  return (
    <section className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Behind the Lens
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {photographerInfo.bio}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-400">
                <Globe size={20} className="text-purple-400" />
                <span>Available for assignments worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Camera size={20} className="text-purple-400" />
                <span>{photographerInfo.gear.join(", ")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-slate-800 rounded-2xl flex items-center justify-center">
              <Camera className="text-purple-400" size={48} />
            </div>
            <div className="aspect-square bg-gradient-to-br from-pink-600/20 to-slate-800 rounded-2xl flex items-center justify-center mt-8">
              <Award className="text-pink-400" size={48} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
