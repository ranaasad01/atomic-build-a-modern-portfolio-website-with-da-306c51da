"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Activity, Shield, Zap, FileText, Users, CheckCircle, ArrowRight, Clock, Target, Layers } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  fadeInLeft,
  fadeInRight,
} from "@/lib/motion";
import { BRAND } from "@/lib/data";

const services = [
  {
    icon: Search,
    color: "bg-[#e94560]/10 text-[#e94560]",
    name: "Test Strategy & Planning",
    description:
      "Comprehensive QA strategy tailored to your product, team, and release cadence.",
    deliverables: [
      "Test plan documentation",
      "Risk-based test prioritization",
      "Coverage matrix & traceability",
      "QA process audit & recommendations",
    ],
  },
  {
    icon: Activity,
    color: "bg-violet-500/10 text-violet-400",
    name: "Test Automation Setup",
    description:
      "Build scalable automation frameworks from scratch or modernize your existing suite.",
    deliverables: [
      "Framework architecture design",
      "Selenium / Cypress / Playwright",
      "Page Object Model implementation",
      "CI/CD pipeline integration",
    ],
  },
  {
    icon: Shield,
    color: "bg-yellow-500/10 text-yellow-400",
    name: "API & Integration Testing",
    description:
      "End-to-end API validation ensuring your backend contracts are reliable and secure.",
    deliverables: [
      "REST & GraphQL API testing",
      "Postman collection development",
      "Contract testing with Pact",
      "Security vulnerability scanning",
    ],
  },
  {
    icon: Zap,
    color: "bg-amber-500/10 text-amber-400",
    name: "Performance Testing",
    description:
      "Identify bottlenecks before they impact real users with realistic load scenarios.",
    deliverables: [
      "JMeter / k6 test scripts",
      "Load, stress & spike testing",
      "Performance baseline reports",
      "Optimization recommendations",
    ],
  },
  {
    icon: FileText,
    color: "bg-yellow-500/10 text-yellow-400",
    name: "QA Documentation",
    description:
      "Professional test documentation that gives stakeholders full visibility into quality.",
    deliverables: [
      "Test case library creation",
      "Bug report templates & workflows",
      "Release quality reports",
      "Compliance documentation",
    ],
  },
  {
    icon: Users,
    color: "bg-pink-500/10 text-pink-400",
    name: "QA Team Mentoring",
    description:
      "Upskill your QA team with hands-on coaching, code reviews, and best practices.",
    deliverables: [
      "1-on-1 coaching sessions",
      "Automation skill workshops",
      "Code review & feedback",
      "Testing standards & guidelines",
    ],
  },
];

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$500",
    period: "/project",
    description: "Perfect for small projects and startups needing QA foundations.",
    features: [
      "Up to 50 test cases",
      "Manual testing only",
      "Bug report & summary",
      "Email support",
      "1-week turnaround",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,500",
    period: "/project",
    description: "Comprehensive QA for growing products with automation needs.",
    features: [
      "Up to 200 test cases",
      "Manual + automation testing",
      "API testing included",
      "CI/CD integration",
      "Detailed QA report",
      "Priority support",
      "2-week delivery",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description:
      "Full-scale QA partnership for complex, high-traffic applications.",
    features: [
      "Unlimited test cases",
      "Full automation suite",
      "Performance testing",
      "Security testing",
      "Ongoing maintenance",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Me",
    highlighted: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your project, goals, and current QA challenges to understand exactly what you need.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description:
      "I deliver a tailored test plan and project scope with clear timelines and deliverables.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Testing begins with daily or weekly progress updates so you're always in the loop.",
  },
  {
    number: "04",
    title: "Delivery & Handoff",
    description:
      "Final report, documentation, and knowledge transfer so your team can maintain quality going forward.",
  },
];

const trustBadges = [
  { icon: Clock, label: "3+ Years Experience" },
  { icon: Target, label: "20+ Projects Delivered" },
  { icon: CheckCircle, label: "Satisfaction Guaranteed" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      {/* Ambient background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-[#0f3460]/20 rounded-full blur-3xl" />
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
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#e94560] uppercase tracking-widest px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
                <Layers size={14} />
                QA Consulting Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 font-[var(--font-space-grotesk)]"
            >
              Quality Assurance{" "}
              <span className="text-[#e94560] block md:inline">
                That Scales With You
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              From test strategy to full automation setup — I help teams ship
              software they are proud of. Tailored QA solutions for startups,
              scale-ups, and enterprises.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
                >
                  <badge.icon size={15} className="text-[#e94560]" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-[var(--font-space-grotesk)]">
              What I Offer
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                variants={scaleIn}
                className="bg-[#1a1a2e]/50 border border-white/10 rounded-xl p-6 hover:border-[#e94560]/30 hover:bg-[#1a1a2e]/80 transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.color}`}
                >
                  <service.icon size={22} />
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg text-white mb-2 font-[var(--font-space-grotesk)]">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <CheckCircle
                        size={14}
                        className="text-[#e94560] mt-0.5 shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 font-[var(--font-space-grotesk)]">
              Transparent Pricing
            </h2>
            <p className="text-white/55 text-base max-w-xl mx-auto">
              Flexible engagement models to fit your needs and budget.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pricingTiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                className={`relative bg-[#1a1a2e]/50 border rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  tier.highlighted
                    ? "border-[#e94560]/50 shadow-[0_0_40px_rgba(233,69,96,0.12)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Most Popular badge */}
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#e94560] text-white text-xs font-semibold tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-white/40 text-sm mb-1">{tier.period}</span>
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <CheckCircle size={15} className="text-[#e94560] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    tier.highlighted
                      ? "bg-[#e94560] text-white hover:bg-[#e94560]/90 hover:shadow-[0_0_20px_rgba(233,69,96,0.4)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {tier.cta === "Most Popular" ? "Get Started" : tier.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-[var(--font-space-grotesk)]">
              How We Work Together
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative bg-[#1a1a2e]/50 border border-white/10 rounded-xl p-6 hover:border-[#e94560]/20 transition-all duration-300"
              >
                {/* Connector line (desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-px bg-gradient-to-r from-[#e94560]/40 to-transparent z-10" />
                )}

                {/* Step number circle */}
                <div className="w-10 h-10 rounded-full bg-[#e94560]/10 border border-[#e94560]/30 flex items-center justify-center mb-4">
                  <span className="text-[#e94560] text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-white mb-2 font-[var(--font-space-grotesk)]">
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="bg-gradient-to-r from-[#e94560]/20 to-[#0f3460]/40 border border-[#e94560]/20 rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-[var(--font-space-grotesk)]">
              Ready to Elevate Your Quality?
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Let us discuss your project and build a QA strategy that gives
              your team confidence to ship fast.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e94560] text-white font-semibold rounded-xl hover:bg-[#e94560]/90 hover:shadow-[0_0_30px_rgba(233,69,96,0.4)] transition-all duration-200 active:scale-95"
            >
              Schedule a Free Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
