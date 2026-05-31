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
      {/* Hero Banner — 3:1 wide banner image, full-bleed */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/home-banner.png"
          alt="Virtual Counseling From Anywhere — professional, faith-based, clinically informed biblical counseling with Toyin Adefemi"
          width={2400}
          height={800}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      {/* Welcome — intro under the banner */}
      <section className="relative bg-[var(--background)] px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="max-w-6xl">
          <div className="mb-6 flex items-center gap-3 text-2xl font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-3xl md:text-4xl">
            <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
            Online · Faith-Based · Trauma-Informed
          </div>
          <h1 className="font-bold leading-[1.15] tracking-tight">
            <span className="block text-[32px] text-black sm:text-4xl md:text-5xl lg:text-[60px]">
              Christ-rooted support
            </span>
            <span className="mt-2 block text-lg font-normal text-black/55 sm:text-xl md:text-2xl lg:text-[28px] lg:whitespace-nowrap">
              for the seasons you were never meant to carry <span className="font-bold text-[var(--peach)]">alone.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:mt-7 sm:text-lg">
            I provide faith-based, trauma-informed care and clinically informed biblical counseling to support adolescents, individuals, families, and parents as they walk through difficult seasons. My mission is to offer a safe, Christ-centered space where you can process your story with honesty and experience true emotional and spiritual renewal.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.38)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:px-8 sm:py-4 sm:text-base"
            >
              Book a Session
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-6 py-3.5 text-sm font-semibold text-black/75 transition-all hover:border-black/25 hover:bg-[var(--background)] sm:px-8 sm:py-4 sm:text-base"
            >
              Meet the Counselor
            </a>
          </div>
        </div>
      </section>

      {/* Who I Serve — compact 4-card row + CTA to Approach */}
      <section className="relative bg-white px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-3 text-2xl font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-3xl md:text-4xl">Who I Serve</p>
            <h2 className="text-[26px] font-bold tracking-tight text-black sm:text-3xl md:text-4xl">Care for every season</h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[var(--peach)] sm:mt-5 sm:w-14" />
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {[
              {
                label: 'Young Adults',
                href: '/services/young-adults',
                desc: 'Clarity, healing & direction.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-GHa5h7KBMyrB4WH5lCWI0NkTDB14OO.webp',
                alt: 'Young adult in a counseling session',
              },
              {
                label: 'Teens',
                href: '/services/teens',
                desc: 'A safe, judgment-free space.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp',
                alt: 'Teenagers in a supportive group',
              },
              {
                label: 'Families',
                href: '/services/family',
                desc: 'Restoring connection at home.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-n3SiOuqM9SIL7y3DrKZbc4CjNhiy5g.webp',
                alt: 'Family walking together',
              },
              {
                label: 'Parents',
                href: '/services/parenting',
                desc: 'Wisdom for the parenting journey.',
                image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-u4Vn0j83H1m9lwmFr666hQi5gWdBB8.webp',
                alt: 'Parents in a counseling session',
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group block overflow-hidden rounded-2xl bg-[var(--background)] ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-black">{c.label}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-black/65">{c.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--peach)] transition-all group-hover:gap-2">
                    Learn more
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <a
              href="/approach"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--peach)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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
      <section className="relative overflow-hidden bg-[var(--background)] px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        {/* Decorative background blob */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[var(--peach)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-[var(--teal)]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading — spans full width so the name fits one line */}
          <div className="mb-10 sm:mb-12 lg:mb-14">
            <p className="mb-3 text-2xl font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:mb-4 sm:text-3xl md:text-4xl">
              Meet Your Counselor
            </p>
            <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[52px] whitespace-nowrap">
              Hi, I&apos;m{" "}
              <span className="text-[var(--peach)]">Toyin Adefemi, M.A.</span>
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[var(--peach)] sm:mt-5 sm:w-16" />
          </div>

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_440px] lg:items-start lg:gap-20">

            {/* Portrait — first on mobile so it anchors the section */}
            <div className="relative order-first mx-auto w-full max-w-[420px] lg:order-last lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-br from-[var(--peach)]/15 to-[var(--teal)]/30 sm:-inset-3 sm:rounded-[3rem]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.14)] sm:rounded-[2.5rem] lg:aspect-auto lg:h-[620px]">
                <Image
                  src="/images/meet-counselor.jpg"
                  alt="Toyin Adefemi — Biblical Counselor"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 440px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="text-base leading-relaxed text-black/65 sm:text-lg">
                God has given me a deep heart for those who are suffering. With His Word as the foundation and primary tool for healing, I walk alongside teens, young adults, parents, and families as they navigate challenging seasons.
              </p>
              <p className="mt-4 text-base leading-relaxed text-black/65 sm:text-lg">
                My virtual counseling room is a safe and confidential space, shaped by compassion and guided by the Holy Spirit — where I blend clinical insight with biblical truth to support meaningful, Christ-centered healing.
              </p>

              {/* Quote card */}
              <blockquote className="mt-7 rounded-2xl border-l-4 border-[var(--peach)] bg-[var(--peach)]/10 p-5 sm:mt-8 sm:p-6">
                <p className="text-base italic leading-relaxed text-black/90 sm:text-lg">
                  &ldquo;My calling is simple: to help young people and families experience healing, identity, and transformation through Christ-centered, trauma-informed care.&rdquo;
                </p>
              </blockquote>

              {/* Credentials */}
              <div className="mt-7 flex flex-wrap gap-2 sm:mt-8">
                {[
                  "MA · Biblical Counseling",
                  "Board-Certified Youth Coach",
                  "Trauma Care Provider",
                  "Certified EI Coach",
                  "Trauma-Focused CBT",
                ].map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black/75 shadow-sm ring-1 ring-black/15 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    {cred}
                  </span>
                ))}
              </div>

              <div className="mt-7 sm:mt-8">
                <a
                  href="/about"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--peach)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  About Me
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emotional Connection Image - Image N */}
      <section className="relative h-48 overflow-hidden sm:h-64 md:h-80">
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
      <section className="relative bg-[var(--background)] px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-2xl font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:mb-6 sm:text-3xl md:text-4xl">
            My Approach
          </p>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Trauma-Informed. Scripture-Centered. Spirit-Led.
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-[var(--peach)] sm:mt-6 sm:w-20" />

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-black/65 sm:mt-10 sm:text-lg sm:leading-8 lg:text-xl">
            My counseling approach integrates biblical truth with evidence-based emotional and behavioral tools. Every session honors your story and helps you walk confidently in your God-given identity.
          </p>

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 sm:flex-row sm:gap-6 sm:p-8 lg:gap-8 lg:p-10"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--peach)] text-base font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                    {pillar.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-black/65 sm:mt-3 sm:text-lg sm:leading-7">
                    {pillar.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <a
              href="/approach"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--peach)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Explore My Approach
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial — Full-Width Atmospheric Section with Image H */}
      <section className="relative overflow-hidden px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
            alt="Hands held together supportively"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="text-5xl text-[var(--peach)] leading-none sm:text-7xl">❝</span>
          <p className="mt-3 text-lg italic leading-relaxed text-white sm:mt-4 sm:text-2xl md:text-3xl lg:text-4xl">
            Clients describe Toyin&apos;s counseling as compassionate, grounding, and deeply Spirit-led—a place where they feel understood, supported, and guided toward emotional and spiritual wholeness.
          </p>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-wider text-[var(--peach)] sm:mt-8 sm:text-sm">
            — Client Experience, 2024
          </p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-white/85 sm:mt-4 sm:text-sm">
            Stories of Healing
          </p>
        </div>
      </section>

      {/* Why Choose Toyin — Six Feature Tiles */}
      <section className="relative bg-[var(--background)] px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Why Clients Choose Toyin
          </h2>
          <div className="mt-5 h-1 w-16 rounded-full bg-[var(--peach)] sm:mt-6 sm:w-20" />

          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-black/10 bg-white p-6 sm:p-7 lg:p-8"
              >
                <h3 className="text-lg font-bold text-black sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/65 sm:mt-4 sm:text-base sm:leading-7">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner — Reverent Pause */}
      <section className="relative bg-black px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl italic leading-relaxed text-white sm:text-2xl md:text-3xl">
            &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
          </p>
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-wider text-[var(--peach)] sm:mt-6 sm:text-sm">
            Psalm 147:3
          </p>
        </div>
      </section>

      {/* Final CTA — Warm, Emotionally Resonant */}
      <section className="relative overflow-hidden bg-[var(--background)] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-4xl text-center lg:max-w-5xl">
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-black sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-5xl">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/65 sm:mt-8 sm:text-lg lg:text-xl">
            Whether you&apos;re seeking emotional clarity, spiritual renewal, or support for your family, I&apos;d be honored to walk with you through this transformative season.
          </p>

          <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <a
              href="/book-a-session"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-1 sm:w-auto sm:px-12 sm:py-5 sm:text-lg lg:py-6"
            >
              Book a Session
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
