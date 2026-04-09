"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Agency", href: "/about" },
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
    setMobileOpen(false);
    setServicesOpen(false);
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
            ? "bg-[#f8f9fa]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(25,28,29,0.06)]"
            : "bg-[#f8f9fa]/80 backdrop-blur-xl"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-[76px]">
            <Link
              href="/"
              className="text-xl font-black tracking-tighter text-[#0f1f12] shrink-0 hover:opacity-80 transition-opacity"
            >
              IKON MEDIA
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
                          className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[640px] bg-white rounded-xl overflow-hidden"
                          style={{
                            boxShadow:
                              "0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.1)",
                          }}
                        >
                          <div className="p-2">
                            <div className="px-4 pt-3 pb-2 mb-1">
                              <p className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-[#747872]">
                                Our Services
                              </p>
                            </div>
                            <div className="grid grid-cols-2 gap-0.5">
                              {SERVICES.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.label}
                                    href={service.href}
                                    onClick={() => setServicesOpen(false)}
                                    className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-[#f3f4f5] transition-colors group"
                                  >
                                    <div className="w-8 h-8 rounded-md bg-[#f3f4f5] group-hover:bg-[#0f1f12] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                      <Icon
                                        size={14}
                                        className="text-[#0f1f12] group-hover:text-white transition-colors"
                                      />
                                    </div>
                                    <div>
                                      <p className="font-label font-semibold text-sm text-[#000000] leading-tight">
                                        {service.label}
                                      </p>
                                      <p className="font-body text-xs text-[#434842] mt-0.5">
                                        {service.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="mx-2 mt-2 p-4 bg-[#0f1f12] rounded-lg flex items-center justify-between">
                              <div>
                                <p className="font-label font-bold text-sm text-white uppercase tracking-wider">
                                  Full Capabilities
                                </p>
                                <p className="font-body text-xs text-[#768976] mt-0.5">
                                  View our complete service offering
                                </p>
                              </div>
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="flex items-center gap-2 text-[#ffdf95] font-label text-xs font-bold uppercase tracking-wider hover:gap-3 transition-all"
                              >
                                Explore <ArrowRight size={12} />
                              </Link>
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
                className="hidden lg:inline-flex bg-[#0f1f12] text-white px-6 py-4 rounded-md font-label font-semibold text-xs uppercase tracking-widest hover:bg-black transition-colors"
              >
                Book a Strategy Call
              </Link>

              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#f3f4f5] transition-colors"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X size={20} className="text-[#0f1f12]" />
                ) : (
                  <Menu size={20} className="text-[#0f1f12]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white flex flex-col lg:hidden"
              style={{ boxShadow: "-4px 0 40px rgba(0,0,0,0.12)" }}
            >
              <div className="flex items-center justify-between px-6 h-[76px] border-b border-[#f3f4f5]">
                <span className="text-xl font-black tracking-tighter text-[#0f1f12]">
                  IKON MEDIA
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-[#f3f4f5] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} className="text-[#0f1f12]" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-6">
                <nav className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg hover:bg-[#f3f4f5] transition-colors"
                  >
                    <span
                      className={clsx(
                        "font-label font-semibold text-sm uppercase tracking-widest",
                        isActive("/services")
                          ? "text-[#0f1f12]"
                          : "text-[#191c1d]/70"
                      )}
                    >
                      Services
                    </span>
                    <ChevronDown
                      size={16}
                      className={clsx(
                        "text-[#434842] transition-transform duration-200",
                        mobileServicesOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        key="mobile-services"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pb-2 space-y-0.5">
                          {SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.label}
                                href={service.href}
                                className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-[#f3f4f5] transition-colors"
                              >
                                <Icon
                                  size={14}
                                  className="text-[#768976] shrink-0"
                                />
                                <span className="font-body text-sm text-[#191c1d]">
                                  {service.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {NAV_LINKS.filter((l) => !l.hasDropdown).map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={clsx(
                        "flex items-center px-4 py-3.5 rounded-lg hover:bg-[#f3f4f5] transition-colors font-label font-semibold text-sm uppercase tracking-widest",
                        isActive(link.href)
                          ? "text-[#0f1f12] bg-[#f3f4f5]"
                          : "text-[#191c1d]/70"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-[#f3f4f5] space-y-2">
                  <Link
                    href="/careers"
                    className="flex items-center px-4 py-3 rounded-lg hover:bg-[#f3f4f5] transition-colors font-label text-sm text-[#191c1d]/60 uppercase tracking-widest"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center px-4 py-3 rounded-lg hover:bg-[#f3f4f5] transition-colors font-label text-sm text-[#191c1d]/60 uppercase tracking-widest"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="px-6 py-6 border-t border-[#f3f4f5]">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-[#0f1f12] text-white py-4 rounded-md font-label font-bold text-sm uppercase tracking-widest hover:bg-black transition-colors"
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
