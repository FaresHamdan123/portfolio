import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fareshamdan.dev"),
  title: {
    default: "Fares Hamdan — Computer Science · QA · Software-minded",
    template: "%s · Fares Hamdan",
  },
  description:
    "Computer Science graduate from Birzeit University. Technical Support Engineer at Arab Islamic Bank with QA and full-stack experience. Building a serious international career in software, QA, and IT.",
  keywords: [
    "Fares Hamdan",
    "Software Engineer",
    "QA Engineer",
    "Technical Support",
    "Computer Science",
    "Birzeit University",
    "Palestine",
    "Ramallah",
    "Junior Developer",
    "Full Stack",
    ".NET",
    "Angular",
  ],
  authors: [{ name: "Fares Hamdan" }],
  creator: "Fares Hamdan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fares Hamdan — Computer Science · QA · Software-minded",
    description:
      "Computer Science graduate. Technical Support Engineer at Arab Islamic Bank. QA-aware. Software-minded. Building a serious international career.",
    siteName: "Fares Hamdan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fares Hamdan — Computer Science · QA · Software-minded",
    description:
      "Computer Science graduate. Technical Support Engineer. QA-aware. Software-minded.",
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
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[--color-bg] text-[--color-fg] font-sans selection:bg-amber-200/30 selection:text-amber-50">
        {children}
      </body>
    </html>
  );
}
