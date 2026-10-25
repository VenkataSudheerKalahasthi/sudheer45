import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { MouseFollower } from "@/components/animations/MouseFollower";
import { PageReveal } from "@/components/animations/PageTransition";
import { AssetPreloader } from "@/components/animations/AssetPreloader";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudheer45.vercel.app"),
  title: "Sudheer Kalahasthi — Creative Developer",
  description:
    "Portfolio of Sudheer Kalahasthi — a creative developer crafting cinematic digital experiences with Three.js, React.js, and Tailwind CSS.",
  keywords: ["creative developer", "portfolio", "frontend", "Three.js", "React.js", "Tailwind CSS"],
  openGraph: {
    title: "Sudheer Kalahasthi — Creative Developer",
    description: "Crafting digital experiences that move people.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="bg-[#080808] text-[#f0ece4] antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <div className="noise-overlay" aria-hidden="true" />
        <PageReveal />
        <AssetPreloader />
        <SmoothScrollProvider>
          <MouseFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
