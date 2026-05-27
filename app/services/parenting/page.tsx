import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Parenting Counseling | Christ-Centered Support for Your Journey",
  description:
    "Parenting counseling for emotional needs, behavior challenges, co-parenting, and building a spiritually grounded home. Virtual sessions with Toyin Adefemi.",
  openGraph: {
    title: "Parenting Counseling | Christ-Centered Support for Your Journey",
    description:
      "Support for parents navigating emotional needs, behavior challenges, and family stress. Build a spiritually grounded home with Christ-centered guidance.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Biblical Counselor" }],
  },
};

const topics = [
  "Emotional or behavioral struggles in children",
  "Anxiety, depression, or overwhelm in the home",
  "Trauma or past experiences affecting parenting",
  "Spiritual disconnection or confusion",
  "Co-parenting challenges",
  "Discipline and boundaries",
  "Communication breakdowns",
  "Sibling conflict",
  "Family transitions (divorce, blending families, loss)",
  "Feeling stuck, exhausted, or unsure what to do next",
];

const sessionIncludes = [
  "A safe, structured space to talk",
  "Prayer and Scripture-based encouragement",
  "Tools for emotional regulation and communication",
  "Strategies for parenting with confidence and grace",
  "Support for both the parent and the child's needs",
  "Practical steps to strengthen the home throughout the week",
];

const helps = [
  "Understand their child's emotional needs",
  "Respond to behavior with wisdom and grace",
  "Strengthen communication and connection",
  "Navigate conflict without shame or frustration",
  "Build a spiritually grounded home",
  "Heal from their own past wounds that affect parenting",
];

export default function ParentingCounseling() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-u4Vn0j83H1m9lwmFr666hQi5gWdBB8.webp"
            alt="Parents in a counseling session"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">Parenting Counseling</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Support, Clarity &<br />
              <span className="text-[var(--peach)]">Christ-Centered</span><br />
              Guidance
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/80">
              Parenting is one of the most meaningful — and most challenging — roles God gives us. You don&apos;t have to figure it all out alone.
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

      {/* ── SAFE SPACE FOR PARENTS ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Image */}
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-[0_20px_52px_rgba(0,0,0,0.10)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-PP3b2FIhmDYtGarg7jonW91ebBHnrl.webp"
                alt="Parent in a counseling session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">For Parents</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                A Safe Space<br />for Parents
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-8 text-lg leading-8 text-black/65">
                Between emotional needs, behavior struggles, family stress, and the pressures of everyday life, many parents feel overwhelmed, unsure, or alone. Parenting counseling provides a safe space to process what&apos;s happening at home and learn practical, faith-rooted tools that bring peace and connection back into your family.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/65">
                This approach blends Scripture with practical mental-health tools to support both you and your child.
              </p>

              <ul className="mt-8 space-y-3">
                {helps.map((item) => (
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
          </div>
        </div>
      </section>

      {/* ── COMMON CHALLENGES ── */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">You&apos;re Not Alone</p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Common Parenting Challenges</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mt-6 text-lg text-white/70">
              Whatever you&apos;re facing, you will be met with compassion, clarity, and Christ-centered guidance.
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
                Each 60-minute Zoom session is designed to help you parent with peace, wisdom, and spiritual grounding. My goal is to help you build a healthier rhythm at home and strengthen your connection with your child.
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
                  &ldquo;Parenting doesn&apos;t come with a manual — but you don&apos;t have to figure it out by yourself. With the right support, you can parent with confidence rooted in God&apos;s truth.&rdquo;
                </p>
              </div>
            </div>

            {/* Cost + CTA */}
            <div className="space-y-5 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl bg-black p-8 text-white shadow-[0_20px_52px_rgba(109,40,217,0.20)]">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">Investment</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black sm:text-6xl">$90</span>
                  <span className="mb-2 text-lg text-[var(--peach)]">/ session</span>
                </div>
                <div className="my-6 h-px bg-white/10" />
                <p className="text-sm leading-6 text-white/75">
                  Discounts are available for families experiencing financial hardship. No parent should miss out on support because of finances.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-[var(--peach)] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[var(--background)] p-6">
                <p className="text-sm font-bold text-black">You Don&apos;t Have to Parent Alone</p>
                <p className="mt-2 text-sm leading-6 text-black/65">With the right support, you can build a healthier rhythm at home, strengthen your connection with your child, and parent with confidence rooted in God&apos;s truth.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black to-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[var(--peach)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Ready to Parent with Confidence?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            I&apos;m here to walk with you — one step at a time — as you build a home rooted in wisdom, grace, and God&apos;s truth.
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
