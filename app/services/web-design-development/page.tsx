"use client";

import Image from "next/image";
import {
  Zap,
  BarChart2,
  Paintbrush,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
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
    icon: Zap,
    title: "Performance-first engineering",
    body: "Sub-second load times achieved through edge computing and asset optimization.",
  },
  {
    icon: BarChart2,
    title: "Conversion-optimized UX",
    body: "Data-driven user journeys designed to reduce friction and maximize engagement.",
  },
  {
    icon: Paintbrush,
    title: "High-fidelity aesthetics",
    body: "Art-directed digital experiences that command authority and reflect brand prestige.",
  },
];

const CAPABILITIES = [
  { num: "01", title: "UX/UI Design" },
  { num: "02", title: "Development" },
  { num: "03", title: "Maintenance" },
];

const TECH_STACK = [
  { name: "Next.js", label: "The Framework" },
  { name: "Headless CMS", label: "The Content" },
  { name: "Tailwind CSS", label: "The Styling" },
  { name: "GSAP", label: "The Motion" },
  { name: "Vercel", label: "The Infrastructure" },
];

export default function WebDesignPage() {
  return (
    <main className="pt-24">
      <section className="relative flex items-center overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
          <div className="z-10">
            <motion.span
              className="inline-block text-[#c8960c] font-label text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Service Excellence
            </motion.span>
            <motion.h1
              className="font-heading text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.1] font-extrabold text-[#000000] mb-6 sm:mb-8 tracking-tighter"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Digital Architecture for the{" "}
              <span className="italic font-normal">Modern Enterprise</span>.
            </motion.h1>
            <motion.p
              className="font-body text-base sm:text-lg text-[#434842] max-w-lg mb-8 sm:mb-10 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We build high-performance web ecosystems that merge technical
              rigor with aesthetic precision. Your digital presence, engineered
              for global scale.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <button className="w-full sm:w-auto bg-[#0f1f12] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-label text-sm uppercase tracking-widest hover:bg-black transition-colors cursor-pointer">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                </Link>
              </button>
              <button className="flex items-center gap-2 group text-[#000000] font-label text-sm uppercase tracking-widest cursor-pointer">
                Our Process
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[420px] sm:h-[520px] lg:h-[600px] w-full rounded-xl overflow-hidden"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="bg-[#e7e8e9] relative overflow-hidden border-r border-[#c3c8c0]/20">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwtZ6SPWnHTwZrCJgObrfN2AihUJ2pM5bDie4frsF5BL3okjpvH_ujRWktqVVOsJpJTKlxZdjOmYPXZr3Lwp6FhT7a2uWTWrUn3km5Ex05i91v7gGMG5mfmTWQo2ERXlwRqMFjHZ6g-VsHBORbZFnXhC52_f4N6uKdGa92_EdtW-WnsWYL0gv45mCtbyYW5KGPSbAoCDmYzt32-Ld5J_9qlmODDaqY0pUXg7mpt8gLpc3fWXbOWfo_htuR-ZtU00C-nPwQ_ApoXGk"
                  alt="Minimalist architectural wireframe"
                  fill
                  className="object-cover mix-blend-multiply opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-label uppercase tracking-widest text-[#747872] py-2 px-4 bg-white/50 backdrop-blur-md rounded-full">
                    Foundation
                  </span>
                </div>
              </div>
              <div className="bg-[#0f1f12] relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXDQthlJlrxmrxF64Je9jCrmNHB5wCIkOWOuPcHpsQmU8-rRI40y-gl-8SUiB55AMsDKNlNWuRDPcwgBgFNfbA97z1Nc3FsfaQq5JxiLqBUcDQQ31HjW4CYA6QDg5kMXyeKtpGrhzpjxhC-1Nzn0aHHIXyYnvVOy8hSM6MH_kyee0_hfOCDv9T-4YbBTIMbPhY5WkjbzN78WD99oK7TamxXz8EPvTTv2A_ebxiopMoNdEc1czTVVW7Pb3Oa1wEUfTkxmlNhWh5ges"
                  alt="Modern UI Design"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-label uppercase tracking-widest text-[#c8960c] py-2 px-4 bg-black/40 backdrop-blur-md rounded-full">
                    Evolution
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f3f4f5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="mb-12 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#000000] mb-4">
              Engineering Standards
            </h2>
            <div className="h-1 w-20 bg-[#c8960c]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white p-8 sm:p-12 rounded-xl flex flex-col justify-between aspect-square group hover:bg-[#0f1f12] transition-all duration-500 cursor-default"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <Icon
                    size={36}
                    className="text-[#c8960c] transition-colors"
                  />
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-white transition-colors text-[#000000]">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-[#434842] group-hover:text-[#768976] transition-colors">
                      {feature.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <motion.div
              className="w-full md:w-1/3"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 sm:mb-8 text-[#000000]">
                Our Core
                <br />
                Capabilities.
              </h2>
              <p className="text-[#434842] leading-relaxed text-sm sm:text-base">
                We provide end-to-end solutions from initial strategic discovery
                to long-term infrastructure maintenance.
              </p>
            </motion.div>

            <div className="w-full md:w-2/3 space-y-10 sm:space-y-16">
              {CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.num}
                  className="group cursor-default"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <div className="flex items-center justify-between border-b border-[#c3c8c0]/30 pb-6 sm:pb-8 transition-all group-hover:border-[#000000]">
                    <span className="font-label text-xs text-[#c3c8c0]">
                      {cap.num}
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#000000]">
                      {cap.title}
                    </h3>
                    <ArrowUpRight
                      size={24}
                      className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 forest-gradient text-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.h2
            className="font-label text-xs uppercase tracking-[0.5em] text-[#c8960c] mb-10 sm:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            The Ikon Tech Stack
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-24 opacity-60"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 sm:gap-4"
              >
                <span className="font-heading text-xl sm:text-2xl font-bold">
                  {tech.name}
                </span>
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-[#768976]">
                  {tech.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <motion.div
            className="bg-[#f3f4f5] rounded-xl overflow-hidden flex flex-col lg:flex-row"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-full lg:w-1/2 p-10 sm:p-16 lg:p-24 flex flex-col justify-center">
              <span className="font-label text-xs uppercase tracking-widest text-[#c8960c] mb-4 sm:mb-6">
                Success Stories
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-[#000000]">
                Revitalizing the Digital Hub for{" "}
                <span className="italic">Ventura Global</span>.
              </h2>
              <div className="flex gap-8 sm:gap-12 mb-8 sm:mb-12">
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tighter">
                    +40%
                  </p>
                  <p className="text-xs font-label uppercase tracking-widest text-[#434842]">
                    Conversion Rate
                  </p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-black text-[#000000] tracking-tighter">
                    -65%
                  </p>
                  <p className="text-xs font-label uppercase tracking-widest text-[#434842]">
                    Bounce Rate
                  </p>
                </div>
              </div>
              <p className="font-body text-sm sm:text-base text-[#434842] mb-8 sm:mb-10">
                How a complete site redesign increased conversion by 40% through
                intuitive UX restructuring and high-speed delivery.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-4 font-label text-sm uppercase tracking-widest text-[#000000] font-bold hover:gap-6 transition-all"
              >
                View Case Study
                <TrendingUp size={18} />
              </a>
            </div>
            <div className="w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgYwNdgEdnv5i-j7DPsetZmQ48yOjCnR8Ae6wwX-hs9GX6K9DWY8FOYxz1xUrTkOKCUTeQSE2OBHqZx0zaLPC4E5NcF58Ru_jekE37SKXDTYccm_GOOHoyJ1y8t7FdyYTrb6TXVyffnfFArJGl_7V8JYHF7jUr7-gGte61lfTs8TmVXpU8sWpCTYiyEmytESobOHHKNeJK_1QMW6gj0W2shtwz9sAQ9GNS8YLLIxGO39BaapvubeFyjLPKyTU5r8I5GpnZH6KpzkY"
                alt="Professional workspace with a high-end laptop displaying complex growth charts"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-[#0f1f12] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 text-center">
          <motion.h2
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Ready to build the future of your enterprise?
          </motion.h2>
          <motion.p
            className="text-[#768976] text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-xl mx-auto opacity-80"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Our team is ready to architect your digital transformation.
            Let&apos;s start the conversation today.
          </motion.p>
          <motion.button
            className="bg-[#c8960c] text-white px-10 sm:px-12 py-5 sm:py-6 rounded-md font-label text-sm uppercase tracking-[0.2em] font-bold hover:scale-105 transition-transform cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started Now
            </Link>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
