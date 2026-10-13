"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhotoItem {
  src: string;
  title: string;
  caption: string;
}

export default function Achievements() {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);

  const achievements = [
    {
      title: "Special Prize — BLOCKVERSE 2026 Hackathon",
      organization: "Google Developer Groups on Campus (GDGC) SNJB x Winjit",
      date: "April 2026",
      description:
        "Awarded Special Prize at the national-level 12-hour hackathon for building BAGA (Bharat Autonomous Governance Agent). Competed under Team TRINETRA (Yash Tupe, Sahil Adagale, Rohit Dhondage) evaluating AI multi-agent grievance automation.",
      badge: "Hackathon Award",
      icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
    {
      title: "AI & ML Specialist Certification",
      organization: "AICTE x IBM SkillsBuild x Edunet Foundation",
      date: "February 2026",
      description:
        "Comprehensive certification in Artificial Intelligence and Machine Learning upon completing a rigorous virtual internship. Deployed 3 ML pipelines across 8+ datasets and demonstrated mastery of predictive algorithms.",
      badge: "National Certification",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const gallery: PhotoItem[] = [
    {
      src: "/images/hackathon-award.jpg",
      title: "BLOCKVERSE 2026 Felicitation",
      caption:
        "Receiving the Special Prize Certificate and recognition from college dignitaries and Winjit leaders at SNJB Late Sau. Kantabai Bhavarlalji Jain College of Engineering, Chandwad.",
    },
    {
      src: "/images/hackathon-badges.jpg",
      title: "Team TRINETRA & BAGA Live Demo",
      caption:
        "Participant ID badges (Sahil Adagale, Yash Tupe, Rohit Dhondage) with the live Bharat Autonomous Governance Agent dashboard running during the 12-hour hackathon sprint.",
    },
  ];

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Recognitions & Moments
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Achievements & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-accent/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/15 text-accent border border-accent/30">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-accent-light font-medium mb-3">
                  <span>{item.organization}</span>
                  <span>•</span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Gallery */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Hackathon & Event Moments
            <span className="text-xs text-muted-foreground font-normal ml-2">
              (Click to enlarge)
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((photo, pIdx) => (
              <motion.div
                key={pIdx}
                whileHover={{ y: -4 }}
                onClick={() => setActivePhoto(photo)}
                className="glass-card overflow-hidden cursor-pointer group border-border hover:border-accent/50"
              >
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                      {photo.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhoto(null)}
              className="lightbox-overlay p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-surface rounded-2xl overflow-hidden border border-accent/40 shadow-2xl relative"
              >
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-background/80 backdrop-blur-md text-foreground hover:bg-surface-hover transition-colors cursor-pointer"
                  aria-label="Close image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative w-full h-[60vh]">
                  <Image
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="p-6 bg-surface border-t border-border">
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {activePhoto.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activePhoto.caption}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
