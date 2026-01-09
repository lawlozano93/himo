import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "himo.site - Collective of experience + creation",
  description: "AI tools, Notion systems, app experiments. Customer Success @ ThisFish.",
  openGraph: {
    title: "himo.site - Collective of experience + creation",
    description: "AI tools, Notion systems, app experiments. Customer Success @ ThisFish.",
    url: "https://himo.site",
    siteName: "himo.site",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "himo.site - Collective of experience + creation",
    description: "AI tools, Notion systems, app experiments. Customer Success @ ThisFish.",
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
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
