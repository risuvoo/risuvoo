import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://risuvo.com"),
  title: "RI Suvo | Rafiqul Islam Suvo — Software Engineer",
  description:
    "Official portfolio of RI Suvo (Rafiqul Islam Suvo) - Senior Software Engineer with 6+ years of experience in frontend development, microfrontends, Node.js backend services, and scalable end-to-end software solutions.",
  alternates: {
    canonical: "https://risuvo.com/",
  },
  keywords: [
    "RI Suvo",
    "Rafiqul Islam Suvo",
    "Senior Software Engineer",
    "Software Engineer",
    "Frontend Development",
    "Frontend Developer",
    "Microfrontends",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React.js",
    "TailwindCSS",
    "Redux",
    "RTK Query",
    "Figma to Code",
    "CSS Design",
    "UI/UX Design",
    "Leadership",
    "Team Management",
    "Mentorship",
    "Software Development",
    "Web Development",
    "Application Development",
    "Enterprise Solutions",
    "Freelance",
    "Software Freelance",
    "Web Freelance",
    "Application Freelance",
    "Freelance Job",
    "Freelance Developer",
    "Freelance Engineer",
    "Freelance Solution",
    "Freelance Project",
    "Freelance Client",
    "Freelance Product",
    "Freelance Project",
    "Dhaka Bangladesh",
  ],
  authors: [{ name: "Rafiqul Islam Suvo" }],
  openGraph: {
    title: "RI Suvo | Rafiqul Islam Suvo — Software Engineer",
    description:
      "RI Suvo (Rafiqul Islam Suvo) is a Software Engineer and Full Stack Developer with 6+ years of experience, specializing in modern frontend architectures, microfrontends, Node.js, and scalable web solutions.",
    url: "https://risuvo.com/",
    siteName: "RI Suvo",
    type: "website",
    locale: "en_US",
    images: [{ url: "/profile_image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RI Suvo | Rafiqul Islam Suvo — Software Engineer",
    description:
      "RI Suvo (Rafiqul Islam Suvo) is a Software Engineer and Full Stack Developer.",
    images: ["/profile_image.jpg"],
  },
  icons: {
    icon: "/profile_image.jpg",
    shortcut: "/profile_image.jpg",
    apple: "/profile_image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/profile_image.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/profile_image.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/profile_image.jpg" />
      </head>
      <body className="antialiased selection:bg-[#e9f02c] selection:text-[#1c1917]">
        {children}
      </body>
      <GoogleAnalytics gaId="G-9X5G9NYR56" />
    </html>
  );
}
