"use client";

import { motion } from "framer-motion";

export default function LookingFor() {
  const opportunities = [
    {
      title: "AI & Machine Learning Research Internships",
      desc: "Eager to contribute to applied ML labs, healthcare AI research, or computer vision initiatives.",
      icon: "🔬",
    },
    {
      title: "R&D & Applied AI Engineering Roles",
      desc: "Building LLM agents, scalable ML pipelines, and production-grade intelligent software systems.",
      icon: "⚡",
    },
    {
      title: "M.S. in AI / CS Opportunities Abroad",
      desc: "Actively connecting with prospective graduate advisors, research groups, and academic laboratories.",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 border-accent/40 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                Current Availability & Goals
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
              Currently Looking <span className="gradient-text">For</span>
            </h3>

            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
              As a final-year Information Technology undergraduate graduating in{" "}
              <strong className="text-foreground">June 2027</strong> with an{" "}
              <strong className="text-foreground">8.5 CGPA</strong>, I am actively seeking impactful research opportunities and engineering positions where I can push the frontiers of artificial intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {opportunities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-hover/60 border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-sm font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                Discuss an Opportunity
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/Yash_Vijay_Tupe_CV.pdf"
                download
                className="btn-outline"
              >
                Review Full CV (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
