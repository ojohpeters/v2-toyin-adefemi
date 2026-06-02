import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Family Counseling | Healing Relationships & Restoring Peace at Home",
  description:
    "Family counseling to heal communication, rebuild trust, and restore Christ-centered unity. Virtual sessions for the whole family with Toyin Adefemi.",
  openGraph: {
    title: "Family Counseling | Healing Relationships & Restoring Peace at Home",
    description:
      "Heal communication, rebuild trust, and restore peace in your home. Virtual family counseling rooted in Scripture and trauma-informed care.",
    images: [{ url: "/images/family-counseling.png", width: 1024, height: 1536, alt: "Family Counseling — A Space of Grace" }],
  },
};

const topics = [
  "Ongoing conflict or tension",
  "Trauma or painful experiences",
  "Anxiety, depression, or emotional overwhelm",
  "Spiritual disconnection",
  "Sibling conflict",
  "Communication breakdowns",
  "Grief or major life transitions",
  "Effects of abuse or past wounds",
  "Feeling 'stuck' or disconnected",
];

const sessionIncludes = [
  "A calm, structured space for open conversation",
  "Prayer and Scripture-based encouragement",
  "Tools for communication and emotional regulation",
  "Support for each family member",
  "Practical steps to strengthen the home",
];

const helps = [
  "Understand each other's emotions",
  "Communicate in healthier ways",
  "Rebuild trust and connection",
  "Navigate conflict with wisdom",
  "Strengthen their spiritual foundation",
];

export default function FamilyCounseling() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-n3SiOuqM9SIL7y3DrKZbc4CjNhiy5g.webp"
            alt="Family walking together"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Healing Relationships,<br />
              <span className="text-[var(--peach)]">Restoring Peace</span> at Home
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/80">
              Every family faces seasons of stress, conflict, or emotional strain. Family counseling provides a safe place to process and grow together.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/book-a-session"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.40)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Book a Session
              </a>
              <a
                href="/approach"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                How Sessions Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFE SPACE FOR THE WHOLE FAMILY ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Together</p></div>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl">
                A Safe Space for<br />the Whole Family
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-8 text-lg leading-8 text-black/65">
                Whether it&apos;s communication issues, trauma, spiritual disconnection, or daily pressures, your family needs a safe place to process and grow together — where everyone can be heard, understood, and supported with grace and truth.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/65">
                Through clinically informed biblical counseling, I help families heal from the inside out. This approach blends Scripture with practical mental-health tools to support the entire home.
              </p>

              <ul className="mt-8 space-y-3">
                {helps.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--peach)]/15">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[var(--peach)]" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base text-black/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service flyer — full width, natural aspect of the source image */}
            <div className="w-full overflow-hidden rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
              <Image
                src="/images/family-safe-space.png"
                alt="A family video-counseling session at the kitchen table"
                width={1199}
                height={896}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON REASONS ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Common Challenges</p></div>
            <h2 className="text-4xl font-bold text-black">Common Reasons Families Come</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mt-6 text-lg text-black/65">
              No matter the struggle, your family will be met with compassion and Christ-centered guidance.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[var(--peach)]/40 bg-white px-5 py-3 text-sm font-medium text-black/75 shadow-sm transition-all hover:border-[var(--peach)] hover:bg-[var(--background)] hover:text-[var(--peach)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SESSIONS + COST ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-20">

            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Each Session</p></div>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl">
                What Sessions<br />Look Like
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-7 text-lg leading-8 text-black/65">
                Each 60-minute virtual session is a calm, structured space for your family to process, connect, and grow together. My goal is to help your family move toward healing, unity, and a healthier rhythm of life.
              </p>

              <ul className="mt-8 space-y-4">
                {sessionIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--peach)]/15 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-[var(--peach)]" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base text-black/75">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cost card */}
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl bg-black p-8 text-white shadow-[0_20px_52px_rgba(146,64,14,0.20)]">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">Investment</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black sm:text-6xl">$150</span>
                  <span className="mb-2 text-lg text-[var(--peach)]">/ session</span>
                </div>
                <div className="my-6 h-px bg-white/10" />
                <p className="text-sm leading-6 text-white/75">
                  Discounts are available for families experiencing financial hardship. No family should miss out on support because of finances.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-[var(--peach)] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[var(--background)] p-6">
                <p className="text-sm font-bold text-black">Your Family Can Heal</p>
                <p className="mt-2 text-sm leading-6 text-black/65">Your home doesn&apos;t have to stay in survival mode. With the right support, your family can rebuild connection and experience the peace God desires for your household.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[var(--peach)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white sm:whitespace-nowrap sm:text-2xl md:text-3xl">Your Family Doesn&apos;t Have to Stay Stuck</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            I&apos;m here to walk with your family — one step at a time — toward healing, connection, and peace.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-5 text-base font-bold text-white shadow-[0_12px_32px_rgba(254,143,104,0.40)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
          >
            Book a Complimentary 30-Min Consultation
          </a>
        </div>
      </section>

    </>
  );
}
