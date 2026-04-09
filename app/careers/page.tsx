"use client";

import Image from "next/image";
import {
  Globe,
  BarChart2,
  GraduationCap,
  Heart,
  ArrowRight,
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

const CULTURE_PHOTOS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepSew93Sf3uLEGbcyqteeNln7I8gRNHS7grJCLs3U0AfHDQBNJmdoDG-0XunHDd-dddmLbvPHsgsbR9_C2oF2Mh_XwCs-K47BOZWaG2xQAjxa16Vpm8sRxbggfD0IUdtfBNZe7Z7TljmFp3ELWxO-up6-iZlx_pLHzv71ztBsHXozdu2VpmIrg2Ora0zJ1yZfep-8UJrwOvQVCQpA6HAd-9NWyvz1e26jtQXJu3pzF9m1lCbK7qqLk8tdZgPrB8JEldMT7dZo-SI",
    alt: "A diverse group of creative professionals collaborating around a large wooden table in a sunlit modern industrial office space",
    caption: "Collaborative Excellence",
    colSpan: "md:col-span-2 md:row-span-2",
    showCaption: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm0qMEwIbmHoATunb8XnfYLPtnGAMozefr4B05RikOek8oq118vnf8c1Lr_TUfEtfjqW8oTjhb2jLKZ_bYjHfP3mvxZJ6RQBIYeTVZVeE9Cx_ueOQ-T0PwaBuv5upWDHb7Rl1VqP66_o-SUmhKBDK0P3NE70R7GBpXvL_spOuC1iggKgr8O8iElBBgbLzNlIu9f-uxzAdSxgOp7rRmF6kelOfdd2LJgIin2EqINq2k9Ci2i9bJ3fZ7QjarM4rdDCQr94oRImo_bJM",
    alt: "Close-up of a diverse team member working on a high-end workstation in a brightly lit minimalist office environment",
    caption: null,
    colSpan: "md:col-span-1",
    showCaption: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiHc7a4z08C2i5KBJ0GniaXU3-IDxrQSL06CQqj_8MAspQIk-Vs9XrucjyfDbQNMhpjuCW_ctSHJOdNvtEm0bh1mrlXhyxSBkjYUQKPh0uQ_v2K2Z-ButWwitXEE3YZ9KzoybeR0HFt3xKwtTkvvbLtG8_PGSYXC4JxF1i1ZRauM-K4DGzrjP9wmf727BMyeXFkM4KZdgna9tkuMy3PPEgmfarLr22CyMWCGUO5YMQThzw_bSx1KrM-Jpzn0_ESiT7c0YTwnfu-XA",
    alt: "Strategic workshop session with team members standing before a glass wall covered in organized sticky notes and diagrams",
    caption: null,
    colSpan: "md:col-span-1 md:row-span-2",
    showCaption: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHISsETEQHC_XHJaY5xHsUyF91YQaHZ2UnFN42J9gOrGTaUGmhCLqmzbb7i-BZVhYdi1WmSEZncwMIDMPzQtILG3HTtnPGOX6J2FPzw4q0H2oSy221brKWWUYfZfgdGo9ID52nVNK1UX5qllrqdbql9kmstP8bToZUfMNf2-sNJp9P7C5E3sNzIo8UQFsQjncx2qN0qX6X88jb4QeHiJmlwNmZ7BJWWlHLIvh8zXTpPtPAZY5FccgdSWtj0EQW5pwc5kkmrJiY8rE",
    alt: "Three colleagues sharing a moment of laughter in a modern break area with high ceilings and lush green indoor plants",
    caption: null,
    colSpan: "md:col-span-1",
    showCaption: false,
  },
];

const OPEN_ROLES = [
  {
    num: "01",
    title: "SEO Strategy & Intelligence",
    positions: "2 Open Positions",
  },
  {
    num: "02",
    title: "Creative Direction & UI/UX",
    positions: "3 Open Positions",
  },
  {
    num: "03",
    title: "Data Science & Marketing Automation",
    positions: "1 Open Position",
  },
];

const BENEFITS = [
  {
    icon: Globe,
    title: "Remote-First",
    body: "Work from anywhere. We value output and focus over office attendance.",
  },
  {
    icon: BarChart2,
    title: "Equity Options",
    body: "As the agency grows, so does your stake. We believe in shared ownership.",
  },
  {
    icon: GraduationCap,
    title: "Learning Stipends",
    body: "$3,000 annual budget for courses, conferences, and career development.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    body: "Comprehensive health cover and monthly wellness credits for gym or therapy.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <header className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.span
              className="text-xs sm:text-sm font-semibold text-[#768976] bg-[#d4e8d3] px-3 py-1 rounded-full uppercase tracking-widest mb-4 sm:mb-6 inline-block"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Careers
            </motion.span>
            <motion.h1
              className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-heading font-bold text-[#000000] tracking-tight leading-[1.1] mb-5 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Shape the future of <br />
              the <span className="text-[#768976]">Digital Monolith.</span>
            </motion.h1>
            <motion.p
              className="text-[#434842] max-w-xl leading-relaxed text-base sm:text-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              We don&apos;t just fill seats; we curate brilliance. Join a
              collective of strategists, creators, and data scientists building
              the next generation of brand authority.
            </motion.p>
          </div>

          <div className="md:col-span-4 flex justify-end">
            <motion.div
              className="w-full relative h-[260px] sm:h-[340px] md:h-[400px] rounded-xl overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.18)" }}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAyFoXjHIDDQzHoYBWxAFBJkU3WZyhMdRvkPRP8GeLH8ZGB-JPaDlQXIRWsMC82pl7abn2UFmg9SM-2d11AotBTMgUH9y-o5jBr_FK_Pr_wrEbjXn82lq_3cLNgSUh0ochyX7JZ4W8dMLPh6ojhMFdJ_rOgr248KPcwETqfcMSKiSF3w_Owkf8pvOwJ5Qb8OpC7_ZpiMywhvTen1fJxyHHHgytxbjqQ0iUOkf8hJWjXmE6m-O9hCdICk7Ep1h0-0ChCHthxu4jXpk"
                alt="Modern minimalist architectural office interior with large windows and soft natural lighting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="mb-12 sm:mb-16 md:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-[#000000] mb-4 text-2xl sm:text-3xl">
              The Ikon Standard
            </h2>
            <div className="w-24 h-1 bg-[#c8960c] mb-6 sm:mb-8" />
            <p className="text-[#434842] max-w-2xl leading-relaxed text-base sm:text-lg">
              Our culture is rooted in radical transparency and editorial
              precision. We operate at the intersection of high-end design and
              hard data, fostering an environment where every voice defines our
              standard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 h-auto md:h-[600px]">
            {CULTURE_PHOTOS.map((photo, i) => (
              <motion.div
                key={i}
                className={`${photo.colSpan} rounded-xl overflow-hidden group relative h-[220px] sm:h-[280px] md:h-auto`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.4}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {photo.showCaption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 sm:p-8">
                    <p className="text-white font-medium">{photo.caption}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 sm:mb-16 md:mb-20 gap-4 sm:gap-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#000000]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Open Mandates
          </motion.h2>
          <motion.p
            className="text-[#434842] max-w-sm text-base sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            We are currently expanding our core intelligence teams. Select a
            discipline to view active roles.
          </motion.p>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {OPEN_ROLES.map((role, i) => (
            <motion.div
              key={role.num}
              className="group border-b border-[#c3c8c0]/20 py-6 sm:py-8 transition-all hover:px-4 hover:bg-[#f3f4f5] rounded-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.3}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 cursor-pointer">
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="text-[#c8960c] font-black text-xl sm:text-2xl">
                    {role.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-[#000000] text-base sm:text-xl">
                      {role.title}
                    </h3>
                    <p className="text-[#434842] uppercase tracking-widest mt-1 text-xs font-label">
                      {role.positions}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[#434842] group-hover:translate-x-2 transition-transform shrink-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#edeeef] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-[#000000] mb-4 text-2xl sm:text-3xl">
              Invested in Your Growth
            </h2>
            <p className="text-[#434842] text-base sm:text-lg">
              The tools and freedom you need to perform at the highest level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-[#c3c8c0]/10 hover:shadow-md transition-shadow"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0f1f12] text-white rounded-lg flex items-center justify-center mb-5 sm:mb-6">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-[#000000] mb-2 sm:mb-3 text-base sm:text-[1.05rem]">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-[#434842] leading-relaxed">
                    {benefit.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="bg-[#0f1f12] rounded-[2rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden relative"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUyMaYicbTV8uvEWstY3RhGZ6Es47tsVSL4PaQwGIGGxtiQFwaSondfJMRfYR4Dz9_t-yNN12FzsgLsD5xHxJUBhLdY8WCbaIZB8RzoGpPXlaRpzZn7pMzSSLFaT7zUCnHr75ZOt6ZxmxbO6_IyDlDSo3zleN0jWtHakmVx87f2cpluj9FPgx3M5Faqu4bLpFk4y8udWahV5wZlK-pcb4OixMezWnU81HAf0jBOgbx0krftJfUjRAKiE7qcvDN0IS4-G6O4EM1-iY')",
              }}
            />
          </div>
          <div className="relative z-10">
            <motion.h2
              className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-heading font-bold text-white mb-6 sm:mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Join the Global Authority
            </motion.h2>
            <motion.p
              className="text-[#c8960c] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              We&apos;re building the future of media. If you&apos;re ready to
              define what&apos;s next, we&apos;re ready for you.
            </motion.p>
            <motion.button
              className="bg-[#c8960c] text-white w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-md font-heading font-bold text-base sm:text-lg hover:bg-[#a87a0a] transition-colors cursor-pointer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Join Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
