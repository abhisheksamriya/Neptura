import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import StickyButtons from "@/components/StickyButtons";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neptura | Jaipur's Best Web Design & Digital Marketing Agency",
  description:
    "Neptura is a top-rated web design and digital marketing agency in Jaipur, Rajasthan. We specialize in website development, SEO, branding, and result-driven marketing services to help your business grow.",
  keywords: [
    "digital marketing agency",
    "web design agency",
    "Jaipur best web design agency",
    "web design Jaipur",
    "digital marketing Jaipur",
    "digital marketing Rajasthan",
    "website development Jaipur",
    "branding agency Jaipur",
    "SEO services Jaipur",
    "marketing agency Rajasthan",
    "social media marketing Jaipur",
    "UI UX design Jaipur",
    "eCommerce website development Jaipur",
    "PPC services Jaipur",
    "Neptura",
    "marketing studio",
    "development studio",
    "website design",
    "digital marketing",
    "SEO services",
    "India web development",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Neptura | Jaipur's Best Web Design & Digital Marketing Agency",
    description:
      "Grow your brand with Neptura – Jaipur's leading web design and digital marketing agency. We deliver custom websites, SEO, branding, and marketing solutions across Rajasthan and beyond.",
    url: "https://neptura.online",
    siteName: "Neptura",
    images: [
      {
        url: "https://neptura.online/logo/fullogo.png",
        width: 1200,
        height: 630,
        alt: "Neptura Digital Marketing & Web Design Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://neptura.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/neptura.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/nepturablack.png"
        />

        {/* ✅ Google Ads Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17521168219"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17521168219');
          `}
        </Script>
      </head>
      <body className={font.className}>
        {children}
        <Analytics />
        <StickyButtons />
      </body>
    </html>
  );
}
