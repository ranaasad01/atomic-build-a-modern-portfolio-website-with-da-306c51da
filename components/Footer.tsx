"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navLinks, BRAND, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    type: string
  ) => {
    if (type === "anchor" && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getHref = (href: string, type: string) => {
    if (type === "anchor") {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/30 to-transparent pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="w-8 h-8 rounded-lg bg-[#e94560] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
                {BRAND.shortName}
              </span>
              <span className="font-semibold text-white/90 font-[var(--font-space-grotesk)]">
                {t("brand.name")}
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#e94560] hover:border-[#e94560]/30 hover:bg-[#e94560]/10 transition-all duration-200"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
              <a
                href={`mailto:${BRAND.email}`}
                aria-label={t("footer.emailLabel")}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#e94560] hover:border-[#e94560]/30 hover:bg-[#e94560]/10 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href, link.type)}
                    onClick={(e) => handleNavClick(e, link.href, link.type)}
                    className="text-sm text-white/50 hover:text-[#e94560] transition-colors duration-200"
                  >
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              {t("footer.getInTouch")}
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-white/50">
                {t("footer.openTo")}
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="block text-sm text-[#e94560] hover:text-[#e94560]/80 transition-colors duration-200"
              >
                {BRAND.email}
              </a>
              <p className="text-sm text-white/40">{BRAND.location}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 text-sm font-medium bg-[#e94560]/10 border border-[#e94560]/20 text-[#e94560] rounded-lg hover:bg-[#e94560]/20 transition-all duration-200"
            >
              {t("footer.contactCta")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4"
        >
          <p className="text-xs text-white/30">
            {t("footer.copyright", { year: 2025, name: BRAND.name })}
          </p>
          <p className="text-xs text-white/20">{t("footer.role")}</p>
          <button
            onClick={scrollToTop}
            aria-label={t("footer.backToTop")}
            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#e94560] hover:border-[#e94560]/30 hover:bg-[#e94560]/10 transition-all duration-200"
          >
            <ArrowUp size={14} />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}