"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  Handshake,
  ArrowRight,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

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
    icon: Users,
    title: "Community Orchestration",
    body: "Active participation in brand discourse. We don't just reply; we spark movements within your ecosystem.",
    dark: false,
  },
  {
    icon: TrendingUp,
    title: "Viral Performance",
    body: "Content engineered for the share economy. Leveraging high-frequency trends with prestige-level execution.",
    dark: true,
  },
  {
    icon: Handshake,
    title: "Influencer Synergy",
    body: "Vetting and managing relationships with cultural architects that align with your core brand identity.",
    dark: false,
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Creative Ideation",
    body: "Monthly thematic workshops to align brand voice with emerging cultural trends and audience psychology.",
  },
  {
    num: "02",
    title: "Community Management",
    body: "24/7 proactive engagement and crisis monitoring to ensure your brand remains the center of the conversation.",
  },
  {
    num: "03",
    title: "Paid Amplification",
    body: "Surgical targeting and strategic ad spend to propel organic wins into global-scale visibility.",
  },
];

const METRICS = [
  {
    label: "Engagement Rate",
    value: "+245%",
    barWidth: "w-[85%]",
    barColor: "bg-[#0f1f12]",
  },
  {
    label: "Sentiment Index",
    value: "+120%",
    barWidth: "w-[72%]",
    barColor: "bg-[#c8960c]",
  },
];

const CHART_BARS = [
  { height: "h-[40%]", active: false },
  { height: "h-[60%]", active: false },
  { height: "h-[45%]", active: false },
  { height: "h-[90%]", active: true },
  { height: "h-[65%]", active: false },
  { height: "h-[80%]", active: false },
];

const CHART_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

const FAQS = [
  {
    q: "How do you maintain our brand voice?",
    a: "We develop a comprehensive 50-page Brand Archetype Guide before any content is produced, ensuring every interaction matches your exact tonal DNA.",
  },
  {
    q: "Do you manage influencer outreach?",
    a: "Yes, our team handles end-to-end management from discovery and vetting to contract negotiation and content approval.",
  },
  {
    q: "What is the typical reporting cadence?",
    a: "We provide real-time dashboard access with weekly snapshot highlights and a deep-dive monthly strategy review.",
  },
];

export default function SocialMediaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="pt-24">
      <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span
            className="inline-block text-[#c8960c] font-bold text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Social Media Management
          </motion.span>
          <motion.h1
            className="font-heading font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] text-[#000000] leading-[1.05] tracking-tighter mb-6 sm:mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Humanizing Brands at Global Scale
          </motion.h1>
          <motion.p
            className="font-body text-base sm:text-lg md:text-xl text-[#434842] max-w-xl leading-relaxed mb-8 sm:mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We transcend algorithms to build cultural resonance. Our approach
            treats every feed as an editorial publication, merging data-driven
            viral performance with authentic community orchestration.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <button className="w-full sm:w-auto bg-[#c8960c] text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-[1.02] cursor-pointer">
              <Link href="/contact" className="flex items-center gap-2">
                Explore the Strategy
              </Link>
            </button>
            <button className="flex items-center gap-2 font-bold text-[#000000] hover:gap-3 transition-all cursor-pointer">
              <Link href="/case-studies" className="flex items-center gap-2">
                View Case Studies <ArrowRight size={18} />
              </Link>
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <motion.div
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi3ec8nlhjp9x1LhJB9tT2SvyXAW5XWmoIQMlQIP1ocW9MpwdGdRPF9eMuqh4SMWcyDLkDMIu82LjdAN6NNzC_nlvP3hIrPiLzF70sgid-wO4nHEiRf7ZvKeBp3mJAHtsaZeh2pY4KpF3zOPVMyIb-ZeVEdSzBvRt21zov8YJ3x8e36pAXn0tUBnQCN2S1P4jw1Vzw7c1Is8Cyp5Sk-z0o3JWGKF9u_5JxT14Mh0zK59e17HDm9sl7IzrZfgNis-apU0DbRU8g1Kc"
              alt="Modern smartphone displaying a sleek minimalist social media feed"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-5 sm:p-8 rounded-2xl max-w-[200px] sm:max-w-[240px]"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <div className="text-3xl sm:text-4xl font-black text-[#000000] mb-2">
              92%
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#434842]">
              Avg. Sentiment Growth
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
          <motion.div
            className="mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-[#000000] mb-4 tracking-tight">
              The Three Pillars of Influence
            </h2>
            <div className="h-1 w-24 bg-[#c8960c]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className={`p-7 sm:p-10 rounded-2xl border transition-all hover:-translate-y-2 ${
                    pillar.dark
                      ? "bg-[#0f1f12] text-white border-transparent shadow-2xl"
                      : "bg-white border-[#c3c8c0]/10"
                  }`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <Icon
                    size={36}
                    className={`mb-6 ${
                      pillar.dark ? "text-[#c8960c]" : "text-[#c8960c]"
                    }`}
                  />
                  <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4">
                    {pillar.title}
                  </h3>
                  <p
                    className={`leading-relaxed text-sm sm:text-base ${
                      pillar.dark ? "text-[#768976]" : "text-[#434842]"
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

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-[#000000]">
            Omnichannel Dominance
          </h2>
          <p className="text-[#434842] max-w-2xl mx-auto text-sm sm:text-base">
            Visual excellence tailored for every platform&apos;s unique
            language.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          <motion.div
            className="md:col-span-4 bg-[#f3f4f5] rounded-3xl overflow-hidden relative group h-64 sm:h-80 md:h-auto md:min-h-[400px]"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAazEf54GGzCgxsILcLbtl3-e5OeoH_e28sb6iK0yWgfbNw4KbQhknRLibhh7pI6x6z6XdRLZ-hw9Ryi9x-jektdOhwRg-KJhK2XAVIezTvjqNXaD5eWyOMmVFRwBrIGpzO41dlLsVD55XfLZhvPQhKaxT3iuwDMx7gbcBYkr4QASdoRKnHQMfiJZN9pQ__CL2kCo_ToY_yFiP7lGTTTMhopjogLQvd6xXJAz4fKOzp0b1nzfEkJw8u4l_JSltDxAQEGBgNGEOXDts"
              alt="Aesthetic Instagram grid mockup featuring luxury interior design photos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-7 sm:p-10">
              <div className="text-white">
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">
                  Instagram
                </p>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Visual Storytelling
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8 bg-[#f3f4f5] rounded-3xl overflow-hidden relative group h-64 sm:h-80 md:h-auto md:min-h-[400px]"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs2FRqVoLNEon4ukWOQ3BeUc9ejk4mqV_n8aRqWVUy0MIBRR6lhqlHDBXNAPwosn-74gL3T6jIy2FEBHWGfrnEUTxEpJJ_VzJCT-xpZlW64-wM_E3beDcYGS68AcAUDjh3VaOZecLjSvVGLKKQSZwz0uEudjmMgfhM-ac7crrBLQm_z_OU6HUowq5mS8L19LKVZZDyY9wW250mNVXaPL2025krIhMlMw8tDIbZsYYQNvGG1OHSO1QiaokPcfKd7lqqsD0Nb0KbXhw"
              alt="Dynamic LinkedIn corporate branding shot of a modern office meeting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-7 sm:p-10">
              <div className="text-white">
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">
                  LinkedIn
                </p>
                <h4 className="text-xl sm:text-2xl font-bold">
                  Thought Leadership
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-12 bg-[#0f1f12] rounded-3xl overflow-hidden relative group h-48 sm:h-64 md:h-[300px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-10">
              <p className="text-[#c8960c] font-bold tracking-[0.3em] uppercase mb-4 text-sm sm:text-base">
                TikTok &amp; Reels
              </p>
              <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                Short-Form Velocity
              </h4>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24 border-y border-[#c3c8c0]/5">
        <div className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-16 relative">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative z-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <div className="text-[6rem] sm:text-[8rem] font-black text-[#c3c8c0]/10 absolute -top-16 sm:-top-20 -left-4 pointer-events-none leading-none">
                  {step.num}
                </div>
                <h4 className="font-heading font-bold text-xl sm:text-2xl mb-4 sm:mb-6 relative text-[#000000]">
                  {step.title}
                </h4>
                <p className="text-[#434842] leading-relaxed text-sm sm:text-base">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-[#000000]">
              Measure What Matters
            </h2>
            <p className="text-[#434842] mb-8 sm:mb-10 text-base sm:text-lg">
              We look beyond vanity metrics. Our reporting focuses on depth of
              engagement and brand sentiment velocity.
            </p>
            <div className="space-y-6 sm:space-y-8">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  className="bg-[#f3f4f5] p-5 sm:p-6 rounded-xl"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-[#000000]">
                      {metric.label}
                    </span>
                    <span className="text-[#000000] font-bold text-sm sm:text-base">
                      {metric.value}
                    </span>
                  </div>
                  <div className="w-full bg-[#c3c8c0]/20 h-2 rounded-full overflow-hidden">
                    <div
                      className={`${metric.barColor} h-full ${metric.barWidth}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="forest-gradient p-1 rounded-3xl"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#0f1f12] rounded-[1.4rem] p-7 sm:p-12 text-white">
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <h5 className="font-bold text-lg sm:text-xl">
                  Campaign Velocity
                </h5>
                <MoreHorizontal size={20} className="text-white/40" />
              </div>
              <div className="h-48 sm:h-64 flex items-end justify-between gap-2 sm:gap-4">
                {CHART_BARS.map((bar, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-lg transition-all hover:bg-[#c8960c] ${
                      bar.height
                    } ${bar.active ? "bg-[#c8960c]" : "bg-[#c8960c]/20"}`}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 sm:mt-6 text-[10px] font-bold tracking-widest text-[#768976]">
                {CHART_DAYS.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-10 sm:mb-14 text-center text-[#000000]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4 sm:space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                key={faq.q}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#c3c8c0]/10 cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <button
                  className="w-full flex justify-between items-center font-bold text-base sm:text-lg text-left text-[#000000]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
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
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="mt-4 text-[#434842] leading-relaxed text-sm sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="forest-gradient rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 md:p-20 text-center text-white relative overflow-hidden"
          style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none relative w-full h-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuaRSbUREAp5ZSBcFQ1NUJEHaXwVGlY7HQ6Jq0Yut2xgBg0vRGspchCrq0h-XhfTyRFrenu2Q2EsdDQhhwMsfsIJkAdIGoq81D1U57IWvRNfogiqZoDkDqVGMZEBWFj624O7RNJAEpZpXJl53rTQLziRRKORgyXFIM0yiSgQc2SfqNXXvM8Ka3s46T6uM8w_4Hygd184hHqOgvj-meFvzPMriRGYzz2IqJTNORqXxVZgyYPjkFOM8lhpRhehgJ7P026mwEJEmPNKE"
              alt="Soft ethereal light texture with deep green and gold gradients"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10">
            <motion.h2
              className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Ready to Command the Conversation?
            </motion.h2>
            <motion.p
              className="text-[#768976] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Let&apos;s architect a social presence that doesn&apos;t just
              compete, but defines the standard for your industry.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <button className="w-full sm:w-auto bg-[#c8960c] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-base sm:text-lg transition-transform hover:scale-105 cursor-pointer">
                Book a Strategy Call
              </button>
              <button className="w-full sm:w-auto border border-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-white/5 transition-all cursor-pointer">
                View Media Kit
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
