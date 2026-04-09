"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Star,
  Check,
  ChevronLeft,
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

const OFFICES = [
  {
    region: "USA Headquarters",
    city: "New York",
    address: "250 Park Avenue, 7th Floor\nNew York, NY 10177",
    phone: "+1 (212) 555-0192",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFyd_vvsZAX2V9j1S89A9x3WK5VQDzoVDc4jb8990zO2Nm_OxtpW0YwCqfiHvrp2RZEhAa_5EWraXKYSLck_4636X3_ZmyWeAFxayfl7tiGUKXTMvAlrwc5J7FPk1WQCBSiJJqA1MklXhyzKncWF-dC5yfKcTeN8maFQ1G2eNeqlgI1vCg5Y-ktWWLIQuBP6xp8XRbVx3ZYic5ylA2KOx3aaRHlk-5WSF4ZZWnSA0ywrNozIpRilcPAcVYCT40ZYfFTrerMM4uYyw",
    alt: "Dramatic wide shot of New York City skyline at night",
  },
  {
    region: "Lagos Office",
    city: "Ikeja",
    address: "8 Ikeja Road, Victoria Island\nLagos, Nigeria",
    phone: "+234 8141 00000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCy-qicuSOYt8Gcv0pxQL2VblzXcsACAtsOBmtx9PglS7B7X7Zlx4C8Y5V1152UyGNHSqbS1BjTVMgLWa2rOctG7sE2aF62js1Z0BB_Sw3r_GH_Yrepn7lsris7Fj3gYboISCzXWbzYGsvZ4GVLbkoQ_9t-l-x2ZYmbi4Gk__1ZUAShmr8efbGyFWmb6IbEOSsI5RpjoTDO_CfQmEopSWyxQW2RqxdmTau8kI_HnVB5w-BgcPEHOqtIFO_aa7o0rmsZ56DgSLP3XT0",
    alt: "Stately London architecture with The Shard in distance during the blue hour",
  },
  {
    region: "Lagos Office",
    city: "Ikeja",
    address: "8 Ikeja Road, Victoria Island\nLagos, Nigeria",
    phone: "+234 8141 00000",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFyd_vvsZAX2V9j1S89A9x3WK5VQDzoVDc4jb8990zO2Nm_OxtpW0YwCqfiHvrp2RZEhAa_5EWraXKYSLck_4636X3_ZmyWeAFxayfl7tiGUKXTMvAlrwc5J7FPk1WQCBSiJJqA1MklXhyzKncWF-dC5yfKcTeN8maFQ1G2eNeqlgI1vCg5Y-ktWWLIQuBP6xp8XRbVx3ZYic5ylA2KOx3aaRHlk-5WSF4ZZWnSA0ywrNozIpRilcPAcVYCT40ZYfFTrerMM4uYyw",
    alt: "Dramatic wide shot of New York City skyline at night",
  },
];

const CALENDAR_DAYS = [
  { day: 29, faded: true },
  { day: 30, faded: true },
  { day: 1 },
  { day: 2 },
  { day: 3, highlight: "gold" },
  { day: 4, highlight: "gold" },
  { day: 5 },
  { day: 6 },
  { day: 7, highlight: "dark" },
  { day: 8, highlight: "gold" },
  { day: 9 },
  { day: 10 },
  { day: 11 },
  { day: 12 },
];

const TIME_SLOTS = ["09:00 AM", "11:30 AM", "02:00 PM"];

const TEAM_AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjpxfqLK55G7g_rKaeEMzKqqqPsytXBDeIdgVCVtH6TLRlAwe1u_BgtkcWFYUdDjKNHXxAu6dm3i02KS5eJ9-0yMSVQfdqJSRKQOqqqPoZ_ZUGi2N67YZI3lOJqvveJbCHhzjF9Ii3hKhogHGnwNFpD7dBSjSi1lv9yizyAu2ZOh3GHRa3T_VSVswOzet-O8kPcxwiv6F8cqLAgdRSRaYzSy8lYIzsvUJIodONCZ_8Vm765Y4yN_ooNyT8OyM5RM-7O0iffeLDDA4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBykXAr0RlNUn0Cl1aiOJW4c5A6oIqksF2_XOMl3xh7ieJqjWwaQahdBz5iOrYIi8Vrl3A6MkgqdAIx6Auu9Aa5_jvbYBVy27b9jHMPMB281IeQ_fINH2J_JHh8QMpgzNP-3uN2oMSYzmt5noYqivfVwg2JegWX6LnhdN-so99IdH93lUgqz_Djy8PakEBCfLifLCdCRK6dSVvn3SLPCvCW0As7IgeBvVe3T_BuonmzouQkG9AnDUVj41JcXX5VYVMjOP7YI1kmgYU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCtdDEr13N-P099mcaytBiwry-b55tFeacilPeZR_a7eFv2inSdDo0ZzP4prCiP2etYRhO79c0UcM3BewpvjuTlW8arwl604qJxQufbiHf_R1sSd1w_uH4tsG4d9zM89kgQv9mS0BKTWrZIr686pLRY486FVmdJpSdfAFCKFUxsNGWuYxTSw-v5xBG1EX9m49FYvi9lwSJO7GBLqQX7x7Q4hX1tGQF3EW_5feEhpGLIiO_2MeGslKlZegDKr2a0pj4INKwixE4-CM4",
];

export default function ContactPage() {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    service: "SEO Strategy",
  });

  return (
    <main className="pt-24">
      <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="font-label text-xs uppercase tracking-[0.2em] text-[#434842] bg-[#edeeef] px-3 py-1 rounded-full inline-block">
            Contact Us
          </span>
          <h1 className="font-heading text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] leading-[1.1] font-bold text-[#000000] tracking-tight">
            Start Your Next Phase of Growth
          </h1>
          <p className="font-body text-base sm:text-lg text-[#434842] max-w-lg leading-relaxed">
            Elevate your brand with data-driven strategy and editorial
            precision. Our team of experts is ready to scale your vision across
            global markets.
          </p>
          <div className="flex items-center gap-4 pt-2 md:pt-4">
            <div className="flex -space-x-3">
              {TEAM_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#f8f9fa] overflow-hidden relative shrink-0"
                >
                  <Image
                    src={src}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#434842]">
              Trusted by 250+ global brands
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#f3f4f5] p-7 sm:p-10 rounded-xl relative overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8960c]/10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
          <div className="space-y-5 md:space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-[#434842] block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border-none rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#0f1f12] text-[#191c1d] placeholder:text-[#747872]/50"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-[#434842] block">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white border-none rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#0f1f12] text-[#191c1d] placeholder:text-[#747872]/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#434842] block">
                Company Website
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
                className="w-full bg-white border-none rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#0f1f12] text-[#191c1d] placeholder:text-[#747872]/50"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#434842] block">
                Service Interest
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-white border-none rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#0f1f12] text-[#191c1d] appearance-none cursor-pointer"
              >
                <option>SEO Strategy</option>
                <option>PPC Management</option>
                <option>Content Marketing</option>
                <option>Email Marketing</option>
                <option>Social Media Management</option>
                <option>Web Design and Development</option>
                <option>Full Scale Growth</option>
              </select>
            </div>
            <button className="w-full bg-[#0f1f12] text-white py-5 rounded-md font-label text-sm uppercase tracking-[0.2em] hover:opacity-90 transition-all mt-2 md:mt-4 cursor-pointer">
              Request Inquiry
            </button>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f3f4f5] py-16 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
            <motion.div
              className="max-w-xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-[#000000] leading-tight mb-3 md:mb-4">
                Global Reach, Local Impact
              </h2>
              <p className="text-[#434842] text-base sm:text-lg">
                Operating from the world&apos;s most influential media hubs to
                ensure your brand resonates across borders.
              </p>
            </motion.div>
            <motion.div
              className="text-right"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <span className="font-heading text-4xl sm:text-5xl font-black text-[#c3c8c0]/30">
                EST. 2014
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {OFFICES.map((office, i) => (
              <motion.div
                key={office.city}
                className="group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <div className="h-64 sm:h-72 md:h-80 w-full rounded-xl overflow-hidden mb-5 md:mb-6 relative">
                  <Image
                    src={office.image}
                    alt={office.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0f1f12]/20" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-label text-xs uppercase tracking-widest opacity-80">
                      {office.region}
                    </p>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold">
                      {office.city}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 px-2">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-[#c8960c] shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-[#434842] leading-relaxed whitespace-pre-line">
                      {office.address}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-[#c8960c] shrink-0 mt-0.5"
                    />
                    <p className="text-sm text-[#434842]">{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="bg-[#0f1f12] rounded-3xl overflow-hidden flex flex-col lg:flex-row"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="p-8 sm:p-12 md:p-16 lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
              Need a more direct conversation?
            </h2>
            <p className="text-[#768976] text-base sm:text-lg leading-relaxed">
              Skip the inbox and book a 15-minute introductory strategy call
              directly with our senior partners. We&apos;ll discuss your goals
              and provide an initial high-level growth map.
            </p>
            <div className="space-y-4">
              {[
                "Instant availability viewing",
                "No-obligation discovery session",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c8960c] flex items-center justify-center shrink-0">
                    <Check size={16} className="text-white" />
                  </div>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="inline-block bg-[#c8960c] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-md font-label text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Open Calendar
            </a>
          </div>

          <div className="lg:w-1/2 bg-white/5 p-6 sm:p-10 md:p-12 flex items-center justify-center">
            <div
              className="bg-white w-full max-w-md rounded-xl p-6 sm:p-8 border border-[#c3c8c0]/10"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.25)" }}
            >
              <div className="flex justify-between items-center mb-6 sm:mb-8">
                <span className="font-heading font-bold text-lg sm:text-xl text-[#191c1d]">
                  October 2024
                </span>
                <div className="flex gap-4">
                  <ChevronLeft
                    size={20}
                    className="cursor-pointer hover:text-[#c8960c] transition-colors text-[#434842]"
                  />
                  <ChevronRight
                    size={20}
                    className="cursor-pointer hover:text-[#c8960c] transition-colors text-[#434842]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center mb-4">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <span
                    key={i}
                    className="text-xs font-label text-[#747872] uppercase tracking-widest"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
                {CALENDAR_DAYS.map((item, i) => (
                  <span
                    key={i}
                    className={`p-2 sm:p-3 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                      item.faded
                        ? "text-[#747872]/30"
                        : item.highlight === "dark"
                        ? "bg-[#0f1f12] text-white"
                        : item.highlight === "gold"
                        ? "bg-[#c8960c]/20 text-[#000000]"
                        : "text-[#191c1d]"
                    }`}
                  >
                    {item.day}
                  </span>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#c3c8c0]/10">
                <p className="text-xs font-label text-[#747872] uppercase mb-4 tracking-widest">
                  Available Times
                </p>
                <div className="flex flex-wrap gap-2">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                        selectedTime === slot
                          ? "bg-[#c8960c] text-white"
                          : "bg-[#f3f4f5] text-[#191c1d] hover:bg-[#c8960c] hover:text-white"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="pb-16 pt-6 border-t border-[#c3c8c0]/10">
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-6 md:space-y-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-2 mb-2 md:mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-[#c8960c] fill-[#c8960c]"
              />
            ))}
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#000000] italic">
            &quot;Working with IKON was the inflection point our company needed.
            Their strategy isn&apos;t just about numbers; it&apos;s about
            narrative dominance.&quot;
          </h3>
          <div>
            <p className="font-label text-sm uppercase tracking-widest font-bold">
              Marcus Thorne
            </p>
            <p className="text-[#434842] text-sm">
              CEO of Vertex Global Ventures
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
