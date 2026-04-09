"use client";

import Image from "next/image";
import {
  TrendingUp,
  MousePointerClick,
  FileText,
  Share2,
  Sparkles,
  Globe,
  Cpu,
  ArrowRight,
  LayoutTemplate,
  Mail,
  Code2,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
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

const ADVANTAGES = [
  {
    icon: Globe,
    title: "Global Scale",
    body: "Active presence in 14 markets, providing localized insights with global orchestration capabilities.",
  },
  {
    icon: Cpu,
    title: "Proprietary Technology",
    body: "Our internal AI engine, IKON-OS, processes millions of signals to predict market shifts before they happen.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 sm:pt-32 md:pt-28">
      <section className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto mb-12 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.span
              className="font-label text-[#c8960c] text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-6 block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Capabilities Overview
            </motion.span>
            <motion.h1
              className="font-heading text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[5rem] font-bold leading-[1.1] tracking-tighter text-[#000000]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Architecture for Growth.
            </motion.h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <motion.p
              className="text-[#434842] text-base sm:text-lg leading-relaxed max-w-sm"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We don&apos;t just run campaigns. We build scalable systems that
              transform market presence into category dominance.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="mt-10 sm:mt-12 md:mt-16 relative overflow-hidden rounded-xl h-[260px] sm:h-[360px] md:h-[512px]"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA74tcPE1Px2PB6q1VNwjx5MVX8bOWnXTESM_WV6L9JsfPujHZxvaqJoGRssJ3t04yjebz4HgQZYWjCJxXdbUy5m9U03tw6tlED15iPcF-4Of71ez2A_KHcXX_R0fiCQlCZrKS1Nvd2vEzlh3oDVKcD3stzGhZXcS_9WCO7JjS7aA5rNA0E5RaCWg8SB3uBwxbpx3IQlubkKMuzK-MMQq_8qd6Q7TgaYKOij6NFwsRmwvkgosQN3fbYgEmQASnCKbe50W8li6dhk6c"
            alt="Interior of a modern high-end architectural office with minimalist concrete walls and large floor-to-ceiling windows"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#000000]/20" />
        </motion.div>
      </section>

      <section className="bg-[#f3f4f5] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="mb-10 sm:mb-14 md:mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-4 text-[#000000]">
              Core Competencies
            </h2>
            <div className="h-px w-24 bg-[#c8960c]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className={`p-6 sm:p-8 md:p-10 rounded-xl editorial-shadow group hover:-translate-y-1 transition-transform duration-300 ${
                    service.dark ? "bg-[#0f1f12] text-white" : "bg-white"
                  }`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.15}
                >
                  <Icon
                    size={32}
                    className={`mb-6 ${
                      service.dark ? "text-[#c8960c]" : "text-[#0f1f12]"
                    }`}
                  />
                  <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed text-sm sm:text-base ${
                      service.dark ? "text-[#768976]" : "text-[#434842]"
                    }`}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest transition-colors ${
                      service.dark
                        ? "text-[#c8960c] hover:text-white"
                        : "text-[#000000] hover:text-[#c8960c]"
                    }`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="font-label text-[#c8960c] text-xs sm:text-sm uppercase tracking-[0.3em] mb-4 sm:mb-6 block">
                The Ikon Advantage
              </span>
              <h2 className="font-heading text-[1.9rem] sm:text-[2.6rem] md:text-[3rem] lg:text-5xl font-bold mb-8 sm:mb-10 leading-tight text-[#000000]">
                Why the world&apos;s most ambitious brands choose IKON.
              </h2>
              <div className="space-y-8 sm:space-y-10">
                {ADVANTAGES.map((adv, i) => {
                  const Icon = adv.icon;
                  return (
                    <motion.div
                      key={adv.title}
                      className="flex gap-5"
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i * 0.3}
                    >
                      <div className="shrink-0 w-11 h-11 bg-[#f3f4f5] rounded-full flex items-center justify-center">
                        <Icon size={20} className="text-[#0f1f12]" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base sm:text-lg font-semibold mb-2">
                          {adv.title}
                        </h4>
                        <p className="text-[#434842] text-sm sm:text-base">
                          {adv.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6 relative pb-10 sm:pb-12"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="aspect-square rounded-xl overflow-hidden mt-10 sm:mt-12 relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBH5CK99MhG9VWmrZ8R0AUTxTG7DCJgDJIYbvl_sXy71tEzjO_vUs6CXx3V64zxZoNhz8rkytpGdpJSkHaA1dBSkzv3TY0OPoqoVdjfkooneZrfCUG2TG1--25RD9M4EHJrUS8EFLAz0lI6TPsSaAPTGmGGNptTh9bLjCd2Far8gOukqBixDtBjycdjJdA5Lqad36A5sImbK9ckd3POokuqbmt-VQUfJx4G_tYeULY--8ijzz9MhIzlmu3cWbfiLdPvGceE0VzFbk"
                  alt="Abstract visualization of data flowing through digital networks with glowing light paths"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiPf5qM_ZP9hqkCe46sDdYGPJmwsgo_WFIAE4rDBu-m3v46YXLe9nfvqf3TOcO5CcR_MOTvUbO2ODPKHd_BghTjkO1W4QJt5P-o7xUh2HsjLUCSeu4XyIfi8WNmfffqQTiASW5wkNuaw2wok_vjYFd7kPHgGFwyvR-vgBRlR4KTvmClVkK9Cze-W_mUO6MUuzymBVdAH5hkJxcq6m1EkjZ5ISiHY8JzdumTFlbaNPIssqSJHonQxVOTPjlizvwWTKMfT7-sKo6kAo"
                  alt="Global map showing interconnected nodes across continents in a dark high-contrast editorial style"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-[#c8960c] rounded-xl flex items-center justify-center p-5 sm:p-7 editorial-shadow">
                <p className="font-heading text-white font-bold text-center leading-tight text-sm sm:text-base">
                  12+ Years of Market Mastery
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto forest-gradient rounded-xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              className="font-heading text-[1.8rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Ready to architect your next phase of growth?
            </motion.h2>
            <motion.p
              className="text-[#b8ccb7] text-base sm:text-lg mb-8 sm:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Join a curated list of global leaders who have redefined their
              categories through IKON Media.
            </motion.p>
            <motion.button
              className="bg-[#c8960c] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-label text-xs sm:text-sm uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer w-full sm:w-auto"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book a Strategy Call
              </Link>
            </motion.button>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c8960c]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />
        </div>
      </section>
    </main>
  );
}
