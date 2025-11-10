import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Araújo - GOAT Portfolio Hub",
  description: "Explore Carlos Araújo's comprehensive collection of innovative projects including AI applications, productivity tools, business solutions, and professional achievements. A showcase of cutting-edge technology and creative solutions.",
  keywords: ["Carlos Araújo", "portfolio", "AI applications", "web development", "productivity tools", "business solutions", "technology", "innovation"],
  authors: [{ name: "Carlos Araújo" }],
  creator: "Carlos Araújo",
  publisher: "Carlos Araújo",
  openGraph: {
    title: "Carlos Araújo - GOAT Portfolio Hub",
    description: "Discover Carlos Araújo's innovative projects and achievements in AI, web development, and technology solutions.",
    url: "https://carlos.goat.africa",
    siteName: "Carlos Araújo GOAT Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carlos Araújo - GOAT Portfolio Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Araújo - GOAT Portfolio Hub",
    description: "Discover Carlos Araújo's innovative projects and achievements in AI, web development, and technology solutions.",
    images: ["/og-image.jpg"],
    creator: "@carlosaraujo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
