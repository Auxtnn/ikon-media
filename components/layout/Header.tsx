"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  MousePointerClick,
  FileText,
  Share2,
  Sparkles,
  LayoutTemplate,
  Search,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { clsx } from "clsx";

const SERVICES = [
  {
    icon: Search,
    label: "SEO Strategy",
    desc: "Search visibility & authority",
    href: "/services/seo-services",
  },
  {
    icon: MousePointerClick,
    label: "PPC Management",
    desc: "Paid acquisition & ROAS",
    href: "/services/paid-advertising-ppc",
  },
  {
    icon: FileText,
    label: "Content Marketing",
    desc: "Editorial storytelling",
    href: "/services/content-marketing",
  },
  {
    icon: Share2,
    label: "Social Media",
    desc: "Community & viral performance",
    href: "/services/social-media-management",
  },
  {
    icon: Sparkles,
    label: "Email Automation",
    desc: "Lifecycle & retention flows",
    href: "/services/email-marketing",
  },
  {
    icon: LayoutTemplate,
    label: "Web Design",
    desc: "High-performance digital builds",
    href: "/services/web-design-development",
  },
];

const NAV_LINKS = [
  { label: "Agency", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setMobileOpen(false);
      setServicesOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) => {
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href;
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#f3f4f5]/95 backdrop-blur-xl shadow-[0_1px_0_rgba(25,28,29,0.08)]"
            : "bg-[#f3f4f5]/90 backdrop-blur-xl"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt="IKON MEDIA"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>

            <nav
              className="hidden lg:flex items-center gap-10"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} ref={dropdownRef} className="relative">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      onMouseEnter={() => setServicesOpen(true)}
                      className={clsx(
                        "flex items-center gap-1.5 font-label font-medium text-sm uppercase tracking-widest transition-colors duration-200 cursor-pointer",
                        isActive(link.href)
                          ? "text-[#0f1f12] border-b-2 border-[#0f1f12] pb-0.5"
                          : "text-[#191c1d]/70 hover:text-[#000000]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "transition-transform duration-200",
                          servicesOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          onMouseLeave={() => setServicesOpen(false)}
                          className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[640px] bg-white rounded-2xl overflow-hidden"
                          style={{
                            boxShadow:
                              "0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.12)",
                          }}
                        >
                          <div className="p-6">
                            <div className="px-2 pb-4">
                              <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#747872]">
                                OUR SERVICES
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                              {SERVICES.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.label}
                                    href={service.href}
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-start gap-4 px-4 py-4 rounded-xl hover:bg-[#f3f4f5] transition-all group"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-[#f3f4f5] group-hover:bg-[#0f1f12] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                      <Icon
                                        size={16}
                                        className="text-[#0f1f12] group-hover:text-white transition-colors"
                                      />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-sm text-[#000000]">
                                        {service.label}
                                      </p>
                                      <p className="text-xs text-[#434842] mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={clsx(
                      "font-label font-medium text-sm uppercase tracking-widest transition-colors duration-200",
                      isActive(link.href)
                        ? "text-[#0f1f12] border-b-2 border-[#0f1f12] pb-0.5"
                        : "text-[#191c1d]/70 hover:text-[#000000]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:block bg-[#0f1f12] text-white px-8 py-3.5 rounded-xl font-label font-semibold text-xs uppercase tracking-widest hover:bg-black transition-all"
              >
                Book Strategy Call
              </Link>

              <button
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-[#e7e8e9] transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-md bg-white flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-[#f3f4f5]">
                <Image
                  src="/logo.png"
                  alt="IKON MEDIA"
                  width={140}
                  height={36}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-[#f3f4f5] transition-all"
                  >
                    <span className="font-label font-semibold text-sm uppercase tracking-widest">
                      Services
                    </span>
                    <ChevronDown
                      size={18}
                      className={clsx(
                        "transition-transform",
                        mobileServicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden pl-4"
                      >
                        <div className="space-y-1 py-2">
                          {SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-4 px-5 py-3 rounded-xl hover:bg-[#f3f4f5]"
                              >
                                <Icon size={18} className="text-[#768976]" />
                                <span className="font-medium text-sm">
                                  {service.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Explore All Services Button */}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[#c8960c] text-white py-4 rounded-2xl font-label font-semibold text-sm uppercase tracking-widest mt-4 hover:bg-[#b8860b] transition-all"
                  >
                    Explore All Services <ArrowRight size={16} />
                  </Link>

                  {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={clsx(
                        "block px-5 py-4 rounded-2xl font-label font-semibold text-sm uppercase tracking-widest transition-all",
                        isActive(link.href)
                          ? "bg-[#f3f4f5] text-[#0f1f12]"
                          : "hover:bg-[#f3f4f5]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t border-[#f3f4f5]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full bg-[#0f1f12] text-white py-4 rounded-2xl font-label font-semibold text-sm uppercase tracking-widest text-center hover:bg-black transition-all"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
