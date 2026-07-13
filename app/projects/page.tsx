"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Code2 as Github, ExternalLink, Search } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { useTranslations } from "next-intl";

interface Project {
  id: string;
  name: string;
  description: string;
  category: "Automation" | "Manual" | "Web";
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: "Completed" | "In Progress" | "Maintained";
}

const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Test Automation Suite",
    description:
      "A comprehensive Selenium-based automation framework for an e-commerce platform. Covers end-to-end checkout flows, cart management, user authentication, and payment gateway validation with 200+ test cases.",
    category: "Automation",
    techStack: ["Selenium", "Java", "TestNG", "Maven", "Allure"],
    githubUrl: "https://github.com/rao-muhammad-ali/ecommerce-automation",
    featured: true,
    status: "Completed",
  },
  {
    id: "2",
    name: "API Testing Framework",
    description:
      "A robust REST API testing framework built with RestAssured and Postman. Validates endpoints, response schemas, authentication flows, and performance benchmarks for a SaaS product with 150+ endpoints.",
    category: "Automation",
    techStack: ["RestAssured", "Java", "Postman", "Newman", "Jenkins"],
    githubUrl: "https://github.com/rao-muhammad-ali/api-testing-framework",
    liveUrl: "https://rao-muhammad-ali.github.io/api-testing-framework",
    featured: true,
    status: "Maintained",
  },
  {
    id: "3",
    name: "Banking App Manual Test Plan",
    description:
      "Detailed manual test plan and execution report for a mobile banking application. Covers functional, regression, exploratory, and UAT testing across iOS and Android platforms with 500+ test cases documented.",
    category: "Manual",
    techStack: ["JIRA", "TestRail", "Confluence", "Zephyr", "Postman"],
    githubUrl: "https://github.com/rao-muhammad-ali/banking-test-plan",
    featured: false,
    status: "Completed",
  },
  {
    id: "4",
    name: "Cypress Web Automation",
    description:
      "Modern end-to-end testing suite using Cypress for a React-based SaaS dashboard. Includes component testing, visual regression, and CI/CD integration with GitHub Actions for automated test runs on every PR.",
    category: "Automation",
    techStack: ["Cypress", "JavaScript", "GitHub Actions", "Percy", "Mocha"],
    githubUrl: "https://github.com/rao-muhammad-ali/cypress-web-automation",
    liveUrl: "https://rao-muhammad-ali.github.io/cypress-web-automation",
    featured: true,
    status: "In Progress",
  },
  {
    id: "5",
    name: "Healthcare Portal QA Documentation",
    description:
      "Complete QA documentation suite for a healthcare patient portal. Includes test strategy, risk assessment, defect reports, and compliance checklists aligned with HIPAA standards and accessibility guidelines.",
    category: "Manual",
    techStack: ["TestRail", "JIRA", "Confluence", "BrowserStack", "Axe"],
    githubUrl: "https://github.com/rao-muhammad-ali/healthcare-qa-docs",
    featured: false,
    status: "Completed",
  },
  {
    id: "6",
    name: "QA Portfolio Website",
    description:
      "A personal portfolio website built to showcase SQA projects, skills, and experience. Developed with Next.js and TypeScript, featuring dark mode, smooth animations, and a fully responsive layout.",
    category: "Web",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rao-muhammad-ali/portfolio",
    liveUrl: "https://rao-muhammad-ali.vercel.app",
    featured: false,
    status: "Maintained",
  },
  {
    id: "7",
    name: "Performance Testing with JMeter",
    description:
      "Load and stress testing project for a high-traffic news platform. Simulates up to 10,000 concurrent users, identifies bottlenecks, and generates detailed performance reports with actionable recommendations.",
    category: "Automation",
    techStack: ["JMeter", "Grafana", "InfluxDB", "Blazemeter", "Linux"],
    githubUrl: "https://github.com/rao-muhammad-ali/jmeter-performance",
    featured: false,
    status: "Completed",
  },
  {
    id: "8",
    name: "Mobile App Testing Suite",
    description:
      "Appium-based mobile automation framework for a cross-platform fitness app. Covers native UI interactions, device compatibility, offline mode, and push notification testing across 20+ device configurations.",
    category: "Automation",
    techStack: ["Appium", "Python", "pytest", "BrowserStack", "Allure"],
    githubUrl: "https://github.com/rao-muhammad-ali/mobile-testing-suite",
    featured: true,
    status: "Completed",
  },
  {
    id: "9",
    name: "Bug Tracker Dashboard",
    description:
      "A lightweight web-based bug tracking dashboard built for small QA teams. Features defect logging, priority tagging, status tracking, and basic analytics to monitor test cycle health in real time.",
    category: "Web",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    githubUrl: "https://github.com/rao-muhammad-ali/bug-tracker",
    liveUrl: "https://bug-tracker-rma.vercel.app",
    featured: false,
    status: "Maintained",
  },
];

type FilterCategory = "All" | "Automation" | "Manual" | "Web";

const FILTERS: FilterCategory[] = ["All", "Automation", "Manual", "Web"];

const STATUS_COLORS: Record<Project["status"], string> = {
  Completed: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Maintained: "bg-blue-500/15 text-blue-400 border-blue-500/20",
};

const CATEGORY_COLORS: Record<Project["category"], string> = {
  Automation: "bg-[#e94560]/15 text-[#e94560] border-[#e94560]/20",
  Manual: "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Web: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.category === activeFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      query === "" ||
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e94560]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Page Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-xs font-semibold tracking-widest uppercase">
              {t("projects.eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight text-balance mb-4 font-[var(--font-space-grotesk)]"
          >
            {t("projects.heading.part1")}{" "}
            <span className="text-[#e94560]">{t("projects.heading.accent")}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg leading-relaxed max-w-2xl text-pretty"
          >
            {t("projects.subheading")}
          </motion.p>
        </motion.div>

        {/* Filter + Search Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-white/5 border border-white/10 w-fit">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeFilter === filter
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-lg bg-[#e94560]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{t(`projects.filter.${filter.toLowerCase()}`)}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("projects.searchPlaceholder")}
              className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#e94560]/40 focus:bg-white/8 transition-all duration-200"
            />
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          key={`${activeFilter}-${searchQuery}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/30 text-sm mb-8"
        >
          {t("projects.resultCount", { count: filteredProjects.length })}
        </motion.p>

        <LayoutGroup>
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6"
              >
                {t("projects.featured")}
              </motion.h2>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} featured />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.section>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <motion.section
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {featuredProjects.length > 0 && (
                <motion.h2
                  variants={fadeInUp}
                  className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-6"
                >
                  {t("projects.allProjects")}
                </motion.h2>
              )}

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {regularProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.section>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Search size={24} className="text-white/20" />
              </div>
              <h3 className="text-white/60 font-semibold mb-2">
                {t("projects.emptyTitle")}
              </h3>
              <p className="text-white/30 text-sm max-w-xs">
                {t("projects.emptyDesc")}
              </p>
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-4 py-2 text-sm text-[#e94560] border border-[#e94560]/30 rounded-lg hover:bg-[#e94560]/10 transition-all duration-200"
              >
                {t("projects.clearFilters")}
              </button>
            </motion.div>
          )}
        </LayoutGroup>
      </div>
    </main>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const t = useTranslations();

  return (
    <motion.article
      layout
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/8 overflow-hidden transition-all duration-300 hover:border-[#e94560]/25 hover:bg-white/[0.05] hover:shadow-[0_8px_32px_rgba(233,69,96,0.1)] ${
        featured ? "p-7" : "p-6"
      }`}
    >
      {/* Top row: category + status */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${CATEGORY_COLORS[project.category]}`}
        >
          {project.category}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      {/* Project name */}
      <h3
        className={`font-bold text-white group-hover:text-[#e94560] transition-colors duration-200 mb-3 font-[var(--font-space-grotesk)] leading-snug ${
          featured ? "text-xl" : "text-lg"
        }`}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className={`text-white/50 leading-relaxed mb-5 flex-1 ${
          featured ? "text-sm" : "text-sm"
        }`}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 text-xs font-medium hover:text-white/80 hover:border-white/20 transition-colors duration-150"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("projects.githubLabel", { name: project.name })}
          className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 group/link"
        >
          <Github
            size={16}
            className="group-hover/link:text-[#e94560] transition-colors duration-200"
          />
          <span>{t("projects.viewCode")}</span>
        </a>

        {project.liveUrl && (
          <>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("projects.liveLabel", { name: project.name })}
              className="flex items-center gap-2 text-sm text-white/40 hover:text-[#e94560] transition-colors duration-200 group/live"
            >
              <ExternalLink size={16} />
              <span>{t("projects.liveDemo")}</span>
            </a>
          </>
        )}
      </div>

      {/* Featured glow accent */}
      {featured && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e94560]/5 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </motion.article>
  );
}