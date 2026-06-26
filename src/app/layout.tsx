import type { Metadata } from "next";
import {
  Space_Grotesk,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
  Tajawal,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Customized Solutions — software, tailored to fit.",
  description:
    "Customized Solutions is a product studio. We design and ship software end-to-end — from the first sketch to a live product on its own domain. Mihna, our platform for professional websites, is the first of them.",
  keywords: [
    "software studio",
    "product studio",
    "custom software",
    "web development",
    "multi-tenant platform",
    "Mihna",
  ],
  openGraph: {
    title: "Customized Solutions — software, tailored to fit.",
    description:
      "A product studio that designs and ships software end-to-end. Mihna is our flagship.",
    type: "website",
    siteName: "Customized Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} ${tajawal.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
