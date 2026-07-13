"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Download, CheckCircle } from 'lucide-react';
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "@/lib/motion";
import { BRAND } from "@/lib/data";

const quickFacts = [
  {
    icon: MapPin,
    labelKey: "about.facts.location",
    value: "Pakistan",
  },
  {
    icon: Calendar,
    labelKey: "about.facts.availability",
    value: "Open to Opportunities",
  },
  {
    icon: Briefcase,
    labelKey: "about.facts.experience",
    value: "3+ Years in SQA",
  },
  {
    icon: CheckCircle,
    labelKey: "about.facts.status",
    value: "Available for Freelance",
  },
];

const skillCategories = [
  {
    category: "Manual Testing",
    categoryKey: "about.skills.manual",
    color: "from-[#e94560]/20 to-[#e94560]/5",
    border: "border-[#e94560]/30",
    accent: "text-[#e94560]",
    skills: [
      "Test Case Design",
      "Exploratory Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "UAT",
      "Black Box Testing",
      "White Box Testing",
    ],
  },
  {
    category: "Automation",
    categoryKey: "about.skills.automation",
    color: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/30",
    accent: "text-violet-400",
    skills: [
      "Selenium WebDriver",
      "Cypress",
      "Playwright",
      "TestNG",
      "JUnit",
      "PyTest",
      "Robot Framework",
      "Appium",
    ],
  },
  {
    category: "Bug Tracking",
    categoryKey: "about.skills.bugTracking",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    accent: "text-amber-400",
    skills: ["JIRA", "Bugzilla", "Trello", "Azure DevOps", "Linear", "Notion"],
  },
  {
    category: "API Testing",
    categoryKey: "about.skills.api",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
    skills: [
      "Postman",
      "REST Assured",
      "SoapUI",
      "Swagger",
      "GraphQL Testing",
      "Newman",
    ],
  },
  {
    category: "CI/CD & DevOps",
    categoryKey: "about.skills.cicd",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/30",
    accent: "text-yellow-400",
    skills: [
      "Jenkins",
      "GitHub Actions",
      "GitLab CI",
      "Docker",
      "Git",
      "CircleCI",
    ],
  },
  {
    category: "Performance Testing",
    categoryKey: "about.skills.performance",
    color: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/30",
    accent: "text-pink-400",
    skills: ["JMeter", "k6", "Gatling", "LoadRunner", "BlazeMeter"],
  },
];

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-24">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Page header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
            {t("about.eyebrow")}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            {t("about.heading")}
          </h1>
        </motion.div>

        {/* Editorial split layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-start"
        >
          {/* Left — profile image with decorative accents */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative">
              {/* Decorative accent lines */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#e94560]/50 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#e94560]/50 rounded-br-xl" />

              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/20 to-violet-500/10 rounded-2xl blur-2xl scale-95" />

              {/* Profile image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQFc36FYl8XA2w/profile-displayphoto-scale_200_200/B4DZ1shF1kLMAY-/0/1775642116635?e=2147483647&v=beta&t=21-_PU2ChGTEAYeBEIdV3dI4TieXywsvZYnQCVuw6KY"
                  alt={t("about.imageAlt")}
                  className="w-full aspect-[4/5] object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background =
                        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
                      parent.style.minHeight = "480px";
                      parent.style.display = "flex";
                      parent.style.alignItems = "center";
                      parent.style.justifyContent = "center";
                      const placeholder = document.createElement("div");
                      placeholder.style.cssText =
                        "width:96px;height:96px;border-radius:50%;background:rgba(233,69,96,0.2);border:2px solid rgba(233,69,96,0.4);display:flex;align-items:center;justify-content:center;font-size:2.5rem;font-weight:700;color:#e94560;font-family:var(--font-space-grotesk)";
                      placeholder.textContent = "RMA";
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />

                {/* Name badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                    <p className="text-white font-semibold text-sm font-[var(--font-space-grotesk)]">
                      {BRAND.name}
                    </p>
                    <p className="text-[#e94560] text-xs font-medium mt-0.5">
                      {BRAND.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="absolute -right-6 top-12 bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <p className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
                  3+
                </p>
                <p className="text-xs text-white/50 mt-0.5">{t("about.statYears")}</p>
              </motion.div>

              {/* Floating bug badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="absolute -left-6 bottom-20 bg-[#0a0a0f] border border-white/10 rounded-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <p className="text-2xl font-bold text-[#e94560] font-[var(--font-space-grotesk)]">
                  500+
                </p>
                <p className="text-xs text-white/50 mt-0.5">{t("about.statBugs")}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio + quick facts + resume */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-8">
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight font-[var(--font-space-grotesk)]">
                {t("about.bioHeading")}
              </h2>
              <div className="space-y-4 text-white/65 leading-relaxed text-[15px]">
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
                <p>{t("about.bio3")}</p>
              </div>
            </div>

            {/* Quick Facts */}
            <div>
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
                {t("about.quickFactsHeading")}
              </h3>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                {quickFacts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <motion.li
                      key={fact.labelKey}
                      variants={fadeInUp}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/8 hover:border-[#e94560]/20 hover:bg-[#e94560]/5 transition-all duration-200"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#e94560]" />
                      </span>
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-white/40 text-sm flex-shrink-0">
                          {t(fact.labelKey)}
                        </span>
                        <span className="text-white/10 flex-shrink-0">·</span>
                        <span className="text-white/80 text-sm font-medium truncate">
                          {fact.value}
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>

            {/* Resume download */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume-rao-muhammad-ali.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e94560] text-white text-sm font-semibold rounded-xl hover:bg-[#e94560]/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] active:scale-95 group"
              >
                <Download size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
                {t("about.downloadResume")}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white/80 text-sm font-semibold rounded-xl border border-white/10 hover:border-[#e94560]/30 hover:text-white hover:bg-[#e94560]/10 transition-all duration-200 active:scale-95"
              >
                {t("about.getInTouch")}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills matrix */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mb-10">
            <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              {t("about.skillsEyebrow")}
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight font-[var(--font-space-grotesk)]">
              {t("about.skillsHeading")}
            </h2>
            <p className="text-white/50 mt-2 max-w-xl text-sm leading-relaxed">
              {t("about.skillsSubheading")}
            </p>
          </div>

          {/* Asymmetric bento grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          >
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.category}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-5 backdrop-blur-sm ${
                  idx === 0 ? "md:col-span-2 xl:col-span-1" : ""
                } ${idx === 3 ? "xl:col-span-2" : ""}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-2 h-2 rounded-full bg-current ${cat.accent}`}
                  />
                  <h3
                    className={`text-xs font-bold uppercase tracking-widest ${cat.accent}`}
                  >
                    {t(cat.categoryKey)}
                  </h3>
                </div>

                {/* Tag cloud */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-3 py-1.5 text-xs font-medium text-white/75 bg-white/5 border border-white/10 rounded-full hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Values / approach strip */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              numberKey: "about.value1Number",
              titleKey: "about.value1Title",
              descKey: "about.value1Desc",
            },
            {
              numberKey: "about.value2Number",
              titleKey: "about.value2Title",
              descKey: "about.value2Desc",
            },
            {
              numberKey: "about.value3Number",
              titleKey: "about.value3Title",
              descKey: "about.value3Desc",
            },
          ].map((v) => (
            <motion.div
              key={v.numberKey}
              variants={fadeInUp}
              className="relative p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-[#e94560]/20 hover:bg-[#e94560]/5 transition-all duration-300 group"
            >
              <p className="text-4xl font-bold text-[#e94560]/30 font-[var(--font-space-grotesk)] mb-3 group-hover:text-[#e94560]/50 transition-colors duration-300">
                {t(v.numberKey)}
              </p>
              <h4 className="text-white font-semibold text-sm mb-2">
                {t(v.titleKey)}
              </h4>
              <p className="text-white/45 text-xs leading-relaxed">
                {t(v.descKey)}
              </p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}