import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const baseUrl = "https://josef-shohet-portfolio.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Josef Shohet",
      url: baseUrl,
      image: `${baseUrl}/img/headshot.jpg`,
      jobTitle: "Full-Stack Developer",
      sameAs: [
        "https://github.com/jshohet",
        "https://www.linkedin.com/in/josef-shohet",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Workflow Automation",
        "Web Application Development",
      ],
    },
    {
      "@type": "WebSite",
      name: "Josef Shohet Portfolio",
      url: baseUrl,
      description:
        "Portfolio of Josef Shohet, a full-stack developer building modern web products, automation systems, and data-driven applications.",
      author: {
        "@type": "Person",
        name: "Josef Shohet",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}/`),
  title: {
    default: "Josef Shohet | Full-Stack Developer",
    template: "%s | Josef Shohet",
  },
  description:
    "Portfolio of Josef Shohet, a full-stack developer building modern web products with React, Next.js, TypeScript, Prisma, and PostgreSQL.",
  keywords: [
    "Josef Shohet",
    "full-stack developer",
    "React developer",
    "Next.js portfolio",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "web developer portfolio",
  ],
  authors: [{ name: "Josef Shohet" }],
  creator: "Josef Shohet",
  publisher: "Josef Shohet",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Josef Shohet | Full-Stack Developer",
    description:
      "Explore full-stack projects by Josef Shohet, including product, automation, and content-platform work built with modern web technologies.",
    url: "https://josef-shohet-portfolio.vercel.app/",
    siteName: "Josef Shohet Portfolio",
    images: [
      {
        url: "/img/headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Portrait of Josef Shohet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josef Shohet | Full-Stack Developer",
    description:
      "Portfolio of Josef Shohet featuring full-stack products built with React, Next.js, TypeScript, Prisma, and PostgreSQL.",
    images: ["/img/headshot.jpg"],
  },
  category: "technology",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
        {gaId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
