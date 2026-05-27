import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Young Adult Counseling | Clarity, Healing & Direction",
  description:
    "Biblical counseling for young adults navigating anxiety, identity, purpose, relationships, and life transitions. Faith-based, trauma-informed virtual sessions.",
  openGraph: {
    title: "Young Adult Counseling | Clarity, Healing & Direction",
    description:
      "Counseling for young adults navigating anxiety, identity, purpose, and life transitions. Faith-based, trauma-informed virtual sessions with Toyin Adefemi.",
    images: [{ url: "/images/young-adult-counseling.png", width: 1024, height: 1536, alt: "Young Adult Counseling — A Space of Grace" }],
  },
};

const topics = [
  "Anxiety, stress, and overwhelm",
  "Depression or emotional heaviness",
  "Trauma or unresolved pain",
  "Identity, purpose, and calling",
  "Spiritual disconnection or confusion",
  "Relationship struggles",
  "Family tension or generational patterns",
  "Boundaries, self-worth, and confidence",
  "Temptation, habits, and decision-making",
  "Life transitions (school, work, adulthood)",
];

const sessionIncludes = [
  "A safe, private space to talk",
  "Prayer and Scripture-based encouragement",
  "Tools to help you manage emotions and stress",
  "Support for your spiritual and personal growth",
  "Practical steps to help you move forward during the week",
];

const pillars = [
  { label: "Practical mental-health tools" },
  { label: "Trauma-informed care" },
  { label: "Emotional intelligence skills" },
  { label: "Scripture-rooted truth" },
  { label: "Real-life strategies for daily challenges" },
];

export default function YoungAdultCounseling() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-GHa5h7KBMyrB4WH5lCWI0NkTDB14OO.webp"
            alt="Young adult counseling"
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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--peach)]/40 bg-[var(--peach)]/15 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--peach)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Young Adult Counseling · Ages 18–30</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Clarity, Healing &<br />
              <span className="text-white/80">Direction</span><br />
              for This Season
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/80">
              Young adulthood is full of transitions. You don&apos;t have to navigate this season alone.
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

      {/* ── SAFE SPACE ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Service flyer */}
            <div className="flex items-center justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-3xl shadow-[0_32px_64px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                <Image
                  src="/images/young-adult-counseling.png"
                  alt="Young adult in a virtual counseling session with Toyin Adefemi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Your Safe Space</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                A Safe Space<br />to Grow
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-8 text-lg leading-8 text-black/65">
                Many young adults feel overwhelmed, anxious, or stuck between who they&apos;ve been and who they&apos;re becoming. Counseling gives you a safe, supportive space to process life, heal from what&apos;s been heavy, and grow into the person God designed you to be.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/65">
                This approach supports your whole self — mind, emotions, and spirit.
              </p>

              <ul className="mt-8 space-y-3">
                {pillars.map((p) => (
                  <li key={p.label} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--peach)]/15">
                      <span className="h-2 w-2 rounded-full bg-[var(--peach)]" />
                    </span>
                    <span className="text-base text-black/75">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">You&apos;re Not Alone In This</p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">What We Can Work Through</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mt-6 text-lg text-white/70">
              Whatever you&apos;re carrying, you will be met with compassion, clarity, and Christ-centered guidance.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[var(--peach)]/50 bg-black/50 px-5 py-3 text-sm font-medium text-white/95 backdrop-blur-sm transition-all hover:border-[var(--peach)] hover:bg-black"
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Each Session</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                What Sessions<br />Look Like
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-7 text-lg leading-8 text-black/65">
                Each 60-minute Zoom session includes everything you need to gain clarity, heal deeply, and walk confidently in who God created you to be.
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

              <div className="mt-10 rounded-2xl border-l-4 border-[var(--peach)] bg-[var(--background)] px-6 py-5">
                <p className="text-base italic leading-7 text-black/75">
                  &ldquo;This season doesn&apos;t have to feel confusing or heavy. With the right support, you can heal, grow, and step into your God-given identity with confidence.&rdquo;
                </p>
              </div>
            </div>

            {/* Cost + CTA */}
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl bg-black p-8 text-white shadow-[0_20px_52px_rgba(16,185,129,0.15)]">
                <p className="text-xs font-bold uppercase tracking-widest text-white/80">Investment</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black sm:text-6xl">$90</span>
                  <span className="mb-2 text-lg text-white/80">/ session</span>
                </div>
                <div className="my-6 h-px bg-white/10" />
                <p className="text-sm leading-6 text-white/75">
                  Discounts are available for young adults experiencing financial hardship. No one should miss out on support because of finances.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-[var(--peach)] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[var(--background)] p-6">
                <p className="text-sm font-bold text-black">You Can Move Forward</p>
                <p className="mt-2 text-sm leading-6 text-black/65">With the right support, you can heal, grow, and step into your God-given identity with confidence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[var(--teal)]/20 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Ready to Move Forward?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            You don&apos;t have to keep carrying the weight of this season alone. Let&apos;s start with a conversation.
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
