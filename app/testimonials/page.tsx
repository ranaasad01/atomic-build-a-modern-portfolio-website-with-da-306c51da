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
    color: "bg-sky-500",
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
      "Rao integrated our entire test suite into GitHub Actions CI/CD pipeline. Every PR now runs 400+ tests automatically. The confidence this gives the team is invaluable and deployment frequency doubled.",
    author: "James Okafor",
    role: "DevOps Engineer",
    company: "CloudBase Inc",
    stars: 5,
    tag: "CI/CD",
    initials: "JO",
    color: "bg-rose-500",
  },
  {
    quote:
      "Exceptional JIRA workflow setup and bug reporting. Rao's defect reports are so detailed that our developers can reproduce and fix issues in record time. He has genuinely improved our whole team's efficiency.",
    author: "Fatima Zahra",
    role: "Scrum Master",
    company: "Agile Works",
    stars: 5,
    tag: "Documentation",
    initials: "FZ",
    color: "bg-teal-500",
  },
];

const stats = [
  { icon: Users, value: "30+", label: "Colleagues & Clients" },
  { icon: Award, value: "5.0", label: "Average Rating" },
  { icon: ThumbsUp, value: "100%", label: "Would Recommend" },
  { icon: Briefcase, value: "6+", label: "Years Vouched For" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0a0a0f] to-[#0a0a0f] pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#e94560]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0f3460]/15 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-sm font-medium mb-6"
          >
            <Quote size={14} />
            What People Say
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] text-white mb-6 leading-tight"
          >
            Trusted by{" "}
            <span className="text-[#e94560]">Teams &amp; Leaders</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Real feedback from colleagues, managers, and clients who have experienced
            the impact of quality-first engineering firsthand.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-y border-white/5">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {(stats ?? []).map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={20} className="text-[#e94560]" />
              </div>
              <div className="text-3xl font-bold text-white font-[var(--font-space-grotesk)] mb-1">
                {stat.value ?? ""}
              </div>
              <div className="text-sm text-white/50">{stat.label ?? ""}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {(featuredTestimonials ?? []).map((t, i) => (
              <motion.div
                key={t.author ?? i}
                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#e94560]/30 transition-all duration-300 group"
              >
                <div className="absolute top-6 right-6 text-[#e94560]/20 group-hover:text-[#e94560]/40 transition-colors duration-300">
                  <Quote size={48} />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={16} className="fill-[#e94560] text-[#e94560]" />
                  ))}
                </div>

                <p className="text-white/80 leading-relaxed mb-8 text-base relative z-10">
                  &ldquo;{t.quote ?? ""}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e94560] to-[#0f3460] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initials ?? ""}
                  </div>
                  <div>
                    <div className="font-semibold text-white font-[var(--font-space-grotesk)]">
                      {t.author ?? ""}
                    </div>
                    <div className="text-sm text-white/50">
                      {t.role ?? ""} &middot; {t.company ?? ""}
                    </div>
                    <div className="text-xs text-[#e94560]/70 mt-0.5">
                      {t.relationship ?? ""}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0f0f1a]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-[var(--font-space-grotesk)] text-white mb-4">
              More Voices
            </h2>
            <p className="text-white/50">
              From automation to leadership &mdash; across every dimension of QA.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {(masonryTestimonials ?? []).map((t, i) => (
              <motion.div
                key={t.author ?? i}
                variants={scaleIn}
                className="break-inside-avoid p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.stars ?? 5)].map((_, si) => (
                      <Star key={si} size={12} className="fill-[#e94560] text-[#e94560]" />
                    ))}
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#e94560]/10 text-[#e94560] border border-[#e94560]/20">
                    {t.tag ?? ""}
                  </span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote ?? ""}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full ${
                      t.color ?? "bg-gray-500"
                    } flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                  >
                    {t.initials ?? ""}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author ?? ""}</div>
                    <div className="text-xs text-white/40">
                      {t.role ?? ""} &middot; {t.company ?? ""}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-[var(--font-space-grotesk)] text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/50 mb-8">
            Join the growing list of teams who trust Rao to deliver quality at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-xl bg-[#e94560] text-white font-semibold hover:bg-[#c73652] transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 rounded-xl border border-white/20 text-white/80 font-semibold hover:border-white/40 hover:text-white transition-all duration-200"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
