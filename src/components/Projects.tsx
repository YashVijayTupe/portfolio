"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ("AI/ML" | "LLM" | "Healthcare" | "IoT")[];
  featured?: boolean;
  image?: string;
  accuracyMetric?: string;
  problem: string;
  approach: string;
  keyFeatures: string[];
  role: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "baga",
      title: "BAGA (Bharat Autonomous Governance Agent)",
      tagline: "LLM-Powered Civic Grievance Platform with 92% Classification Accuracy",
      category: ["LLM", "AI/ML"],
      featured: true,
      image: "/images/hackathon-badges.jpg",
      accuracyMetric: "92% Accuracy",
      problem:
        "Civic administration departments in municipal bodies receive thousands of unstructured grievances in multiple vernacular languages daily. Manual classification and dispatching causes severe bottlenecks, misrouted complaints, and citizen frustration.",
      approach:
        "Engineered an autonomous multi-agent pipeline during a 12-hour hackathon. The system extracts intent and urgency using LangChain and OpenAI/Groq APIs, validates jurisdiction via Random Forest classifiers, and dispatches automated tickets to municipal officers with auto-routing.",
      keyFeatures: [
        "Autonomous multi-tier triage classifying civic complaints with 92% accuracy across municipal departments.",
        "Real-time grievance routing, priority prediction, and officer response tracking dashboard.",
        "Built in a high-intensity 12-hour hackathon by team TRINETRA.",
        "Won Special Prize at BLOCKVERSE 2026 Hackathon (GDGC SNJB x Winjit).",
      ],
      role: "Lead AI & Backend Developer — Designed the LLM agent flow, prompt routing chains, Random Forest complaint classifier, and Flask-Firebase synchronization.",
      techStack: [
        "LangChain",
        "OpenAI API",
        "Groq API",
        "Random Forest",
        "Flask",
        "Next.js",
        "Firebase",
        "Python",
      ],
      githubUrl: "https://github.com/YashVijayTupe",
      demoUrl: "https://github.com/YashVijayTupe",
    },
    {
      id: "dr-staging",
      title: "Multimodal Deep Learning for Diabetic Retinopathy with Clinical Deferral",
      tagline: "Explainable 5-Class Retinal Fundus Staging with Selective Prediction",
      category: ["Healthcare", "AI/ML"],
      featured: false,
      accuracyMetric: "Clinical Deferral",
      problem:
        "Diabetic Retinopathy (DR) is a leading cause of preventable blindness. Standard deep learning models output forced predictions even when uncertain, posing high diagnostic safety risks in clinical telemedicine.",
      approach:
        "Designed an end-to-end multimodal architecture on the mBRSET dataset fusing high-resolution retinal fundus images (via ResNet18 / EfficientNet-B0) with patient electronic health records (age, diabetes duration, blood pressure via an MLP). Implemented a contrastive learning-based deferral mechanism to selectively abstain and route ambiguous cases to ophthalmologists, backed by Grad-CAM and SHAP visual explanations.",
      keyFeatures: [
        "Multimodal fusion layer integrating clinical risk indicators with high-dimensional convolutional feature representations.",
        "5-class DR staging (No DR, Mild, Moderate, Severe, Proliferative DR).",
        "Selective classification deferral system flagging low-confidence cases to prevent misdiagnoses.",
        "Dual explainability suite: Grad-CAM for retinal lesion heatmaps + SHAP for clinical tabular feature attributions.",
        "Interactive Streamlit clinician decision-support dashboard.",
      ],
      role: "Core ML Researcher (Group Final Year Project) — Implemented image-tabular fusion layers, contrastive loss deferral heuristics, and Grad-CAM interpretability pipeline.",
      techStack: [
        "PyTorch",
        "ResNet18",
        "EfficientNet-B0",
        "Grad-CAM",
        "SHAP",
        "Streamlit",
        "Scikit-learn",
        "Python",
      ],
      githubUrl: "https://github.com/YashVijayTupe",
      demoUrl: "https://github.com/YashVijayTupe",
    },
    {
      id: "supply-chain",
      title: "Supply Chain Disruption Prediction System",
      tagline: "Enterprise Risk Forecasting Deployed on Render with 91% Accuracy",
      category: ["AI/ML"],
      featured: false,
      accuracyMetric: "91% Accuracy",
      problem:
        "Volatile supply chains experience unexpected transit delays and supplier stockouts, generating massive operational losses due to lack of early predictive intelligence.",
      approach:
        "Developed during internship at Softcrowd Technologies. Implemented rigorous data engineering across 12+ enterprise supply chain datasets, engineered cyclical temporal and logistics features, and optimized ensemble Random Forest models deployed as a low-latency REST API on Render.",
      keyFeatures: [
        "91% classification accuracy predicting shipment transit failure and disruption likelihood.",
        "Feature importance profiling enabling logistics leads to identify root causes of delivery bottlenecks.",
        "REST API microservice architecture built with Flask and container-ready deployment.",
        "Presented directly to 5+ corporate stakeholders and operations managers.",
      ],
      role: "Data Science Intern — Executed end-to-end data cleansing, feature engineering, cross-validation, and production deployment on Render.",
      techStack: [
        "Python",
        "Random Forest",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Flask",
        "Render",
      ],
      githubUrl: "https://github.com/YashVijayTupe",
      demoUrl: "https://github.com/YashVijayTupe",
    },
    {
      id: "vein-finder",
      title: "Smart Vein Finder (Edge Computer Vision)",
      tagline: "ESP32-CAM with Near-Infrared Filtering & U-Net Subcutaneous Mapping",
      category: ["IoT", "Healthcare", "AI/ML"],
      featured: false,
      accuracyMetric: "Hardware + U-Net",
      problem:
        "Locating subcutaneous peripheral veins in elderly, pediatric, or dark-skinned patients frequently results in repeated painful venipuncture attempts and medical trauma.",
      approach:
        "Engineered an IoT near-infrared (NIR) imaging module utilizing an ESP32-CAM fitted with 850nm IR illumination LEDs. Processed the NIR video feed with Contrast Limited Adaptive Histogram Equalization (CLAHE) and Frangi vesselness filters, segmented using a lightweight U-Net, and applied Random Forest scoring to rank vein puncture viability.",
      keyFeatures: [
        "Custom ESP32-CAM hardware rig with tailored infrared illumination for hemoglobin absorption contrast.",
        "Real-time OpenCV filtering pipeline applying CLAHE contrast boosting and Frangi vessel enhancement.",
        "U-Net deep segmentation architecture mapping intricate venous geometry.",
        "Random Forest suitability algorithm scoring optimal puncture depth and vein width.",
      ],
      role: "Project Co-Developer — Designed edge image preprocessing algorithms, CLAHE/Frangi filters, and vein viability classification model.",
      techStack: [
        "ESP32-CAM",
        "OpenCV",
        "U-Net",
        "CLAHE",
        "Frangi Filter",
        "Random Forest",
        "Python",
        "C++",
      ],
      githubUrl: "https://github.com/YashVijayTupe",
      demoUrl: "https://github.com/YashVijayTupe",
    },
  ];

  const categories = ["All", "AI/ML", "LLM", "Healthcare", "IoT"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeTab as any));

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-12">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "bg-surface hover:bg-surface-hover text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className={`glass-card p-6 md:p-8 flex flex-col justify-between cursor-pointer group transition-all duration-300 relative overflow-hidden ${
                project.featured
                  ? "border-accent/40 shadow-xl shadow-accent/5"
                  : "hover:border-accent/40"
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/40 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    Featured Project
                  </span>
                </div>
              )}

              <div>
                {/* Project Image Preview if available */}
                {project.image && (
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-border group-hover:border-accent/40 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs px-2.5 py-1 rounded-md bg-background/80 backdrop-blur-md font-semibold text-accent border border-border">
                        BLOCKVERSE 2026 Special Prize
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  {project.category.map((cat, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {cat}
                    </span>
                  ))}
                  {project.accuracyMetric && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.accuracyMetric}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-accent-light mb-3">
                  {project.tagline}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                  {project.problem}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 5).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="text-xs text-muted-foreground self-center px-1">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
                  <span>View Details & Architecture</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card bg-surface/95 max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 rounded-2xl relative border-accent/40 shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-surface-hover hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Header */}
                <div className="pr-10 mb-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {selectedProject.category.map((cat, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent/15 text-accent-light border border-accent/30"
                      >
                        {cat}
                      </span>
                    ))}
                    {selectedProject.accuracyMetric && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        {selectedProject.accuracyMetric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <p className="text-accent-light font-medium text-sm sm:text-base mt-1">
                    {selectedProject.tagline}
                  </p>
                </div>

                {/* Modal Content Sections */}
                <div className="space-y-6 text-sm sm:text-base text-muted-foreground">
                  <div>
                    <h4 className="text-foreground font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      The Problem
                    </h4>
                    <p className="leading-relaxed bg-surface-hover/50 p-4 rounded-xl border border-border">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Technical Approach & Methodology
                    </h4>
                    <p className="leading-relaxed bg-surface-hover/50 p-4 rounded-xl border border-border">
                      {selectedProject.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Key Features & Impact
                    </h4>
                    <ul className="space-y-2 bg-surface-hover/50 p-4 rounded-xl border border-border">
                      {selectedProject.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      My Individual Role
                    </h4>
                    <p className="leading-relaxed bg-surface-hover/50 p-4 rounded-xl border border-border text-foreground font-medium">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-foreground font-bold uppercase text-xs tracking-wider mb-2">
                      Tech Stack & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-chip text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer CTAs */}
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    View Code Repository
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo / Overview
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
