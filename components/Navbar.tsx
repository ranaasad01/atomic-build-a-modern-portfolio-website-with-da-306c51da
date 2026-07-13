"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    type: string
  ) => {
    if (type === "anchor") {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileOpen(false);
  };

  const getHref = (href: string, type: string) => {
    if (type === "anchor") {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label={t("nav.home")}
        >
          <span className="w-8 h-8 rounded-lg bg-[#e94560] flex items-center justify-center text-white font-bold text-sm font-[var(--font-space-grotesk)] group-hover:scale-110 transition-transform duration-200">
            {BRAND.shortName}
          </span>
          <span className="font-semibold text-white/90 font-[var(--font-space-grotesk)] hidden sm:block">
            {t("brand.name")}
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={getHref(link.href, link.type)}
                onClick={(e) => handleNavClick(e, link.href, link.type)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive(link.href)
                    ? "text-[#e94560]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t(`nav.${link.label.toLowerCase()}`)}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-[#e94560]/10 border border-[#e94560]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium bg-[#e94560] text-white rounded-lg hover:bg-[#e94560]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(233,69,96,0.4)] active:scale-95"
          >
            {t("nav.hire")}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label={isMobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href, link.type)}
                    onClick={(e) => handleNavClick(e, link.href, link.type)}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(link.href)
                        ? "text-[#e94560] bg-[#e94560]/10"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {t(`nav.${link.label.toLowerCase()}`)}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium bg-[#e94560] text-white rounded-lg text-center hover:bg-[#e94560]/90 transition-all duration-200"
                >
                  {t("nav.hire")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}