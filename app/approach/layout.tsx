import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Approach | Clinically Informed Biblical Counseling",
  description:
    "Learn how sessions work: prayer, Scripture, trauma-informed tools, and practical steps tailored to your healing. 60-minute virtual sessions tailored to your needs.",
  openGraph: {
    title: "My Approach | Clinically Informed Biblical Counseling",
    description:
      "Prayer, Scripture, trauma-informed tools, and practical steps tailored to your needs. 60-minute virtual sessions · Free 30-min consultation.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Biblical Counselor" }],
  },
};

export default function ApproachLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
