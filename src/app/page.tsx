import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RI Suvo",
    alternateName: "Rafiqul Islam Suvo",
    url: "https://risuvo.com/",
  };
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Rafiqul Islam Suvo",

    alternateName: "RI Suvo",

    url: "https://risuvo.com/",

    jobTitle: "Software Engineer",

    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/risuvoo",
      "https://www.linkedin.com/in/risuvoo",
      "http://facebook.com/risuvoo",
      "https://x.com/risuvooo",
      "https://www.pinterest.com/risuvoo/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <main className="min-h-screen bg-[#f7f6f0] text-[#1c1917]">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
