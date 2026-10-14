
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://shahil-ahamed-portfolio-git-main-shahs-projects-cdf39e3c.vercel.app"
  ),
  title: "Shahil Ahamed | Full Stack Developer",
  description:
    "Portfolio of Shahil Ahamed, a Full Stack Developer building production-ready applications with React, Next.js, Node.js, TypeScript, and MongoDB.",
  keywords: [
    "Shahil Ahamed",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack Developer",
    "TypeScript",
    "Node.js",
    "Bengaluru",
  ],
  authors: [{ name: "Shahil Ahamed" }],
  openGraph: {
    title: "Shahil Ahamed | Full Stack Developer",
    description:
      "Full Stack Developer building production-ready applications with React, Next.js, Node.js, TypeScript, and MongoDB.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahil Ahamed — Full Stack Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
