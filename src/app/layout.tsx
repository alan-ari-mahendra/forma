import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { gymSchema, faqSchema } from "@/lib/data";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "FORMA Athletic Club | Boutique Strength & Conditioning Gym in East Austin",
  description:
    "FORMA is a boutique training club in East Austin. Coached strength, conditioning, boxing and recovery classes capped at 14 people. Your first week is free.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gymSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
