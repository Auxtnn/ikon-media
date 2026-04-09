"use client";

import Image from "next/image";
import {
  Search,
  Share2,
  Briefcase,
  MousePointerClick,
  TrendingUp,
  TrendingDown,
  Minus,
  Check,
  BarChart2,
  Star,
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

const PLATFORMS = [
  {
    icon: Search,
    title: "Google Ads",
    body: "High-intent search capture and performance-max scaling designed for immediate conversion.",
  },
  {
    icon: Share2,
    title: "Meta (FB/IG)",
    body: "Interruptive advertising that stops the scroll through high-impact visual storytelling and AI targeting.",
  },
  {
    icon: Briefcase,
    title: "LinkedIn",
    body: "B2B precision targeting based on job title, company size, and professional seniority.",
  },
  {
    icon: MousePointerClick,
    title: "Programmatic",
    body: "Automated real-time bidding across the web to find your audience in niche corners of the internet.",
  },
];

const DASHBOARD_METRICS = [
  {
    label: "Return on Ad Spend (ROAS)",
    value: "6.42x",
    delta: "+12.4% vs prev",
    trend: "up",
    gold: true,
  },
  {
    label: "Cost Per Acquisition (CPA)",
    value: "$18.24",
    delta: "-8.1% vs prev",
    trend: "down",
    gold: false,
  },
  {
    label: "Ad Engagement Rate",
    value: "4.8%",
    delta: "Stable",
    trend: "stable",
    gold: false,
  },
  {
    label: "Conversion Value",
    value: "$1.2M",
    delta: "+142% year-over-year",
    trend: "up",
    gold: false,
  },
];

const CHART_BARS = [
  { container: "h-24", fill: "h-1/2" },
  { container: "h-32", fill: "h-2/3" },
  { container: "h-48", fill: "h-3/4" },
  { container: "h-40", fill: "h-1/2" },
  { container: "h-56", fill: "h-full", gold: true },
  { container: "h-44", fill: "h-4/5" },
];

const CHECKLIST = [
  {
    title: "Hyper-Granular Funnels",
    body: "Unique creative and landing pages for every segment of your audience.",
  },
  {
    title: "Multivariate Creative Testing",
    body: "We test hundreds of variations of copy, hooks, and imagery per month.",
  },
  {
    title: "AI-Powered Optimization",
    body: "Custom scripts that monitor and adjust bids based on real-time ROI, not just clicks.",
  },
];

export default function PPCPage() {
  return (
    <main className="pt-24 sm:pt-32">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 mb-16 sm:mb-20 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-8 flex flex-col justify-center">
            <motion.span
              className="text-[#c8960c] font-label text-sm uppercase tracking-[0.3em] mb-6 block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Paid Advertising &amp; PPC
            </motion.span>
            <motion.h1
              className="font-heading text-[2.8rem] sm:text-[3.5rem] md:text-[5rem] leading-[1.05] font-bold text-[#000000] tracking-tight mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Precision-Targeted Profitability
            </motion.h1>
            <motion.p
              className="font-body text-base sm:text-lg text-[#434842] max-w-xl leading-relaxed mb-10 sm:mb-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We move beyond simple &quot;clicks.&quot; Our PPC architecture
              leverages deep-funnel data to acquire customers at a cost-basis
              that fuels aggressive scaling.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-6 flex-wrap"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button className="bg-[#c8960c] text-white px-10 py-4 rounded-md font-label text-sm uppercase tracking-widest font-bold hover:scale-[1.02] transition-all cursor-pointer w-full sm:w-auto">
                Review Strategy
              </button>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#edeeef] overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9MFYZ9qKtXj4mPxSuyJt2W5M_mV1UUPb_tIK6JF3wgEc80yFNA3Rh4gSKBj54m8woGYEc3GOwDUp2N9CN-d5ga-Z6f2NfRkW302mtN6zFWP_c2nbQiCQhxzmrz9G9nh19gs6Glf-wSVi_OiWL_qK-HhmvyMdZk7kkfBMKxCUpplvJH-KkiZesFHxzypG1S7SCuN-x27T_1A1gLNSv2xAzkPqYkkUXRePSLnDJxM1TeC0VQkz5-1IzGNN-QBPErSvftP6SJJXjNf8"
                      alt="Professional male executive"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#edeeef] overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4VHxkhjXY6byRKZAN2OH75crC107McanaGkvDTxLjUKGkSuHCKrG4QCQmM4kxh7QhMtBXgMsNMtxiWz3J_zfvKsNkEsdODFWBIojOOq8aHGGdRmyxjzILx8dNOS81dfGMF3YN8exjkyYq4QXUd6bOjgCn49M5oNajvGim3LSLEal7SqbB3UNvmctAtGooCnl5NA7mAyQO5J5LUqt3RMQ7HGGgk5hcPJhd16My-AOvlrrgq1KUAc6Bw_-S4zryptRU89NH4ySb9aM"
                      alt="Confident female founder"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0f1f12] flex items-center justify-center text-[10px] text-white font-bold">
                    250+
                  </div>
                </div>
                <span className="text-xs font-label uppercase tracking-wider text-[#434842]">
                  Trusted by Global Brands
                </span>
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-4 flex items-end mt-10 md:mt-0">
            <motion.div
              className="w-full relative aspect-[3/4] bg-[#0f1f12] rounded-xl relative overflow-hidden group"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYHUlPkvn20nf6VyRZ8WfAKU0XB03a3OSVbNflItsZhBZZSiNneyA3PvRX-GreOmFfMhDB0BSlSz02LyFYEVFCGicLwIXzRgXSY4NSPaGt2tm1OtqrkZbzdpUSUp4NIun9jgIyW_mZhwE8VsWLIfCntOg-NdnYQ6ULDnRIkfePQ9hu4tb34iEpMl5BzzmHT1J7mGF0YLYtreQseRuMxZ1d5UOQcq_I752B3IpFHZ38oUXE_rvi-9eJFKRfOnFheJh1NjXfJgN1nXI"
                alt="Macro close-up of a high-resolution stock market display with neon green data lines"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[#c8960c] font-heading text-4xl font-bold mb-2">
                  412%
                </div>
                <div className="text-white font-label text-xs uppercase tracking-widest opacity-80">
                  Average ROAS for SaaS Clients
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 sm:mb-16 gap-8">
            <motion.h2
              className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-semibold max-w-md text-[#000000]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Omni-Channel Mastery Across the Digital Ecosystem
            </motion.h2>
            <motion.p
              className="text-[#434842] max-w-sm font-body text-base sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              We don&apos;t believe in single-platform silos. We build
              interconnected ecosystems that capture intent wherever it lives.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PLATFORMS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  className="bg-white p-8 sm:p-10 rounded-xl hover:shadow-xl transition-all duration-300 group"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                >
                  <div className="w-12 h-12 mb-8 bg-[#f3f4f5] flex items-center justify-center rounded-lg group-hover:bg-[#0f1f12] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold mb-4">
                    {p.title}
                  </h3>
                  <p className="text-[#434842] text-sm sm:text-base leading-relaxed">
                    {p.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="bg-[#0f1f12] rounded-3xl p-1 md:p-2 relative"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)" }}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#0A140C] rounded-2xl overflow-hidden">
              <div className="border-b border-white/5 p-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-4 text-white/40 font-label text-[10px] uppercase tracking-widest">
                    Global Campaign Performance Dashboard
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {DASHBOARD_METRICS.map((m) => (
                    <div
                      key={m.label}
                      className="p-6 bg-white/5 rounded-xl border border-white/5"
                    >
                      <p className="text-white/40 text-xs font-label uppercase tracking-widest mb-2">
                        {m.label}
                      </p>
                      <p
                        className={`text-3xl font-heading font-bold ${
                          m.gold ? "text-[#c8960c]" : "text-white"
                        }`}
                      >
                        {m.value}
                      </p>
                      <p
                        className={`text-[10px] mt-2 flex items-center gap-1 ${
                          m.trend === "up"
                            ? "text-[#28C840]"
                            : m.trend === "down"
                            ? "text-[#28C840]"
                            : "text-[#FFBD2E]"
                        }`}
                      >
                        {m.trend === "up" ? (
                          <TrendingUp size={12} />
                        ) : m.trend === "down" ? (
                          <TrendingDown size={12} />
                        ) : (
                          <Minus size={12} />
                        )}
                        {m.delta}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="h-64 relative w-full bg-white/5 rounded-xl p-8 flex items-end justify-between gap-2">
                  {CHART_BARS.map((bar, i) => (
                    <div
                      key={i}
                      className={`w-full ${bar.container} bg-[#c8960c]/20 rounded-t-sm relative`}
                    >
                      <div
                        className={`absolute bottom-0 w-full ${bar.fill} ${
                          bar.gold ? "bg-[#c8960c]" : "bg-[#c8960c]"
                        } rounded-t-sm`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-label text-xs uppercase tracking-[0.3em] text-[#434842]">
              Real-Time Proprietary Performance Data Tracking
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div
              className="md:col-span-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-[#c8960c] font-label text-sm uppercase tracking-widest mb-6 block">
                Our Methodology
              </span>
              <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-[2.75rem] font-bold mb-8 leading-tight text-[#000000]">
                Deep Audience Segmentation &amp; Radical Testing
              </h2>
              <p className="font-body text-base sm:text-lg text-[#434842] leading-relaxed mb-10">
                Most agencies stop at keyword research. We build psychographic
                profiles and behavioral mirrors to find your highest-LTV
                customers.
              </p>
              <ul className="space-y-8">
                {CHECKLIST.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="flex items-start gap-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.2}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#0f1f12] flex items-center justify-center shrink-0 mt-1">
                      <Check size={12} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000000] mb-2 text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#434842]">
                        {item.body}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <div className="space-y-6">
                  <motion.div
                    className="aspect-square bg-white rounded-xl overflow-hidden p-1"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSvQJ_-OanRFiLgk6s4D22IJJQ37ph_O5TfGyrG98eMxREAbApPdfBcXHpy8pp0Y0BxEBoX1eum16rbma00u4IkYo_IyJRy1e0HGZK4KZCg2HV3cgNJr_vi507CwvM8bSTTiaMPi4ELXVUs4hhiqqoVzqezF1snPs0lb3ZVp5ovp-uMNnEJwWQ37nVaiKCusCZ4U-1YsiR_OMshQ4FoBGWBtvsUzdFa0E2SqNm27zHTQaJbx2n2pQS5YXfo4TdWUtKxDdZL4tavqM"
                      alt="Clean minimalist workspace with a laptop displaying complex data analytics"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-square bg-[#0f1f12] rounded-xl flex items-center justify-center p-8 text-center"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div>
                      <div className="text-[#c8960c] text-4xl sm:text-5xl font-bold mb-3">
                        90%
                      </div>
                      <p className="text-white/60 text-xs uppercase font-label tracking-widest">
                        Client Retention Rate
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="aspect-[4/5] bg-[#c8960c] rounded-xl overflow-hidden p-1"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4b_0AOz5hd9Za5sDkAV-KapWZZV7VKSnvOHG8SX8a8VGhZ6g6sF9uwnAkwGASrzxPhJA3x_xnDAymM7LVzt36kjgBUlZ4HyVRfH8p-x8xPHJe63NRItwhwhKaWhPOKVwnsplJgVqLUGrY3Wt03xxIEGNkKHtbH25qNaDnxEL_YOVhs0YEqebieQJRRwPgFH_D1qHpEL4geE2PnHL1qKfj9HB2E03ZPOG7FClD2e63p0kDyKuH9gvKxQNgdEpJ34poShTlLxvaCds"
                      alt="Professional team collaborating in a glass-walled meeting room"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <motion.div
                    className="aspect-square bg-white rounded-xl p-8 flex flex-col justify-end"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <BarChart2 size={28} className="text-[#000000] mb-4" />
                    <p className="text-base font-bold text-[#000000] leading-tight">
                      Data Integrity First Architecture
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="bg-white rounded-[2rem] p-10 sm:p-16 md:p-24 border border-[#c3c8c0]/10 flex flex-col md:flex-row gap-12 items-center"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeRnt_kRcOs9QRJZSIvGY_iL8NLLeOdISjNeQvkEV5GuFGk4dfMa-FBxqNmWmCAn4z3eL1uyp6wmET3rYVxq6SukbY9uOj4Nz0PiJs4OoVlYC9NHPjTt9GEMIi2X7BJVZuKhqEGuRdwjMw3E6JB67MORj122TL6bYuOvd7G8tm-7WxqKb3KZjeKOh---fXD4y_Q4m1w30XdN9GQLIyhApMQpSR_WQDd9GlJxerfHzdrE-N3wVDj8XZ8Jr-Cg_Gz4WoMzlAsccsXr4"
                alt="Close-up portrait of a successful tech founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
            <div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[#c8960c] fill-[#c8960c]"
                  />
                ))}
              </div>
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#000000] leading-snug mb-8 italic">
                &quot;Before IKON MEDIA, our PPC was a black hole. Within three
                months of their audience segmentation strategy, our CPA dropped
                by 45% and our volume tripled. They don&apos;t just manage ads;
                they understand our unit economics better than we do.&quot;
              </blockquote>
              <div>
                <p className="font-bold text-[#000000] text-lg">
                  Marcus Thorne
                </p>
                <p className="text-[#434842] font-label text-xs uppercase tracking-widest">
                  Founder, Streamline SaaS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#0f1f12] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="bg-[#0f1f12] rounded-[2rem] p-12 sm:p-16 md:p-24 text-center"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Ready for Aggressive, Profitable Growth?
            </motion.h2>
            <motion.p
              className="text-white/70 max-w-2xl mx-auto mb-10 text-base sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              We are currently accepting only 2 new high-growth clients this
              quarter to maintain our standard of excellence.
            </motion.p>
            <motion.button
              className="bg-[#c8960c] text-white px-12 py-5 rounded-md font-label text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Request a Performance Audit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
