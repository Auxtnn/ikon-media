"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Share2,
  MousePointerClick,
  FileText,
  Code2,
  Mail,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  User,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { StatItem } from "@/components/StatItem";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const STATS = [
  { value: 10, suffix: "+", label: "Countries" },
  { value: 127, suffix: "+", label: "Global Clients" },
  { value: 94, suffix: "%", label: "Client Retention" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "SEO Strategy",
    description:
      "Global-scale visibility through technical excellence and semantic content architecture.",
    dark: false,
    href: "/services/seo-services",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Viral performance and community engineering that converts attention into equity.",
    dark: true,
    href: "/services/social-media-management",
  },
  {
    icon: MousePointerClick,
    title: "PPC Management",
    description:
      "High-efficiency ad spend across Google, Meta, and LinkedIn for maximum ROI.",
    dark: false,
    href: "/services/paid-advertising-ppc",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "High-end editorial content and visual storytelling that builds brand authority.",
    dark: false,
    href: "/services/content-marketing",
  },
  {
    icon: Code2,
    title: "Web Design",
    description:
      "Conversion-optimized digital experiences that fuse aesthetics with utility.",
    dark: false,
    href: "/services/web-design-development",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Sophisticated retention flows that maximize lifetime value for every customer.",
    dark: false,
    href: "/services/email-marketing",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit",
    description:
      "Deep-dive into existing data, competitive landscapes, and technical blockers.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Architecting a bespoke growth map focused on high-intent conversion channels.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Meticulous deployment of creative assets and technical infrastructure.",
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "Continuous A/B testing and data iteration to squeeze every drop of ROI.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "IKON MEDIA doesn't just provide services; they provide a competitive edge. Their data-driven approach changed how we view marketing entirely.",
    name: "Julian Vance",
    role: "CEO, Luxe Retail",
  },
  {
    quote:
      "The level of sophistication in their strategy is unmatched. We saw a 40% increase in lead quality within the first quarter.",
    name: "Sarah Montague",
    role: "CMO, TechPulse",
  },
  {
    quote:
      "Aggressive, data-focused, and incredibly professional. IKON is the only agency I trust with our global performance budget.",
    name: "Marcus Thorne",
    role: "Founder, Global Invest",
  },
];

const CASE_STUDY_CHECKS = [
  "Full funnel architecture redesign",
  "Predictive modeling for ad targeting",
  "Multi-channel attribution tracking",
];

export default function HomePage() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true });

  return (
    <main>
      <section className="relative pt-32 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <motion.span
              className="inline-block px-4 py-1.5 bg-[#c8960c] text-white font-label text-xs font-bold uppercase tracking-widest mb-6 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Established Authority
            </motion.span>
            <motion.h1
              className="font-heading text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-[#000000] mb-5 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              The Global Authority in <br className="hidden sm:block" />
              <span className="text-[#768976]">Performance Marketing</span>
            </motion.h1>
            <motion.p
              className="font-body text-base sm:text-lg text-[#434842] max-w-xl mb-8 sm:mb-12 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We engineer aggressive growth for world-class brands through
              data-centric strategies and meticulous execution. No fluff. Just
              measurable ROI.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button className="bg-[#0f1f12] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform cursor-pointer w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3"
                >
                  Book a Strategy Call
                </Link>
              </button>
              <button className="flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 font-label text-xs sm:text-sm font-bold uppercase tracking-widest text-[#000000] hover:text-[#768976] transition-colors cursor-pointer w-full sm:w-auto">
                <Link href="/case-studies" className="flex items-center gap-3">
                  View Case Studies
                  <ArrowRight size={18} />
                </Link>
              </button>
            </motion.div>
          </div>

          <div className="md:col-span-5 relative mt-8 md:mt-0">
            <motion.div
              className="aspect-[4/5] rounded-xl overflow-hidden relative z-10"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMH4JpCjGILofWuV2eAZNTv4bBaHw_L0GhMlL23nUsIK94j9u5vC2kqgUmpa7nNBGZ8V_Pt84pQOQeWXi-nLzHmqDdulTXbH8EyCJs2aDscNs-07jsRLZFeIWghniz__axlCuDjXGOGAMQ_uf_nmD9lInqGBQoXN3fR6BjPMFzTImFmT8m5MCJNFPwvqV-WpRQlbHdWlwjLtfUVQzKJBI1rK6OikSo_jJRgG17hANsEquDeeUx1RZ5u1JZ2UgxbTJ8E7KEf14aqo"
                alt="Abstract premium digital art with flowing emerald green and metallic gold liquid textures"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[#0f1f12]/20 mix-blend-overlay" />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#c8960c] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#0f1f12] rounded-full blur-[120px] opacity-20 pointer-events-none" />
          </div>
        </div>
      </section>

      <section
        ref={statsRef}
        className="bg-[#f3f4f5] py-12 sm:py-16 px-4 sm:px-6 md:px-12 border-y border-[#c3c8c0]/10"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {STATS.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="max-w-2xl mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-xl sm:text-[1.75rem] font-semibold text-[#000000] mb-4 uppercase tracking-tight">
              Our Expertise
            </h2>
            <p className="font-body text-base sm:text-lg text-[#434842] leading-relaxed">
              A full-stack ecosystem of digital solutions designed to dominate
              every touchpoint of the customer journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={`group p-8 sm:p-10 rounded-xl transition-all duration-500 flex flex-col justify-between min-h-[320px] sm:h-[400px] ${
                    service.dark
                      ? "bg-[#0f1f12] text-white md:scale-105 z-10"
                      : "bg-white hover:shadow-md"
                  }`}
                  style={
                    !service.dark
                      ? { boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }
                      : {}
                  }
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.5}
                >
                  <div>
                    <Icon
                      size={32}
                      className={`mb-6 sm:mb-8 ${
                        service.dark ? "text-[#c8960c]" : "text-[#768976]"
                      }`}
                    />
                    <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p
                      className={`font-body text-sm sm:text-base leading-relaxed ${
                        service.dark ? "opacity-80" : "text-[#434842]"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={service.href}
                    className={`font-label text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform mt-6 ${
                      service.dark ? "text-[#c8960c]" : ""
                    }`}
                  >
                    Explore Service <ArrowRight size={14} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f3f4f5] overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20">
          <motion.div
            className="relative"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl overflow-hidden bg-[#000000]"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
            >
              <div className="relative w-full aspect-video">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtNguLue_h6uskHJuNrPdy3-Bz_HHf4g5IJEVQlRuWD7HCC4Ir5kmY6S1qPtR63ZhuWU27GhC-WH9kcjIJuy5mILa00Xl5TrGWgokc1JybAOTVPxrW2bHxM7RtsQOklNIoP1zrDEoiuzbqwqi8M7woaFB0pfvZBJR6Z3g4OniJWozIoJjy9NO__c5jT_uJS41ZAA3hDrj39vLynOkvQsz6ro9iDqsVKi7V0-ZjhNMM2rnptm03j7Qv528D6GjyRuQslK3TGy8hMWM"
                  alt="Sleek premium laptop showing a data dashboard with growing green line charts"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div
              className="absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 bg-[#c8960c] p-7 sm:p-10 rounded-xl max-w-[220px] sm:max-w-[280px]"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <p className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2">
                +300%
              </p>
              <p className="font-label text-xs sm:text-sm font-bold uppercase tracking-widest text-white">
                ROI for Fintech Global
              </p>
            </div>
          </motion.div>

          <motion.div
            className="pt-8 sm:pt-0"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-xl sm:text-[1.75rem] font-semibold text-[#000000] mb-6 sm:mb-8 uppercase tracking-tight">
              Case Study: Fintech Global
            </h2>
            <p className="font-body text-base sm:text-lg text-[#434842] leading-relaxed mb-8 sm:mb-12">
              We transformed Fintech Global&apos;s digital footprint, scaling
              their customer acquisition by 3x while reducing CAC by 45%. Our
              methodology focused on intent-based PPC and aggressive content
              authority.
            </p>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {CASE_STUDY_CHECKS.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle size={20} className="text-[#768976] shrink-0" />
                  <span className="font-body text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <button className="bg-[#0f1f12] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-black transition-all cursor-pointer w-full sm:w-auto">
              <Link
                href="/case-studies"
                className="flex items-center justify-center sm:justify-start gap-3"
              >
                Read Full Story
              </Link>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-xl sm:text-[1.75rem] font-semibold text-[#000000] mb-4 uppercase tracking-tight">
              The Ikon Method
            </h2>
            <p className="font-body text-sm sm:text-base text-[#434842] leading-relaxed">
              Our proprietary workflow for achieving market dominance.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative group p-8 sm:p-12 bg-[#f3f4f5] rounded-xl border border-transparent hover:border-[#c3c8c0]/20 transition-all"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <span className="font-heading text-5xl sm:text-6xl font-bold text-[#c3c8c0]/30 absolute top-6 sm:top-8 right-6 sm:right-8">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <h4 className="font-heading text-lg sm:text-xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8">
                    {step.title}
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[#434842] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0f1f12] text-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 sm:gap-8">
            <motion.div
              className="max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-xl sm:text-[1.75rem] font-semibold text-[#c8960c] mb-4 uppercase tracking-tight">
                Success Stories
              </h2>
              <p className="font-body text-base sm:text-lg opacity-80 leading-relaxed">
                Trusted by CEOs of global enterprises.
              </p>
            </motion.div>
            <div className="flex gap-4">
              <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-8 sm:p-10 bg-white/5 rounded-xl backdrop-blur-sm border border-white/5 h-full"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <div className="flex gap-1 mb-6 sm:mb-8">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#c8960c] fill-[#c8960c]"
                    />
                  ))}
                </div>
                <p className="font-body text-base sm:text-lg italic leading-relaxed mb-8 sm:mb-10 opacity-90">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#c8960c]/20 flex items-center justify-center shrink-0">
                    <User size={18} className="text-[#c8960c]" />
                  </div>
                  <div>
                    <p className="font-label text-xs sm:text-sm font-bold uppercase tracking-wider">
                      {t.name}
                    </p>
                    <p className="font-label text-[10px] opacity-60 uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8f9fa] text-center">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="max-w-4xl mx-auto p-10 sm:p-14 md:p-20 bg-[#f3f4f5] rounded-xl relative overflow-hidden"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-5 sm:mb-8 leading-tight">
                Ready to Secure Your Market Dominance?
              </h2>
              <p className="font-body text-base sm:text-lg text-[#434842] mb-8 sm:mb-12 max-w-xl mx-auto">
                Schedule a high-level strategy session with our performance
                engineers today.
              </p>
              <button className="bg-[#0f1f12] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-md font-label text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3"
                >
                  Book a Strategy Call
                </Link>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8960c]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0f1f12]/5 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
