"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationHistory = [
    {
      degree: "Bachelor of Engineering (B.E.) in Information Technology",
      institution: "P.V.G.'s College of Engineering & S.S. Dhamankar Institute of Technology, Nashik",
      university: "Savitribai Phule Pune University (SPPU)",
      period: "June 2024 – June 2027",
      grade: "CGPA: 8.5 / 10.0",
      status: "Final Year Student",
      highlights: [
        "Core Coursework: Machine Learning, Deep Learning, Database Management Systems, Data Structures & Algorithms, Computer Networks.",
        "Final Year Capstone: Multimodal Deep Learning for Diabetic Retinopathy Staging with Clinical Deferral and Smart Vein Detection.",
        "Active Participant: College AI/ML clubs, hackathon team lead, technical symposiums.",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "GES's Sir Dr. M. S. Gosavi Polytechnic, Nashik",
      university: "Maharashtra State Board of Technical Education (MSBTE)",
      period: "2021 – 2024",
      grade: "Aggregate: 85.71% (First Class with Distinction)",
      status: "Completed",
      highlights: [
        "Rigorous foundation in Object-Oriented Programming (Java/Python), Relational Databases (SQL), Web Technologies, and Operating Systems.",
        "Secured First Class with Distinction with a stellar 85.71% aggregate.",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="mx-auto max-w-5xl">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="relative pl-6 md:pl-10 space-y-12">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {educationHistory.map((edu, idx) => (
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
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30 mb-2">
                      {edu.status}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-light font-medium text-sm mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {edu.university}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-sm font-semibold text-muted-foreground">
                      {edu.period}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-border text-sm text-muted-foreground">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
