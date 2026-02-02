import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ExternalLink, Palette } from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";
import { categories, photos } from "../../data/photographyData";

export const Photography = () => {
  const [filter, setFilter] = useState("All");

  const filteredPhotos =
    filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section
      id="photography"
      className="py-32 px-6 bg-slate-900/30 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-purple-400 bg-purple-950/30 px-4 py-2 rounded-full border border-purple-800/30">
            <Palette size={18} />
            <span className="text-sm font-medium tracking-wider uppercase">
              Creative Corner
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Through the Lens
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            When I'm not architecting distributed systems, I'm capturing the
            world's stories. A balance of logic and creativity.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={photo.id}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer bg-slate-800"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {photo.category}
                  </span>
                  <h4 className="text-white font-bold text-xl mb-1">
                    {photo.title}
                  </h4>
                  <p className="text-slate-300 text-sm mb-2">
                    {photo.location}
                  </p>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <Camera size={12} />
                    <span>{photo.camera}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2 italic">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors border border-purple-800/50 px-6 py-3 rounded-full hover:bg-purple-950/20"
          >
            <Camera size={18} />
            View Full Portfolio
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
