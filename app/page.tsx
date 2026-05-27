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

export default function Home() {
  return (
    <>
      {/* Hero Banner — 4:1 wide banner, fits above fold at full width */}
      <section className="w-full">
        <Image
          src="/images/home-banner.png"
          alt="Virtual Counseling From Anywhere — professional, faith-based, clinically informed biblical counseling with Toyin Adefemi"
          width={2400}
          height={600}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* Welcome — intro under the banner */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--peach)]">
            <span className="h-px w-8 bg-[var(--peach)]" />
            Online · Faith-Based · Trauma-Informed
            <span className="h-px w-8 bg-[var(--peach)]" />
          </div>
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
            <span className="block text-black">Christ-rooted support</span>
            <span className="block font-normal text-black/55">for the seasons you were</span>
            <span className="block text-black">never meant to carry <span className="text-[var(--peach)]">alone.</span></span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-black/65">
            I provide faith-based, trauma-informed care and clinically informed biblical counseling to support adolescents, individuals, families, and parents as they walk through difficult seasons. My mission is to offer a safe, Christ-centered space where you can process your story with honesty and experience true emotional and spiritual renewal.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.38)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-8 py-4 text-base font-semibold text-black/75 transition-all hover:border-black/25 hover:bg-[var(--background)]"
            >
              Meet the Counselor
            </a>
          </div>
        </div>
      </section>

      {/* Who I Serve — compact 4-card row + CTA to Approach */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Who I Serve</p>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Care for every season</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Young Adults', href: '/services/young-adults', desc: 'Clarity, healing & direction.' },
              { label: 'Teens',        href: '/services/teens',        desc: 'A safe, judgment-free space.' },
              { label: 'Families',     href: '/services/family',       desc: 'Restoring connection at home.' },
              { label: 'Parents',      href: '/services/parenting',    desc: 'Wisdom for the parenting journey.' },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group block rounded-2xl bg-[var(--background)] p-5 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-base font-bold text-black">{c.label}</h3>
                <p className="mt-1.5 text-sm leading-snug text-black/65">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--peach)] transition-all group-hover:gap-2">
                  Learn more
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/approach"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Learn More About My Approach
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Meet Your Counselor */}
      <section className="relative overflow-hidden bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        {/* Decorative background blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--peach)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-[var(--teal)]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_440px] lg:items-start lg:gap-20">

            {/* Left: Content */}
            <div className="flex flex-col">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--peach)]">
                Meet Your Counselor
              </p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-[52px]">
                Hi, I&apos;m{" "}
                <span className="text-[var(--peach)]">Toyin Adefemi.</span>
              </h2>
              <div className="mt-5 h-1 w-16 rounded-full bg-[var(--peach)]" />

              <p className="mt-7 text-lg leading-relaxed text-black/65">
                God has given me a deep heart for those who are suffering. With His Word as the foundation and primary tool for healing, I walk alongside teens, young adults, parents, and families as they navigate challenging seasons.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-black/65">
                My virtual counseling room is a safe and confidential space, shaped by compassion and guided by the Holy Spirit — where I blend clinical insight with biblical truth to support meaningful, Christ-centered healing.
              </p>

              {/* Quote card */}
              <blockquote className="mt-8 rounded-2xl bg-[var(--peach)]/8 p-6 border-l-4 border-[var(--peach)]">
                <p className="text-lg italic leading-relaxed text-black/90">
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
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black/75 shadow-sm ring-1 ring-black/15"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    {cred}
                  </span>
                ))}
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
              <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[var(--peach)]/15 to-[var(--teal)]/30" />

              {/* Portrait image */}
              <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.14)] lg:h-[620px]">
                <Image
                  src="/images/meet-counselor.jpg"
                  alt="Toyin Adefemi — Biblical Counselor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                />
              </div>
            </div>

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
        <div className="absolute inset-0 bg-[var(--teal)]/30" />
      </section>

      {/* Approach Pillars — Horizontal Feature Blocks */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--peach)]">
            My Approach
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-black">
            Trauma-Informed. Scripture-Centered. Spirit-Led.
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-black/65">
            My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session honors your story and helps you walk confidently in your God-given identity.
          </p>

          <div className="mt-16 grid gap-8">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex gap-8 rounded-[1.5rem] bg-gradient-to-r from-[var(--background)] to-[var(--background)] p-10 border border-black/10"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--peach)] text-lg font-bold text-white">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-black/65">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — Full-Width Atmospheric Section with Image H */}
      <section className="relative overflow-hidden px-6 py-14 lg:px-10 lg:py-24">
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
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-white/85">
            Stories of Healing
          </p>
        </div>
      </section>

      {/* Why Choose Toyin — Six Feature Tiles */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-black">
            Why Clients Choose Toyin
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <article
                key={feature.title}
                className={`rounded-[1.5rem] border border-white/80 p-8 ${idx % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--background)]'}`}
              >
                <h3 className="text-xl font-bold text-black">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-black/65">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner — Reverent Pause */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
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
      <section className="relative overflow-hidden bg-[var(--background)] px-6 py-14 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl md:text-5xl lg:whitespace-nowrap">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-black/65">
            Whether you&apos;re seeking emotional clarity, spiritual renewal, or support for your family, I&apos;d be honored to walk with you through this transformative season.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-12 py-6 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-1"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
