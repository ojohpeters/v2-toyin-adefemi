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
    <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${open ? 'border-[var(--peach)]/40 shadow-[0_8px_32px_rgba(254,143,104,0.12)]' : 'border-black/15 bg-white shadow-sm'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-5 px-7 py-6 text-left"
        aria-expanded={open}
      >
        {/* Step number */}
        <span className={`flex-shrink-0 text-3xl font-black leading-none transition-colors ${open ? 'text-[var(--peach)]' : 'text-white/85'}`}>
          {step.num}
        </span>

        {/* Icon */}
        <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all ${open ? 'bg-[var(--peach)] text-white' : 'bg-white text-black/55'}`}>
          {step.icon}
        </span>

        {/* Title + summary */}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-bold text-black">{step.title}</p>
          <p className={`text-sm transition-opacity ${open ? 'opacity-0 h-0' : 'text-black/55'}`}>{step.summary}</p>
        </div>

        {/* Chevron */}
        <span className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45 text-[var(--peach)]' : 'text-white/65'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      {/* Expanded content */}
      <div className={`transition-all duration-300 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="border-t border-black/10 px-7 pb-7 pt-5">
          <p className="text-base leading-7 text-black/65">{step.content[0]}</p>
          <ul className="mt-4 space-y-2">
            {step.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                <span className="text-base text-black/65">{b}</span>
              </li>
            ))}
          </ul>
          {step.footer && (
            <p className="mt-5 text-sm font-medium italic text-black/55">{step.footer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--peach)]">My Approach</p>
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Sessions</p>
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">The Foundation</p>
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/70">Your Commitment</p>
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

      {/* ── HOW SESSIONS WORK — Accordion ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[400px_1fr] lg:items-start lg:gap-20">

            {/* Left: sticky heading */}
            <div className="lg:sticky lg:top-28">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">Step by Step</p>
              <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl">
                How Sessions Work
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-6 text-lg leading-8 text-black/65">
                Every step is intentional and rooted in biblical truth and trauma-informed care. Tap each step to learn more.
              </p>

              {/* Visual guide */}
              <div className="mt-10 space-y-2">
                {steps.map((s) => (
                  <div key={s.num} className="flex items-center gap-3">
                    <span className="text-xs font-black text-white/75">{s.num}</span>
                    <span className="text-sm font-medium text-black/55">{s.title}</span>
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
