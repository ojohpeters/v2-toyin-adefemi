import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Book a Session with Toyin Adefemi",
  description:
    "Book a free 30-minute consultation or schedule your first session. Reach out today to begin your healing journey with Toyin Adefemi.",
  openGraph: {
    title: "Contact | Book a Session with Toyin Adefemi",
    description:
      "Book a free 30-minute consultation or schedule your first session. Reach out today — your healing journey starts here.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Biblical Counselor" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
