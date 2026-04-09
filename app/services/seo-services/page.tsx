"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FileText,
  Zap,
  Network,
  Check,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const PILLARS = [
  {
    icon: FileText,
    title: "Content Authority",
    body: "We develop data-driven content ecosystems that establish your brand as the definitive voice in your vertical.",
    dark: false,
  },
  {
    icon: Zap,
    title: "Technical Performance",
    body: "Core Web Vitals, schema architecture, and server-side optimization to ensure flawless crawlability and speed.",
    dark: true,
  },
  {
    icon: Network,
    title: "Backlink Strategy",
    body: "Ethical, high-authority link acquisition from top-tier publications to build long-term domain equity.",
    dark: false,
  },
];

const ROADMAP = [
  {
    num: "01",
    title: "Technical Audit",
    body: "A deep-dive forensic analysis of your current infrastructure to identify every friction point.",
  },
  {
    num: "02",
    title: "Keyword Mapping",
    body: "Semantic cluster analysis to identify high-intent opportunities your competitors have missed.",
  },
  {
    num: "03",
    title: "On-Page Optimization",
    body: "Precision tuning of every element from h-tags to internal linking and UX flow.",
  },
  {
    num: "04",
    title: "Authority Building",
    body: "Aggressive PR and link acquisition to cement your rankings at the top of SERPs.",
  },
];

const PLANS = [
  {
    name: "Foundation",
    price: "$3,500",
    unit: "/mo",
    featured: false,
    features: [
      "Technical Health Monitoring",
      "4 Content Assets per Month",
      "Keyword Tracking (50 Terms)",
      "Quarterly Strategy Review",
    ],
    cta: "Select Model",
  },
  {
    name: "Accelerator",
    price: "$7,500",
    unit: "/mo",
    featured: true,
    badge: "Most Popular",
    features: [
      "Monthly Performance Sprints",
      "10 Editorial Content Assets",
      "Authority Backlink Building",
      "Dedicated Strategist & Account Team",
      "Competitor Intelligence Reports",
    ],
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: null,
    featured: false,
    features: [
      "Full-Scale Content Hub Development",
      "International SEO (Multi-language)",
      "API & Data Science Integration",
      "24/7 Priority Channel Support",
    ],
    cta: "Contact Enterprise Team",
  },
];

const FAQS = [
  {
    q: "How long does it take to see organic results?",
    a: 'SEO is a long-term investment. While technical fixes can show immediate indexing improvements, significant ranking shifts for competitive terms typically take 3-6 months. We focus on "quick wins" alongside long-term authority building.',
  },
  {
    q: "Do you provide content writing services?",
    a: "Yes. Our team includes senior editorial experts who produce research-backed, high-authority content that ranks well and converts visitors into customers.",
  },
  {
    q: "What is the focus of your backlink strategy?",
    a: "We prioritize quality over quantity. Our focus is on high-DR, relevant editorial mentions and guest features from authoritative industry publications rather than directory spam.",
  },
];

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <header className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-8">
            <motion.span
              className="inline-block text-[#c8960c] font-semibold tracking-widest uppercase text-xs mb-4 sm:mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Expert SEO Services
            </motion.span>
            <motion.h1
              className="font-heading text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-5 sm:mb-8 text-[#000000]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Dominate the <br />
              Digital Landscape
            </motion.h1>
            <motion.p
              className="font-body text-base sm:text-lg md:text-xl text-[#191c1d]/80 max-w-2xl mb-8 sm:mb-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Beyond simple rankings. We build sustainable digital authority
              through technical precision, editorial content, and high-impact
              acquisition strategies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button className="bg-[#0f1f12] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:opacity-90 transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/contact" className="flex items-center gap-2">
                  Scale My Search Growth
                </Link>
              </button>

              <button className="border border-[#c3c8c0]/30 text-[#191c1d] px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-[#f3f4f5] transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/case-studies" className="flex items-center gap-2">
                  View Case Studies
                </Link>
              </button>
            </motion.div>
          </div>

          <div className="hidden md:block md:col-span-4 relative h-[480px] lg:h-[600px]">
            <motion.div
              className="absolute inset-0 bg-[#f3f4f5] rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.12)" }}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs2FRqVoLNEon4ukWOQ3BeUc9ejk4mqV_n8aRqWVUy0MIBRR6lhqlHDBXNAPwosn-74gL3T6jIy2FEBHWGfrnEUTxEpJJ_VzJCT-xpZlW64-wM_E3beDcYGS68AcAUDjh3VaOZecLjSvVGLKKQSZwz0uEudjmMgfhM-ac7crrBLQm_z_OU6HUowq5mS8L19LKVZZDyY9wW250mNVXaPL2025krIhMlMw8tDIbZsYYQNvGG1OHSO1QiaokPcfKd7lqqsD0Nb0KbXhw"
                alt="Dynamic LinkedIn corporate branding shot of a modern office meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </header>

      <section className="py-12 sm:py-16 md:py-20 bg-[#f3f4f5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="mb-10 sm:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#000000]">
              Strategic Pillars
            </h2>
            <div className="h-1 w-24 bg-[#c8960c]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className={`p-7 sm:p-10 rounded-xl flex flex-col h-full ${
                    pillar.dark
                      ? "bg-[#0f1f12] text-white"
                      : "bg-white border border-[#c3c8c0]/10"
                  }`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <Icon
                    size={32}
                    className={`mb-5 sm:mb-6 ${
                      pillar.dark ? "text-[#c8960c]" : "text-[#0f1f12]"
                    }`}
                  />
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {pillar.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-sm sm:text-base ${
                      pillar.dark ? "text-white/70" : "text-[#191c1d]/70"
                    }`}
                  >
                    {pillar.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-[1.9rem] sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-[#000000]">
                The Roadmap to Dominance
              </h2>
              <div className="space-y-8 sm:space-y-10">
                {ROADMAP.map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="flex gap-5 sm:gap-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.2}
                  >
                    <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-[#e7e8e9] rounded-full flex items-center justify-center font-bold text-[#0f1f12] text-sm sm:text-base">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold mb-2 text-[#000000]">
                        {step.title}
                      </h4>
                      <p className="text-[#191c1d]/60 text-sm sm:text-base">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-[#0f1f12] rounded-3xl p-7 sm:p-10 md:p-12 relative overflow-hidden group"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5095wlG7yOpVWaM4pkdx7_-_kwWLj_qI2asi7fVJP_1_u_fB4YYpJwO9d8qaFmkJbllI4Su3vXfR1409qXif1N10O-OD3h3_Kkr55wwkMsNEGr5v99XXcxz6mx9oY0aF_6xFXihYRWrE_aVkxIfM82v6JKa2TdXH1DBisYYjbGcNJ9brnYKUbRbpo3eUyky-RXrWXH2LVZDFUQELkd62Fisy1PPnrcN_jeVRxgp4XP765M_VCC9UGfZ7CRQiilfsVa7zPIgwN2qQ"
                  alt="Clean professional dashboard showing upward trending analytics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 sm:mt-8 text-white">
                <p className="text-[#c8960c] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                  Client Success
                </p>
                <h5 className="text-xl sm:text-2xl font-bold">
                  Global E-commerce Growth
                </h5>
                <p className="text-white/60 mt-2 text-sm sm:text-base">
                  +340% increase in organic traffic within 8 months.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#f3f4f5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="text-center mb-10 sm:mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#000000]">
              SEO Engagement Models
            </h2>
            <p className="text-[#191c1d]/60 max-w-xl mx-auto text-sm sm:text-base">
              Scalable strategies tailored to your current market position and
              growth objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`p-7 sm:p-10 rounded-xl flex flex-col relative overflow-hidden ${
                  plan.featured
                    ? "bg-[#0f1f12] text-white md:-translate-y-4 shadow-2xl"
                    : "bg-white border border-[#c3c8c0]/10"
                }`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-[#c8960c] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                    {plan.badge}
                  </div>
                )}
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-2">
                  {plan.name}
                </h3>
                <div
                  className={`text-2xl sm:text-3xl font-black mb-5 sm:mb-6 ${
                    plan.featured ? "text-[#c8960c]" : "text-[#000000]"
                  }`}
                >
                  {plan.price}
                  {plan.unit && (
                    <span
                      className={`text-sm font-normal ${
                        plan.featured ? "text-white/40" : "text-[#191c1d]/40"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-xs sm:text-sm"
                    >
                      <Check
                        size={14}
                        className={
                          plan.featured ? "text-[#c8960c]" : "text-[#0f1f12]"
                        }
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 sm:py-4 font-bold rounded-lg transition-all cursor-pointer text-sm sm:text-base ${
                    plan.featured
                      ? "bg-[#c8960c] text-white hover:opacity-90"
                      : "border border-[#0f1f12] hover:bg-[#f3f4f5]"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <motion.h2
            className="font-heading text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-[#000000]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="bg-[#f3f4f5] rounded-xl overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <button
                  className="w-full flex justify-between items-center p-5 sm:p-6 cursor-pointer text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-[#000000] text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#191c1d]/70 leading-relaxed text-sm sm:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-[1440px] mx-auto bg-[#0f1f12] rounded-[2rem] p-8 sm:p-12 md:p-24 relative overflow-hidden text-center">
          <div className="relative z-10">
            <motion.h2
              className="font-heading text-[1.9rem] sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-5 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Ready to Claim Your <br />
              Market Share?
            </motion.h2>
            <motion.p
              className="text-white/60 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Stop letting competitors take your traffic. Start your journey
              toward digital dominance with a custom SEO audit today.
            </motion.p>
            <motion.button
              className="bg-[#c8960c] text-white px-10 sm:px-12 py-4 sm:py-6 rounded-lg font-black text-lg sm:text-xl hover:scale-105 transition-all cursor-pointer w-full sm:w-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Schedule Your Free Audit
            </motion.button>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none flex items-center justify-end pr-8">
            <TrendingUp size={480} className="text-white" />
          </div>
        </div>
      </section>
    </main>
  );
}
