"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, BookOpen, Briefcase, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/motion";

const workHistory = [
  {
    id: "1",
    company: "TechSolutions Pvt Ltd",
    role: "Senior SQA Engineer",
    location: "Lahore, Pakistan",
    dateRange: "Jan 2022 – Present",
    type: "Full-time",
    responsibilities: [
      "Led end-to-end quality assurance for a SaaS platform serving 50,000+ active users across 12 countries.",
      "Designed and maintained a comprehensive test suite of 1,200+ automated test cases using Selenium and Cypress.",
      "Reduced regression testing time by 65% through CI/CD pipeline integration with Jenkins and GitHub Actions.",
      "Mentored a team of 4 junior QA engineers, conducting weekly code reviews and knowledge-sharing sessions.",
      "Collaborated with product and development teams to define acceptance criteria and shift-left testing strategies.",
      "Implemented API testing frameworks using Postman and RestAssured, covering 300+ endpoints.",
    ],
  },
  {
    id: "2",
    company: "Digital Horizons",
    role: "SQA Engineer",
    location: "Karachi, Pakistan",
    dateRange: "Mar 2020 – Dec 2021",
    type: "Full-time",
    responsibilities: [
      "Executed manual and automated testing for web and mobile applications across iOS and Android platforms.",
      "Built a Selenium-based automation framework from scratch, reducing manual testing effort by 40%.",
      "Performed performance and load testing using JMeter, identifying bottlenecks that improved response time by 30%.",
      "Managed bug lifecycle in Jira, maintaining a defect leakage rate below 2% across all production releases.",
      "Developed detailed test plans, test cases, and traceability matrices aligned with business requirements.",
    ],
  },
  {
    id: "3",
    company: "Nexus Software House",
    role: "Junior QA Analyst",
    location: "Islamabad, Pakistan",
    dateRange: "Jun 2018 – Feb 2020",
    type: "Full-time",
    responsibilities: [
      "Conducted functional, regression, smoke, and sanity testing for e-commerce and fintech web applications.",
      "Wrote and executed 500+ manual test cases covering UI, functionality, and cross-browser compatibility.",
      "Participated in Agile ceremonies including sprint planning, daily standups, and retrospectives.",
      "Reported and tracked defects using Bugzilla and Jira, ensuring timely resolution before release deadlines.",
      "Assisted in UAT sessions with clients, gathering feedback and translating it into actionable test scenarios.",
    ],
  },
  {
    id: "4",
    company: "CodeCraft Internship Program",
    role: "QA Intern",
    location: "Lahore, Pakistan",
    dateRange: "Jan 2018 – May 2018",
    type: "Internship",
    responsibilities: [
      "Assisted senior QA engineers in manual testing of web applications and internal tools.",
      "Learned foundational concepts of SDLC, STLC, and Agile methodologies.",
      "Documented test cases and reported bugs under supervision, gaining hands-on industry experience.",
    ],
  },
];

const certifications = [
  {
    id: "c1",
    name: "ISTQB Certified Tester Foundation Level",
    issuer: "ISTQB",
    date: "March 2021",
    category: "Testing",
    color: "#e94560",
  },
  {
    id: "c2",
    name: "Certified Agile Tester (CAT)",
    issuer: "iSQI",
    date: "November 2021",
    category: "Agile",
    color: "#7c3aed",
  },
  {
    id: "c3",
    name: "Selenium WebDriver with Java",
    issuer: "Udemy",
    date: "June 2020",
    category: "Automation",
    color: "#0ea5e9",
  },
  {
    id: "c4",
    name: "API Testing with Postman",
    issuer: "Postman Academy",
    date: "February 2022",
    category: "API Testing",
    color: "#f59e0b",
  },
  {
    id: "c5",
    name: "Cypress End-to-End Testing",
    issuer: "Test Automation University",
    date: "August 2022",
    category: "Automation",
    color: "#10b981",
  },
  {
    id: "c6",
    name: "Performance Testing with JMeter",
    issuer: "BlazeMeter University",
    date: "May 2023",
    category: "Performance",
    color: "#f97316",
  },
];

const education = [
  {
    id: "e1",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the Punjab",
    location: "Lahore, Pakistan",
    dateRange: "2014 – 2018",
    grade: "CGPA: 3.6 / 4.0",
    highlights: [
      "Specialized in Software Engineering and Quality Assurance methodologies.",
      "Final year project: Automated Testing Framework for Web Applications.",
      "Dean's List recipient for three consecutive semesters.",
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Tested", value: "40+" },
  { label: "Test Cases Written", value: "2K+" },
  { label: "Bugs Reported", value: "5K+" },
];

export default function ExperiencePage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pt-24 pb-24">
      {/* Background texture */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-sm font-medium mb-6">
            <Briefcase size={14} />
            <span>{t("experience.badge")}</span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 font-[var(--font-space-grotesk)]"
          >
            {t("experience.title")}
            <span className="text-[#e94560]"> {t("experience.titleAccent")}</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("experience.subtitle")}
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              whileHover={{ scale: 1.04 }}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 text-center hover:border-[#e94560]/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#e94560] font-[var(--font-space-grotesk)] mb-1">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Work History Timeline */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#e94560]/15 border border-[#e94560]/25 flex items-center justify-center">
              <Briefcase size={18} className="text-[#e94560]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
                {t("experience.workHistory")}
              </h2>
              <p className="text-white/40 text-sm">{t("experience.workHistorySubtitle")}</p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#e94560]/60 via-[#e94560]/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {workHistory.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="relative md:pl-20"
                >
                  {/* Glowing dot */}
                  <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0a0a0f] border-2 border-[#e94560] flex items-center justify-center shadow-[0_0_16px_rgba(233,69,96,0.5)]">
                      <div className="w-3 h-3 rounded-full bg-[#e94560]" />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-[#e94560]/25 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white font-[var(--font-space-grotesk)]">
                            {job.role}
                          </h3>
                          <span className="px-2 py-0.5 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-xs font-medium">
                            {job.type}
                          </span>
                        </div>
                        <p className="text-[#e94560] font-semibold text-base">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                        <div className="flex items-center gap-1.5 text-white/40 text-sm">
                          <Calendar size={13} />
                          <span>{job.dateRange}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/40 text-sm">
                          <MapPin size={13} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                          <CheckCircle size={14} className="text-[#e94560] mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#e94560]/15 border border-[#e94560]/25 flex items-center justify-center">
              <Award size={18} className="text-[#e94560]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
                {t("experience.certifications")}
              </h2>
              <p className="text-white/40 text-sm">{t("experience.certificationsSubtitle")}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.25 }}
                className="group bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)] flex items-start gap-5"
              >
                {/* Issuer logo placeholder */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white font-bold text-sm font-[var(--font-space-grotesk)]"
                  style={{ backgroundColor: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                >
                  <span style={{ color: cert.color }}>
                    {cert.issuer.charAt(0)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-white/90 transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}30` }}
                    >
                      {cert.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/30 text-xs">
                      <Calendar size={11} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <Award size={16} className="text-white/20 group-hover:text-[#e94560]/50 transition-colors shrink-0 mt-0.5" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-[#e94560]/15 border border-[#e94560]/25 flex items-center justify-center">
              <BookOpen size={18} className="text-[#e94560]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
                {t("experience.education")}
              </h2>
              <p className="text-white/40 text-sm">{t("experience.educationSubtitle")}</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-[#e94560]/25 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-[var(--font-space-grotesk)] mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[#e94560] font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                      <Calendar size={13} />
                      <span>{edu.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-sm">
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-xs font-semibold">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                      <CheckCircle size={14} className="text-[#e94560] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}