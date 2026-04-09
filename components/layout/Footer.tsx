"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SERVICES = [
  { label: "SEO Strategy", href: "/services/seo-services" },
  { label: "PPC Management", href: "/services/paid-advertising-ppc" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Social Media", href: "/services/social-media-management" },
  { label: "Email Automation", href: "/services/email-marketing" },
  { label: "Web Design", href: "/services/web-design-development" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];
const SOCIALS = [
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaTwitter, label: "Twitter / X", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f5] w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#c3c8c0]/15">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter text-[#0f1f12] hover:opacity-80 transition-opacity inline-block mb-5"
            >
              IKON MEDIA
            </Link>
            <p className="font-body text-sm text-[#191c1d]/60 leading-relaxed max-w-xs mb-8">
              Crafting digital narratives and growth architectures for the
              world&apos;s most ambitious brands. Editorial-first.
              Data-obsessed. Global in scale.
            </p>

            <div className="flex items-center gap-2 mb-8">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-md bg-white border border-[#c3c8c0]/20 flex items-center justify-center text-[#434842] hover:bg-[#0f1f12] hover:text-white hover:border-[#0f1f12] transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-heading font-semibold text-[#0f1f12] text-xs uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-body text-sm text-[#191c1d]/60 hover:text-[#000000] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-[#0f1f12] text-xs uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="font-body text-sm text-[#191c1d]/60 hover:text-[#000000] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-semibold text-[#0f1f12] text-xs uppercase tracking-widest mb-6">
              Contact
            </h4>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:hello@ikonmedia.agency"
                className="flex items-center gap-2.5 text-sm text-[#191c1d]/60 hover:text-[#000000] transition-colors font-body"
              >
                <Mail size={14} className="shrink-0 text-[#768976]" />
                hello@ikonmedia.agency
              </a>
              <a
                href="https://ikonmedia.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#191c1d]/60 hover:text-[#000000] transition-colors font-body"
              >
                <Globe size={14} className="shrink-0 text-[#768976]" />
                ikonmedia.agency
              </a>
            </div>
            <div className="mt-8">
              <h4 className="font-heading font-semibold text-[#0f1f12] text-xs uppercase tracking-widest mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {LEGAL.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-body text-sm text-[#191c1d]/60 hover:text-[#000000] hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-label text-[10px] font-semibold uppercase tracking-[0.2em] text-[#191c1d]/40">
            © 2026 IKON MEDIA AGENCY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
