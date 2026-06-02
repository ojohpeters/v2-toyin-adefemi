import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Toyin Adefemi | Biblical Counselor & Youth Advocate",
  description:
    "Learn about Toyin Adefemi — Biblical Counselor, Youth Advocate, and Emotional Wellness Practitioner. Over a decade of Christ-centered, trauma-informed soul care for youth, families, and young adults.",
  openGraph: {
    title: "About Toyin Adefemi | Biblical Counselor & Youth Advocate",
    description:
      "Learn about Toyin Adefemi — Biblical Counselor, Youth Advocate, and Emotional Wellness Practitioner with over a decade of experience serving youth, families, and young adults.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Biblical Counselor" }],
  },
};

export default function About() {
  return (
    <>

      {/* ── HERO: Magazine split ── */}
      <section className="relative overflow-hidden bg-[var(--background)]">
        {/* Soft warm panel behind portrait */}
        <div className="absolute inset-y-0 right-0 w-full bg-[var(--peach)]/8 lg:w-[48%]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid w-full gap-12 pb-12 pt-12 lg:grid-cols-2 lg:gap-20 lg:pb-16 lg:pt-16">

            {/* Left: text */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Welcome</p>
              </div>

              <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-[38px] lg:whitespace-nowrap xl:text-5xl 2xl:text-6xl">
                I&apos;m{' '}
                <span className="text-[var(--peach)]">Toyin</span>{' '}
                <span className="text-black">Adefemi, M.A.</span>
              </h1>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Professional Counselor',
                  'Board Certified Youth Coach',
                  'Clinically Informed Biblical Counselor',
                ].map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--peach)]/10 px-4 py-2 text-sm font-bold text-[var(--peach)] ring-1 ring-[var(--peach)]/25 sm:text-base"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    {cred}
                  </span>
                ))}
              </div>

              <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
                I&apos;m grateful for the opportunity to walk alongside you as you begin your soul-care journey. For more than a decade I have had the privilege of walking alongside hundreds of youth, parents, and families through some of life&apos;s most challenging seasons.
              </p>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { stat: "10+", label: "Years of service" },
                  { stat: "100s", label: "Lives impacted" },
                  { stat: "100%", label: "Christ-centered care" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-3xl font-bold text-[var(--peach)]">{item.stat}</span>
                    <span className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-black/55">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/book-a-session"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Book a Session
                </a>
                <a
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-8 py-4 text-base font-semibold text-black/75 transition-all hover:border-black/25"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] lg:max-w-none">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-br from-[var(--peach)]/20 to-[var(--teal)]/30" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] lg:aspect-[5/6]">
                  <Image
                    src="/images/meet-counselor.jpg"
                    alt="Portrait of Toyin Adefemi"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="relative overflow-hidden bg-black px-6 py-12 lg:px-10 lg:py-16">
        {/* Large decorative quote mark */}
        <div className="pointer-events-none absolute -left-4 -top-6 select-none text-[18rem] font-serif leading-none text-white/10" aria-hidden="true">&ldquo;</div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-2xl font-light italic leading-relaxed text-white sm:text-3xl lg:text-4xl">
            My heart is to walk with you — not as an expert above you, but as a companion beside you — as you move toward wholeness and healing in Christ.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-sm font-semibold uppercase tracking-widest text-white/80">Toyin Adefemi</span>
            <span className="h-px w-10 bg-white/50" />
          </div>
        </div>
      </section>

      {/* ── MY HEART FOR HEALING ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Image left */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_52px_rgba(0,0,0,0.10)] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src="/images/credentials-2.png"
                alt="Toyin Adefemi credentials"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 backdrop-blur-sm px-5 py-4 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">Safe Space</p>
                <p className="mt-1 text-sm font-semibold text-black/90">A confidential virtual counseling room created with your healing in mind.</p>
              </div>
            </div>

            {/* Text right */}
            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">My Story</p></div>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl">
                My Heart<br />for Healing
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-8 space-y-6">
                <p className="text-lg leading-8 text-black/65">
                  My virtual counseling room is a safe and confidential space, created with your healing in mind. My work flows from compassion, Scripture, and a deep conviction that emotional and spiritual restoration is possible for every person.
                </p>
                <p className="text-lg leading-8 text-black/65">
                  For more than a decade, I&apos;ve supported youth, young adults, and families walking through trauma, confusion, and some of life&apos;s most difficult transitions. What guides me is not only my training but also a God-given burden to see people restored. In every session, I blend clinical insight with biblical truth and Spirit-led wisdom, creating a space where you feel seen, supported, and strengthened.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MY CALLING: Journey Timeline ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        {/* Subtle grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">A God-Directed Journey</p></div>
            <h2 className="text-xl font-bold text-black sm:text-2xl md:text-3xl lg:text-4xl">My Calling</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          </div>

          {/* Journey steps */}
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              {
                phase: "Phase 1",
                title: "The Corporate Years",
                body: "For years, I built my career in healthcare leadership — improving processes, strengthening systems, solving problems, and helping teams function at their best. I earned degrees and certifications. I created order.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                ),
                accent: "bg-white ring-black/15 shadow-sm",
              },
              {
                phase: "The Shift",
                title: "A Quiet Pull",
                body: "On the side, I found myself drawn to people's stories — the teen wrestling with identity, the young adult overwhelmed by life, the parent carrying silent burdens. I began offering soul care after work. What started as 'something I did on the side' became the place where my heart felt most alive.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                accent: "bg-[var(--peach)]/20 ring-[var(--peach)]/40",
                highlight: true,
              },
              {
                phase: "Phase 2",
                title: "Full-Time Soul Care",
                body: "God made it clear: He was shifting me from improving processes to helping people heal. Today, the same leadership skills that once helped me guide teams now help me guide hearts — gently, intentionally, and with Christ at the center.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                accent: "bg-white ring-black/15 shadow-sm",
              },
            ].map((step) => (
              <div
                key={step.title}
                className={`relative flex flex-col gap-5 rounded-3xl p-8 ring-1 ${step.accent}`}
              >
                {step.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--peach)] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                    God&apos;s Turn
                  </div>
                )}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.highlight ? 'bg-[var(--peach)] text-white' : 'bg-white text-black/65'}`}>
                  {step.icon}
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${step.highlight ? 'text-[var(--peach)]' : 'text-black/55'}`}>
                    {step.phase}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-black">{step.title}</h3>
                </div>
                <p className="text-base leading-7 text-black/65">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <p className="mx-auto mt-16 max-w-2xl text-center text-lg italic leading-8 text-black/65">
            My journey from corporate leadership to soul care wasn&apos;t accidental. It was preparation. Every step equipped me to walk with young people, parents, and families as they find clarity, identity, and healing in Christ.
          </p>
        </div>
      </section>

      {/* ── THE EQUIPPING ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_480px] lg:items-start lg:gap-24">

            {/* Left: text + credentials */}
            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Training &amp; Formation</p></div>
              <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl">
                The Equipping
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <p className="mt-8 text-lg leading-8 text-black/65">
                Over time, God made it clear that my greatest credential wasn&apos;t just my training, but the foundation I stand on: the Word of God.
              </p>
              <p className="mt-4 text-lg leading-8 text-black/65">
                Today, I bring a unique blend of biblical counseling, mental health coaching, emotional intelligence training, and a deep commitment to Scripture into every session.
              </p>

              {/* Credentials list */}
              <div className="mt-10 space-y-3">
                {/* Bible — featured */}
                <div className="flex items-start gap-4 rounded-2xl border-2 border-[var(--peach)]/30 bg-[var(--peach)]/5 px-5 py-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--peach)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-black">The Bible</p>
                      <span className="rounded-full bg-[var(--peach)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Primary Authority</span>
                    </div>
                    <p className="mt-0.5 text-sm text-black/55">My primary authority and guide for soul care</p>
                  </div>
                </div>

                {/* Other credentials */}
                {[
                  "Master of Arts in Human Services (Biblical Counseling Focus)",
                  "Board-Certified Youth Mental Health Coach",
                  "Certified Christian Trauma Care Provider",
                  "Certified Emotional Intelligence Life Coach",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-4 rounded-xl border border-black/10 bg-[var(--background)] px-5 py-4">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    <p className="text-sm font-medium text-black/75">{cred}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: framed certificate */}
            <div className="relative mx-auto w-full max-w-[460px] lg:sticky lg:top-32 lg:max-w-none">
              {/* Decorative offset card for depth */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.75rem] bg-[var(--peach)]/15 ring-1 ring-[var(--peach)]/30"
                aria-hidden="true"
              />

              {/* Matted photo frame */}
              <div className="relative rounded-[1.75rem] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10 sm:p-4">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/about-equipping.png"
                    alt="Toyin Adefemi — Counseling Certificate of Completion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Caption */}
                <div className="px-1 pb-2 pt-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--peach)]">
                    Featured Credential
                  </p>
                  <p className="mt-1 text-sm font-semibold text-black">
                    Counseling · Certificate of Completion
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ATMOSPHERIC IMAGE ── */}
      <section className="relative h-72 overflow-hidden md:h-[420px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
          alt="Hands held together in support"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="max-w-2xl px-6 text-center text-2xl font-light italic leading-relaxed text-white sm:text-3xl">
            &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Ready to Start?</p></div>
          <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
            Let&apos;s Begin Your Journey
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-black/65">
            If you&apos;re ready to experience healing, discover your identity, and step boldly into your purpose, I&apos;d be honored to walk alongside you.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/book-a-session"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-lg font-semibold text-white shadow-[0_16px_30px_rgba(254,143,104,0.34)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-10 py-4 text-lg font-semibold text-black/75 transition-all hover:border-black/25 hover:bg-[var(--background)]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
