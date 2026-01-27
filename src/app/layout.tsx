import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Himo | AI Systems & Startup Ops for Teams",
  description: "A collection of AI-driven apps, Notion templates, and essays on building customer success systems for startups. Built and curated by Lao, CSM and builder.",
  openGraph: {
    title: "Himo | AI Systems & Startup Ops for Teams",
    description: "A collection of AI-driven apps, Notion templates, and essays on building customer success systems for startups. Built and curated by Lao, CSM and builder.",
    url: "https://himo.site",
    siteName: "Himo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himo | AI Systems & Startup Ops for Teams",
    description: "A collection of AI-driven apps, Notion templates, and essays on building customer success systems for startups. Built and curated by Lao, CSM and builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white text-gray-900">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
