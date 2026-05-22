'use client';

import { useState } from 'react';
import Image from 'next/image';

const steps = [
  {
    num: "01",
    title: "Book Your Session",
    summary: "Schedule at a time that works for you.",
    content: [
      "You can schedule your session online at a time that works best for you. Once you book:",
    ],
    bullets: [
      "You'll receive a confirmation email",
      "Any necessary forms will be sent to you",
      "Payment will secure your appointment",
    ],
    footer: "This ensures your time is reserved and fully dedicated to you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Complete Your Intake Form",
    summary: "Help me understand your story before we meet.",
    content: [
      "Before your first session, you'll complete a brief intake form. This helps me understand:",
    ],
    bullets: [
      "Your story and background",
      "Your goals for counseling",
      "Your spiritual background",
      "Any trauma history or emotional concerns",
      "What you hope to receive from counseling",
    ],
    footer: "Everything you share is confidential and handled with care.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Attend Your Session",
    summary: "60 minutes of focused, Spirit-led care.",
    content: [
      "Sessions are held virtually. Each session is 60 minutes. During your session, we will:",
    ],
    bullets: [
      "Explore your concerns at a pace that feels safe",
      "Integrate Scripture, prayer, and biblical wisdom",
      "Use trauma-informed tools to support emotional regulation",
      "Identify patterns, wounds, and areas needing healing",
      "Build practical strategies for daily life",
      "Invite the Holy Spirit into the process",
    ],
    footer: "My role is to guide, support, and walk with you — not rush you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Session Follow-Up",
    summary: "Continue growing between sessions.",
    content: [
      "After each session, you may receive resources to help you continue growing:",
    ],
    bullets: [
      "Notes or reflections from our time together",
      "Scriptures to meditate on",
      "Journaling prompts",
      "Tools or practical exercises",
      "Next steps for your healing journey",
    ],
    footer: "These resources help you continue growing between sessions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function AccordionItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${open ? 'border-[var(--peach)]/40 shadow-[0_8px_32px_rgba(254,143,104,0.12)]' : 'border-slate-200 bg-white shadow-sm'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-5 px-7 py-6 text-left"
        aria-expanded={open}
      >
        {/* Step number */}
        <span className={`flex-shrink-0 text-3xl font-black leading-none transition-colors ${open ? 'text-[var(--peach)]' : 'text-slate-200'}`}>
          {step.num}
        </span>

        {/* Icon */}
        <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all ${open ? 'bg-[var(--peach)] text-white' : 'bg-slate-100 text-slate-500'}`}>
          {step.icon}
        </span>

        {/* Title + summary */}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-bold text-slate-900">{step.title}</p>
          <p className={`text-sm transition-opacity ${open ? 'opacity-0 h-0' : 'text-slate-500'}`}>{step.summary}</p>
        </div>

        {/* Chevron */}
        <span className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45 text-[var(--peach)]' : 'text-slate-400'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      {/* Expanded content */}
      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="border-t border-slate-100 px-7 pb-7 pt-5">
          <p className="text-base leading-7 text-slate-600">{step.content[0]}</p>
          <ul className="mt-4 space-y-2">
            {step.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                <span className="text-base text-slate-600">{b}</span>
              </li>
            ))}
          </ul>
          {step.footer && (
            <p className="mt-5 text-sm font-medium italic text-slate-500">{step.footer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Approach() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-14 lg:px-10 lg:py-24">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
            alt="Supportive hands together"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--peach)]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--peach)]">My Approach</p>
            </div>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl">
              A Safe, Supportive,<br />
              <span className="text-[var(--peach)]">Spirit-Led</span> Experience
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/80">
              Every session is designed to help you feel seen, heard, and supported — emotionally, spiritually, and practically.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU CAN EXPECT ── */}
      <section className="relative bg-[var(--teal)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-20">

            {/* Left: text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Sessions</p>
              <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                What You Can Expect
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-8 space-y-5">
                <p className="text-lg leading-8 text-slate-600">
                  In our dedicated hour-long virtual sessions, I offer personalized biblical counseling tailored to your specific needs. Each session includes prayer, focused conversation around the challenges you&apos;re facing, and practical, Christ-centered homework to help you continue growing throughout the week.
                </p>
                <p className="text-lg leading-8 text-slate-600">
                  The Word of God is our foundation — guiding, comforting, and transforming us as we walk through this journey together. Through clinically informed biblical counseling, my heart is to come alongside you with support, encouragement, and truth every step of the way.
                </p>
                <p className="text-lg leading-8 text-slate-600">
                  I provide support for adolescents, teens, pre-teens, young adults, parents, and families navigating trauma, anxiety, depression, spiritual disconnection, family issues, abuse, discipleship, relationships, temptation, lust, and more. No matter the struggle, you will be met with compassion, confidentiality, and Christ-centered care.
                </p>
              </div>
            </div>

            {/* Right: session details card */}
            <div className="lg:sticky lg:top-28 space-y-4">
              {/* Cost card */}
              <div className="rounded-3xl bg-[var(--peach)] p-8 text-white shadow-[0_16px_40px_rgba(254,143,104,0.30)]">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">Investment</p>
                <p className="mt-3 text-5xl font-black">$90</p>
                <p className="mt-1 text-base font-medium text-white/85">per session</p>
                <div className="my-6 h-px bg-white/20" />
                <p className="text-sm leading-6 text-white/90">
                  Discounts are available for individuals experiencing financial hardship. Please reach out — we will find a way to make this work.
                </p>
                <a
                  href="/contact"
                  className="mt-6 flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[var(--peach)] transition-all hover:bg-slate-50 hover:-translate-y-0.5"
                >
                  Book a Free Consultation
                </a>
              </div>

              {/* Session specs */}
              <div className="rounded-3xl border border-slate-100 bg-white p-7 space-y-5">
                {[
                  { label: "Duration", value: "60 minutes" },
                  { label: "Format", value: "Virtual (secure video)" },
                  { label: "Frequency", value: "Weekly recommended" },
                  { label: "Free intro", value: "30-min consultation" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY CLINICALLY INFORMED BIBLICAL COUNSELING ── */}
      <section className="relative bg-slate-900 px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">

            {/* Left: image */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl lg:h-[520px]">
              <Image
                src="/images/about-toyin.jpg"
                alt="Toyin Adefemi — Biblical Counselor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Scripture overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <p className="text-base italic text-white/90">&ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[var(--peach)]">Psalm 119:105</p>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">The Foundation</p>
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Why Clinically Informed Biblical Counseling?
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-8 space-y-5">
                <p className="text-lg leading-8 text-slate-400">
                  Clinically informed biblical counseling starts with Scripture as the foundation. Though modern psychology offers helpful insights, God&apos;s Word provides the ultimate framework for healing and transformation.
                </p>
                <p className="text-lg leading-8 text-slate-400">
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
                  <div key={p.label} className="rounded-2xl border border-slate-700 bg-slate-800 px-5 py-5 text-center">
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/70">Your Commitment</p>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Are You Committed?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white/90">
            You can experience real, steady, and lasting change when you commit to the counseling process and engage fully with your treatment plan.
          </p>

          {/* Transformation pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["Healing is possible.", "Growth is possible.", "A whole, authentic you is within reach."].map((t) => (
              <span key={t} className="rounded-full bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Don&apos;t settle for another day of feeling disconnected from who God created you to be. You deserve to walk in clarity, confidence, and wholeness — and I&apos;m here to walk that journey with you.
          </p>

          <a
            href="/contact"
            className="mt-12 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-base font-bold text-[var(--peach)] shadow-[0_16px_40px_rgba(0,0,0,0.15)] transition-all hover:bg-slate-50 hover:-translate-y-0.5"
          >
            Book a Complimentary 30-Min Consultation
          </a>
        </div>
      </section>

      {/* ── HOW SESSIONS WORK — Accordion ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:items-start lg:gap-20">

            {/* Left: sticky heading */}
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Step by Step</p>
              <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
                How Sessions Work
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every step is intentional and rooted in biblical truth and trauma-informed care. Tap each step to learn more.
              </p>

              {/* Visual guide */}
              <div className="mt-10 space-y-2">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-center gap-3">
                    <span className="text-xs font-black text-slate-300">{s.num}</span>
                    <span className="text-sm font-medium text-slate-500">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: accordion */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <AccordionItem key={step.num} step={step} index={i} />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Ready to Take the First Step?
          </h2>
          <p className="mx-auto mt-6 text-lg leading-8 text-slate-600">
            Your journey toward healing, identity, and wholeness begins with one conversation. I&apos;d be honored to be your companion along the way.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-10 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              Book a Session
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-300"
            >
              Meet the Counselor
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
