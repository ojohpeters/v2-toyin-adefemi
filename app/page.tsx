import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Biblical Counseling for Teens, Families & Young Adults",
  description:
    "Virtual, faith-based biblical counseling for teens, young adults, parents, and families. Christ-centered, trauma-informed care with Toyin Adefemi. Book a free 30-min consultation.",
  openGraph: {
    title: "A Space of Grace Counseling | Biblical Counseling for Teens, Families & Young Adults",
    description:
      "Virtual, faith-based biblical counseling for teens, young adults, parents, and families. Christ-centered, trauma-informed care with Toyin Adefemi.",
    images: [{ url: "/images/hero-bg.png", width: 1920, height: 1080, alt: "A Space of Grace Counseling" }],
  },
  twitter: {
    images: ["/images/hero-bg.png"],
  },
};

const services = [
  {
    title: "Individual Biblical Counseling",
    description:
      "Christ-centered sessions for emotional healing, identity, and spiritual renewal.",
  },
  {
    title: "Youth & Young Adult Support",
    description:
      "Safe, trauma-informed guidance for teens and young adults navigating life transitions.",
  },
  {
    title: "Family Counseling & Coaching",
    description:
      "Helping families rebuild connection, communication, and emotional safety.",
  },
  {
    title: "Workshops, Trainings & Speaking",
    description:
      "Biblical, trauma-informed teachings for churches, ministries, and youth organizations.",
  },
];

const pillars = [
  {
    icon: "1",
    title: "Biblical Foundation",
    description: "Rooted in Scripture and the heart of Christ — every conversation anchored in God's truth and redemptive love.",
  },
  {
    icon: "2",
    title: "Trauma-Informed Care",
    description: "Safety, compassion, and emotional wisdom — creating brave spaces where healing can take root and flourish.",
  },
  {
    icon: "3",
    title: "Practical Tools",
    description: "Emotional regulation, mindset renewal, and resilient next steps — equipping you for lasting transformation.",
  },
];


const features = [
  { title: "Trauma-Informed Expertise", description: "Trained in trauma-focused approaches with deep understanding of how past wounds affect present behavior." },
  { title: "Biblical Foundation", description: "Every session is grounded in Scripture and Christ's example of compassionate, redemptive love." },
  { title: "Youth Specialist", description: "Special focus on teen and young adult development, identity formation, and life transitions." },
  { title: "Safe & Confidential", description: "Create emotionally safe environments where clients feel fully seen, heard, and respected." },
  { title: "Practical Tools", description: "Learn evidence-based emotional regulation, communication skills, and resilience strategies." },
  { title: "Culturally Responsive", description: "Honor diverse backgrounds, experiences, and perspectives in all counseling work." },
];

const resources = [
  { 
    title: "Trauma-informed Worksheets", 
    iconType: "document",
    description: "Interactive worksheets designed to help you process emotions, identify triggers, and build resilience between sessions."
  },
  { 
    title: "Faith & Healing Resources", 
    iconType: "star",
    description: "Scripture-based devotionals and reflective guides to deepen your spiritual connection and find comfort in God's word."
  },
  { 
    title: "Stress Relief Guides", 
    iconType: "leaf",
    description: "Practical techniques including breathing exercises, grounding strategies, and mindfulness practices for daily emotional regulation."
  },
];

function ResourceIcon({ type }: { type: string }) {
  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    );
  }

  if (type === "star") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
      <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.55 2 9.69 2 12s1.97 4.45 4.08 4.98C6.55 19.82 9.03 22 12 22c2.97 0 5.45-2.18 5.92-5.02C20.03 16.45 22 14.31 22 12s-1.97-4.45-4.08-4.98zM12 20c-2.33 0-4.32-1.45-5.12-3.5h10.24c-.8 2.05-2.79 3.5-5.12 3.5zm0-14c2.33 0 4.32 1.45 5.12 3.5H6.88c.8-2.05 2.79-3.5 5.12-3.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Soft teal background panel — right side on desktop, full on mobile */}
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-100 lg:w-[52%]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
          <div className="grid w-full gap-12 pb-24 pt-32 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-36">

            {/* Left: Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                <span className="h-px w-8 bg-sky-300" />
                Online · Faith-Based · Trauma-Informed
              </div>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-[58px]">
                <span className="block text-slate-900">Christ-rooted support</span>
                <span className="block font-normal text-slate-500">for the seasons you were</span>
                <span className="block text-slate-900">never meant to carry <span className="text-[var(--peach)]">alone.</span></span>
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-slate-600">
                I provide faith-based, trauma-informed care and clinically informed biblical counseling to support adolescents, individuals, families, and parents as they walk through difficult seasons. My mission is to offer a safe, Christ-centered space where you can process your story with honesty and experience true emotional and spiritual renewal.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.38)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Session
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                >
                  Learn About Toyin
                </a>
              </div>
            </div>

            {/* Right: Image card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.18)] ring-1 ring-black/5 lg:max-w-none">
                <Image
                  src="/images/hero-bg.png"
                  alt="Toyin Adefemi counseling services"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet Your Counselor */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/50 px-6 py-24 lg:px-10 lg:py-32">
        {/* Decorative background blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--peach)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-sky-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_440px] lg:items-start lg:gap-20">

            {/* Left: Content */}
            <div className="flex flex-col">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">
                Meet Your Counselor
              </p>
              <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-[52px]">
                Hi, I&apos;m{" "}
                <span className="text-[var(--peach)]">Toyin Adefemi.</span>
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-[var(--peach)]" />

              <p className="mt-7 text-lg leading-relaxed text-slate-600">
                God has given me a deep heart for those who are suffering. With His Word as the foundation and primary tool for healing, I walk alongside teens, young adults, parents, and families as they navigate challenging seasons.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                My virtual counseling room is a safe and confidential space, shaped by compassion and guided by the Holy Spirit — where I blend clinical insight with biblical truth to support meaningful, Christ-centered healing.
              </p>

              {/* Quote card */}
              <blockquote className="mt-8 rounded-2xl bg-[var(--peach)]/8 p-6 border-l-4 border-[var(--peach)]">
                <p className="text-lg italic leading-relaxed text-slate-800">
                  &ldquo;My calling is simple: to help young people and families experience healing, identity, and transformation through Christ-centered, trauma-informed care.&rdquo;
                </p>
              </blockquote>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "MA · Biblical Counseling",
                  "Board-Certified Youth Coach",
                  "Trauma Care Provider",
                  "Certified EI Coach",
                  "Trauma-Focused CBT",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/80"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    {cred}
                  </span>
                ))}
              </div>

              {/* Consultation callout */}
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-sky-50 px-5 py-4 ring-1 ring-sky-100">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 flex-shrink-0 fill-sky-500" aria-hidden="true">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                </svg>
                <p className="text-sm leading-relaxed text-sky-800">
                  I offer a <strong>complimentary 30-minute phone consultation</strong> to help us discern whether my services are the right fit. And if I&apos;m not the best match, I&apos;ll gladly help you find someone who is.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  About Me
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="relative mt-8 lg:mt-0">
              {/* Decorative backing */}
              <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[var(--peach)]/15 to-sky-200/30" />

              {/* Portrait image */}
              <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:h-[620px]">
                <Image
                  src="/images/about-toyin.jpg"
                  alt="Toyin Adefemi — Biblical Counselor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-top"
                />
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--peach)]/15">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[var(--peach)]" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">10+ Years</p>
                  <p className="text-xs text-slate-500">Serving families & youth</p>
                </div>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -right-5 top-10 rounded-2xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.12)] ring-1 ring-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Certified</p>
                <p className="mt-0.5 text-sm font-bold text-slate-900">Biblical Counselor</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services — 2x2 Grid with Rich Cards */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-5xl font-bold tracking-tight text-slate-900">
            Counseling & Support Services
          </h2>
          <div className="mb-16 h-1 w-20 bg-[var(--peach)]" />

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group border-l-4 border-[var(--peach)] bg-white p-10 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="/work-with-me"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Connection Image - Image N */}
      <section className="relative h-64 overflow-hidden md:h-80">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-icvWhFNHuWubzvdIxEbA6weFN6VE1D.webp"
          alt="Woman being comforted, emotional support"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky-500/20" />
      </section>

      {/* Approach Pillars — Horizontal Feature Blocks */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            My Approach
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Trauma-Informed. Scripture-Centered. Spirit-Led.
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session honors your story and helps you walk confidently in your God-given identity.
          </p>

          <div className="mt-16 grid gap-8">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex gap-8 rounded-[1.5rem] bg-gradient-to-r from-sky-50 to-cyan-50 p-10 border border-sky-100"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--peach)] text-lg font-bold text-white">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Serve */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-slate-900">Who I Serve</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[var(--peach)]" />
            </div>
            <a
              href="/work-with-me"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--peach)] hover:text-[var(--peach-deep)]"
            >
              See all services
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Young Adults Counseling */}
            <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-GHa5h7KBMyrB4WH5lCWI0NkTDB14OO.webp"
                  alt="Young adult in counseling session"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Young Adults
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Young Adults Counseling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Navigating purpose, identity, relationships, and spiritual growth with compassion and biblical truth.
                </p>
                <a href="/work-with-me" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--peach)] hover:gap-2">
                  Learn more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Teen Counseling */}
            <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp"
                  alt="Teenagers in a supportive group setting"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-sky-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Teens
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Teen Counseling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Safe, trauma-informed support for teens navigating emotional wounds, identity, and life transitions.
                </p>
                <a href="/work-with-me" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--peach)] hover:gap-2">
                  Learn more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Family Counseling */}
            <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-n3SiOuqM9SIL7y3DrKZbc4CjNhiy5g.webp"
                  alt="Family walking together with arms around each other"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Families
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Family Counseling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Rebuilding connection, communication, and Christ-centered unity within your family system.
                </p>
                <a href="/work-with-me" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--peach)] hover:gap-2">
                  Learn more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Parental Counseling */}
            <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.13)]">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-u4Vn0j83H1m9lwmFr666hQi5gWdBB8.webp"
                  alt="Parents in a counseling session"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-violet-500/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Parents
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">Parental Counseling</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Equipping parents with biblical wisdom, emotional tools, and practical strategies for raising thriving children.
                </p>
                <a href="/work-with-me" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--peach)] hover:gap-2">
                  Learn more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Testimonial — Full-Width Atmospheric Section with Image H */}
      <section className="relative overflow-hidden px-6 py-40 lg:px-10 lg:py-52">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
            alt="Hands held together supportively"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="text-7xl text-[var(--peach)] leading-none">❝</span>
          <p className="mt-4 text-3xl italic leading-relaxed text-white sm:text-4xl">
            Clients describe Toyin&apos;s counseling as compassionate, grounding, and deeply Spirit-led—a place where they feel understood, supported, and guided toward emotional and spiritual wholeness.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--peach)]">
            — Client Experience, 2024
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
            Stories of Healing
          </p>
        </div>
      </section>

      {/* Why Choose Toyin — Six Feature Tiles */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Why Clients Choose Toyin
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <article
                key={feature.title}
                className={`rounded-[1.5rem] border border-white/80 p-8 ${idx % 2 === 0 ? 'bg-sky-50' : 'bg-emerald-50'}`}
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Moment Image - Image O */}
      <section className="relative h-64 overflow-hidden md:h-80">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-qxYYmROGfvWPzGZ6H45uFvz0OW9ybx.webp"
          alt="Professional counseling moment, caring and attentive"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-500/20" />
      </section>

      {/* Free Tools & Guides */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Free Tools & Guides
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-2xl text-xl text-slate-600">
            Encouraging resources designed to support your healing journey between sessions.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {resources.map((resource, index) => (
              <article
                key={resource.title}
                className="scroll-animate rounded-[1.5rem] border border-white/80 bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4">
                  <ResourceIcon type={resource.iconType} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-4 text-slate-600">
                  {resource.description}
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex rounded-xl bg-[var(--peach)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(254,143,104,0.26)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Download
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner — Reverent Pause */}
      <section className="relative bg-slate-800 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="italic text-2xl leading-relaxed text-white sm:text-3xl">
            "He heals the brokenhearted and binds up their wounds."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--peach)]">
            Psalm 147:3
          </p>
        </div>
      </section>

      {/* Final CTA — Warm, Emotionally Resonant */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-sky-50 to-white px-6 py-40 lg:px-10 lg:py-52">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-slate-600">
            Whether you&apos;re seeking emotional clarity, spiritual renewal, or support for your family, I&apos;d be honored to walk with you through this transformative season.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-12 py-6 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-1"
            >
              Book a Session
            </a>
          </div>

          <p className="mt-10 text-sm text-slate-500">
            I respond to all inquiries within 24-48 hours.
          </p>
        </div>
      </section>

    </>
  );
}
