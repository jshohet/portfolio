import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://josef-shohet-portfolio.vercel.app/"),
  title: "Josef Shohet Portfolio",
  description:
    "Josef Shohet Front-End React Portfolio. Showcase of projects and coursework.",
  openGraph: {
    title: "Josef Shohet Portfolio",
    description:
      "Josef Shohet Front-End React Portfolio. Showcase of projects and coursework.",
    url: "https://josef-shohet-portfolio.vercel.app/",
    siteName: "Josef Shohet Portfolio",
    images: [
      {
        url: "https://i.imgur.com/9uBoPuN.jpeg",
        width: 1800,
        height: 1600,
        alt: "Josef Shohet",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
