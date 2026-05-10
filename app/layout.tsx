import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimationProvider } from "@/components/animation-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spaceofgracecounseling.com"),
  title: {
    default: "A Space of Grace Counseling | Toyin Adefemi",
    template: "%s | A Space of Grace Counseling",
  },
  description:
    "Faith-based, trauma-informed biblical counseling for teens, young adults, parents, and families. Christ-centered virtual care with Toyin Adefemi.",
  keywords: [
    "biblical counseling",
    "Christian counseling",
    "teen counseling",
    "young adult counseling",
    "family counseling",
    "trauma-informed care",
    "faith-based counseling",
    "virtual counseling",
    "Toyin Adefemi",
    "Space of Grace Counseling",
  ],
  authors: [{ name: "Toyin Adefemi" }],
  openGraph: {
    type: "website",
    siteName: "A Space of Grace Counseling",
    title: "A Space of Grace Counseling | Toyin Adefemi",
    description:
      "Faith-based, trauma-informed biblical counseling for teens, young adults, parents, and families. Christ-centered virtual care with Toyin Adefemi.",
    images: [
      {
        url: "/images/about-toyin.jpg",
        width: 4480,
        height: 6720,
        alt: "Toyin Adefemi — Biblical Counselor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Space of Grace Counseling | Toyin Adefemi",
    description:
      "Faith-based, trauma-informed biblical counseling for teens, young adults, parents, and families.",
    images: ["/images/about-toyin.jpg"],
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-white">
        <AnimationProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
