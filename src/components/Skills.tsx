"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming",
      description: "Core languages for algorithmic problem solving and backend development.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ["Python", "Java", "SQL"],
    },
    {
      title: "Machine Learning & AI",
      description: "Classical and deep learning pipelines, architectural design, and optimization.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      skills: [
        "Scikit-learn",
        "Random Forest",
        "Deep Learning",
        "CNNs",
        "Feature Engineering",
        "Model Evaluation",
        "Model Deployment",
      ],
    },
    {
      title: "LLM & Generative AI",
      description: "Retrieval-augmented generation, prompt design, and autonomous agent orchestration.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ["LangChain", "OpenAI API", "Prompt Engineering", "RAG"],
    },
    {
      title: "Data Science & Analytics",
      description: "Exploratory analysis, feature transformation, and insightful visual storytelling.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      skills: ["Pandas", "NumPy", "EDA", "Matplotlib", "Seaborn"],
    },
    {
      title: "Tools, Cloud & Deployment",
      description: "Modern deployment, cloud services, microservices, and development environments.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ["Flask", "Firebase", "REST API", "Docker", "AWS", "Render", "Jupyter"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-6 flex flex-col justify-between hover:border-accent/50 ${
                idx === 1 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tech-chip cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
