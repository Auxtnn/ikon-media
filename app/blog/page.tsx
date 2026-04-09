"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
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

const FILTERS = ["All Insights", "Strategy", "Design", "Performance", "News"];

const ARTICLES = [
  {
    category: "Performance",
    title: "The Return of the Human Touch in Performance PPC",
    excerpt:
      "Why data-driven automation needs human oversight to truly resonate with sophisticated consumer behavior in 2024.",
    date: "Oct 14, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1NCHP1oqCSpyJH2ZtOK0hj0zROnNlP25gcwsHDinD_ynZcDa3DmTf2knTH-HrmkJULKEv7ylQXV1j-0ajr5J_fDW-mrdupekmQztpHLhrrtWdqjfwOcrTMdUAKb1lx72kEqzkA9H5FL99bOdwqyHjLgYAkuScK_ZW7UmdSLJRNh_q4vILC1acO9GxNxsxg2Y4wWS_lrrl9Bg_xWB52LQG5tT9oAM0PyWLGEdzGvcoEZhQ1-RL1cobNfCfwBnQE4-hrAeEwP-cvNw",
    alt: "High-end minimalist workstation with vintage computer components and modern high-tech accessories in a soft cinematic lighting",
  },
  {
    category: "Design",
    title: "Aesthetic Authority: Brand Perception in a Saturated Market",
    excerpt:
      "Analyzing how visual hierarchy and tonal depth contribute to brand trust and long-term customer loyalty.",
    date: "Oct 09, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1yJoVQ2tIipprjl15Vcr6Vl-dFfTYg3fWQwYvk8o9TMWbEMygflmvpRTSktkfZkoR4Ln05nsE2mSrGcxJfgem1Pq5kFUsGMZZzukWqM85wLSzrQADNUGs2XeGBnGdsLYLXihZZ6Z6NBYw82bhLS-roAeWp_oeM2WkQ1Dgz9L5nLPyR4zAgCg7qG5npVsalRT-23OqhlAVV6id6vu9F__1uPT_IE-k00yPgsCUNJMAlmQSC3gm6poOjmSUx4RiTUrGoljgcDjCaMQ",
    alt: "Abstract vibrant fluid textures mixing gold and emerald green hues in a high-gloss editorial style",
  },
  {
    category: "Strategy",
    title: "Beyond the Funnel: The New Lifecycle of Content Marketing",
    excerpt:
      "Deconstructing traditional marketing silos to create a unified ecosystem of engagement and conversion.",
    date: "Oct 02, 2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQP7id-DKd5sUbl0yLQXBghjHPTfB-PiSApdpOchSUQuhIVwnhhHPk5GGRFUtIj5C1XS5uYmUIfAP3B_y4l4uK4BnLSj-L2DfuK_7NS3ScPcqwTOrt4sC5aGPym5a2ka0n18pTMHLeKoZ7vqgGieGQ2QJWsyfEzq3f_BqDlHi__8ZFwAqHiDVCfybVjG5QabwvkEBVjJOEtAXqme97qMcAglQJPvvfPp7QBEYtWzCrUWdQeWjgTLU3d54BawRORrt3KKtPby-duiI",
    alt: "Corporate strategy session in a high-ceilinged glass office with soft afternoon sun casting long shadows",
  },
];

const SECONDARY_ARTICLES = [
  {
    category: "Case Study",
    title: "How we scaled a SaaS unicorn to 10M users via viral loops.",
    excerpt:
      "A deep dive into the algorithmic strategy behind the fastest growing enterprise app of the year.",
    cta: "Read the Case Study",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKznKOvKeMEPU7GREJf5mRVEekB2cwbwjjMDwqPMu_Bk00cksklWxpgL5uBKoivjMTHqzWKNf8fwGJiY8LFS6_WWsSndXOsJVFrvP5xiFzuI4JyWuaf9Bea9174LWxTEDBIuh2Cev5VfZ2abcl4r5LUfD85YG5usXD0MdByvWb2_22zNx08J0NOHZeFYtU-xN6it4beBBfEEXLHCD5p4Y56z8wSQEg6M7OQCdTIe5WsWRlkwSEo2B-QNZWcyosNKQWFZBqVlKFJY",
    alt: "Close-up of modern architectural lines with glass and steel reflecting clear blue sky",
  },
  {
    category: "News",
    title: "The Ikon Media Agency expands to Singapore HQ.",
    excerpt:
      "Broadening our global footprint to serve the burgeoning tech ecosystem in Southeast Asia.",
    cta: "Read the Announcement",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGhBun6xTqvQy0NIe1SEI0f2E5khYgeuBO0XSdlrjmJfgiI3YMMwgwsFK3wyXohp5y7VqP8CJhqorZxn_76OI6Zu-AgJpMtF5tLqHt380kYa2V5YEm2yBWkA0Ao1f9nYyUgv4lHOzMOnDS0NtRIFpWzPSI5t6VOtK5ue1IcNMd1mt7SyvGbxQKf-S_OpHpWGN10IYTdh9VIveybgGX8nNmHJ9wdmrhXrhX_nl1gmoRAhKFZcqm6itpL0fbPkSStaHc2H45rS8O8Zs",
    alt: "Minimalist abstract render of floating geometric shapes in a soft clay texture with warm studio lighting",
  },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState("All Insights");
  const [email, setEmail] = useState("");

  const filteredArticles =
    activeFilter === "All Insights"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeFilter);

  return (
    <main className="pt-24">
      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <motion.div
          className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] lg:h-[716px] rounded-xl overflow-hidden group cursor-pointer"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1NCHP1oqCSpyJH2ZtOK0hj0zROnNlP25gcwsHDinD_ynZcDa3DmTf2knTH-HrmkJULKEv7ylQXV1j-0ajr5J_fDW-mrdupekmQztpHLhrrtWdqjfwOcrTMdUAKb1lx72kEqzkA9H5FL99bOdwqyHjLgYAkuScK_ZW7UmdSLJRNh_q4vILC1acO9GxNxsxg2Y4wWS_lrrl9Bg_xWB52LQG5tT9oAM0PyWLGEdzGvcoEZhQ1-RL1cobNfCfwBnQE4-hrAeEwP-cvNw"
            alt="Futuristic digital brain visualization with bioluminescent neural networks in deep forest green and gold light tones"
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f12] via-[#0f1f12]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 md:p-12 w-full md:w-3/4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <span className="inline-block bg-[#c8960c] text-white px-3 py-1 rounded-sm text-xs font-label font-bold uppercase tracking-widest mb-4 sm:mb-6">
                Featured Insight
              </span>
            </motion.div>
            <motion.h1
              className="text-white font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 max-w-4xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              The Architect of Tomorrow: Navigating the Future of AI in
              Marketing
            </motion.h1>
            <motion.p
              className="text-[#768976] text-base sm:text-lg md:text-xl font-body max-w-2xl mb-6 sm:mb-8 opacity-90"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
            >
              How generative intelligence is redefining the boundary between
              human creativity and algorithmic precision in the digital age.
            </motion.p>
            <motion.div
              className="flex items-center space-x-4 sm:space-x-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.65}
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#c8960c]" />
                <span className="text-white font-label font-semibold text-xs sm:text-sm">
                  Admin
                </span>
              </div>
              <span className="text-[#768976] opacity-50">•</span>
              <span className="text-[#768976] font-label text-xs sm:text-sm uppercase tracking-wider">
                12 Min Read
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-10 md:mb-14">
        <motion.div
          className="flex flex-wrap items-center gap-3 sm:gap-4 py-6 sm:py-8 border-y border-[#c3c8c0]/15"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="font-label font-bold text-xs uppercase tracking-widest text-[#434842] mr-2 sm:mr-4">
            Filter by:
          </span>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-label font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#0f1f12] text-white"
                  : "bg-[#f3f4f5] text-[#434842] hover:bg-[#e7e8e9]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredArticles.map((article, i) => (
            <motion.article
              key={article.title}
              className="flex flex-col group cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="relative aspect-[4/3] mb-5 md:mb-6 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#f8f9fa]/90 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[10px] font-label font-bold uppercase tracking-widest text-[#000000]">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-3 group-hover:text-[#0f1f12] transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-[#434842] text-sm font-body line-clamp-3 mb-5 md:mb-6">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-label text-[10px] font-bold uppercase tracking-widest text-[#747872]">
                  {article.date}
                </span>
                <ArrowRight
                  size={20}
                  className="text-[#000000] group-hover:translate-x-1 transition-transform duration-200"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pb-16 sm:pb-20 md:pb-24">
        <motion.div
          className="bg-[#0f1f12] rounded-xl p-8 sm:p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#c8960c]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 md:w-1/2">
            <span className="text-[#c8960c] font-label font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              STAY AHEAD
            </span>
            <h2 className="text-white font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Curated intelligence, delivered weekly.
            </h2>
            <p className="text-[#768976] text-base sm:text-lg max-w-md">
              Join 10,000+ industry leaders receiving our exclusive analysis on
              the intersection of media, tech, and design.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-1/3">
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-md py-4 px-6 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#c8960c] transition-all"
              />
              <button className="bg-[#c8960c] text-white font-label font-bold py-4 rounded-md uppercase tracking-widest hover:bg-[#b07d0a] transition-colors cursor-pointer">
                Subscribe Now
              </button>
              <p className="text-[10px] text-[#768976]/40 text-center uppercase tracking-widest">
                NO SPAM. JUST INSIGHTS. UNFOLLOW ANYTIME.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {SECONDARY_ARTICLES.map((article, i) => (
            <motion.article
              key={article.title}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 group cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="w-full sm:w-2/5 aspect-square overflow-hidden rounded-lg shrink-0 relative">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col py-1 sm:py-2">
                <span className="text-[10px] font-label font-bold uppercase tracking-widest text-[#c8960c] mb-3 sm:mb-4">
                  {article.category}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 leading-tight group-hover:text-[#0f1f12] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#434842] text-sm line-clamp-2 mb-5 sm:mb-6">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-xs font-label font-bold border-b border-[#000000] pb-1">
                    {article.cta}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
