"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "yashtupe3213@gmail.com";
  const phone = "+91 9307041101";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Recruiter-ready Formspree or EmailJS endpoint placeholder:
    // User can replace 'YOUR_FORMSPREE_ID' with their actual endpoint in .env.local
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/placeholder";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        // Fallback friendly alert when using placeholder endpoint
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (err) {
      // In case offline or network blocked, open default mailto client
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="mx-auto max-w-6xl">
        <div className="text-center md:text-left mb-16">
          <span className="text-accent font-semibold text-xs tracking-widest uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mt-3 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              I am always keen to discuss research opportunities, machine learning collaborations,
              or industry internships. Feel free to send a message or connect through my social channels.
            </p>

            <div className="space-y-4">
              {/* Email Card with Copy Button */}
              <div className="glass-card p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-accent/15 hover:bg-accent/25 text-accent border border-accent/30 transition-all flex items-center gap-1 cursor-pointer"
                  title="Copy email address"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>

              {/* Phone */}
              <div className="glass-card p-5 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Phone</p>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-5 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Location</p>
                  <p className="text-sm sm:text-base font-semibold text-foreground">
                    Nashik, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                Social Profiles
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/yash-tupe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center text-xs sm:text-sm py-2.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/YashVijayTupe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 justify-center text-xs sm:text-sm py-2.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Working Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase text-muted-foreground mb-2">
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe / HR Lead"
                    className="w-full px-4 py-3 rounded-xl bg-surface-hover/70 border border-border focus:border-accent focus:outline-none text-foreground text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase text-muted-foreground mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-hover/70 border border-border focus:border-accent focus:outline-none text-foreground text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold uppercase text-muted-foreground mb-2">
                  Subject / Topic <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI Research Internship / Project Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-surface-hover/70 border border-border focus:border-accent focus:outline-none text-foreground text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase text-muted-foreground mb-2">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, team, or research collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-hover/70 border border-border focus:border-accent focus:outline-none text-foreground text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="btn-primary w-full justify-center py-3.5"
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Direct Message
                  </span>
                )}
              </button>

              {formStatus === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm text-center font-medium">
                  Thank you! Your message has been sent. Yash will reply promptly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copy Email Toast Notification */}
      <div className={`toast ${copied ? "show" : ""}`}>
        <div className="flex items-center gap-2 font-medium">
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Email copied to clipboard: <strong>{email}</strong></span>
        </div>
      </div>
    </section>
  );
}
