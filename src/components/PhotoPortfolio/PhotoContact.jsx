import React from "react";
import { Mail, Instagram, MapPin } from "lucide-react";
import { photographerInfo } from "../../data/photoData";

export const PhotoContact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's Create Together
        </h2>
        <p className="text-slate-400 mb-12">
          Ready to book a session or collaborate?
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href={`mailto:${photographerInfo.email}`}
            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all"
          >
            <Mail className="mx-auto text-purple-400 mb-4" size={32} />
            <h4 className="font-semibold text-slate-200">Email</h4>
            <p className="text-slate-400 text-sm">{photographerInfo.email}</p>
          </a>

          <a
            href={photographerInfo.instaURL}
            className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all"
          >
            <Instagram className="mx-auto text-purple-400 mb-4" size={32} />
            <h4 className="font-semibold text-slate-200">Instagram</h4>
            <p className="text-slate-400 text-sm">
              {photographerInfo.instagram}
            </p>
          </a>

          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <MapPin className="mx-auto text-purple-400 mb-4" size={32} />
            <h4 className="font-semibold text-slate-200">Location</h4>
            <p className="text-slate-400 text-sm">
              {photographerInfo.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
