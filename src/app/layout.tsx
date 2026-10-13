import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yashtupe.dev"),
  title: "Yash Vijay Tupe | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Yash Vijay Tupe — aspiring AI/ML researcher and data scientist specializing in healthcare AI, LLM systems, and applied machine learning. Open to research internships and R&D roles.",
  keywords: [
    "Yash Tupe",
    "AI/ML Engineer",
    "Data Scientist",
    "Machine Learning",
    "Healthcare AI",
    "LLM",
    "Portfolio",
    "Deep Learning",
    "NLP",
  ],
  authors: [{ name: "Yash Vijay Tupe" }],
  creator: "Yash Vijay Tupe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashtupe.dev",
    title: "Yash Vijay Tupe | AI/ML Engineer & Data Scientist",
    description:
      "Portfolio of Yash Vijay Tupe — aspiring AI/ML researcher and data scientist specializing in healthcare AI, LLM systems, and applied machine learning.",
    siteName: "Yash Tupe Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Vijay Tupe — AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Vijay Tupe | AI/ML Engineer & Data Scientist",
    description:
      "Aspiring AI/ML researcher specializing in healthcare AI, LLM systems, and applied machine learning.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <div className="bg-mesh" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
