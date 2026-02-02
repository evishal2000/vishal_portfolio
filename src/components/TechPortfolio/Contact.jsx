import React, { useState, useEffect } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import { personalInfo } from "../../data/techData";

export const TechContact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.split("?")[1]);
    if (params.get("sent") === "true") {
      setIsSubmitted(true);
      window.history.replaceState(
        {},
        "",
        window.location.pathname + "#contact",
      );
    }
  }, []);

  const handleSubmit = () => setIsSubmitting(true);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400">
            Open for full-time opportunities and consulting
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-cyan-950/50 rounded-xl group-hover:bg-cyan-600/20 transition-colors">
                <Mail
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                  size={24}
                />
              </div>
              <div className="relative">
                <h4 className="font-semibold text-slate-200">Email</h4>
                <p className="text-cyan-400 text-sm">{personalInfo.email}</p>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-blue-950/50 rounded-xl group-hover:bg-blue-600/20 transition-colors">
                <Linkedin
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                  size={24}
                />
              </div>
              <div className="relative">
                <h4 className="font-semibold text-slate-200">LinkedIn</h4>
                <p className="text-blue-400 text-sm">Connect professionally</p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-3 bg-purple-950/50 rounded-xl group-hover:bg-purple-600/20 transition-colors">
                <Github
                  className="text-purple-400 group-hover:scale-110 transition-transform"
                  size={24}
                />
              </div>
              <div className="relative">
                <h4 className="font-semibold text-slate-200">GitHub</h4>
                <p className="text-purple-400 text-sm">View my code</p>
              </div>
            </a>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-center">
                <Briefcase className="mx-auto text-slate-400 mb-2" size={20} />
                <p className="text-xs text-slate-500">Open to</p>
                <p className="text-sm font-medium text-slate-300">Full-time</p>
              </div>
              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl text-center">
                <MessageCircle
                  className="mx-auto text-slate-400 mb-2"
                  size={20}
                />
                <p className="text-xs text-slate-500">Response</p>
                <p className="text-sm font-medium text-slate-300">24 hours</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  className="mx-auto text-green-400 mb-4"
                  size={48}
                />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-6">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-cyan-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/elakavishal@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact!"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value={`${window.location.origin}${window.location.pathname}#contact?sent=true`}
                />

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-cyan-500 resize-none transition-colors"
                    placeholder="Tell me about your opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-70 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
