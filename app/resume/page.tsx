"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, MapPin, Mail, Phone, Globe, Calendar, CheckCircle, Star, Code2, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, fadeInLeft } from "@/lib/motion";
import { BRAND } from "@/lib/data";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const experiences = [
  {
    id: "exp-1",
    company: "TechSolutions Pvt Ltd",
    role: "Senior SQA Engineer",
    dateRange: "Jan 2022 – Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Led QA for a SaaS platform serving 50K+ active users across 12 countries.",
      "Built 1,200+ automated test cases with Selenium & Cypress, covering critical user journeys.",
      "Reduced regression testing time by 65% through CI/CD pipeline integration with Jenkins & GitHub Actions.",
      "Mentored 4 junior QA engineers via weekly code reviews and knowledge-sharing sessions.",
      "Implemented API testing framework covering 300+ endpoints using Postman and REST Assured.",
    ],
  },
  {
    id: "exp-2",
    company: "Digital Horizons",
    role: "SQA Engineer",
    dateRange: "Mar 2020 – Dec 2021",
    location: "Karachi, Pakistan",
    bullets: [
      "Executed manual and automated testing for web and mobile applications on iOS and Android.",
      "Built a Selenium-based automation framework from scratch, reducing manual testing effort by 40%.",
      "Performed performance and load testing with JMeter, improving response time by 30%.",
      "Maintained defect leakage rate below 2% across all production releases.",
    ],
  },
  {
    id: "exp-3",
    company: "Nexus Software House",
    role: "Junior QA Analyst",
    dateRange: "Jun 2018 – Feb 2020",
    location: "Islamabad, Pakistan",
    bullets: [
      "Conducted functional, regression, smoke, and sanity testing for e-commerce and fintech apps.",
      "Wrote and executed 500+ manual test cases covering UI, functionality, and cross-browser compatibility.",
      "Participated in Agile ceremonies: sprint planning, daily standups, and retrospectives.",
      "Reported and tracked defects in Bugzilla and JIRA, ensuring timely resolution before release.",
    ],
  },
];

const skillCategories = [
  {
    id: "sk-1",
    category: "Testing",
    skills: [
      "Manual Testing",
      "Exploratory Testing",
      "Regression Testing",
      "UAT",
      "Black Box",
      "White Box",
    ],
  },
  {
    id: "sk-2",
    category: "Automation",
    skills: [
      "Selenium WebDriver",
      "Cypress",
      "Playwright",
      "TestNG",
      "JUnit",
      "PyTest",
      "Appium",
    ],
  },
  {
    id: "sk-3",
    category: "API Testing",
    skills: [
      "Postman",
      "REST Assured",
      "SoapUI",
      "Newman",
      "GraphQL Testing",
    ],
  },
  {
    id: "sk-4",
    category: "Performance",
    skills: ["JMeter", "k6", "Gatling", "BlazeMeter"],
  },
  {
    id: "sk-5",
    category: "Bug Tracking",
    skills: ["JIRA", "Bugzilla", "Azure DevOps", "TestRail", "Zephyr"],
  },
  {
    id: "sk-6",
    category: "CI/CD & DevOps",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Git"],
  },
];

const certifications = [
  {
    id: "cert-1",
    name: "ISTQB Foundation Level (CTFL)",
    issuer: "ISTQB",
    year: "2019",
  },
  {
    id: "cert-2",
    name: "Certified Selenium WebDriver Professional",
    issuer: "Udemy",
    year: "2020",
  },
  {
    id: "cert-3",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
  },
  {
    id: "cert-4",
    name: "Cypress.io Certified Associate",
    issuer: "Cypress.io",
    year: "2023",
  },
  {
    id: "cert-5",
    name: "Google Project Management Certificate",
    issuer: "Coursera",
    year: "2021",
  },
];

const languages = [
  { id: "lang-1", name: "Urdu", level: "Native" },
  { id: "lang-2", name: "English", level: "Professional" },
];

const softSkills = [
  "Analytical Thinking",
  "Attention to Detail",
  "Team Collaboration",
  "Agile / Scrum",
  "Technical Communication",
  "Problem Solving",
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function SectionHeading({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-8 rounded-lg bg-[#e94560]/15 border border-[#e94560]/30 flex items-center justify-center text-[#e94560] flex-shrink-0">
        <Icon size={16} />
      </span>
      <h2 className="text-xl font-bold text-white font-[var(--font-space-grotesk)] tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles injected via a style tag */}
      <style>{`
        @media print {
          nav, footer, .print-hidden { display: none !important; }
          body { background: #fff !important; color: #000 !important; }
          .resume-card { background: #fff !important; border: none !important; box-shadow: none !important; }
          .resume-card * { color: #000 !important; border-color: #ccc !important; }
          .accent-text { color: #e94560 !important; }
          .tag-badge { background: #f3f4f6 !important; border-color: #d1d5db !important; }
        }
      `}</style>

      <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-24">
        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* ---------------------------------------------------------------- */}
          {/* HERO / DOWNLOAD SECTION                                          */}
          {/* ---------------------------------------------------------------- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="pb-8 print-hidden"
          >
            <motion.div variants={fadeInUp} className="mb-3">
              <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
                Curriculum Vitae
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 font-[var(--font-space-grotesk)]"
            >
              {BRAND.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/60 mb-8 font-[var(--font-inter)]"
            >
              SQA Engineer — Test Automation | Quality Strategy | CI/CD Integration
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={handlePrint}
                className="bg-[#e94560] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#e94560]/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] active:scale-95"
              >
                <Download size={18} />
                Download as PDF
              </button>

              <a
                href="https://linkedin.com/in/rao-muhammad-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 border border-white/20 text-white/80 hover:border-[#e94560]/50 hover:text-white transition-all duration-200"
              >
                <ExternalLink size={18} />
                View LinkedIn
              </a>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-sm text-white/40 flex items-center gap-2"
            >
              <Star size={13} className="text-[#e94560]" />
              Tip: Use your browser&apos;s Print → Save as PDF for best results.
            </motion.p>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* RESUME CARD                                                       */}
          {/* ---------------------------------------------------------------- */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="resume-card max-w-4xl mx-auto bg-[#1a1a2e]/30 border border-white/10 rounded-2xl p-8 md:p-12 space-y-10 print:shadow-none print:border-none"
          >
            {/* -------------------------------------------------------------- */}
            {/* A. CONTACT INFO BAR                                             */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 border-b border-white/10"
              >
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#e94560] transition-colors duration-200"
                >
                  <Mail size={14} className="text-[#e94560] flex-shrink-0" />
                  {BRAND.email}
                </a>

                <span className="hidden sm:block w-px h-4 bg-white/20" aria-hidden="true" />

                <span className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin size={14} className="text-[#e94560] flex-shrink-0" />
                  {BRAND.location}
                </span>

                <span className="hidden sm:block w-px h-4 bg-white/20" aria-hidden="true" />

                <a
                  href="https://linkedin.com/in/rao-muhammad-ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#e94560] transition-colors duration-200"
                >
                  <Globe size={14} className="text-[#e94560] flex-shrink-0" />
                  linkedin.com/in/rao-muhammad-ali
                </a>

                <span className="hidden sm:block w-px h-4 bg-white/20" aria-hidden="true" />

                <a
                  href="https://github.com/rao-muhammad-ali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#e94560] transition-colors duration-200"
                >
                  <Code2 size={14} className="text-[#e94560] flex-shrink-0" />
                  github.com/rao-muhammad-ali
                </a>
              </motion.div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* B. PROFESSIONAL SUMMARY                                         */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-lg font-bold text-white mb-3 font-[var(--font-space-grotesk)] border-l-2 border-[#e94560] pl-4">
                Professional Summary
              </h2>
              <p className="text-white/70 leading-relaxed text-sm font-[var(--font-inter)] pl-4">
                Results-driven SQA Engineer with 3+ years of experience in manual and automated testing
                across web, mobile, and API layers. Proven track record of reducing regression cycles by
                up to 65%, identifying critical defects pre-launch, and building scalable test automation
                frameworks. Adept at collaborating with cross-functional teams in Agile environments to
                embed quality at every stage of the SDLC.
              </p>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* C. WORK EXPERIENCE                                              */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionHeading icon={Briefcase} title="Work Experience" />
              </motion.div>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={fadeInLeft}
                    className="relative pl-5 border-l border-white/10 hover:border-[#e94560]/40 transition-colors duration-300"
                  >
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#e94560] ring-4 ring-[#0a0a0f]" />

                    <div className="mb-2">
                      <span className="text-[#e94560] font-semibold text-sm font-[var(--font-space-grotesk)]">
                        {exp.role}
                      </span>
                      <span className="text-white font-bold text-base ml-2 font-[var(--font-space-grotesk)]">
                        @ {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <Calendar size={12} />
                        {exp.dateRange}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/50">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-sm text-white/65 font-[var(--font-inter)]"
                        >
                          <CheckCircle
                            size={13}
                            className="text-[#e94560] flex-shrink-0 mt-0.5"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* D. TECHNICAL SKILLS                                             */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionHeading icon={Code2} title="Technical Skills" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skillCategories.map((cat) => (
                  <motion.div key={cat.id} variants={fadeInUp}>
                    <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 font-[var(--font-space-grotesk)]">
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tag-badge bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-white/80 font-[var(--font-inter)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* E. EDUCATION                                                    */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionHeading icon={GraduationCap} title="Education" />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pl-5 border-l border-white/10"
              >
                <div>
                  <p className="font-bold text-white font-[var(--font-space-grotesk)]">
                    BS Computer Science
                  </p>
                  <p className="text-white/60 text-sm mt-0.5 font-[var(--font-inter)]">
                    University of Engineering &amp; Technology, Lahore
                  </p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                  <span className="flex items-center gap-1.5 text-xs text-white/50">
                    <Calendar size={12} />
                    2014 – 2018
                  </span>
                  <span className="text-xs text-[#e94560] font-semibold">
                    CGPA: 3.4 / 4.0
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* F. CERTIFICATIONS                                               */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionHeading icon={Award} title="Certifications" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={fadeInUp}
                    className="flex items-start justify-between gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#e94560]/30 transition-colors duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white text-sm font-[var(--font-space-grotesk)] leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-white/50 text-xs mt-1 font-[var(--font-inter)]">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-xs font-bold text-[#e94560] bg-[#e94560]/15 border border-[#e94560]/25 rounded-lg px-2.5 py-1">
                      {cert.year}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* -------------------------------------------------------------- */}
            {/* G. LANGUAGES & SOFT SKILLS                                      */}
            {/* -------------------------------------------------------------- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <SectionHeading icon={Star} title="Languages &amp; Soft Skills" />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {/* Languages */}
                <motion.div variants={fadeInUp}>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mb-3 font-[var(--font-space-grotesk)]">
                    Languages
                  </p>
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div
                        key={lang.id}
                        className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2.5"
                      >
                        <span className="text-sm text-white font-medium font-[var(--font-inter)]">
                          {lang.name}
                        </span>
                        <span className="text-xs text-[#e94560] font-semibold">
                          {lang.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div variants={fadeInUp}>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mb-3 font-[var(--font-space-grotesk)]">
                    Soft Skills
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="tag-badge bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm text-white/80 font-[var(--font-inter)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ---------------------------------------------------------------- */}
          {/* BOTTOM CTA (print-hidden)                                         */}
          {/* ---------------------------------------------------------------- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="print-hidden max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1a1a2e]/30 border border-white/10 rounded-2xl p-6"
          >
            <div>
              <p className="text-white font-semibold font-[var(--font-space-grotesk)]">
                Want to work together?
              </p>
              <p className="text-white/50 text-sm mt-0.5 font-[var(--font-inter)]">
                I&apos;m open to freelance and full-time opportunities.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white/80 text-sm font-medium hover:border-[#e94560]/50 hover:text-white transition-all duration-200"
              >
                <Download size={15} />
                Save PDF
              </button>
              <a
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e94560] text-white text-sm font-semibold hover:bg-[#e94560]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(233,69,96,0.4)] active:scale-95"
              >
                <Mail size={15} />
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
