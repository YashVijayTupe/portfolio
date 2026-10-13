"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function AnimatedCounter({ end, suffix = "", prefix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="glass-card p-6 text-center hover:border-accent/40 transition-all">
      <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const stats: { end: number; suffix?: string; prefix?: string; label: string }[] = [
    { end: 2, suffix: "", label: "Internships Completed" },
    { end: 4, suffix: "+", label: "Major ML/AI Projects" },
    { end: 92, suffix: "%", label: "Best Model Accuracy" },
    { end: 1, suffix: "", label: "Hackathon Special Prize" },
  ];

  const quickFacts = [
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Nashik, Maharashtra, India",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      label: "Education",
      value: "B.E. Information Technology (SPPU)",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      label: "Current CGPA",
      value: "8.5 / 10.0",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      label: "Research Focus",
      value: "Healthcare AI, Explainable AI, LLMs",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left mb-12">
            <span className="text-accent font-semibold text-xs tracking-widest uppercase">
              Get To Know Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              About <span className="gradient-text">Yash</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
          </div>

          {/* Main summary text & Quick Facts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                I am an aspiring AI/ML researcher and data scientist with a deep interest in
                bridging machine learning theoretical foundations with real-world clinical and civic applications.
                Currently in my final year of B.E. in Information Technology at P.V.G.&apos;s COET (SPPU, graduating June 2027),
                I maintain a consistent academic record with an <strong className="text-foreground">8.5 CGPA</strong>.
              </p>
              <p>
                My work centers on <strong className="text-foreground">multimodal healthcare AI</strong> (such as clinical deferral and explainable medical imaging for diabetic retinopathy),
                <strong className="text-foreground"> LLM-driven governance agents</strong>, and reliable end-to-end ML pipelines.
                I have gained hands-on industry experience through internships at Softcrowd Technologies and the AICTE x IBM x Edunet Foundation program.
              </p>
              <p>
                Looking ahead, I am actively seeking <strong className="text-foreground">research internships, R&D roles</strong>, and preparing for a Master&apos;s degree in Artificial Intelligence / Computer Science abroad.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 flex items-center gap-4 hover:border-accent/40"
                >
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                      {fact.label}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-foreground">
                      {fact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <AnimatedCounter
                key={idx}
                end={stat.end}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
