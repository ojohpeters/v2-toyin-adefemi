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
      <body className="flex min-h-full flex-col bg-[var(--background)]">
        {/* Remove any stale service worker left by a previous app on this origin
            (it can intercept requests and serve outdated JS, causing hydration errors) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){if(!rs.length)return;Promise.all(rs.map(function(r){return r.unregister();})).then(function(){if(window.caches&&caches.keys){caches.keys().then(function(ks){return Promise.all(ks.map(function(k){return caches.delete(k);}));}).then(function(){if(navigator.serviceWorker.controller&&!sessionStorage.getItem('__sw_cleared')){sessionStorage.setItem('__sw_cleared','1');location.reload();}});}});});});}})();",
          }}
        />
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
