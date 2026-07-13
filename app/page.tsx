"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Search, Activity, FileText, Star, Zap, Users, Award, ChevronRight, Mail, Code2 as Github, Briefcase as Linkedin } from 'lucide-react';
import { useTranslations } from "next-intl";
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/lib/motion";
import { BRAND } from "@/lib/data";

const skills = [
  { name: "Manual Testing", level: 95, color: "#e94560" },
  { name: "Automation (Selenium)", level: 85, color: "#e94560" },
  { name: "API Testing (Postman)", level: 90, color: "#e94560" },
  { name: "Performance Testing (JMeter)", level: 78, color: "#e94560" },
  { name: "Test Planning & Strategy", level: 92, color: "#e94560" },
  { name: "CI/CD Integration", level: 80, color: "#e94560" },
];

const services = [
  {
    icon: Search,
    title: "Manual Testing",
    description:
      "Thorough exploratory and functional testing to catch defects before they reach production. Every user flow validated with precision.",
  },
  {
    icon: Activity,
    title: "Test Automation",
    description:
      "Scalable automation frameworks using Selenium, Cypress, and Playwright that reduce regression time by up to 70%.",
  },
  {
    icon: Shield,
    title: "API Testing",
    description:
      "End-to-end API validation with Postman and REST Assured, ensuring your backend contracts are rock solid.",
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description:
      "Load and stress testing with JMeter to identify bottlenecks before they impact real users at scale.",
  },
  {
    icon: FileText,
    title: "Test Documentation",
    description:
      "Comprehensive test plans, cases, and reports that give stakeholders full visibility into quality metrics.",
  },
  {
    icon: Users,
    title: "Agile QA",
    description:
      "Embedded QA in sprint cycles, shift-left testing practices, and continuous feedback loops with dev teams.",
  },
];

const projects = [
  {
    title: "E-Commerce Platform QA",
    category: "Automation + Manual",
    description:
      "Led end-to-end quality assurance for a high-traffic e-commerce platform serving 500K+ users. Built a Selenium automation suite covering 300+ test cases, reducing regression time from 3 days to 4 hours.",
    tags: ["Selenium", "TestNG", "Postman", "JIRA"],
    metric: "85%",
    metricLabel: "Regression time saved",
    image: "https://jpsdnjsdtqxqxhjrigho.supabase.co/storage/v1/object/public/blog-images/897c1ea4-b390-4a1d-bfea-ea4d421c2974/1774862862083-3055a079.png",
  },
  {
    title: "Banking App Security Testing",
    category: "Security + API",
    description:
      "Conducted rigorous security and API testing for a fintech mobile application. Identified 23 critical vulnerabilities pre-launch, ensuring PCI-DSS compliance and zero security incidents post-release.",
    tags: ["OWASP", "Postman", "Burp Suite", "REST Assured"],
    metric: "23",
    metricLabel: "Critical bugs caught",
    image: "https://www.geckoboard.com/uploads/SaaS-dashboard-example.png",
  },
  {
    title: "SaaS Dashboard Performance",
    category: "Performance Testing",
    description:
      "Performance tested a B2B SaaS analytics dashboard under simulated peak loads of 10,000 concurrent users. Identified and resolved 5 critical bottlenecks, improving response time by 60%.",
    tags: ["JMeter", "Grafana", "AWS", "CI/CD"],
    metric: "60%",
    metricLabel: "Response time improved",
    image: "https://imageio.forbes.com/specials-images/imageserve/5c928fa04bbe6f52641ab341/0x0.jpg?format=jpg&crop=2124,2123,x980,y756,safe&height=416&width=416&fit=bounds",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    text: "Rao's attention to detail is exceptional. He caught edge cases our entire dev team missed and his automation framework is still running flawlessly two years later.",
    rating: 5,
  },
  {
    name: "Ahmed Malik",
    role: "Product Manager, FinEdge",
    text: "Working with Rao transformed our QA process. He brought structure, automation, and a quality mindset that elevated the entire team's standards.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Engineering Lead, DataSync",
    text: "Rao delivered a comprehensive test strategy in record time. His reports are clear, actionable, and gave us the confidence to ship on schedule.",
    rating: 5,
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "300+", label: "Test Cases Written" },
  { value: "99%", label: "Client Satisfaction" },
];

const cardHoverVariant: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function HomePage() {
  const t = useTranslations();
  const shouldReduceMotion = useReducedMotion();

  const motionProps = (variants: Variants) =>
    shouldReduceMotion
      ? {}
      : {
          variants,
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-80px" },
        };

  return (
    <main className="bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e94560]/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#e94560]/5 rounded-full blur-[80px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6">
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] animate-pulse" />
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-space-grotesk)] leading-[1.05] tracking-tight text-balance">
              {t("hero.greeting")}{" "}
              <span className="text-white">{t("hero.name")}</span>
              <br />
              <span className="text-[#e94560]">{t("hero.role")}</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-white/55 text-lg leading-relaxed max-w-lg text-pretty">
              {t("hero.description")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-[#e94560] text-white font-semibold rounded-xl hover:bg-[#e94560]/90 transition-all duration-300 hover:shadow-[0_0_32px_rgba(233,69,96,0.4)] active:scale-95">
                {t("hero.cta.primary")}
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white/80 font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95">
                {t("hero.cta.secondary")}
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 pt-4 border-t border-white/5">
              {stats.map((stat) => (<div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-bold text-white font-[var(--font-space-grotesk)]">
                  {stat.value}
                </span>
                <span className="text-xs text-white/40">{stat.label}</span>
              </div>))}
            </motion.div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#e94560]/20 to-transparent blur-2xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                <img
                  src="https://www.shutterstock.com/image-photo/sqa-software-quality-assurance-concept-260nw-2264308291.jpg"
                  alt={t("hero.imageAlt")}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background =
                        "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
                      const initials = document.createElement("div");
                      initials.className =
                        "absolute inset-0 flex items-center justify-center";
                      initials.innerHTML =
                        '<span style="font-size:5rem;font-weight:700;color:rgba(233,69,96,0.8);font-family:var(--font-space-grotesk)">RMA</span>';
                      parent.appendChild(initials);
                    }
                  }} />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[#0a0a0f]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                    <p className="text-white font-semibold text-sm font-[var(--font-space-grotesk)]">
                      {BRAND.name}
                    </p>
                    <p className="text-[#e94560] text-xs font-medium">
                      {BRAND.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating skill chips */}
              <motion.div animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-8 top-12 bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-[#e94560]" />
                  <span className="text-xs text-white/80 font-medium">
                    {t("hero.chip1")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -right-8 bottom-20 bg-[#0a0a0f]/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-xs text-white/80 font-medium">
                    {t("hero.chip2")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs tracking-widest uppercase">
            {t("hero.scroll")}
          </span>
          <motion.div animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-[#e94560]" />
          </motion.div>
        </motion.div>
      </section>
      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e94560]/3 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...motionProps(staggerContainer)} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-[#e94560] text-xs font-semibold tracking-widest uppercase mb-4">
              {t("services.eyebrow")}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] tracking-tight text-balance mb-4">Services you want</motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-2xl mx-auto text-pretty">
              {t("services.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div {...motionProps(staggerContainer)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={scaleIn} whileHover="hover" initial="rest" animate="rest" custom={i} className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-[#e94560]/30 hover:bg-[#e94560]/5 transition-colors duration-300 cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)]">
                  <div className="w-11 h-11 rounded-xl bg-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center mb-5 group-hover:bg-[#e94560]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[#e94560]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 font-[var(--font-space-grotesk)]">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 md:py-32 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div {...motionProps(fadeInLeft)}>
              <span className="inline-block text-[#e94560] text-xs font-semibold tracking-widest uppercase mb-4">
                {t("skills.eyebrow")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] tracking-tight text-balance mb-6">
                {t("skills.title")}
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8 text-pretty">
                {t("skills.description")}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Selenium",
                  "Cypress",
                  "Playwright",
                  "Postman",
                  "JMeter",
                  "JIRA",
                  "TestNG",
                  "Jenkins",
                  "Git",
                  "Python",
                  "Java",
                  "SQL",
                ].map((tech) => (<span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/70 text-xs font-medium hover:border-[#e94560]/30 hover:text-[#e94560] transition-all duration-200">
                  {tech}
                </span>))}
              </div>
            </motion.div>

            {/* Right: Skill bars */}
            <motion.div {...motionProps(staggerContainer)} className="flex flex-col gap-5">
              {skills.map((skill) => (<motion.div key={skill.name} variants={fadeInUp}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white/80 text-sm font-medium">
                    {skill.name}
                  </span>
                  <span className="text-[#e94560] text-sm font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="h-full rounded-full bg-gradient-to-r from-[#e94560] to-[#e94560]/70" />
                </div>
              </motion.div>))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── FEATURED PROJECTS ── */}
      <section id="projects" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...motionProps(staggerContainer)} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <motion.span variants={fadeInUp} className="inline-block text-[#e94560] text-xs font-semibold tracking-widest uppercase mb-4">
                {t("projects.eyebrow")}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] tracking-tight text-balance">
                {t("projects.title")}
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp}>
              <Link href="/projects" className="inline-flex items-center gap-2 text-[#e94560] text-sm font-semibold hover:gap-3 transition-all duration-200">
                {t("projects.viewAll")}
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div {...motionProps(staggerContainer)} className="flex flex-col gap-6">
            {projects.map((project, i) => (
              <motion.div key={project.title} variants={fadeInUp} whileHover="hover" initial="rest" animate="rest" className="group relative bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden hover:border-[#e94560]/20 transition-all duration-300 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)]">
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Image */}
                  <div className={`lg:col-span-2 h-52 lg:h-auto overflow-hidden ${i % 2 === 1 ? "lg:col-start-4" : ""}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.background =
                          "linear-gradient(135deg, #1a1a2e, #16213e)";
                        t.style.display = "block";
                      }} />
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-3 p-8 flex flex-col justify-center gap-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 bg-[#e94560]/10 border border-[#e94560]/20 rounded-full text-[#e94560] text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-[var(--font-space-grotesk)] text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (<span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/8 rounded-lg text-white/60 text-xs">
                        {tag}
                      </span>))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                      <span className="text-3xl font-bold text-[#e94560] font-[var(--font-space-grotesk)]">
                        {project.metric}
                      </span>
                      <span className="text-white/40 text-sm">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 md:py-32 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div {...motionProps(staggerContainer)} className="text-center mb-16">
            <motion.span variants={fadeInUp} className="inline-block text-[#e94560] text-xs font-semibold tracking-widest uppercase mb-4">
              {t("testimonials.eyebrow")}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold font-[var(--font-space-grotesk)] tracking-tight text-balance mb-4">
              {t("testimonials.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/50 text-lg max-w-xl mx-auto">
              {t("testimonials.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div {...motionProps(staggerContainer)} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div key={testimonial.name} variants={scaleIn} className={`bg-white/[0.03] border border-white/8 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.2)] ${i === 1 ? "md:translate-y-4" : ""}`}>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#e94560] fill-[#e94560]"
                    />
                  ))}
                </div>
                <p className="text-white/65 text-sm leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#e94560]/40 to-[#e94560]/10 border border-[#e94560]/20 flex items-center justify-center text-[#e94560] font-bold text-sm font-[var(--font-space-grotesk)]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── CTA ── */}
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e94560]/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...motionProps(staggerContainer)}>
            <motion.div variants={scaleIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] text-xs font-semibold tracking-wider uppercase mb-8">
              <Award size={14} />
              {t("cta.badge")}
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold font-[var(--font-space-grotesk)] tracking-tight text-balance mb-6">
              {t("cta.title")}
              <br />
              <span className="text-[#e94560]">{t("cta.titleAccent")}</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
              {t("cta.description")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#e94560] text-white font-semibold rounded-xl hover:bg-[#e94560]/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(233,69,96,0.5)] active:scale-95 text-lg">
                <Mail size={18} />
                {t("cta.button")}
              </Link>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/in/rao-muhammad-ali" target="_blank" rel="noopener noreferrer" aria-label={t("cta.linkedinLabel")} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#e94560] hover:border-[#e94560]/30 hover:bg-[#e94560]/10 transition-all duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/rao-muhammad-ali" target="_blank" rel="noopener noreferrer" aria-label={t("cta.githubLabel")} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#e94560] hover:border-[#e94560]/30 hover:bg-[#e94560]/10 transition-all duration-200">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>

            <motion.p variants={fadeIn} className="text-white/30 text-sm mt-8">
              {t("cta.availability")}
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}