"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "assistant" | "user";
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi there! I am Yash's AI Assistant. Ask me anything about his projects (BAGA, Diabetic Retinopathy), internships, tech stack, or academic background!",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Pre-configured knowledge base answering common recruiter / visitor questions accurately based on CV:
  const getSimulatedAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("baga") || q.includes("hackathon") || q.includes("blockverse")) {
      return "BAGA (Bharat Autonomous Governance Agent) is an LLM-driven civic grievance system built in a 12-hour sprint at BLOCKVERSE 2026. It achieved 92% complaint classification accuracy using LangChain, OpenAI/Groq API, Random Forest, Flask, and Firebase. Yash and his team TRINETRA won the Special Prize for this!";
    }
    if (q.includes("retinopathy") || q.includes("diabetic") || q.includes("healthcare") || q.includes("vision")) {
      return "Yash's Diabetic Retinopathy staging project fuses retinal fundus images (ResNet18 / EfficientNet-B0) with clinical tabular data (age, BP, diabetes duration) on the mBRSET dataset. Crucially, it features a contrastive clinical deferral system to flag uncertain cases for human doctors, plus Grad-CAM and SHAP interpretability.";
    }
    if (q.includes("education") || q.includes("college") || q.includes("cgpa") || q.includes("degree")) {
      return "Yash is in his final year of B.E. in Information Technology at P.V.G.'s College of Engineering, Nashik (SPPU), graduating in June 2027 with a CGPA of 8.5. Prior to that, he completed his Diploma in Computer Engineering with 85.71%.";
    }
    if (q.includes("internship") || q.includes("experience") || q.includes("softcrowd") || q.includes("ibm")) {
      return "Yash has completed 2 internships: 1) Data Science Intern at Softcrowd Technologies (cleaned 12+ enterprise datasets, built Random Forest models reaching 91% accuracy); 2) AI & ML Intern with AICTE x IBM x Edunet Foundation (built 5+ models and 3 production pipelines).";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone")) {
      return "You can reach Yash directly at yashtupe3213@gmail.com or by phone at +91 9307041101. He is open to research internships, R&D roles, and graduate opportunities!";
    }
    if (q.includes("skills") || q.includes("stack") || q.includes("python") || q.includes("tech")) {
      return "Yash's primary technical competencies include Python, Java, SQL, Scikit-learn, PyTorch/Deep Learning, CNNs, LangChain, OpenAI APIs, Prompt Engineering, RAG, Pandas, NumPy, Flask, and Docker.";
    }

    return "Yash is an aspiring AI/ML researcher and data scientist with an 8.5 CGPA in final-year IT (June 2027). He specializes in healthcare AI (multimodal clinical deferral) and LLM agents like BAGA (92% accuracy). You can connect with him at yashtupe3213@gmail.com.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsTyping(true);

    // If an external LLM API key exists in NEXT_PUBLIC_OPENAI_API_KEY, use it, otherwise use knowledge base:
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    if (apiKey) {
      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are Yash Vijay Tupe's portfolio AI assistant. Answer truthfully based only on his CV facts: Final year B.E. IT at PVG COET Nashik (June 2027, 8.5 CGPA), Diploma (85.71%), Intern at Softcrowd (91% accuracy) and AICTE x IBM x Edunet. Projects: BAGA (92% accuracy, BLOCKVERSE 2026 Special Prize), Diabetic Retinopathy multimodal with clinical deferral, Supply Chain disruption, Smart Vein Finder. Email: yashtupe3213@gmail.com, Phone: +91 9307041101.",
              },
              ...messages.map((m) => ({ role: m.role, content: m.text })),
              { role: "user", content: userText },
            ],
          }),
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || getSimulatedAnswer(userText);
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      } catch {
        const reply = getSimulatedAnswer(userText);
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      }
    } else {
      setTimeout(() => {
        const reply = getSimulatedAnswer(userText);
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
        setIsTyping(false);
      }, 600);
      return;
    }
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating launcher button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 rounded-full bg-gradient-to-tr from-accent to-accent-light text-white shadow-xl shadow-accent/30 border border-white/20 flex items-center gap-2 cursor-pointer"
          aria-label="Open AI assistant"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span className="hidden sm:inline font-semibold text-xs tracking-wide pr-1">
                Ask About Yash
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[92vw] sm:w-96 glass-card bg-surface/95 border-accent/40 shadow-2xl rounded-2xl flex flex-col overflow-hidden h-[460px]"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-surface-hover border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-bold">
                  AI
                </div>
                <div>
                  <h4 className="text-xs font-bold text-foreground">
                    Yash&apos;s Portfolio Assistant
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-muted-foreground">Ready to answer</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] p-3 rounded-2xl ${
                      m.role === "user"
                        ? "bg-accent text-white rounded-br-xs"
                        : "bg-surface-hover text-foreground border border-border rounded-bl-xs"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-hover p-2.5 rounded-2xl border border-border flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions chips */}
            <div className="px-3 py-1.5 border-t border-border bg-surface/50 flex gap-1.5 overflow-x-auto text-[10px] no-scrollbar">
              <button
                type="button"
                onClick={() => setInput("Tell me about project BAGA")}
                className="whitespace-nowrap px-2 py-1 rounded-md bg-surface-hover hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
              >
                About BAGA?
              </button>
              <button
                type="button"
                onClick={() => setInput("What was your role in Diabetic Retinopathy?")}
                className="whitespace-nowrap px-2 py-1 rounded-md bg-surface-hover hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
              >
                Diabetic Retinopathy?
              </button>
              <button
                type="button"
                onClick={() => setInput("What are your internship achievements?")}
                className="whitespace-nowrap px-2 py-1 rounded-md bg-surface-hover hover:bg-muted text-muted-foreground hover:text-foreground border border-border"
              >
                Internships?
              </button>
            </div>

            {/* Input form */}
            <form onSubmit={handleSend} className="p-2.5 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-surface-hover border border-border focus:border-accent focus:outline-none text-foreground"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-accent hover:bg-accent-dark text-white disabled:opacity-50 transition-colors"
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
