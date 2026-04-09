"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Award,
  BookOpen,
  Network,
  Search,
  BadgeCheck,
  DollarSign,
  ArrowRight,
  ChevronRight,
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

const PILLARS = [
  {
    icon: Award,
    title: "Thought Leadership",
    body: "Positioning your executives as the definitive voices in your industry. We produce whitepapers and opinion pieces that don't just follow the conversation — they start it.",
    cta: "Explore Methodologies",
    span: "md:col-span-8",
    dark: false,
    large: true,
  },
  {
    icon: BookOpen,
    title: "Editorial Excellence",
    body: "Precision-engineered copy that reflects the sophistication of your brand. Every comma has a purpose; every sentence serves the brand.",
    cta: null,
    span: "md:col-span-4",
    dark: true,
    large: false,
  },
  {
    icon: Network,
    title: "Multi-Channel",
    body: "Unified storytelling across LinkedIn, newsletters, and long-form publications.",
    cta: null,
    span: "md:col-span-4",
    dark: false,
    large: false,
  },
];

const BENEFITS = [
  {
    icon: Search,
    title: "SEO-Driven Authority",
    body: "Content optimized for semantic search intent, ensuring you own the high-intent keywords that matter to your bottom line.",
  },
  {
    icon: BadgeCheck,
    title: "Unshakable Brand Authority",
    body: "Building a fortress of credibility that makes the sales process easier and shortens the closing cycle.",
  },
  {
    icon: DollarSign,
    title: "Precision Lead Generation",
    body: "Strategic calls-to-action integrated seamlessly into high-value content to capture prospect intent.",
  },
];

const WORKFLOW = [
  {
    num: "01",
    title: "Strategic Audit",
    body: "Analyzing current assets, competitor gaps, and identifying high-yield narrative opportunities.",
  },
  {
    num: "02",
    title: "Topic Clustering",
    body: "Building topical authority through pillar content and supporting clusters for SEO dominance.",
  },
  {
    num: "03",
    title: "Production",
    body: "Editorial-grade creation including ghostwriting, design, and data visualization.",
  },
  {
    num: "04",
    title: "Promotion",
    body: "Multi-channel distribution strategy to ensure the right eyes land on the content.",
  },
];

const PORTFOLIO = [
  {
    title: "Fintech Vision 2025",
    tag: "Whitepaper • Production & Distribution",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB18bOeA52bYVLYkZ2uoqNcHxjt35Dhn6N25MhIk9N0-VHzUDMgci6BvabmP8ZoIWvfNc5mjOWCnunPpHn1rKH67X1IfIkM6WUTExKPFepHkHCqse7YlH3jOZPcU8W_3PwkeLO-kjnA2sDsNi36nku6-15MFX6id2IXMwIIQU72UcYFmjGA7BpF14ergJNX7SSiJ5lxCCelUa8CLtTcn893jOHkx955XN9B7jTMEkwzVUDHnQkTvXR1GWoGH-_Cz_T83FO51zWND-M",
    alt: "Monochrome close-up of a premium architectural magazine layout",
  },
  {
    title: "The AI Ethics Audit",
    tag: "Thought Leadership Series • Content Strategy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuANnop1Dz1n_x6rIHnCC6IR3I16tl8fZW4KDVmhSj05P6kNJHWJ8VxD2gfXsfFdmpEENMcnpPJWIcn5LhhnqEUuFqvb-9mFrxklVxIp83cNzNmenL2mz_wwaCj2xUmiqZveTzan-Q8GcdKQ-zJQsedJHCWIQZyEQIoHI-DW76RhcRc0ZYAIKwIWqRjE0-vbZWK718gAhjwdqe1oqn6ID7ZCwSlEAxzQEglteui9rAac5vBGP4eh6tgI5DUVkGzdtzqXn35U4Say_a4",
    alt: "Overhead view of a creative workspace with high-end designer stationery",
  },
  {
    title: "Sustainable Supply Chains",
    tag: "Data-Driven Research • Editorial Design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtG63LrO7NOTzGJEosp_Bn4alJGVcNiLeGkGhVjmutNxJp3ZS8LAf8ZopodPGfO7Kf53UO7lQX8og4uYApIcKETaULnhKJJ0mx09-GH9ePqBVhSrRhiZprL6FTz5KMkQi5MBOEKST1_67d5l-TemldkVEFxH91GD7akwDTqwzFdMlp38oeQz5YnFMZvP7eACZzcsgCK54JC1spnqxoNbvalE9ngPYbFpbsQ0x7F15cZNH110NayRM06xMezLW9yxyjKN9u1xe6-GQ",
    alt: "Macro photo of textured recycled paper with minimalist embossed branding",
  },
];

const PRICING = [
  {
    name: "Growth Catalyst",
    desc: "Core monthly content & SEO",
    price: "$4.5k",
    unit: "/mo",
  },
  {
    name: "Market Authority",
    desc: "Deep-dive reports & multi-channel",
    price: "$8.0k",
    unit: "/mo",
  },
  {
    name: "Enterprise Global",
    desc: "Full ecosystem & translation",
    price: "Custom",
    unit: null,
  },
];

export default function ContentMarketingPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="pt-24 sm:pt-32">
      <section className="relative px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.span
              className="uppercase tracking-[0.2em] text-[#768976] font-semibold mb-6 block text-sm"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Editorial Excellence
            </motion.span>
            <motion.h1
              className="font-heading text-[2.8rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[1.1] font-bold text-[#000000] tracking-tight mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              The Art of Strategic Storytelling
            </motion.h1>
            <motion.p
              className="font-body text-base sm:text-lg text-[#434842] leading-relaxed max-w-xl mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We transform brand messaging into authoritative thought
              leadership. Beyond words, we craft editorial-grade narratives that
              command attention and drive measurable growth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button
                className="bg-[#0f1f12] text-white px-8 sm:px-10 py-4 rounded-md font-semibold text-sm hover:opacity-90 transition-all cursor-pointer w-full sm:w-auto"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
              >
                Begin Your Narrative
              </button>
              <button className="bg-transparent border border-[#c3c8c0]/30 text-[#000000] px-8 sm:px-10 py-4 rounded-md font-semibold text-sm hover:bg-[#f3f4f5] transition-all cursor-pointer w-full sm:w-auto">
                View Our Portfolio
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              className="w-full relative aspect-[4/5] rounded-xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt6lBTXd6n3gUI4VcyaH0xsvScdrNTMr_1pJVtIs-82FbsXHea9t6PqKYWgtaoDYINJBJVvanyzzJqTHqNJRyAQHdKiEyM4BifmHupstp1SgQxmZFKZsgSThIPZwf06VPWmzDWj1rHl1vFoaONf_kg7ON8Dq2OhL-tCOIj6lRvjJkqmo13Am2tCNMVRpMbGLcBcyTxFdbBF97ItUjJoQmA07TQcZB0CxxWhGKO8oXW4IzkxdszQpMB0SvL1nR9nMMgRCTSKYCHWQI"
                alt="Premium close-up of a high-end fountain pen resting on a thick textured paper notebook"
                fill
                className="object-cover grayscale contrast-125"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-[#c8960c] p-8 rounded-xl max-w-[240px]"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <p className="font-heading text-3xl font-bold text-white leading-tight">
                142%
              </p>
              <p className="font-body text-xs uppercase tracking-wider text-white mt-2 font-bold">
                Avg. Increase in Organic Authority
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-semibold text-[#000000]">
              Strategic Core Pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className={`${pillar.span} ${
                    pillar.dark
                      ? "bg-[#0f1f12] text-white"
                      : "bg-white group hover:shadow-xl transition-shadow"
                  } p-8 sm:p-12 rounded-xl flex flex-col justify-between min-h-[380px]`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <div>
                    <Icon
                      size={36}
                      className={`mb-6 ${
                        pillar.dark ? "text-[#c8960c]" : "text-[#0f1f12]"
                      }`}
                    />
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                      {pillar.title}
                    </h3>
                    <p
                      className={`leading-relaxed text-sm sm:text-base ${
                        pillar.dark ? "text-[#768976]" : "text-[#434842]"
                      }`}
                    >
                      {pillar.body}
                    </p>
                  </div>
                  {pillar.cta && (
                    <div className="mt-8 flex items-center text-[#0f1f12] font-semibold group-hover:translate-x-2 transition-transform">
                      {pillar.cta} <ArrowRight size={18} className="ml-2" />
                    </div>
                  )}
                </motion.div>
              );
            })}

            <motion.div
              className="md:col-span-8 bg-[#0f1f12] p-8 sm:p-12 rounded-xl flex items-center justify-between"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.6}
            >
              <div className="max-w-md">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">
                  Content Ecosystems
                </h3>
                <p className="text-[#768976] text-sm sm:text-base">
                  We build interconnected content engines that feed your sales
                  funnel continuously.
                </p>
              </div>
              <div className="hidden lg:block w-32 h-32 opacity-20 shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrSsR8UnXJ6pYw_ujYJzlvT83hjKoPyblPo97CnMYDoQpgTjbGF1nTH6QUteeUpLx9ysjhbsgYMd32LxsH_XeTUNIEZGbjLzGS-wRTBiW5NhDQCpS7MT8c3H5wCIrUM_DaXs-rJNJjO8pWlZmCuOYeIO8iFC51D2d6rPOfcVbbOpXQjyWre56AbKJyIjRTtYUFb-NRfJJDjz7EPCreB4qxajA215lXGdS-UOxZ28d0zOdAdVyv6wdwWz1M75F0OopiGS2mcTAsqBk"
                  alt="Abstract geometric glass structure"
                  fill
                  className="object-cover rounded-full"
                  sizes="128px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-bold text-[#000000] mb-12">
              Performance-Driven Results
            </h2>
            <div className="space-y-12">
              {BENEFITS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    className="flex gap-6"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.2}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#d4e8d3] flex items-center justify-center">
                      <Icon size={18} className="text-[#0f1f12]" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold mb-2">
                        {b.title}
                      </h4>
                      <p className="text-[#434842] leading-relaxed text-sm sm:text-base">
                        {b.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-video"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnQ7sNUebwBG2QR9t03McahNeGOM8OZe7ydXgeBzhMOsHBNWvfgideMbnewNDabhdG7X3whUCEhHx85pGY44Pn666UsC6t8Wol_uqRgsmzdR_btYMWrSXBVrOcyuCjesO0WJd-urig7AghA85YL5HT4IFpy-E-uEkz3z-u3Xi1uWwjI4-tidLWPPxog4eoMwP9ZglkEkcXY3blzYUdXJ2n2BQWPqztUeWTgu_otVs0FIyTgPicB00ISIesehKIIuB62g4t3Rq4pYs"
              alt="Clean minimalist dashboard showing upward-trending financial data on a large monitor"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#000000]/20" />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0f1f12] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div
            className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-bold mb-6">
              The High-Fidelity Lifecycle
            </h2>
            <p className="text-[#768976] text-sm sm:text-base">
              A rigorous methodology designed for enterprise-scale reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {WORKFLOW.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <div className="text-4xl font-black text-[#c8960c]/20 mb-6 group-hover:text-[#c8960c] transition-colors">
                  {step.num}
                </div>
                <h4 className="font-heading text-lg font-bold mb-4">
                  {step.title}
                </h4>
                <p className="text-sm text-[#768976] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute -right-24 -bottom-24 w-[600px] h-[600px] bg-[#c8960c] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f8f9fa]">
        <div className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest text-[#768976] font-semibold text-sm">
              Editorial Gallery
            </span>
            <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-3xl font-bold mt-4 text-[#000000]">
              Selected Case Works
            </h2>
          </motion.div>
          <button className="flex items-center font-bold text-sm uppercase tracking-tighter hover:opacity-70 cursor-pointer whitespace-nowrap">
            See All Projects <ChevronRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="overflow-x-auto pb-12 px-4 sm:px-6 md:px-12 no-scrollbar">
          <div className="flex gap-8 sm:gap-12 w-max">
            {PORTFOLIO.map((item, i) => (
              <motion.div
                key={item.title}
                className="w-[380px] sm:w-[450px] group cursor-pointer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
              >
                <div className="aspect-[3/4] bg-[#f3f4f5] rounded-lg overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 380px, 450px"
                  />
                </div>
                <h5 className="font-heading text-lg sm:text-xl font-bold mb-2">
                  {item.title}
                </h5>
                <p className="text-[#434842] text-xs sm:text-sm uppercase tracking-widest">
                  {item.tag}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#f3f4f5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              className="bg-white p-10 sm:p-16 rounded-2xl"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-8 text-[#000000]">
                Strategic Partnership
              </h3>
              <div className="space-y-6 mb-12">
                {PRICING.map((tier, i) => (
                  <div
                    key={tier.name}
                    className={`flex justify-between items-end pb-4 ${
                      i < PRICING.length - 1
                        ? "border-b border-[#c3c8c0]/10"
                        : ""
                    }`}
                  >
                    <div>
                      <p className="font-bold text-base sm:text-lg">
                        {tier.name}
                      </p>
                      <p className="text-sm text-[#434842]">{tier.desc}</p>
                    </div>
                    <p className="text-2xl font-black text-[#000000]">
                      {tier.price}
                      {tier.unit && (
                        <span className="text-xs font-medium text-[#434842]">
                          {" "}
                          {tier.unit}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#0f1f12] text-white py-5 rounded-md font-bold uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer">
                Download Detailed Pricing
              </button>
            </motion.div>

            <motion.div
              className="pt-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-[1.75rem] sm:text-2xl md:text-[2.75rem] font-bold leading-tight text-[#000000] mb-8">
                Ready to Elevate Your Brand Narrative?
              </h2>
              <p className="text-base sm:text-lg text-[#434842] mb-12 leading-relaxed">
                Our strategists are ready to audit your existing content and
                present a vision for your market dominance. Let&apos;s create
                something that lasts.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Business Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-none p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f1f12] placeholder:text-[#434842]/40 text-sm sm:text-base"
                />
                <button className="w-full bg-[#c8960c] text-white py-5 rounded-md font-bold text-base sm:text-lg hover:brightness-105 transition-all cursor-pointer">
                  Schedule Consultation
                </button>
              </div>
              <p className="text-xs text-[#434842]/60 mt-6 text-center italic">
                Response time typically under 4 business hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
