"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase as Linkedin, Code2 as Github, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, User, MessageSquare, FileText } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/motion";
import { BRAND } from "@/lib/data";
import { useTranslations } from "next-intl";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ToastState {
  type: "success" | "error" | null;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    description: "Best way to reach me",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rao-muhammad-ali",
    href: "https://linkedin.com/in/rao-muhammad-ali",
    description: "Connect professionally",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rao-muhammad-ali",
    href: "https://github.com/rao-muhammad-ali",
    description: "Check out my work",
  },
  {
    icon: MapPin,
    label: "Location",
    value: BRAND.location,
    href: null,
    description: "Based in Pakistan",
  },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!validateEmail(form.email)) errors.email = "Please enter a valid email address";
  if (!form.subject.trim()) errors.subject = "Subject is required";
  else if (form.subject.trim().length < 5) errors.subject = "Subject must be at least 5 characters";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: null, message: "" }), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Record<string, boolean> = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // Simulate EmailJS send (replace with real EmailJS call in production)
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate for demo
          if (Math.random() > 0.1) resolve();
          else reject(new Error("Network error"));
        }, 1800);
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
      showToast("success", t("contact.toast.success"));
    } catch {
      showToast("error", t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e94560]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#e94560]/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold text-[#e94560] uppercase tracking-widest mb-4 px-3 py-1 rounded-full border border-[#e94560]/20 bg-[#e94560]/5"
          >
            {t("contact.eyebrow")}
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight text-balance mb-4"
          >
            {t("contact.heading")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed text-pretty"
          >
            {t("contact.subheading")}
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability badge */}
            <motion.div
              variants={fadeInLeft}
              className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
              </span>
              <div>
                <p className="text-sm font-medium text-white/80">{t("contact.availability.status")}</p>
                <p className="text-xs text-white/40">{t("contact.availability.note")}</p>
              </div>
            </motion.div>

            {/* Contact cards */}
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  key={item.label}
                  variants={fadeInLeft}
                  whileHover={item.href ? { x: 4 } : {}}
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
                    item.href
                      ? "bg-white/[0.03] border-white/[0.07] hover:border-[#e94560]/30 hover:bg-[#e94560]/5 cursor-pointer group"
                      : "bg-white/[0.02] border-white/[0.05]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    item.href
                      ? "bg-[#e94560]/10 text-[#e94560] group-hover:bg-[#e94560]/20"
                      : "bg-white/5 text-white/40"
                  }`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className={`text-sm font-medium truncate ${item.href ? "text-white/80 group-hover:text-[#e94560]" : "text-white/50"} transition-colors duration-200`}>
                      {item.value}
                    </p>
                    <p className="text-xs text-white/30 mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Response time note */}
            <motion.div
              variants={fadeInLeft}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
            >
              <Clock size={16} className="text-white/30 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-white/40 leading-relaxed">
                {t("contact.responseTime")}
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]">
              {/* Subtle gradient top border */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e94560]/40 to-transparent rounded-t-2xl" />

              <h2 className="text-xl font-semibold text-white mb-6">{t("contact.form.heading")}</h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-medium text-white/50 uppercase tracking-wider">
                      <User size={12} />
                      {t("contact.form.name")}
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t("contact.form.namePlaceholder")}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all duration-200 ${
                          errors.name && touched.name
                            ? "border-yellow-500/50 focus:ring-yellow-500/20 focus:border-yellow-500/50"
                            : "border-white/[0.08] focus:ring-[#e94560]/20 focus:border-[#e94560]/40"
                        }`}
                      />
                    </div>
                    {errors.name && touched.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-yellow-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-medium text-white/50 uppercase tracking-wider">
                      <Mail size={12} />
                      {t("contact.form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t("contact.form.emailPlaceholder")}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.email && touched.email
                          ? "border-yellow-500/50 focus:ring-yellow-500/20 focus:border-yellow-500/50"
                          : "border-white/[0.08] focus:ring-[#e94560]/20 focus:border-[#e94560]/40"
                      }`}
                    />
                    {errors.email && touched.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-yellow-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="flex items-center gap-1.5 text-xs font-medium text-white/50 uppercase tracking-wider">
                    <FileText size={12} />
                    {t("contact.form.subject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("contact.form.subjectPlaceholder")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all duration-200 ${
                      errors.subject && touched.subject
                        ? "border-yellow-500/50 focus:ring-yellow-500/20 focus:border-yellow-500/50"
                        : "border-white/[0.08] focus:ring-[#e94560]/20 focus:border-[#e94560]/40"
                    }`}
                  />
                  {errors.subject && touched.subject && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-yellow-400 flex items-center gap-1"
                    >
                      <AlertCircle size={11} />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-medium text-white/50 uppercase tracking-wider">
                    <MessageSquare size={12} />
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                      errors.message && touched.message
                        ? "border-yellow-500/50 focus:ring-yellow-500/20 focus:border-yellow-500/50"
                        : "border-white/[0.08] focus:ring-[#e94560]/20 focus:border-[#e94560]/40"
                    }`}
                  />
                  <div className="flex items-start justify-between">
                    {errors.message && touched.message ? (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-yellow-400 flex items-center gap-1"
                      >
                        <AlertCircle size={11} />
                        {errors.message}
                      </motion.p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-white/20 ml-auto">
                      {form.message.length}/500
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#e94560] text-white font-semibold text-sm transition-all duration-200 hover:bg-[#e94560]/90 hover:shadow-[0_0_24px_rgba(233,69,96,0.4)] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e94560]/50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t("contact.form.submit")}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      {toast.type && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl ${
            toast.type === "success"
              ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
              : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={18} />
          ) : (
            <AlertCircle size={18} />
          )}
          <span className="text-sm font-medium">{toast.message}</span>
        </motion.div>
      )}
    </main>
  );
}