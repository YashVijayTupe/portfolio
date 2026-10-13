"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-surface/50 backdrop-blur-md py-12 px-4 relative">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <a href="#" className="text-xl font-bold gradient-text">
            Yash Vijay Tupe<span className="text-accent">.</span>
          </a>
          <p className="text-xs text-muted-foreground mt-1 max-w-md">
            Aspiring AI/ML Researcher & Data Scientist. Focused on healthcare AI, LLM systems, and applied machine learning.
          </p>
        </div>

        <div className="flex flex-col sm:items-end gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} Yash Vijay Tupe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/yash-tupe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/YashVijayTupe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="mailto:yashtupe3213@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
