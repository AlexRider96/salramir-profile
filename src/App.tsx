import { useState, useEffect } from "react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = ["About", "Experience", "Highlights", "Skills", "Projects", "Education", "Contact"];

const STATS = [
  { v: "7+", l: "Years Experience" },
  { v: "5+", l: "Years in Payments" },
  { v: "5", l: "Companies" },
  { v: "~50%", l: "AI Productivity Gain" },
];

const EXPERIENCE = [
  {
    company: "Visa Inc.",
    role: "Software Engineer (iOS)",
    period: "2021 — Present",
    location: "Remote",
    bullets: [
      "Spearheaded UL Solutions SDK certification, ensuring all test cases met specification requirements with documented evidence, while aligning security, compliance, and engineering teams on mobile transaction safety standards.",
      "Owned primary development responsibilities for a major iOS SDK release, delivering feature implementations and test automation while maintaining 100% production stability.",
      "Own full-stack development and maintenance of a mobile payment SDK for secure Apple ecosystem transactions, providing direct technical guidance and implementation support to merchants and clients worldwide.",
      "Leveraged AI tools to enhance daily development workflows, achieving ~50% productivity improvement across coding tasks while establishing comprehensive test environments for more rigorous test case coverage and validation.",
    ],
    tags: ["Swift", "SDK Development", "XCTest", "Objective-C", "DevOps"],
    color: "#C4622D",
  },
  {
    company: "AlphaCredit",
    role: "Mid iOS Developer",
    period: "Jun 2020 — Mar 2021",
    location: "Monterrey, Nuevo León, Mexico",
    bullets: [
      "Developed and improved mobile features for a financial payment platform used across iOS and Android environments.",
      "Implemented accessibility and security features, including facial recognition authentication.",
      "Maintained Android components using Java while contributing primarily to the iOS Swift codebase.",
    ],
    tags: ["Swift", "Java", "Android", "Fintech"],
    color: "#4A6741",
  },
  {
    company: "El Norte Newspaper",
    role: "iOS Developer",
    period: "2019 — 2020",
    location: "Monterrey, Mexico",
    bullets: [
      "Responsible for the end-to-end development of 3 iOS applications, encompassing both backend and frontend architecture.",
      "Spearheaded the design and implementation of a regex-based parsing algorithm to extract and format article data from HTML responses, streamlining data processing and enabling seamless integration into the application frontend alongside well-placed ad integrations.",
    ],
    tags: ["Swift", "Objective-C"],
    color: "#2D5F8A",
  },
  {
    company: "Capital RH - Staffing & Talent Solutions",
    role: "Wordpress Developer Intern",
    period: "Jan 2018 — Oct 2018",
    location: "Monterrey Area, Mexico",
    bullets: [
      "Led ongoing maintenance and visual redesign of the company's WordPress site, establishing a refreshed brand identity.",
      "Designed and developed a full-stack web application for the company's clients, covering both backend and frontend implementation.",
    ],
    tags: ["WordPress", "PHP", "HTML5", "CSS"],
    color: "#7A3B5E",
  },
  {
    company: "Salud360",
    role: "Fullstack Developer (Hybrid Mobile Apps & Web) Intern",
    period: "Aug 2017 — Aug 2018",
    location: "Monterrey Area, Mexico",
    bullets: [
      "Led a small engineering team as Project Lead on the design and development of Salud360's website and a companion customer-facing web application.",
      "Architected the application's backend in PHP with a SQL data layer, and delivered the frontend using HTML5, CSS, Bootstrap, and jQuery.",
    ],
    tags: ["PHP", "SQL", "Bootstrap", "jQuery", "HTML5"],
    color: "#4A6741",
  },
];

const HIGHLIGHTS = [
  {
    title: "UL Solutions Certification",
    subtitle: "Security & compliance",
    company: "Visa Inc.",
    description:
      "Spearheaded SDK certification, ensuring all test cases met specification requirements with documented evidence — aligning security, compliance, and engineering teams on mobile transaction safety standards.",
    bg: "#1A1916",
    fg: "#F2EBD9",
  },
  {
    title: "Web Platform Leadership",
    subtitle: "Project Lead",
    company: "Salud360",
    description:
      "Led design and development of the company's website and a customer-facing web application, architecting a PHP and SQL backend alongside an HTML5, CSS, Bootstrap, and jQuery frontend.",
    bg: "#2D5F8A",
    fg: "#F2EBD9",
  },
  {
    title: "Payment SDK for Apple Ecosystem",
    subtitle: "Full-stack ownership",
    company: "Visa Inc.",
    description:
      "Own full-stack development and maintenance of a mobile payment SDK for secure Apple ecosystem transactions, providing direct technical guidance to merchants and clients worldwide.",
    bg: "#C4622D",
    fg: "#F2EBD9",
  },
  {
    title: "Biometric Authentication",
    subtitle: "Security & accessibility",
    company: "AlphaCredit",
    description:
      "Implemented facial recognition authentication and accessibility features for a financial payment platform spanning iOS and Android, strengthening both security and inclusive access.",
    bg: "#4A6741",
    fg: "#F2EBD9",
  },
];

const SKILLS = [
  { category: "Programming Languages", items: ["Swift", "Objective-C", "Java", "Typescript", "NodeJS", "SQL"], color: "#C4622D" },
  { category: "iOS Development", items: ["SwiftUI", "UIKit", "SDK Development", "XCTest", "XCUITest"], color: "#2D5F8A" },
  { category: "Tools & Practices", items: ["Git", "CI/CD", "App Store Deployment", "Certificate Management", "Agile/Scrum"], color: "#4A6741" },
  { category: "Backend / Web", items: ["PHP", "MySQL", "NoSQL"], color: "#7A3B5E" },
];

const PROJECTS = [
  {
    name: "Bulkies",
    tagline: "Local trading card app for One Piece TCG & Magic: The Gathering",
    url: "https://bulkies.netlify.app/home",
    description:
      "A mobile app for in-person, community-level card trading between friends — not a public marketplace. Built end-to-end with React Native and Supabase, covering live card search, pricing, and collection management across two card games.",
    bullets: [
      "Collection management with per-card condition and quantity tracking, public/private visibility, and Postgres Row Level Security enforcing per-user data access.",
      "Auth, theming, and role/subscription system (admin, store, premium) built on Supabase, with DB-trigger-protected role changes and persisted light/dark preferences.",
    ],
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Claude"],
    color: "#7A3B5E",
  },
];

const EDUCATION = [
  {
    school: "Universidad Tecmilenio",
    degree: "Bachelor's Degree, Computer Software Engineering",
    period: "2016 — 2020",
    status: "Completed",
    bullets: [
      "Focused coursework in Game Programming and Mobile Application Development; active member of the IDEAS Software Engineering Club.",
      "Built a broad engineering foundation across C++, Java, Python, PHP, C#, and GML, alongside Oracle SQL/PL-SQL, HTML5, CSS, AngularJS, and React.js.",
      "Extended studies into robotics programming and represented the university at multiple Marketing, Leadership, and Software Engineering conferences.",
      "Developed across a range of tooling, including Android Studio, Visual Studio, XCode, Unity, and NetBeans.",
    ],
    tags: ["C++", "Java", "Python", "PHP", "C#", "Oracle SQL", "AngularJS", "React", "React Native", "Swift", "Objective-C"],
  },
];
const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

function NavBar({ active, onNav }: { active: string; onNav: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{ background: scrolled ? "#1A1916" : "transparent" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-['Playfair_Display'] font-bold text-lg tracking-tight text-[#F2EBD9]">
          Salvador Ramirez
        </span>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => onNav(link)}
              className="font-['DM_Sans'] text-sm tracking-wide transition-colors duration-200"
              style={{ color: active === link ? "#C4622D" : "rgba(242,235,217,0.65)" }}
            >
              {link}
            </button>
          ))}
        </nav>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs tracking-wide px-4 py-2 border transition-colors duration-200"
          style={{ borderColor: "rgba(242,235,217,0.3)", color: "#F2EBD9" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#C4622D"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4622D"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,235,217,0.3)"; }}
        >
          Resume <ArrowUpRight size={12} />
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="About" className="relative min-h-screen flex flex-col justify-end" style={{ background: "#1A1916" }}>
      {/* background texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, #F2EBD9 0px, #F2EBD9 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, #F2EBD9 0px, #F2EBD9 1px, transparent 1px, transparent 48px)"
      }} />

      {/* accent color bar */}
      <div className="absolute top-0 right-0 w-px h-full opacity-20" style={{ background: "#C4622D" }} />

      <div className="relative max-w-6xl mx-auto px-6 pb-20 pt-32 w-full">
        <p className="font-['DM_Mono'] text-xs tracking-[0.25em] uppercase mb-8" style={{ color: "#C4622D" }}>
          Software Engineer.
        </p>
        <h1
          className="font-['Playfair_Display'] font-black leading-[0.88] tracking-tight mb-10"
          style={{ fontSize: "clamp(4rem,11vw,9rem)", color: "#F2EBD9" }}
        >
          Salvador
          <br />
          <em className="italic" style={{ color: "#C4622D" }}>Ramirez</em>
        </h1>
        <p className="font-['DM_Sans'] font-light text-lg leading-relaxed max-w-lg mb-10" style={{ color: "rgba(242,235,217,0.65)" }}>
          I build secure, enterprise-scale mobile payment infrastructure for the Apple
          ecosystem — SDK architecture, testing frameworks, and regulatory compliance.
          7+ years shipping iOS, including 4+ years in payments at Visa.
        </p>
        <div className="flex items-center gap-4 flex-wrap mb-14">
          <a
            href="#Contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm px-6 py-3 transition-colors duration-200"
            style={{ background: "#C4622D", color: "#F2EBD9" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#A8501F")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#C4622D")}
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
          <a href="mailto:salvador.alex.ramirez@gmail.com" className="transition-colors" style={{ color: "rgba(242,235,217,0.5)" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EBD9")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,235,217,0.5)")} aria-label="Email"><Mail size={18} strokeWidth={1.5} /></a>
          <a href="https://linkedin.com/in/salvador-alexandro-ramirez/" target="_blank" rel="noreferrer" className="transition-colors" style={{ color: "rgba(242,235,217,0.5)" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EBD9")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,235,217,0.5)")} aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.5} /></a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl" style={{ background: "rgba(242,235,217,0.08)" }}>
          {STATS.map((s) => (
            <div key={s.l} className="p-4" style={{ background: "#1A1916" }}>
              <div className="font-['Playfair_Display'] font-bold text-2xl" style={{ color: "#C4622D" }}>{s.v}</div>
              <div className="font-['DM_Mono'] text-[10px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(242,235,217,0.4)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom scroll indicator */}
      <div className="relative max-w-6xl mx-auto px-6 pb-8 w-full flex items-center gap-4">
        <div className="w-8 h-px" style={{ background: "#C4622D" }} />
        <span className="font-['DM_Mono'] text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(242,235,217,0.3)" }}>Scroll to explore</span>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleExperience = showAll ? EXPERIENCE : EXPERIENCE.slice(0, 1);

  return (
    <section id="Experience" className="py-24 px-6" style={{ background: "#F2EBD9" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "#C4622D" }}>02</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl text-foreground">Experience</h2>
        </div>
        <div>
          {visibleExperience.map((job, i) => (
            <div
              key={job.company}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-border cursor-default transition-all duration-300"
              style={{ background: hovered === i ? job.color : "transparent" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="md:pt-1">
                <div
                  className="font-['DM_Mono'] text-xs tracking-wider mb-2 transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(242,235,217,0.6)" : "#6B6456" }}
                >
                  {job.period}
                </div>
                <div
                  className="font-['DM_Sans'] text-xs transition-colors duration-300"
                  style={{ color: hovered === i ? "rgba(242,235,217,0.5)" : "#6B6456" }}
                >
                  {job.location}
                </div>
              </div>
              <div className="px-6">
                <div className="flex items-start gap-4 mb-1">
                  <div>
                    <h3
                      className="font-['Playfair_Display'] font-bold text-2xl transition-colors duration-300"
                      style={{ color: hovered === i ? "#F2EBD9" : "#1A1916" }}
                    >
                      {job.role}
                    </h3>
                    <div
                      className="font-['DM_Sans'] text-sm font-medium mt-0.5 transition-colors duration-300"
                      style={{ color: hovered === i ? "rgba(242,235,217,0.8)" : job.color }}
                    >
                      {job.company}
                    </div>
                  </div>
                </div>
                <ul className="mt-4 mb-5 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-['DM_Sans'] font-light text-base leading-relaxed transition-colors duration-300"
                      style={{ color: hovered === i ? "rgba(242,235,217,0.75)" : "rgba(26,25,22,0.7)" }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['DM_Mono'] text-[11px] tracking-wide px-2.5 py-1 transition-colors duration-300"
                      style={{
                        background: hovered === i ? "rgba(242,235,217,0.15)" : "rgba(26,25,22,0.07)",
                        color: hovered === i ? "#F2EBD9" : "#1A1916",
                        border: `1px solid ${hovered === i ? "rgba(242,235,217,0.2)" : "rgba(26,25,22,0.12)"}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-10 inline-flex items-center gap-2 font-['DM_Sans'] text-sm px-6 py-3 border transition-colors duration-200"
            style={{ borderColor: "rgba(26,25,22,0.2)", color: "#1A1916" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1A1916"; (e.currentTarget as HTMLButtonElement).style.color = "#F2EBD9"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#1A1916"; }}
          >
            More <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </section>
  );
}

function HighlightsSection() {
  return (
    <section id="Highlights" className="py-24 px-6" style={{ background: "#1A1916" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "#C4622D" }}>03</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl" style={{ color: "#F2EBD9" }}>Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(242,235,217,0.08)" }}>
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="p-8" style={{ background: item.bg }}>
              <div className="font-['DM_Mono'] text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "rgba(242,235,217,0.45)" }}>
                {item.company}
              </div>
              <h3 className="font-['Playfair_Display'] font-bold text-2xl mb-0.5" style={{ color: item.fg }}>
                {item.title}
              </h3>
              <div className="font-['DM_Mono'] text-[11px] tracking-wide mb-4" style={{ color: "rgba(242,235,217,0.55)" }}>
                {item.subtitle}
              </div>
              <p className="font-['DM_Sans'] font-light text-sm leading-relaxed" style={{ color: "rgba(242,235,217,0.6)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="Skills" className="py-24 px-6" style={{ background: "#C4622D" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(242,235,217,0.5)" }}>04</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl" style={{ color: "#F2EBD9" }}>Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(242,235,217,0.15)" }}>
          {SKILLS.map((group) => (
            <div key={group.category} className="p-8" style={{ background: "#C4622D" }}>
              <h3 className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "rgba(242,235,217,0.55)" }}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-['DM_Sans'] text-sm px-3 py-1.5 transition-all duration-200 cursor-default"
                    style={{ background: "rgba(242,235,217,0.12)", color: "#F2EBD9", border: "1px solid rgba(242,235,217,0.2)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.background = "#F2EBD9"; (e.currentTarget as HTMLSpanElement).style.color = "#C4622D"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.background = "rgba(242,235,217,0.12)"; (e.currentTarget as HTMLSpanElement).style.color = "#F2EBD9"; }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="Projects" className="py-24 px-6" style={{ background: "#1A1916" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "#C4622D" }}>05</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl" style={{ color: "#F2EBD9" }}>Projects</h2>
        </div>
        <div>
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b"
              style={{ borderColor: "rgba(242,235,217,0.1)" }}
            >
              <div className="md:pt-1">
                <div
                  className="font-['DM_Mono'] text-xs tracking-wider mb-3 uppercase"
                  style={{ color: project.color }}
                >
                  Side Project
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-xs transition-colors"
                  style={{ color: "rgba(242,235,217,0.5)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EBD9")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,235,217,0.5)")}
                >
                  View project <ArrowUpRight size={12} />
                </a>
              </div>
              <div className="px-6">
                <h3 className="font-['Playfair_Display'] font-bold text-2xl" style={{ color: "#F2EBD9" }}>
                  {project.name}
                </h3>
                <div className="font-['DM_Sans'] text-sm font-medium mt-0.5" style={{ color: project.color }}>
                  {project.tagline}
                </div>
                <p className="font-['DM_Sans'] font-light text-base leading-relaxed mt-4" style={{ color: "rgba(242,235,217,0.7)" }}>
                  {project.description}
                </p>
                <ul className="mt-4 mb-5 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-['DM_Sans'] font-light text-base leading-relaxed"
                      style={{ color: "rgba(242,235,217,0.6)" }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['DM_Mono'] text-[11px] tracking-wide px-2.5 py-1"
                      style={{
                        background: "rgba(242,235,217,0.08)",
                        color: "#F2EBD9",
                        border: "1px solid rgba(242,235,217,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="Education" className="py-24 px-6" style={{ background: "#F2EBD9" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "#C4622D" }}>06</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl text-foreground">Education</h2>
        </div>
        <div>
          {EDUCATION.map((edu) => (
            <div
              key={edu.school}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-border"
            >
              <div className="md:pt-1">
                <div className="font-['DM_Mono'] text-xs tracking-wider mb-2" style={{ color: "#6B6456" }}>
                  {edu.period}
                </div>
                <div className="font-['DM_Sans'] text-xs" style={{ color: "#6B6456" }}>
                  {edu.status}
                </div>
              </div>
              <div className="px-6">
                <h3 className="font-['Playfair_Display'] font-bold text-2xl" style={{ color: "#1A1916" }}>
                  {edu.degree}
                </h3>
                <div className="font-['DM_Sans'] text-sm font-medium mt-0.5" style={{ color: "#2D5F8A" }}>
                  {edu.school}
                </div>
                <ul className="mt-4 mb-5 space-y-2">
                  {edu.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="font-['DM_Sans'] font-light text-base leading-relaxed"
                      style={{ color: "rgba(26,25,22,0.7)" }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['DM_Mono'] text-[11px] tracking-wide px-2.5 py-1"
                      style={{
                        background: "rgba(26,25,22,0.07)",
                        color: "#1A1916",
                        border: "1px solid rgba(26,25,22,0.12)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const CONTACT_METHODS = [
    { Icon: Mail, label: "salvador.alex.ramirez@gmail.com", href: "mailto:salvador.alex.ramirez@gmail.com" },
    { Icon: Linkedin, label: "linkedin.com/in/salvador-alexandro-ramirez", href: "https://linkedin.com/in/salvador-alexandro-ramirez/" },
  ];

  return (
    <section id="Contact" className="py-24 px-6" style={{ background: "#2D5F8A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-10">
          <span className="font-['DM_Mono'] text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(242,235,217,0.45)" }}>07</span>
          <h2 className="font-['Playfair_Display'] font-bold text-5xl" style={{ color: "#F2EBD9" }}>Contact</h2>
        </div>
        <p className="font-['DM_Sans'] font-light text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(242,235,217,0.7)" }}>
          Open to Senior iOS engineering roles, as well as hybrid mobile development,
          integrating with databases such as Supabase, PostgreSQL, and SQL. Reach out any of
          the ways below.
        </p>
        <div className="space-y-5">
          {CONTACT_METHODS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 transition-colors group"
              style={{ color: "rgba(242,235,217,0.6)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EBD9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,235,217,0.6)")}
            >
              <Icon size={15} strokeWidth={1.5} />
              <span className="font-['DM_Sans'] text-sm">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("About");

  function scrollTo(section: string) {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <NavBar active={activeSection} onNav={scrollTo} />
      <main>
        <HeroSection />
        <ExperienceSection />
        <HighlightsSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-6" style={{ background: "#1A1916", borderTop: "1px solid rgba(242,235,217,0.08)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <span className="font-['Playfair_Display'] font-bold" style={{ color: "#F2EBD9" }}>Salvador Ramirez</span>
          <span className="font-['DM_Mono'] text-[10px] tracking-widest uppercase" style={{ color: "rgba(242,235,217,0.25)" }}>
            Designed & built with care — 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
