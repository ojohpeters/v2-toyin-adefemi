import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Teen Counseling | A Safe Place to Talk, Grow & Feel Understood",
  description:
    "Safe, judgment-free biblical counseling for teens ages 13–17. Support for anxiety, identity, trauma, peer pressure, and more. Virtual sessions with Toyin Adefemi.",
  openGraph: {
    title: "Teen Counseling | A Safe Place to Talk, Grow & Feel Understood",
    description:
      "Safe, judgment-free counseling for teens ages 13–17. Clinically informed biblical support for anxiety, identity, trauma, peer pressure, and more.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Teen Counselor" }],
  },
};

const topics = [
  "Feeling anxious, stressed, or overwhelmed",
  "Feeling sad, stuck, or unmotivated",
  "Trauma or painful experiences",
  "Not feeling close to God",
  "Family arguments or tension at home",
  "Friendship drama or peer pressure",
  "Feeling angry or frustrated",
  "Struggling with confidence or identity",
  "Dealing with temptation or tough choices",
  "Feeling hurt by someone's words or actions",
];

const sessionIncludes = [
  "A safe, private space to talk",
  "Prayer (if you want it)",
  "Tools to help you handle your emotions",
  "Encouragement from God's Word",
  "Simple steps to help you grow during the week",
];

export default function TeenCounseling() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp"
            alt="Teenagers in a supportive group setting"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--peach)]/40 bg-[var(--peach)]/15 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--peach)]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/75">Teen Counseling · Ages 13–17</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              A Safe Place to<br />
              <span className="text-white/75">Talk, Grow &</span><br />
              Feel Understood
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/80">
              Life can feel confusing, overwhelming, or just &ldquo;a lot&rdquo; sometimes. You don&apos;t have to figure it all out alone.
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

      {/* ── A SPACE JUST FOR YOU ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Your Space</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                A Space Just<br />for You
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-8 text-lg leading-8 text-black/65">
                You might be dealing with pressure at school, changes in your friendships, family stress, or emotions that feel hard to explain. This is a space created just for you — where you can talk openly, feel heard, and get support that actually helps.
              </p>
              <p className="mt-5 text-lg leading-8 text-black/65">
                In our sessions, you can talk freely without judgment. I use clinically informed biblical counseling, which means we combine real-life tools for your emotions, practical mental-health support, and what God says about who you are.
              </p>

              {/* 3 pillars */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Emotional Tools", icon: "🛠" },
                  { label: "Mental Health", icon: "🧠" },
                  { label: "God's Truth", icon: "📖" },
                ].map((p) => (
                  <div key={p.label} className="rounded-2xl border border-black/10 bg-[var(--background)] px-4 py-4 text-center">
                    <p className="text-2xl">{p.icon}</p>
                    <p className="mt-2 text-sm font-bold text-black/90">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-[0_20px_52px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/teens-counseling.png"
                alt="Virtual teen counseling session via video call"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CAN TALK ABOUT ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">No Topic Too Big or Small</p>
            <h2 className="text-4xl font-bold text-black sm:text-5xl">What We Can Talk About</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mt-6 text-lg text-black/65">
              You can come to counseling for anything that&apos;s been heavy or confusing. Nothing is &ldquo;too small&rdquo; or &ldquo;too big.&rdquo; If it matters to you, it matters here.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[var(--teal)]/40 bg-white px-5 py-3 text-sm font-medium text-black/75 shadow-sm transition-all hover:border-[var(--peach)] hover:bg-[var(--background)] hover:text-[var(--peach)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SESSIONS ARE LIKE ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-24">

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Every Session</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                What Sessions<br />Are Like
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-7 text-lg leading-8 text-black/65">
                Each 60-minute Zoom session is designed to be a calm place to breathe, process, and grow. My goal is to help you feel stronger, supported, and more confident in who God made you to be.
              </p>

              <ul className="mt-8 space-y-4">
                {sessionIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--teal)]/25 mt-0.5">
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
            <div className="space-y-5">
              <div className="overflow-hidden rounded-3xl bg-black p-8 text-white shadow-[0_20px_52px_rgba(14,165,233,0.20)]">
                <p className="text-xs font-bold uppercase tracking-widest text-white/75">Investment</p>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-black sm:text-6xl">$90</span>
                  <span className="mb-2 text-lg text-white/75">/ session</span>
                </div>
                <div className="my-6 h-px bg-white/10" />
                <p className="text-sm leading-6 text-white/75">
                  Discounts are available for families who need financial help. Please reach out — we will find a way to make this work.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-[var(--peach)] px-6 py-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              <div className="rounded-2xl border border-black/10 bg-[var(--background)] p-6 text-center">
                <p className="text-sm font-bold text-black">You&apos;re Not Alone</p>
                <p className="mt-2 text-sm leading-6 text-black/65">Whatever you&apos;re facing, this is a place to talk, heal, and grow. I&apos;m here to walk with you every step of the way.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-[var(--peach)]/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Ready to Talk?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/75">
            You deserve a space where you feel heard, valued, and supported. Let&apos;s take the first step together.
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
