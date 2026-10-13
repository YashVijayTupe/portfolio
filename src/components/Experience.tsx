"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  skills: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Data Science Intern",
      company: "Softcrowd Technologies",
      location: "Nashik, Maharashtra",
      period: "Jan 2026 – Feb 2026",
      type: "On-site Internship",
      highlights: [
        "Cleaned, transformed, and performed exploratory data analysis on 12+ enterprise datasets using Pandas and NumPy, cutting data preparation cycle time by 30%.",
        "Engineered predictive features and trained robust Random Forest machine learning models achieving 91% accuracy on supply chain and operations datasets.",
        "Synthesized technical insights into actionable dashboards and presented comprehensive findings to 5+ corporate stakeholders and leadership members.",
      ],
      skills: ["Python", "Pandas", "NumPy", "Random Forest", "Data Cleaning", "Feature Engineering"],
    },
    {
      role: "AI & ML Intern",
      company: "AICTE x IBM x Edunet Foundation",
      location: "Remote",
      period: "Jan 2026 – Feb 2026",
      type: "Virtual Internship",
      highlights: [
        "Constructed and validated 5+ predictive machine learning models across classification and regression benchmarks on 8+ heterogeneous datasets.",
        "Shipped 3 production-grade, end-to-end ML pipelines encompassing data ingestion, preprocessing, automated hyperparameter tuning, and model evaluation.",
        "Received national-level certificate of excellence awarded jointly by AICTE, IBM SkillsBuild, and Edunet Foundation.",
      ],
      skills: ["Machine Learning", "Scikit-learn", "Model Evaluation", "ML Pipelines", "EDA"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Work Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="relative pl-6 md:pl-10 space-y-12">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <div className="timeline-dot top-2" />

              <div className="glass-card p-6 md:p-8 hover:border-accent/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-accent-light font-medium mt-1">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
                      {exp.period}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 text-sm sm:text-base text-muted-foreground">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-chip text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
