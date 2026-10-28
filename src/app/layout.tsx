import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Vazirmatn, Lalezar } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/i18n/i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-rtl-body",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const lalezar = Lalezar({
  variable: "--font-rtl-display",
  weight: "400",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "Abolfazl Ebrahimi — Front-End Developer",
  description:
    "Abolfazl Ebrahimi is a Front-End Developer crafting responsive, interactive, and high-performance web experiences with React and Next.js.",
  keywords: [
    "Abolfazl Ebrahimi",
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer Iran",
    "Tehran",
  ],
  authors: [{ name: "Abolfazl Ebrahimi" }],
  creator: "Abolfazl Ebrahimi",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Abolfazl Ebrahimi — Front-End Developer",
    description:
      "Building digital experiences that feel different. React & Next.js developer crafting responsive, interactive, and high-performance web experiences.",
    url: "https://abolfazlebrahimi.dev",
    siteName: "Abolfazl Ebrahimi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abolfazl Ebrahimi — Front-End Developer",
    description:
      "Building digital experiences that feel different. React & Next.js developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${vazirmatn.variable} ${lalezar.variable} antialiased bg-background text-foreground`}
      >
        <I18nProvider>{children}</I18nProvider>
        <Toaster />
      </body>
    </html>
  );
}
