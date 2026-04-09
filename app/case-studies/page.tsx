"use client";

import { useState } from "react";
import { SlidersHorizontal, BarChart2, Rocket, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

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

const FILTERS = ["All Work", "Fintech", "Global Retail", "SaaS", "Healthcare"];

const DEEP_DIVE_POINTS = [
  {
    icon: BarChart2,
    title: "The Challenge",
    body: "Stagnant growth in a saturated market with rising customer acquisition costs.",
  },
  {
    icon: Rocket,
    title: "The Strategy",
    body: "A 6-month aggressive SEO and programmatic advertising overhaul based on proprietary data models.",
  },
];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  return (
    <main className="pt-24">
      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl">
          <motion.span
            className="text-[#c8960c] font-label text-xs font-bold uppercase tracking-[0.2em] mb-4 block"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Proven Results
          </motion.span>
          <motion.h1
            className="text-[2.8rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem] font-heading font-bold text-[#000000] tracking-tighter leading-[0.9] mb-6 md:mb-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Stories of <span className="text-[#c3c8c0] italic">Scale</span> and
            Authority.
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#434842] max-w-2xl font-body leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We don&apos;t just execute campaigns; we architect growth ecosystems
            for brands that demand a seat at the head of the table.
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-10 md:mb-12">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 pb-8 border-b border-[#c3c8c0]/10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <div className="flex flex-wrap gap-3 md:gap-4">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#0f1f12] text-white"
                    : "bg-[#f3f4f5] text-[#434842] hover:bg-[#e7e8e9]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[#434842]">
            <SlidersHorizontal size={18} />
            <span className="text-xs sm:text-sm font-label uppercase tracking-widest font-semibold">
              Filter Services
            </span>
          </div>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <motion.div
            className="md:col-span-8 group cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <div className="relative overflow-hidden rounded-xl mb-5 md:mb-6 bg-[#edeeef] aspect-[16/9]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDttJ7O2faHZcFOaTiLCZshyoltwHBU9gKfImiqL30E3f6F9KgOwo9CFL94KezMR66fhVnL-Uj6AfCzO1HN08QOxwXN3VI_PbjLuobF4WRFslV1gVfJlYTiK_nA5JOxOLD50rhZp_7md-RbeCe4wIO8gVi6tXTQ4fnq2hBgZjHSX6Dcz-rj4IqzgAyQQ0dxn4eVPtVGPLGxK94tNmZyOJnE9qG5yCVc8fhzhgu9DcUpxPGP06StIp8tR-LX0XK-q-OxjO7-LYEJgEM"
                alt="Futuristic dark finance office with glowing data screens"
                fill
                className="object-cover  group-hover:scale-105 transition-all duration-700"
              />
              <div
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#0f1f12] text-[#c8960c] font-heading font-bold text-xl sm:text-2xl md:text-3xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.24)" }}
              >
                +412% ROAS
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[#c8960c] font-label text-xs font-bold uppercase tracking-widest mb-2 block">
                  Fintech &amp; Digital Banking
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight mb-2 group-hover:text-[#0f1f12] transition-colors">
                  NeoBank Global Expansion
                </h3>
                <p className="text-[#434842] text-sm sm:text-base max-w-lg">
                  Scale strategy across 12 European markets through
                  hyper-personalized PPC and behavioral content automation.
                </p>
              </div>
              <ArrowRight
                size={32}
                className="text-[#c3c8c0] group-hover:text-[#000000] group-hover:translate-x-2 transition-all shrink-0 mt-1"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-4 group cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <div className="relative overflow-hidden rounded-xl mb-5 md:mb-6 bg-[#edeeef] aspect-[4/5]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoY9jC8iq-0q4d-iCY4WRb_CSUnzofCeK-39XlCeWZnwggMbOEDK4sG3xq2B70QLMEFR-E1Fh8HohsMJZHKbo3ClBp8ErRheIt5vdZaTxdYJ7Yv2uO8nD5Kiv4NbzMpRCpsZLTLfofemG0MDIt-3T0aHQnqHz-XlP6n0rHNcBs0aYmRp2G4kzESpjiDvLCR0hZZHj73FAUzwVCtDQIBnQNdDhdVN9P_YGzTj3FQFf6bDvRnJ1q_WCW0Csk8dvonibKCs1MK_oOP6E"
                alt="Abstract visualization of cloud data networks in deep forest green and gold"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <span className="text-[#0f1f12] font-heading font-bold text-lg sm:text-2xl">
                  +85% Trial Conversion
                </span>
              </div>
            </div>
            <div>
              <span className="text-[#c8960c] font-label text-xs font-bold uppercase tracking-widest mb-2 block">
                SaaS / Enterprise
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight mb-2">
                CloudScale Intelligence
              </h3>
              <p className="text-[#434842] text-sm">
                Full-funnel SEO renovation and content authority building in the
                crowded AI infrastructure space.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-5 group cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="relative overflow-hidden rounded-xl mb-5 md:mb-6 bg-[#edeeef] aspect-square">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-rZgnKFFSqX34pL6Iho4Hxh0hGi74UEskRVokNHOCs3nhfMGafq51DP3qNUhvMFNObWKwEq3sGIRf6H90tkP6D62N7AsjAZNj1RtOoCnnJZTlc2LKyQMBu7gnLaEYuyOEpA05VNZUzznoR0EqUqa8oC4_Aored3-knwtV-GuSYqP55m32FkauLwqnOLjCrQ4lz3Us2ll3A2sSC02rvpJnXKb0pBZI9z8wtUrbWs_Iw02WK7QgAY9xAFgewAWEIu_CbY8wmGKkYf8"
                alt="High-end luxury retail store interior with dramatic lighting"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div
                className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-[#0f1f12] text-white font-heading font-bold text-xl sm:text-2xl px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.24)" }}
              >
                +220% Revenue
              </div>
            </div>
            <div>
              <span className="text-[#c8960c] font-label text-xs font-bold uppercase tracking-widest mb-2 block">
                Global Retail / E-commerce
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight mb-2">
                Maison de Luxe
              </h3>
              <p className="text-[#434842] text-sm">
                Luxury brand repositioning for Gen-Z markets through editorial
                social media and high-end influencer synergy.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7 group cursor-pointer"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
          >
            <div className="relative overflow-hidden rounded-xl mb-5 md:mb-6 bg-[#edeeef] aspect-[16/9]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN6SYv04OnQE_5U8YG58n0VlfQCk3BPVnbwdutPweqvjN6Ssrmywdib6T4qLBzPJ1ahqpsMCuUijTzPo7zpJYAJUM4vzy4TnJCl8K2GdywgfwzhsThMIKpCHksD0_TRUis3u5SvZQFNoa-DuUEOlGzh5yF90XjiwO48xzOdC0deyJcayr1n5QNs8Z0E6JM3ANhBalrmpYZ5qFNsIhFYcszTAXlwpqnfMf6j7Bvy4wVadp2dwDfdUUtUOGKAz9KEt8jTn9CTnuhbPE"
                alt="Ultra modern medical laboratory with glass walls and scientific equipment"
                fill
                className="object-cover  group-hover:scale-105 transition-all duration-700"
              />
              <div
                className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#c8960c] text-[#0f1f12] font-heading font-bold text-xl sm:text-2xl md:text-3xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              >
                -40% CAC
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[#c8960c] font-label text-xs font-bold uppercase tracking-widest mb-2 block">
                  HealthTech
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight mb-2">
                  VitalPoint Health
                </h3>
                <p className="text-[#434842] text-sm sm:text-base max-w-md">
                  Omnichannel paid media strategy focused on high-intent lead
                  generation for premium health services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-[#c8960c] font-label text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 block">
                Deep Dive
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 md:mb-10">
                How we took Apex Global from obscurity to{" "}
                <span className="italic text-[#c3c8c0]">Market Leader</span>.
              </h2>
              <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                {DEEP_DIVE_POINTS.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="flex gap-4 md:gap-6 items-start"
                    >
                      <div className="bg-[#0f1f12] text-white p-3 rounded-lg shrink-0">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg sm:text-xl mb-1">
                          {point.title}
                        </h4>
                        <p className="text-[#434842] text-sm sm:text-base">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button className="group flex items-center gap-4 text-[#000000] font-heading font-bold text-base sm:text-lg cursor-pointer">
                Read the full case study
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </motion.div>

            <motion.div
              className="relative"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className="aspect-square bg-white rounded-2xl overflow-hidden p-6 sm:p-8 relative"
                style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.12)" }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeUVmy2I2EWtaeTORp47szqrlwXOZcb9UAujMjd2kOsPakPwCywdILQ5Nv_pTPPlfudw_kmwaRlOCCP-8-YMZBn_Bvl2Le0oA-K0waryxY925sQb9zZ_kETtm6mwnETLXUkwcsD1HPjCSXMDTnVD10QJqcJxtSq4tm_IyWLSKToZnVMxfBP29ROuUgfmUKPWUX1PVv2Vtn2pYI_Hc0WwD6WDB77ligkixuK2H5rGvb66LLgr5uOR0-nAt525sCBrFHefFKfFxlY10"
                  alt="Close up of sleek dashboard on a tablet showing positive business growth charts"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div
                className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-[#0f1f12] text-white p-7 sm:p-10 rounded-xl hidden md:block"
                style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
              >
                <div className="text-4xl sm:text-5xl font-black mb-2 text-[#c8960c]">
                  1.2M+
                </div>
                <div className="font-label text-xs uppercase tracking-widest opacity-70">
                  Organic Monthly Reach
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 max-w-[1440px] mx-auto text-center">
        <motion.div
          className="forest-gradient p-10 sm:p-16 md:p-24 lg:p-32 rounded-[2rem] text-white relative overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-7 md:mb-10 leading-tight">
              Ready to become our next{" "}
              <span className="text-[#c8960c]">Success Story</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#b8ccb7] mb-8 md:mb-12 font-body max-w-xl mx-auto opacity-80">
              Let&apos;s discuss how our editorial-first growth methodology can
              transform your brand&apos;s digital presence and bottom line.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="bg-[#c8960c] text-[#0f1f12] px-10 sm:px-12 py-4 sm:py-5 rounded-md font-heading font-bold text-base sm:text-lg hover:bg-white transition-colors w-full sm:w-auto cursor-pointer">
                Work With Us
              </button>
              <button className="border border-white/20 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-md font-heading font-bold text-base sm:text-lg hover:bg-white/10 transition-colors w-full sm:w-auto cursor-pointer">
                View Pricing
              </button>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8960c]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#d4e8d3]/5 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </section>
    </main>
  );
}
