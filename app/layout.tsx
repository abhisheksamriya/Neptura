import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neptura | Marketing & Development Studio",
  description:
    "Grow your business with Neptura, a marketing & development studio. We help brands with website development, digital marketing, and growth strategies.",
  keywords: [
    "Neptura",
    "marketing studio",
    "development studio",
    "website design",
    "digital marketing",
    "SEO services",
    "India web development",
  ],
  openGraph: {
    title: "Neptura | Marketing & Development Studio",
    description:
      "Grow your business with Neptura through modern website development and result-driven digital marketing services.",
    url: "https://neptura.online",
    siteName: "Neptura",
    images: [
      {
        url: "https://neptura.online/og-image.png", // banner image lagana zaruri hai
        width: 1200,
        height: 630,
        alt: "Neptura Marketing & Development Studio",
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
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
