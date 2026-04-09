"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";
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
  { icon: Globe, label: "Website", href: "https://ikonmedia.agency" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f5] pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-[#c3c8c0]/20 pb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="IKON MEDIA"
                width={180}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[#434842] leading-relaxed max-w-sm">
              Crafting digital narratives and growth architectures for the
              world&apos;s most ambitious brands. Editorial-first.
              Data-obsessed. Global in scale.
            </p>

            <div className="flex gap-3 mt-10">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-2xl bg-white border border-[#c3c8c0]/30 flex items-center justify-center text-[#434842] hover:bg-[#0f1f12] hover:text-white hover:border-[#0f1f12] transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-[#0f1f12] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-[#434842] hover:text-[#0f1f12] transition-colors block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-[#0f1f12] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-[#434842] hover:text-[#0f1f12] transition-colors block"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="lg:col-span-3">
            <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-[#0f1f12] mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@ikonmedia.agency"
                className="flex items-center gap-3 text-sm text-[#434842] hover:text-[#0f1f12] transition-colors"
              >
                <Mail size={18} className="text-[#768976]" />
                hello@ikonmedia.agency
              </a>
              <a
                href="https://ikonmedia.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#434842] hover:text-[#0f1f12] transition-colors"
              >
                <Globe size={18} className="text-[#768976]" />
                ikonmedia.agency
              </a>
            </div>

            <div className="mt-12">
              <h4 className="font-label font-bold text-xs uppercase tracking-[0.2em] text-[#0f1f12] mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {LEGAL.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[#434842] hover:text-[#0f1f12] transition-colors block"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#434842]/60 font-label tracking-widest">
          <p>© 2026 IKON MEDIA AGENCY. ALL RIGHTS RESERVED.</p>
          <p className="text-center md:text-right">Built with precision</p>
        </div>
      </div>
    </footer>
  );
}
