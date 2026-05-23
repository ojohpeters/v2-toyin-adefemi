import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Session | Toyin Adefemi",
  description:
    "Book a biblical counseling session with Toyin Adefemi — Initial Consultation, Individual, Family, or Parenting sessions. Virtual, Christ-centered, trauma-informed care.",
  openGraph: {
    title: "Book a Session | Toyin Adefemi",
    description:
      "Begin your counseling journey with Toyin Adefemi. Initial Consultation, Individual, Family, or Parenting sessions — virtual & Christ-centered.",
    images: [{ url: "/images/book-session.png", width: 1600, height: 912, alt: "Book a Session with Toyin Adefemi" }],
  },
};

export default function BookASessionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
