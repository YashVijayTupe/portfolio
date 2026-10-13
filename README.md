# Yash Vijay Tupe — Personal Portfolio Website

A modern, interaction-rich, high-performance personal portfolio website built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Deploy-ready for **Vercel** with full mobile-first responsiveness and dark/light mode.

---

## 🌟 Highlights & Features

1. **Dark & Light Mode Toggle**: Dark theme by default with smooth transitions and persistent preference in `localStorage`.
2. **Dynamic Hero Section**:
   - High-resolution profile photo in a soft-rounded glow frame.
   - Interactive typing effect rotating through: *"AI/ML Engineer"*, *"Data Scientist"*, *"Healthcare AI Researcher"*, *"LLM Builder"*.
   - Direct CTA buttons to view projects, download CV (PDF), and initiate contact.
3. **About Section with Animated Statistics Counters**:
   - 2 Internships completed
   - 4+ Major AI/ML projects
   - 92% Best model accuracy
   - 1 Hackathon Special Prize
   - Quick facts: SPPU Education, Nashik location, 8.5 CGPA, Healthcare AI focus.
4. **Grouped Skills Cards**: Categorized chips for Programming, ML & AI, LLM & GenAI, Data Science, and Cloud/DevOps tools.
5. **Interactive Vertical Experience Timeline**:
   - Data Science Intern @ Softcrowd Technologies (12+ datasets, 30% faster prep, 91% accuracy).
   - AI & ML Intern @ AICTE x IBM x Edunet Foundation (5+ models, 3 pipelines).
6. **Project Showcase with 3D Card Hover & Architecture Modals**:
   - **BAGA (Bharat Autonomous Governance Agent)**: Featured LLM civic grievance platform (92% accuracy, BLOCKVERSE 2026 Special Prize winner).
   - **Multimodal Deep Learning for Diabetic Retinopathy**: Clinical deferral mechanism on mBRSET dataset with Grad-CAM & SHAP explainability.
   - **Supply Chain Disruption Prediction**: 91% accuracy Random Forest deployed on Render.
   - **Smart Vein Finder**: ESP32-CAM NIR imaging with U-Net vessel segmentation.
7. **Achievements, Certifications & Event Moments**:
   - BLOCKVERSE 2026 Hackathon Special Prize card & AICTE-IBM certification card.
   - Event photo gallery with **magnified interactive Lightbox modal**.
8. **Academic Timeline**:
   - B.E. in Information Technology, P.V.G.'s COET (SPPU, 2024–2027, CGPA 8.5).
   - Diploma in Computer Engineering, GES's Polytechnic (2021–2024, 85.71% Distinction).
9. **Currently Looking For Highlight**:
   - Visual beacon indicator highlighting availability for AI/ML research internships, R&D roles, and Master's programs abroad.
10. **Interactive Contact Section**:
    - Functional contact form (Formspree / EmailJS ready).
    - Quick copy button for `yashtupe3213@gmail.com` with toast notification.
    - Direct phone (`+91 9307041101`), LinkedIn, and GitHub links.
11. **Interactive AI Assistant Chat Widget ("Ask About Yash")**:
    - Floating assistant answering questions on Yash's CV, projects, and skills.
    - Works out of the box with an embedded offline knowledge base, or can connect to an LLM API via `.env.local`.
12. **UX Polish**: Top scroll progress bar, smooth scroll navigation, Back-to-Top button, subtle ambient gradient mesh.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm (or yarn / pnpm)

### Setup & Run

```bash
# Navigate to project folder
cd portfolio-app

# Install dependencies (if not already installed)
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Configuration & Placeholders to Replace

Create a `.env.local` file inside `portfolio-app/` to configure live endpoints:

```env
# 1. Contact Form Endpoint (Optional)
# Sign up free at https://formspree.io and paste your form ID:
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORMSPREE_ID

# 2. OpenAI API for Chatbot (Optional)
# If provided, the floating widget will call OpenAI directly.
# If omitted, it gracefully falls back to the preloaded CV knowledge base!
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here
```

### URLs & Assets Checklist:
- **CV File**: Located at `public/Yash_Vijay_Tupe_CV.pdf` (already attached and copied).
- **Hero Photo**: Located at `public/images/photo.jpeg` (already attached and linked).
- **Hackathon Images**: Located at `public/images/hackathon-badges.jpg` and `public/images/hackathon-award.jpg`.
- **GitHub Links**: Update project-specific repository URLs in [src/components/Projects.tsx](file:///src/components/Projects.tsx) if you have dedicated repository links for individual projects.

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account (`https://github.com/YashVijayTupe/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. If your Next.js project is located in `portfolio-app`, set the **Root Directory** setting on Vercel to `portfolio-app`.
5. Add your optional environment variables (`NEXT_PUBLIC_FORMSPREE_ENDPOINT`, etc.).
6. Click **Deploy**. Vercel will automatically build and deploy your site with global edge CDN caching!

---

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── images/
│   │   ├── photo.jpeg              # Profile photo (Hero)
│   │   ├── hackathon-badges.jpg    # BAGA & BLOCKVERSE badges
│   │   ├── hackathon-award.jpg     # Felicitation ceremony photo
│   │   └── og-image.png            # Open Graph social preview
│   └── Yash_Vijay_Tupe_CV.pdf      # Attached resume for download
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind v4 theme tokens, dark/light styles
│   │   ├── layout.tsx              # SEO metadata, Inter font, theme bootstrap
│   │   └── page.tsx                # Main assembly page with all 9 sections
│   └── components/
│       ├── Navbar.tsx              # Sticky header, scroll progress, theme toggle
│       ├── Hero.tsx                # Hero with typing animation & quick CTAs
│       ├── About.tsx               # Summary, facts & animated statistics
│       ├── Skills.tsx              # Grouped cards & skill chips
│       ├── Experience.tsx          # Vertical experience timeline
│       ├── Projects.tsx            # Filter tabs, 3D hover & architecture modal
│       ├── Achievements.tsx        # Awards, certificates & photo lightbox
│       ├── Education.tsx           # Academic background & degrees
│       ├── LookingFor.tsx          # Current availability banner
│       ├── Contact.tsx             # Working form, copy email toast, social links
│       ├── ChatWidget.tsx          # 'Ask about Yash' AI chatbot
│       ├── BackToTop.tsx           # Smooth back-to-top floating button
│       └── Footer.tsx              # Footer with links & copyright
├── package.json
└── tsconfig.json
```
