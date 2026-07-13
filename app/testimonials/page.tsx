"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Users, Award, ThumbsUp, Briefcase } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, fadeInLeft, fadeInRight } from "@/lib/motion";

const featuredTestimonials = [
  {
    quote:
      "Rao is one of the most thorough QA engineers I have worked with. His automation framework reduced our regression cycle from 3 days to just 4 hours. He has an exceptional ability to think like both a user and a developer, catching edge cases that others miss entirely.",
    author: "Ahmed Hassan",
    role: "CTO",
    company: "TechSolutions Pvt Ltd",
    relationship: "Direct Manager",
    initials: "AH",
  },
  {
    quote:
      "Working with Rao on our fintech platform was a game-changer. He identified 23 critical security vulnerabilities before launch and built a comprehensive API testing suite that gave our entire team confidence in every release. His communication and documentation are world-class.",
    author: "Sarah Mitchell",
    role: "Product Manager",
    company: "Digital Horizons",
    relationship: "Product Collaborator",
    initials: "SM",
  },
];

const masonryTestimonials = [
  {
    quote:
      "Rao built our entire Cypress test suite from scratch in under 3 weeks. The coverage went from 0% to 78% and we have not had a production regression since. Absolutely recommend him for any automation project.",
    author: "Omar Farooq",
    role: "Lead Developer",
    company: "Nexus Software House",
    stars: 5,
    tag: "Automation",
    initials: "OF",
    color: "bg-violet-500",
  },
  {
    quote:
      "His attention to detail in manual testing is unmatched. Rao found UI inconsistencies and accessibility issues that our automated tools completely missed. He thinks about the end user in a way that is rare in QA.",
    author: "Priya Sharma",
    role: "UX Designer",
    company: "CodeCraft",
    stars: 5,
    tag: "Manual Testing",
    initials: "PS",
    color: "bg-emerald-500",
  },
  {
    quote:
      "Rao mentored our junior QA team and transformed how we approach testing. He introduced shift-left practices and within two sprints our defect escape rate dropped by 60%. A true quality champion.",
    author: "Bilal Chaudhry",
    role: "Engineering Manager",
    company: "TechSolutions Pvt Ltd",
    stars: 5,
    tag: "Leadership",
    initials: "BC",
    color: "bg-amber-500",
  },
  {
    quote:
      "The JMeter performance testing Rao conducted revealed bottlenecks we had no idea existed. His detailed report with actionable recommendations helped us improve API response times by 40% before our product launch.",
    author: "Lisa Chen",
    role: "Backend Engineer",
    company: "Digital Horizons",
    stars: 5,
    tag: "Performance",
    initials: "LC",
    color: "bg-sky-500",
  },
  {
    quote:
      "Rao integrated our entire test suite into GitHub Actions CI/CD pipeline. Every PR now runs 400+ tests automatically. The quality gate he set up has prevented at least a dozen production incidents.",
    author: "Tariq Mahmood",
    role: "DevOps Engineer",
    company: "Nexus Software House",
    stars: 5,
    tag: "CI/CD",
    initials: "TM",
    color: "bg-pink-500",
  },
  {
    quote:
      "His JIRA workflow and bug reporting process is something I have adopted across all my projects. Clear, reproducible, prioritized — developers actually look forward to his bug reports because they are so actionable.",
    author: "Fatima Zahra",
    role: "Scrum Master",
    company: "CodeCraft",
    stars: 4,
    tag: "Process",
    initials: "FZ",
    color: "bg-indigo-500",
  },
  {
    quote:
      "Rao delivered a complete test strategy document for our healthcare portal that impressed our compliance auditors. His understanding of regulatory requirements and risk-based testing is exceptional.",
    author: "Dr. Kamran Ali",
    role: "Project Director",
    company: "HealthTech Solutions",
    stars: 5,
    tag: "Strategy",
    initials: "KA",
    color: "bg-teal-500",
  },
  {
    quote:
      "I hired Rao for a 3-month contract and extended it to 18 months. His work ethic, technical depth, and collaborative attitude make him an invaluable team member. He is the QA engineer every team needs.",
    author: "James O Brien",
    role: "VP Engineering",
    company: "Global SaaS Co.",
    stars: 5,
    tag: "Contract",
    initials: "JO",
    color: "bg-orange-500",
  },
];

const stats = [
  { label: "15+ Recommendations", icon: ThumbsUp },
  { label: "5-Star Average", icon: Star },
  { label: "100% Would Rehire", icon: Award },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-[#0f3460]/30 rounded-full blur-3xl" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#e94560] uppercase tracking-widest px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
                <Users size={14} />
                Client Testimonials
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 font-[var(--font-space-grotesk)]"
            >
              What People Say{" "}
              <span className="text-[#e94560]">About My Work</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Recommendations from colleagues, clients, and managers who have experienced
              the impact of quality-first engineering.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a1a2e]/80 border border-white/10 text-sm font-medium text-white/80"
                >
                  <stat.icon size={15} className="text-[#e94560]" />
                  {stat.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIALS ── */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space-grotesk)]">
              Featured{" "}
              <span className="text-[#e94560]">Recommendations</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuredTestimonials.map((t) => (
              <motion.div
                key={t.author}
                variants={scaleIn}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] border border-[#e94560]/20 rounded-2xl p-8 flex flex-col gap-6"
              >
                {/* Large quote icon */}
                <div className="w-12 h-12 rounded-xl bg-[#e94560]/20 flex items-center justify-center flex-shrink-0">
                  <Quote size={24} className="text-[#e94560]" />
                </div>

                {/* Quote text */}
                <p className="text-white/80 text-base leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stars */}
                <StarRating count={5} />

                {/* Author */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#e94560]/20 border border-[#e94560]/30 flex items-center justify-center text-[#e94560] font-bold text-sm flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.author}</p>
                    <p className="text-white/50 text-xs">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                  <span className="ml-auto text-xs px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] font-medium whitespace-nowrap">
                    {t.relationship}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MASONRY GRID ── */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-space-grotesk)]">
              All{" "}
              <span className="text-[#e94560]">Recommendations</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
          >
            {masonryTestimonials.map((t) => (
              <motion.div
                key={t.author}
                variants={fadeInUp}
                className="bg-[#1a1a2e]/60 border border-white/10 rounded-xl p-6 mb-6 break-inside-avoid hover:border-[#e94560]/30 transition-all duration-300 group"
              >
                {/* Small quote icon */}
                <div className="w-8 h-8 rounded-lg bg-[#e94560]/10 flex items-center justify-center mb-4">
                  <Quote size={16} className="text-[#e94560]" />
                </div>

                {/* Quote text */}
                <p className="text-white/70 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Stars */}
                <div className="mb-4">
                  <StarRating count={t.stars} />
                </div>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm truncate">{t.author}</p>
                    <p className="text-white/40 text-xs truncate">
                      {t.role} &middot; {t.company}
                    </p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 font-medium whitespace-nowrap group-hover:border-[#e94560]/20 group-hover:text-[#e94560] transition-colors duration-300">
                    {t.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#0f3460] rounded-2xl p-10 text-center border border-white/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#e94560]/20 border border-[#e94560]/30 flex items-center justify-center mx-auto mb-6">
              <Briefcase size={28} className="text-[#e94560]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[var(--font-space-grotesk)]">
              Ready to Work Together?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join the growing list of teams who ship with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-[#e94560] text-white font-semibold text-sm hover:bg-[#e94560]/90 transition-all duration-200 hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] active:scale-95"
              >
                Start a Project
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200 active:scale-95"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
