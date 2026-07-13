"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, Search, BookOpen, Rss } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
}

const featuredArticle = {
  title:
    "The Complete Guide to Building a Selenium Automation Framework from Scratch",
  date: "December 15, 2024",
  readTime: "12 min read",
  category: "Automation",
  tags: ["Selenium", "Java", "TestNG", "CI/CD"],
  excerpt:
    "Learn how to architect a production-ready Selenium WebDriver framework with Page Object Model, data-driven testing, and seamless Jenkins integration. This comprehensive guide walks you through every decision from project structure to reporting.",
};

const articles: Article[] = [
  {
    id: "1",
    title: "Cypress vs Playwright: Which Should You Choose in 2024?",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Automation",
    tags: ["Cypress", "Playwright", "Comparison"],
    excerpt:
      "A detailed comparison of two leading end-to-end testing frameworks. We benchmark performance, developer experience, and ecosystem maturity to help you make the right choice for your project.",
  },
  {
    id: "2",
    title: "API Testing Best Practices with Postman and Newman",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    category: "API Testing",
    tags: ["Postman", "Newman", "REST"],
    excerpt:
      "Master API testing with Postman collections, environment variables, and automated Newman runs in your CI pipeline. Includes real-world examples from production APIs.",
  },
  {
    id: "3",
    title: "Writing Effective Bug Reports That Developers Actually Love",
    date: "Oct 22, 2024",
    readTime: "5 min read",
    category: "Manual Testing",
    tags: ["Bug Reports", "JIRA", "Communication"],
    excerpt:
      "The anatomy of a perfect bug report: reproduction steps, environment details, severity classification, and how to communicate defects that get fixed fast.",
  },
  {
    id: "4",
    title: "JMeter Performance Testing: Load Testing Your APIs",
    date: "Oct 5, 2024",
    readTime: "10 min read",
    category: "Performance",
    tags: ["JMeter", "Load Testing", "Performance"],
    excerpt:
      "Step-by-step guide to setting up JMeter for realistic load testing scenarios. Learn thread groups, listeners, assertions, and how to interpret results to find bottlenecks.",
  },
  {
    id: "5",
    title: "Shift-Left Testing: Integrating QA Early in the SDLC",
    date: "Sep 18, 2024",
    readTime: "7 min read",
    category: "Career",
    tags: ["Strategy", "Agile", "SDLC"],
    excerpt:
      "How embedding QA from day one of a sprint reduces defect costs by up to 10x. Practical strategies for collaborating with developers during design and code review phases.",
  },
  {
    id: "6",
    title: "GitHub Actions for QA: Automating Your Test Pipeline",
    date: "Sep 2, 2024",
    readTime: "9 min read",
    category: "Automation",
    tags: ["GitHub Actions", "CI/CD", "DevOps"],
    excerpt:
      "Build a fully automated test pipeline with GitHub Actions that runs your Selenium, Cypress, or Playwright tests on every pull request with Slack notifications and Allure reports.",
  },
];

const ALL_TAGS = ["All", "Automation", "Manual Testing", "API Testing", "Performance", "Career"] as const;
type FilterTag = (typeof ALL_TAGS)[number];

const CATEGORY_STYLES: Record<string, { badge: string; dot: string }> = {
  Automation: {
    badge: "bg-[#e94560]/10 text-[#e94560] border border-[#e94560]/20",
    dot: "bg-[#e94560]",
  },
  "API Testing": {
    badge: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    dot: "bg-yellow-400",
  },
  "Manual Testing": {
    badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dot: "bg-amber-400",
  },
  Performance: {
    badge: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    dot: "bg-violet-400",
  },
  Career: {
    badge: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    dot: "bg-yellow-400",
  },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_STYLES[category] ?? {
      badge: "bg-white/10 text-white/60 border border-white/10",
      dot: "bg-white/60",
    }
  );
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTag>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesFilter =
      activeFilter === "All" || article.category === activeFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      query === "" ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.tags.some((t) => t.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-24">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-[#0f3460]/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-[#e94560]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ── HERO SECTION ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="pt-0 pb-16"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#e94560] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              <Rss size={12} />
              SQA Blog
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 font-[var(--font-space-grotesk)]"
          >
            Insights &amp; Tutorials{" "}
            <span className="text-[#e94560]">for QA Engineers</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mb-8 leading-relaxed"
          >
            Deep dives into test automation, quality strategy, and the tools
            that make software reliable.
          </motion.p>

          {/* Search bar */}
          <motion.div variants={fadeInUp} className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search articles, tags, topics…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 w-full focus:outline-none focus:border-[#e94560]/40 focus:bg-white/8 transition-all duration-200"
            />
          </motion.div>
        </motion.div>

        {/* ── FEATURED ARTICLE SECTION ── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-[#e94560]" />
            <h2 className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
              Featured Article
            </h2>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-white/10 rounded-2xl p-8 hover:border-[#e94560]/30 transition-all duration-300 group"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                {/* Category badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      getCategoryStyle(featuredArticle.category).badge
                    }`}
                  >
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-white/30 uppercase tracking-widest font-semibold">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight font-[var(--font-space-grotesk)] group-hover:text-[#e94560] transition-colors duration-200">
                  {featuredArticle.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/5 text-white/50 border border-white/10"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <div className="w-7 h-7 rounded-full bg-[#e94560]/20 border border-[#e94560]/30 flex items-center justify-center text-[#e94560] text-xs font-bold">
                      R
                    </div>
                    <span className="text-white/60">Rao Muhammad Ali</span>
                    <span className="text-white/20">·</span>
                    <span>SQA Engineer</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {featuredArticle.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e94560] text-white text-sm font-semibold rounded-lg hover:bg-[#e94560]/90 hover:shadow-[0_0_20px_rgba(233,69,96,0.4)] transition-all duration-200 active:scale-95"
                >
                  Read Article
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Decorative side panel */}
              <div className="lg:w-48 flex-shrink-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center">
                  <BookOpen size={48} className="text-[#e94560]/60" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ── ARTICLES GRID SECTION ── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
          >
            <h2 className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
              All Articles
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    activeFilter === tag
                      ? "bg-[#e94560] text-white shadow-[0_0_12px_rgba(233,69,96,0.3)]"
                      : "bg-white/5 text-white/50 border border-white/10 hover:text-white hover:border-white/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredArticles.length === 0 ? (
            <motion.div
              variants={fadeInUp}
              className="text-center py-16 text-white/30"
            >
              <Search size={40} className="mx-auto mb-4 opacity-40" />
              <p className="text-lg">No articles match your search.</p>
              <p className="text-sm mt-1">Try a different keyword or filter.</p>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredArticles.map((article) => {
                const style = getCategoryStyle(article.category);
                return (
                  <motion.article
                    key={article.id}
                    variants={scaleIn}
                    className="bg-[#1a1a2e]/50 border border-white/10 rounded-xl p-6 hover:border-[#e94560]/30 transition-all duration-300 flex flex-col group"
                  >
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          style.badge
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/30">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-3 leading-snug font-[var(--font-space-grotesk)] group-hover:text-[#e94560] transition-colors duration-200 flex-grow-0">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-white/5 text-white/40 border border-white/10"
                        >
                          <Tag size={9} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="flex items-center gap-1.5 text-xs text-white/30">
                        <Calendar size={11} />
                        {article.date}
                      </span>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#e94560] hover:gap-2 transition-all duration-200"
                      >
                        Read More
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}
        </motion.section>

        {/* ── NEWSLETTER SECTION ── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={scaleIn}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] rounded-2xl p-10 text-center border border-white/10"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#e94560] uppercase tracking-widest px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 mb-5">
                <Rss size={12} />
                Newsletter
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-[var(--font-space-grotesk)]">
                Stay Updated on QA Trends
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8 leading-relaxed">
                Get weekly insights on test automation, quality engineering, and
                career growth delivered to your inbox.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#e94560]/40 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-[#e94560] text-white text-sm font-semibold rounded-xl hover:bg-[#e94560]/90 hover:shadow-[0_0_20px_rgba(233,69,96,0.4)] transition-all duration-200 active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/25 text-xs mt-4"
            >
              No spam. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
