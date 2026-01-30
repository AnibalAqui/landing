import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GlowUp Prompt",
  description: "The simple tool for your glow up",
  openGraph: {
    title: "GlowUp Prompt",
    description: "The simple tool for your glow up",
    url: "https://glow-up.anibal-aqui.com",
    siteName: "Landing",
    images: [
      {
        url: "https://glow-up.anibal-aqui.com/the-glow-up-prompt.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview site",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The glow-up prompt",
    description: "The simple tool for your glow up",
    creator: "@abelardo-aqui-arroyo-dev",
    images: ["https://glow-up.anibal-aqui.com/the-glow-up-prompt.jpeg"],
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
        <script type="application/ld+json" />
      </head>
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
