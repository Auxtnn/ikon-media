"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Rss,
  Zap,
  Newspaper,
  Sparkles,
  LayoutTemplate,
  Palette,
  BarChart2,
  ShieldCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const FEATURES = [
  {
    num: "01",
    title: "Advanced segmentation",
    body: "Going beyond basic demographics. We segment by RFM (Recency, Frequency, Monetary) data to ensure the right message hits the right inbox.",
  },
  {
    num: "02",
    title: "A/B testing",
    body: "Rigorous scientific testing of subject lines, send times, and creative layouts. We let the data decide the winning strategy.",
  },
  {
    num: "03",
    title: "Revenue attribution",
    body: "Clean, transparent reporting that shows exactly how much revenue each flow and campaign contributes to your bottom line.",
  },
];

const PROCESS = [
  {
    icon: Sparkles,
    title: "List Hygiene",
    body: "Cleaning and scrubbing to ensure maximum deliverability and domain health.",
    gold: true,
  },
  {
    icon: LayoutTemplate,
    title: "Flow Design",
    body: "Architecting the logic and conditional splits for complex automations.",
    gold: false,
  },
  {
    icon: Palette,
    title: "Creative Dev",
    body: "Bespoke design and copy crafted to reflect your unique brand voice.",
    gold: false,
  },
  {
    icon: BarChart2,
    title: "Optimization",
    body: "Ongoing analysis and iterative testing to squeeze more ROI from every email.",
    gold: false,
  },
];

export default function EmailMarketingPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="pt-24 sm:pt-32">
      <section className="relative overflow-hidden px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 pb-16 sm:pb-20 md:pb-24 max-w-[1440px] mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* TEXT SIDE */}
          <div className="lg:col-span-8 relative z-10">
            <motion.span
              className="inline-block mb-6 px-4 py-1.5 bg-[#f3f4f5] text-[#434842] font-label text-xs font-bold uppercase tracking-[0.2em] rounded-full"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Email Marketing &amp; Automation
            </motion.span>

            <motion.h1
              className="font-heading text-[2.5rem] sm:text-[3.2rem] md:text-[4.2rem] leading-[1.1] font-bold text-[#000000] tracking-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Owned Growth Through <br />
              <span className="text-[#0f1f12]/40">Automation.</span>
            </motion.h1>

            <motion.p
              className="font-body text-base sm:text-lg md:text-xl text-[#434842] max-w-2xl leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Stop renting your audience from social algorithms. We build
              high-conversion lifecycle ecosystems that turn passive subscribers
              into loyal brand advocates on autopilot.
            </motion.p>

            <motion.div
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button
                className="bg-[#0f1f12] text-white px-8 sm:px-10 py-4 rounded-lg font-heading font-bold text-sm sm:text-base hover:opacity-90 transition-all cursor-pointer w-full sm:w-auto"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
              >
                Request Email Audit
              </button>

              <button className="bg-transparent text-[#000000] px-8 sm:px-10 py-4 rounded-lg font-heading font-bold text-sm sm:text-base border border-[#000000]/10 hover:bg-[#f3f4f5] transition-all cursor-pointer w-full sm:w-auto">
                View Results
              </button>
            </motion.div>
          </div>

          {/* IMAGE SIDE */}
          <div className="lg:col-span-4 relative z-0 mt-16 sm:mt-20 lg:mt-0">
            <motion.div
              className="relative aspect-[3/2] sm:aspect-[4/5] rounded-xl overflow-hidden bg-[#e7e8e9] scale-[0.96] sm:scale-100 shadow-lg sm:shadow-2xl"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-InhSOkJ-O9_3FfRnuXHxtG2qrFyC8_NOKlFRB51lnlKbyKtDy592dcPsTj7n9SCHFazOhe6NqVXDFkMINQrp9pUyHt-5EKCx9eC4wSRnzI8E6XU_2SNGOS0x4_1USpceGiC0A89Qgq62GIY14aSIw8iNE5goLuIApg8LwSHJtm6zxdYOcol2PepKOM_nEpeJ0r1FVMMMlp1kZ75qhVdX9PYiOm0lLw1blot3n5zccma7yi_Ca4VGq3YZ5Uu6JxomAIMulmFo0NU"
                alt="Marketing analytics workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Overlay to reduce dominance */}
              <div className="absolute inset-0 bg-[#0f1f12]/25 sm:bg-[#0f1f12]/15" />
            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              className="absolute -bottom-8 -left-4 sm:-left-8 bg-[#c8960c] p-6 sm:p-8 rounded-xl max-w-[220px]"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <p className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight">
                $5M+
              </p>
              <p className="font-label text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white mt-2">
                Revenue Attributed
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-bold mb-6 text-[#000000]">
              Strategic Focus Areas
            </h2>
            <p className="text-[#434842] text-base sm:text-lg">
              We don&apos;t just send emails; we engineer customer journeys
              based on real-time behavioral data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              className="md:col-span-7 bg-white p-8 sm:p-12 rounded-xl flex flex-col justify-between border border-[#c3c8c0]/10"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div>
                <Rss size={36} className="text-[#0f1f12] mb-6" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-[#000000]">
                  Lifecycle flows
                </h3>
                <p className="text-[#434842] leading-relaxed mb-8 text-sm sm:text-base">
                  Sophisticated automation sequences from welcome series to
                  win-backs, mapped across the entire customer journey to
                  maximize lifetime value.
                </p>
              </div>
              <div className="aspect-video relative w-full rounded-lg overflow-hidden bg-[#f3f4f5]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ewSYCjQHKKtWp7s6lrLerPexjhQZHFHydtymjbx1NB7dGdEz7qzmiRmnq_ECajPDccwYTF9ocyRkO6YdYTpCqJa3giDrF9l2uvycXOp9mDvSQaJFcD9A4p4g7oHiBbykIQAjLxvQnsFqS3F2MfQ1IYcEr2g97Ve9HlDWFBVbqnzHkaC6M6eG6KgZt89KXZjmmtVtliwfxDJ27PH_3wLKLE6CbH3n6amaEGVdDXx8Du9ombKfxmCXDCTEU1Qdx5z-qJctLHbgiLA"
                  alt="High-end dashboard showing visual email automation flow charts"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-5 bg-[#0f1f12] p-8 sm:p-12 rounded-xl text-white"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
            >
              <Zap size={36} className="text-[#c8960c] mb-6" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                Behavioral triggers
              </h3>
              <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
                Real-time messaging triggered by site activity, cart
                abandonment, and product views. Precise timing meets relevant
                content.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="font-label text-xs uppercase tracking-widest">
                    Cart Abandonment
                  </span>
                  <span className="text-[#c8960c] font-bold">
                    +28% Recapture
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="font-label text-xs uppercase tracking-widest">
                    Post-Purchase
                  </span>
                  <span className="text-[#c8960c] font-bold">
                    14% Repurchase
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:col-span-12 bg-white p-8 sm:p-12 rounded-xl border border-[#c3c8c0]/10 flex flex-col md:flex-row items-center gap-12"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.4}
            >
              <div className="flex-1">
                <Newspaper size={36} className="text-[#0f1f12] mb-6" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-[#000000]">
                  High-conversion newsletters
                </h3>
                <p className="text-[#434842] leading-relaxed text-sm sm:text-base">
                  Editorial-style content that customers actually look forward
                  to. We blend brand storytelling with performance-driven sales
                  tactics to drive consistent week-over-week revenue.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="bg-[#f3f4f5] aspect-square rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <span className="font-heading text-3xl font-bold mb-1 text-[#000000]">
                    42%
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-wider opacity-60">
                    Avg. Open Rate
                  </span>
                </div>
                <div className="bg-[#f3f4f5] aspect-square rounded-lg p-6 flex flex-col items-center justify-center text-center">
                  <span className="font-heading text-3xl font-bold mb-1 text-[#000000]">
                    5.2%
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-wider opacity-60">
                    Avg. CTR
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              className="flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
            >
              <span className="text-[#0f1f12] font-heading font-extrabold text-5xl mb-6 opacity-10">
                {f.num}
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-bold mb-4 text-[#000000]">
                {f.title}
              </h4>
              <p className="text-[#434842] leading-relaxed text-sm sm:text-base">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#0f1f12] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 text-white">
        <div className="max-w-[1440px] mx-auto">
          <motion.h2
            className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-bold mb-12 sm:mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            The Methodology
          </motion.h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {PROCESS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="flex flex-col items-center text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.2}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 relative z-10 ${
                        step.gold
                          ? "bg-[#c8960c]"
                          : "bg-white/10 border border-white/20"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={step.gold ? "text-white" : "text-white"}
                      />
                    </div>
                    <h5 className="font-heading text-base sm:text-lg font-bold mb-2">
                      {step.title}
                    </h5>
                    <p className="text-white/60 text-sm leading-relaxed px-4">
                      {step.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto bg-[#f3f4f5] rounded-3xl p-10 sm:p-16 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c8960c]/10 skew-x-12 translate-x-20 pointer-events-none" />
          <motion.div
            className="relative z-10 max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 tracking-tight">
              Ready to unlock hidden revenue?
            </h2>
            <p className="text-[#434842] text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
              We&apos;ll audit your current email setup, identify the biggest
              leaks in your funnel, and show you exactly where $1M+ in revenue
              is being left on the table. No obligation.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Work Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border-none px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f1f12] text-[#191c1d] placeholder:text-[#434842]/40 text-sm sm:text-base"
              />
              <button className="bg-[#0f1f12] text-white px-10 py-4 rounded-lg font-heading font-bold hover:opacity-90 transition-all whitespace-nowrap cursor-pointer w-full md:w-auto">
                Claim Free Audit
              </button>
            </div>
            <p className="text-[#434842]/60 text-sm mt-6 flex items-center gap-2">
              <ShieldCheck size={16} />
              Limited availability: Only 3 audits per month.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
