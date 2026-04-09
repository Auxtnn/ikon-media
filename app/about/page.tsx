"use client";

import { Target, Eye, Gem } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
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

const MVV = [
  {
    icon: Target,
    title: "The Mission",
    body: "To empower global brands with the precision of high-performance data and the soul of avant-garde design.",
    dark: false,
  },
  {
    icon: Eye,
    title: "The Vision",
    body: "To become the universal benchmark for digital authority, where every interaction is an intentional masterclass in user psychology.",
    dark: true,
  },
  {
    icon: Gem,
    title: "The Values",
    body: null,
    values: [
      "Uncompromising Quality",
      "Radical Transparency",
      "Data-Obsessed Creativity",
    ],
    dark: false,
  },
];

const LEADERS = [
  {
    name: "Julian Thorne",
    role: "Founder & CEO",
    bio: "Formerly Lead Strategy at Global Peak, Julian brings 15 years of market-defining insight to Ikon.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP-WRHh9sO2rplL6QFnTqN86wvaPx6gvdklVM91PkaYXbdKBftsAySobAV1bhp8ykgfYdD3YPUBx2RaqjwNI12SCny8Sbd-2ly9lcUaFHVxHA_qk9iiu7EQQbffOxGwotmvpwA5TOLaNQWGMi3_3Joe4Z6jnzWKDa6aaLfb-BueNaPGszYIKqFj9s2gc82yPx9d3l7Dy4M-hlT83Pt6eZUO6VKdJIkLxq-rBTldSLnmVBtadR518rcBcuHYsKAEUP3hWeWYKoVj48",
    alt: "Portrait of a male executive in a charcoal suit, minimalist grey background, studio lighting",
  },
  {
    name: "Elena Vance",
    role: "Creative Director",
    bio: "Award-winning designer focused on the intersection of sensory experience and digital utility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnpa5hhtfhZ1ejy7WUj4FaDCoRW2xJ9l81juDkVQlTcyyd5j1ze92p00iL7wFnm0d7d8hBxDJ9485woRpbYG_9EF2uDWoj3aXRcpExPTVvdBTS19P9QjlR6weiH55yHvtAJVG3tb_KFFPHCTdzROyBR8t4wqBK4DDPbfdPVSdcymXKhIAVoefzIXxMZL34Fw3klfkI3oQZ5jVaUBYUOrMtWR17FUpS7DvylWweGpVyT9B_Ykb-fcvahCCLAe2Nwce1WLJHGi8CapI",
    alt: "Portrait of a female creative director with stylish glasses, warm interior lighting",
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    bio: "Architect of Ikon's proprietary data engine, specializing in predictive user behavioral models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJSISIBjAGpUTP_FoxUb5X7dOE0d3TVigUmXuik5FK8PFGNTo0mv041r3J_GpP4j5PfQ2jMXTcII2Ev2I36FLihiOcpXCldAgP5-QOmLJxT-qIhj1jdgH2xwWnThZ7PCHBgi_ndfjMIJF32-TQhPV5xu3MoVzUULgzX5eKZkzLjXg6RI0S9JQ6fx3fN9QyqHlPuxLErkv0mefKDsk4cwYneBxqXuYpQow1qIkc1ZwGhc46i2NGrln-HyKL425uybmMePzgPWsPeLU",
    alt: "Portrait of a technical director, outdoor urban setting with blurred city background",
  },
  {
    name: "Sasha Reed",
    role: "Head of Growth",
    bio: "Scaling global brands through aggressive data-driven acquisition and lifecycle optimization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAozQHgDO1a_fDkY74GZ29WT16TgQwfQGYoeDmUEIP2f55S6G3KjkySygE2GoIIMTlEGXv47_gw19ZPGqK4JoAPqMbykGLz5vBaLS2-2XmIkOj-g0hlB9l5WBb6AmT6MN140EA_rGFg-dJjOg1aN-CER9_FZJYXCxwBLzH1cjoelhHvr3oyE4x2VhVOoC0nQE6AdFuvhuLN0LzZtmAO-67HGGzTGtnc8g7xhLiIaMR7lmIWEefV_T-3Wf7zx8USV4pc6ze_5owYB1w",
    alt: "Portrait of a head of growth, elegant professional attire, soft natural window light",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="px-4 sm:px-6 md:px-12 pt-16 sm:pt-20 md:pt-24 pb-16 sm:pb-20 md:pb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.span
              className="uppercase tracking-widest text-[#768976] font-semibold mb-4 md:mb-6 block text-xs sm:text-sm"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Our Genesis
            </motion.span>
            <motion.h1
              className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.1] font-heading font-extrabold tracking-tight text-[#000000] mb-6 md:mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              From Vision to{" "}
              <span className="text-[#768976]">Global Authority</span>
            </motion.h1>
            <motion.div
              className="max-w-xl space-y-4 md:space-y-6"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <p className="text-base sm:text-lg text-[#434842] leading-relaxed">
                Founded on the principle that design without data is merely
                decoration, IKON MEDIA was born to bridge the gap between
                creative intuition and empirical performance.
              </p>
              <p className="text-base sm:text-lg text-[#434842] leading-relaxed">
                What started as a boutique design lab in a loft has evolved into
                a global powerhouse, defining the visual and strategic language
                for the world&apos;s most ambitious brands. We don&apos;t just
                build websites; we architect digital legacies.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              className="aspect-[4/5] rounded-xl overflow-hidden bg-[#f3f4f5] relative"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWOWoa-vu9xWiBIFuPTW4L2s_NOELICn8kgIo3SgmvAJcqXzRHeGNipFyZd8gXKODhQ5su_ouAbk9PBPhrXAE90hwWkvXxP1dQ17XhcW5OT1ds0_z2p0lhdGj5EbOQRvo6hpQWAmSngvgHcqU6QJ2eK9JdvlyMHW8l946BuTAg0YtuCzil0RpCbk0tJ64UwYdz7BnnXQ80Vum6nev2vsPSZxWRnlfOn2oBnneqhH8abRUKYLEnpgqKJ6tWSh08gpUwwaOGOuIgVt8"
                alt="Modern minimalist office interior with floor-to-ceiling windows, sculptural furniture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 p-8 sm:p-12 forest-gradient text-white hidden lg:block rounded-xl max-w-xs"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <p className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                12+
              </p>
              <p className="text-xs sm:text-sm font-label uppercase tracking-widest opacity-70">
                Years of pioneering data-driven design
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {MVV.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className={`p-8 sm:p-10 md:p-12 rounded-xl transition-all duration-500 ${
                    item.dark
                      ? "bg-[#0f1f12] text-white md:scale-105 shadow-2xl"
                      : "bg-white group hover:shadow-lg"
                  }`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.3}
                >
                  <Icon
                    size={32}
                    className={`mb-6 md:mb-8 ${
                      item.dark ? "text-[#c8960c]" : "text-[#c8960c]"
                    }`}
                  />
                  <h3
                    className={`text-xl sm:text-2xl font-heading font-semibold mb-4 ${
                      item.dark ? "text-[#c8960c]" : "text-[#000000]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.body && (
                    <p
                      className={`leading-relaxed text-sm sm:text-base ${
                        item.dark ? "opacity-80 text-white" : "text-[#434842]"
                      }`}
                    >
                      {item.body}
                    </p>
                  )}
                  {item.values && (
                    <ul className="space-y-3 text-[#434842]">
                      {item.values.map((v) => (
                        <li
                          key={v}
                          className="flex items-center gap-2 text-sm sm:text-base"
                        >
                          <span className="w-1.5 h-1.5 bg-[#c8960c] rounded-full shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6 md:gap-8">
          <motion.div
            className="max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="uppercase tracking-widest text-[#768976] font-semibold mb-4 md:mb-6 block text-xs sm:text-sm">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#000000]">
              The Architects of Growth
            </h2>
          </motion.div>
          <motion.p
            className="text-[#434842] max-w-sm text-sm sm:text-base pb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            A collective of strategists, designers, and engineers united by a
            singular focus: global dominance for our partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              className="group"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.2}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-5 md:mb-6 bg-[#e7e8e9] relative">
                <Image
                  src={leader.image}
                  alt={leader.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-heading font-semibold">
                {leader.name}
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#c8960c] font-bold mb-3 md:mb-4">
                {leader.role}
              </p>
              <p className="text-sm text-[#434842] leading-relaxed transition-opacity duration-300">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-b sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="bg-[#0f1f12] rounded-2xl overflow-hidden relative min-h-[500px] sm:min-h-[600px] flex items-center"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-40">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlqe7_ae1c8FmgQu5j8dKDm2OYkPqhKXN0InBdp6IU7kcT9BGvqwL7jngOrMNLr2K0c1gyzBqLCEHcFl2yNDQoUpjutFqGWrmq2OCI1hKIPEhg41HcmG1hYlUkC_2DrmyFBaKKakJukfsaseUmsgWwRkkMcQBJFryKEEwVyJzZ7xp5X6E1FYF2sfT35IPb1J3wbHd__EM2jvWGbmSGPKvv3sUO-e3eXwNd8buIPksF543vQ3atR4QnedGPPT61PkgK9ZQ3abDG_B0"
              alt="Dynamic team collaboration in a modern design studio, candid laughter, creative energy"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f12] via-[#0f1f12]/80 to-transparent" />
          <div className="relative z-10 p-8 sm:p-12 md:p-24 max-w-2xl">
            <motion.span
              className="uppercase tracking-widest text-[#c8960c] font-semibold mb-4 md:mb-6 block text-xs sm:text-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Environment
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-6 md:mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              The Culture of Excellence
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-[#768976] mb-8 md:mb-12 leading-relaxed"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              We foster an ecosystem where high-stakes performance meets
              unbridled creative freedom. Our talent doesn&apos;t just work for
              Ikon; they define the future of the medium.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <button className="bg-[#c8960c] text-[#0f1f12] px-8 py-4 rounded-md font-label text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/contact">Book free consultation</Link>
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-md font-label text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all cursor-pointer w-full sm:w-auto">
                <Link href="/services">Our Services</Link>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
