import type { Metadata } from "next";
import { Space_Grotesk, Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ClientLayoutWrapper } from "@/components/LayoutWrapper";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IKON MEDIA | Digital Marketing Agency",
    template: "%s | IKON MEDIA",
  },
  description:
    "IKON MEDIA is a digital marketing agency crafting digital narratives and growth architectures for the world's most ambitious brands. SEO, PPC, content, social media, and more.",
  metadataBase: new URL("https://ikonmedia.agency"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "IKON MEDIA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <ClientLayoutWrapper>
          <Header />
          {children}
          <Footer />
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
