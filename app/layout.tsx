import type { Metadata, Viewport } from "next";
import { Michroma, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0c1a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Sajadur Rahman",
    "Sajadur Rahman Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "NestJS",
    "TypeScript Developer",
    "Go Developer",
    "Golang",
    "Docker",
    "AWS Cloud",
    "AI Engineer",
    "RAG",
    "Vector Search",
    "pgvector",
    "SaaS Architecture",
    "Microservices",
    "Remote Software Engineer",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/sajadur-logo.svg", type: "image/svg+xml" },
      { url: "/sajadur-logo.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/sajadur-logo.png",
    apple: "/sajadur-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/sajadur-logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack & AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/sajadur-logo.png"],
    creator: "@sajadurrahman",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      jobTitle: "Full Stack & AI Engineer",
      description: siteConfig.description,
      image: `${siteConfig.url}/sajadur-rahman.jpeg`,
      sameAs: [
        siteConfig.socials.linkedin,
        siteConfig.socials.github,
        siteConfig.socials.facebook,
      ],
      knowsAbout: [
        "Full Stack Web Development",
        "Node.js",
        "NestJS",
        "TypeScript",
        "Go (Golang)",
        "Docker",
        "Cloud Architecture",
        "AI Engineering & RAG Systems",
        "Microservices",
        "PostgreSQL",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${michroma.variable} ${inter.variable} antialiased text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
