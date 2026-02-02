import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Camera, Settings } from "lucide-react";
import { photos, photoCategories } from "../../data/photoData";

export const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    filter === "all" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected Works
          </h2>
          <p className="text-slate-400">A curated collection of moments</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {photoCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-purple-500/50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer bg-slate-800"
              >
                {/* Placeholder - replace with actual image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                  <Camera className="text-slate-600" size={48} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 text-sm mt-2">
                    <MapPin size={14} /> {photo.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full text-white"
            >
              <X size={24} />
            </button>

            <div className="max-w-4xl w-full">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg mb-6 flex items-center justify-center">
                <Camera className="text-slate-600" size={64} />
              </div>
              <div className="text-white text-center">
                <h3 className="text-3xl font-bold mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-purple-400 mb-4">
                  {selectedPhoto.location} • {selectedPhoto.year}
                </p>
                <p className="text-slate-300 mb-6">
                  {selectedPhoto.description}
                </p>
                <div className="flex justify-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <Camera size={16} /> {selectedPhoto.camera}
                  </span>
                  <span className="flex items-center gap-2">
                    <Settings size={16} /> {selectedPhoto.settings}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
