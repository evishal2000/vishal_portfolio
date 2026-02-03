import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Download,
  CheckCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
} from "lucide-react";
import { SectionTitle } from "../UI/SectionTitle";
import { personalInfo } from "../../data/techData";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const checkSuccess = () => {
      const hash = window.location.hash;
      const searchParams = new URLSearchParams(hash.split("?")[1]);

      if (searchParams.get("sent") === "true") {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname + "#contact",
        );
      }
    };

    checkSuccess();
    window.addEventListener("hashchange", checkSuccess);
    return () => window.removeEventListener("hashchange", checkSuccess);
  }, []);

  const handleSubmit = () => setIsSubmitting(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-4 bg-slate-950 border-2 rounded-xl text-slate-100 placeholder-slate-600 
    transition-all duration-300 outline-none
    ${
      focusedField === fieldName
        ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
        : "border-slate-800 hover:border-slate-700"
    }
  `;

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 relative overflow-hidden flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-400 text-sm mb-6">
            <Sparkles size={14} />
            <span>Let's work together</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss photography? I'm always
            open to new opportunities and creative collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Left Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Quick Contact Cards */}
            <div className="grid gap-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-6 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative">
                  <div className="p-4 bg-cyan-950/50 rounded-xl group-hover:bg-cyan-600/20 transition-colors">
                    <Mail
                      className="text-cyan-400 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-200 mb-1">
                      Email Me
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {personalInfo.email}
                    </p>
                    <p className="text-slate-500 text-sm mt-1">
                      Fastest response
                    </p>
                  </div>
                  <ArrowRight
                    className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all"
                    size={20}
                  />
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone.replace(/\D/g, "")}`}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-6 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4 relative">
                  <div className="p-4 bg-purple-950/50 rounded-xl group-hover:bg-purple-600/20 transition-colors">
                    <Phone
                      className="text-purple-400 group-hover:scale-110 transition-transform"
                      size={24}
                    />
                  </div>
                  <ArrowRight
                    className="text-slate-600 group-hover:text-purple-400 group-hover:translate-x-2 transition-all"
                    size={20}
                  />
                </div>
              </motion.a>

              <div className="p-6 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-800 rounded-xl">
                    <MapPin className="text-slate-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-1">
                      Location
                    </h4>
                    <p className="text-slate-400">{personalInfo.location}</p>
                    <p className="text-slate-500 text-sm mt-1">
                      Open to relocation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Resume */}
            <div className="p-6 bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-2xl">
              <h4 className="font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-400" />
                Connect With Me
              </h4>
              <div className="flex gap-3 mb-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all group"
                >
                  <Github size={20} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all group"
                >
                  <Linkedin size={20} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl font-medium transition-all text-slate-200 hover:text-cyan-400 group">
                <Download size={18} className="group-hover:animate-bounce" />
                Download Resume (PDF)
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm py-4">
              <span className="flex items-center gap-2">
                <Shield size={14} /> Secure Form
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> 24h Response
              </span>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="h-full bg-slate-900/80 backdrop-blur border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-500/30"
                    >
                      <CheckCircle className="text-white" size={48} />
                    </motion.div>

                    <h3 className="text-3xl font-bold text-slate-100 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                      Thanks for reaching out! I've received your message and
                      will get back to you as soon as possible.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-medium transition-all flex items-center gap-2 group"
                      >
                        <Send size={18} />
                        Send Another Message
                      </button>
                      <a
                        href="#home"
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 rounded-xl font-medium transition-all flex items-center gap-2"
                      >
                        Back to Home
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        Send a Message
                      </h3>
                      <p className="text-slate-400">
                        Fill out the form below and I'll respond within 24
                        hours.
                      </p>
                    </div>

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

                      <div className="grid md:grid-cols-2 gap-5">
                        <div className="relative">
                          <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses("name")}
                            placeholder="Virat Kohli"
                          />
                        </div>

                        <div className="relative">
                          <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={inputClasses("email")}
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                          Phone{" "}
                          <span className="text-slate-500 text-xs">
                            (Optional)
                          </span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={inputClasses("phone")}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className={`${inputClasses("message")} resize-none`}
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        <div className="flex justify-between mt-2 px-1">
                          <span className="text-xs text-slate-500">
                            Min. 10 characters
                          </span>
                          <span
                            className={`text-xs ${formData.message.length > 10 ? "text-cyan-400" : "text-slate-500"}`}
                          >
                            {formData.message.length} chars
                          </span>
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 hover:from-cyan-500 hover:via-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-cyan-600/25 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={22} />
                        ) : (
                          <Send
                            size={22}
                            className="group-hover:rotate-12 transition-transform"
                          />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
