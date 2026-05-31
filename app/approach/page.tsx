import Image from 'next/image';
import ApproachForms from './_components/approach-forms';

export default function Approach() {
  return (
    <>

      {/* ── HERO BANNER — full image, full width, no crop ── */}
      <section className="w-full">
        <Image
          src="/images/approach-banner.png"
          alt="My Approach — Toyin Adefemi Counseling"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      {/* ── HERO INTRO (under the banner) ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--peach)]" />
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--peach)] sm:text-base">My Approach</p>
            <span className="h-px w-10 bg-[var(--peach)]" />
          </div>
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-black sm:text-4xl lg:whitespace-nowrap">
            A Safe, Supportive, <span className="text-[var(--peach)]">Spirit-Led</span> Experience
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-black/70">
            Every session is designed to help you feel seen, heard, and supported — emotionally, spiritually, and practically.
          </p>
        </div>
      </section>

      {/* ── WHAT YOU CAN EXPECT ── */}
      <section className="relative bg-[var(--teal)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-20">

            {/* Left: text */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--peach)] sm:text-base">Sessions</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                What You Can Expect
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-8 space-y-5">
                <p className="text-lg leading-8 text-black/65">
                  In each 60-minute virtual session, you&apos;ll receive personalized, biblically grounded counseling tailored to your needs. Sessions include prayer, focused conversation around what you&apos;re walking through, and practical, Christ-centered tools to help you grow throughout the week.
                </p>
                <p className="text-lg leading-8 text-black/65">
                  God&apos;s Word is our foundation—bringing clarity, comfort, and transformation as we walk this journey together. Through clinically informed biblical counseling, I come alongside you with support, encouragement, and truth.
                </p>
                <p className="text-lg leading-8 text-black/65">
                  Whatever you&apos;re facing, you will be met with compassion, confidentiality, and Christ-centered care.
                </p>
              </div>
            </div>

            {/* Right: session details card */}
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* Cost card */}
              <div className="rounded-3xl bg-[var(--peach)] p-8 text-white shadow-[0_16px_40px_rgba(254,143,104,0.30)]">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Investment</p>
                <p className="mt-3 text-5xl font-black">Varies</p>
                <a href="/work-with-me" className="mt-1 inline-block text-base font-medium text-white/90 underline-offset-4 hover:underline">
                  See services for details
                </a>
                <div className="my-6 h-px bg-white/20" />
                <p className="text-sm leading-6 text-white/90">
                  Discounts are available for individuals experiencing financial hardship. Please reach out — we will find a way to make this work.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[var(--peach)] transition-all hover:bg-[var(--background)] hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              {/* Session specs */}
              <div className="rounded-3xl border border-black/10 bg-white p-7 space-y-5">
                {[
                  { label: "Duration", value: "60 minutes" },
                  { label: "Format", value: "Virtual (secure video)" },
                  { label: "Frequency", value: "Weekly recommended" },
                  { label: "Free intro", value: "30-min consultation" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-black/55">{item.label}</span>
                    <span className="text-sm font-bold text-[var(--peach)]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CLINICALLY INFORMED BIBLICAL COUNSELING ── */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Left: image */}
            <div className="relative w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/why-clinically-informed.png"
                alt="Why Clinically Informed Biblical Counseling"
                width={1561}
                height={665}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </div>

            {/* Right: text */}
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--peach)] sm:text-base">The Foundation</p>
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Why Clinically Informed Biblical Counseling?
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-8 space-y-5">
                <p className="text-lg leading-8 text-white/65">
                  Clinically informed biblical counseling starts with Scripture as the foundation. Though modern psychology offers helpful insights, God&apos;s Word provides the ultimate framework for healing and transformation.
                </p>
                <p className="text-lg leading-8 text-white/65">
                  By combining biblical truth with practical mental health understanding, this approach supports whole-person restoration — addressing spirit, soul, and body — helping you experience a deeper, fuller expression of who God created you to be.
                </p>
              </div>

              {/* Pillars */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Spirit", icon: "✦" },
                  { label: "Soul", icon: "✦" },
                  { label: "Body", icon: "✦" },
                ].map((p) => (
                  <div key={p.label} className="rounded-2xl border border-white/15 bg-black px-5 py-5 text-center">
                    <p className="text-lg text-[var(--peach)]">{p.icon}</p>
                    <p className="mt-2 text-sm font-bold text-white">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARE YOU COMMITTED ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--peach)] to-[var(--peach-deep)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/70 sm:text-base">Your Commitment</p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Are You Committed?
          </h2>
          {/* Transformation pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["Healing is possible.", "Growth is possible.", "A whole, authentic you is within reach."].map((t) => (
              <span key={t} className="rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>

          <a
            href="/contact"
            className="mt-12 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-base font-bold text-[var(--peach)] shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all hover:bg-[var(--background)] hover:-translate-y-0.5"
          >
            Book a Complimentary 30-Min Consultation
          </a>
        </div>
      </section>

      {/* ── READY TO BEGIN — bridge to forms ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[var(--peach)]" />
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--peach)] sm:text-base">Ready to Begin?</p>
            <span className="h-px w-10 bg-[var(--peach)]" />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            I would be honored to <span className="text-[var(--peach)]">walk with you</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
            Take the next step — schedule a session, reach out, or scroll down to complete your intake forms.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Schedule a Session
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-10 py-4 text-base font-semibold text-black/75 transition-all hover:border-black/25"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ── FORMS (Agreement / Intake / Parent Consent / Minor Intake) ── */}
      <ApproachForms />

      {/* ── FINAL CTA ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-black/65">
            Your journey toward healing, identity, and wholeness begins with one conversation. I&apos;d be honored to be your companion along the way.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-10 py-4 text-base font-semibold text-black/75 transition-all hover:border-black/25"
            >
              Meet the Counselor
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
