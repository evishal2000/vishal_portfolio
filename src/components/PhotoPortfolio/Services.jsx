import React from "react";
import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import { photographerInfo } from "../../data/photoData";

export const Services = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-slate-400">
            Professional photography for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {photographerInfo.services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-100">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6">{service.description}</p>

              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Clock size={16} />
                <span>{service.duration}</span>
              </div>

              <p className="text-2xl font-bold text-white mb-6">
                {service.price}
              </p>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
