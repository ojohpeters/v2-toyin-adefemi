import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Services | Teen, Young Adult, Family & Parenting Counseling",
  description:
    "Virtual biblical counseling services for teens, young adults, families, and parents. Faith-based, trauma-informed care starting at $90/session. Free 30-min consultation available.",
  openGraph: {
    title: "Services | Teen, Young Adult, Family & Parenting Counseling",
    description:
      "Virtual biblical counseling for teens, young adults, families, and parents. Faith-based, trauma-informed care starting at $90/session.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Biblical Counselor" }],
  },
};

const services = [
  {
    title: "Teen Counseling",
    tagline: "A safe place to talk, grow & feel understood",
    description: "For teens navigating identity, anxiety, peer pressure, family stress, and emotional overwhelm. A judgment-free space rooted in biblical truth.",
    href: "/services/teens",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp",
    imageAlt: "Teenagers in a supportive group",
    badge: "Ages 13–17",
    badgeColor: "bg-[var(--peach)]",
    border: "border-[var(--peach)]",
    dot: "bg-[var(--peach)]",
    accent: "text-[var(--peach)]",
    bg: "bg-[var(--background)]",
  },
  {
    title: "Young Adults",
    tagline: "Clarity, healing & direction for this season",
    description: "For young adults feeling stuck, overwhelmed, or disconnected — from life, purpose, or God. Support for the transitions and questions no one prepared you for.",
    href: "/services/young-adults",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-GHa5h7KBMyrB4WH5lCWI0NkTDB14OO.webp",
    imageAlt: "Young adult in a counseling session",
    badge: "Ages 18–30",
    badgeColor: "bg-[var(--peach)]",
    border: "border-[var(--peach)]",
    dot: "bg-[var(--peach)]",
    accent: "text-[var(--peach)]",
    bg: "bg-[var(--background)]",
  },
  {
    title: "Family Counseling",
    tagline: "Healing relationships, restoring peace at home",
    description: "For families navigating conflict, trauma, communication breakdowns, or spiritual disconnection. A safe space to process and grow together.",
    href: "/services/family",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-n3SiOuqM9SIL7y3DrKZbc4CjNhiy5g.webp",
    imageAlt: "Family walking together",
    badge: "For the Whole Family",
    badgeColor: "bg-[var(--peach)]",
    border: "border-[var(--peach)]",
    dot: "bg-[var(--peach)]",
    accent: "text-[var(--peach)]",
    bg: "bg-[var(--background)]",
  },
  {
    title: "Parenting Counseling",
    tagline: "Support, clarity & Christ-centered guidance",
    description: "For parents who feel overwhelmed, unsure, or alone. Practical, faith-rooted tools that bring peace and connection back into your home.",
    href: "/services/parenting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/34-u4Vn0j83H1m9lwmFr666hQi5gWdBB8.webp",
    imageAlt: "Parents in a counseling session",
    badge: "For Parents",
    badgeColor: "bg-[var(--peach)]",
    border: "border-[var(--peach)]",
    dot: "bg-[var(--peach)]",
    accent: "text-[var(--peach)]",
    bg: "bg-[var(--background)]",
  },
];

const steps = [
  {
    num: "01",
    title: "Book a Free Consultation",
    description: "Start with a complimentary 30-minute phone call. We'll talk about what you're facing and whether my services are the right fit for you.",
  },
  {
    num: "02",
    title: "Complete Your Intake Form",
    description: "Before your first session, you'll complete a brief form so I can understand your story, goals, and what you hope to receive from counseling.",
  },
  {
    num: "03",
    title: "Attend Your First Session",
    description: "Each 60-minute Zoom session includes prayer, focused conversation, and Christ-centered homework to help you keep growing throughout the week.",
  },
  {
    num: "04",
    title: "Grow & Be Restored",
    description: "With consistent support, you'll gain clarity, heal from what's been heavy, and walk confidently in the identity and purpose God designed for you.",
  },
];

export default function WorkWithMe() {
  return (
    <>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-icvWhFNHuWubzvdIxEbA6weFN6VE1D.webp"
            alt="Supportive counseling environment"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/72" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--peach)]" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--peach)]">Services & Support</p>
            </div>
            <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Counseling &<br />
              Support <span className="text-[var(--peach)]">Designed</span><br />
              for You
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-white/80">
              Faith-based, trauma-informed care to help you heal, grow, and step boldly into your identity in Christ. Find the service that fits your season.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.40)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Book a Free Consultation
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

      {/* ── SERVICES GRID ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">All Services</p>
            <h2 className="text-4xl font-bold text-black sm:text-5xl">Find Your Path to Healing</h2>
            <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Each service is tailored to meet you exactly where you are. Select the one that best fits your season.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((svc) => (
              <a
                key={svc.title}
                href={svc.href}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 ${svc.border} bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.13)]`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute bottom-4 left-4 rounded-full ${svc.badgeColor} px-3 py-1 text-xs font-bold text-white backdrop-blur-sm`}>
                    {svc.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-7">
                  <p className={`text-xs font-bold uppercase tracking-widest ${svc.accent}`}>{svc.tagline}</p>
                  <h3 className="mt-2 text-2xl font-bold text-black">{svc.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-black/65">{svc.description}</p>
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${svc.accent} group-hover:gap-3 transition-all`}>
                    Explore this service
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Speaking card — full width */}
          <a
            href="/speaking"
            className="group mt-6 flex flex-col overflow-hidden rounded-3xl border-2 border-black/15 bg-black shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.18)] sm:flex-row"
          >
            <div className="relative h-52 flex-shrink-0 overflow-hidden sm:h-auto sm:w-64">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-xs9JEM2M8GFjgjCsryzB72sUmkF6l0.webp"
                alt="Youth group engaged in a workshop"
                fill
                sizes="(max-width: 640px) 100vw, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">For Organizations & Churches</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Workshops, Trainings & Speaking</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/65">
                Biblical, trauma-informed teachings for churches, ministries, and youth organizations. Bring healing wisdom to your community through keynotes, breakouts, and multi-day trainings.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--peach)] group-hover:gap-3 transition-all">
                Learn about speaking
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── QUICK FACTS BANNER ── */}
      <section className="relative bg-[var(--peach)] px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { stat: "$90", label: "Per individual session" },
              { stat: "60 min", label: "Session duration" },
              { stat: "Free", label: "30-min consultation" },
              { stat: "Virtual", label: "Secure Zoom sessions" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl font-black text-white">{item.stat}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-white/75">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK TOGETHER ── */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_460px] lg:items-center lg:gap-24">

            {/* Steps */}
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--peach)]">The Process</p>
              <h2 className="text-4xl font-bold text-white sm:text-5xl">How We Work Together</h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

              <div className="mt-14 space-y-0">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative flex gap-6">
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-5 top-12 h-full w-px bg-gradient-to-b from-[var(--peach)]/50 to-transparent" />
                    )}
                    {/* Circle */}
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--peach)] bg-black">
                        <span className="text-xs font-black text-[var(--peach)]">{step.num}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-base leading-7 text-white/65">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[480px] overflow-hidden rounded-3xl shadow-[0_20px_52px_rgba(0,0,0,0.3)] lg:h-[560px]">
              <Image
                src="/images/about-toyin.jpg"
                alt="Toyin Adefemi — Biblical Counselor"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-top"
              />
              {/* Floating CTA card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-sm px-6 py-5 shadow-xl">
                <p className="text-sm font-bold text-black">Start with a free consultation</p>
                <p className="mt-1 text-xs text-black/55">30 minutes · No commitment · Completely confidential</p>
                <a
                  href="/contact"
                  className="mt-4 flex items-center justify-center rounded-xl bg-[var(--peach)] px-5 py-3 text-sm font-bold text-white shadow-[0_6px_16px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)]"
                >
                  Book Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINANCIAL HARDSHIP NOTE ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl border border-black/10 bg-[var(--background)] px-8 py-10 shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--peach)]/10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-[var(--peach)]" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-black">No One Should Go Without Support</h3>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-black/65">
              Discounts are available for individuals and families experiencing financial hardship. Please don&apos;t let finances be a barrier — reach out and we&apos;ll find a way to make this work.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-black/15 bg-white px-7 py-3 text-sm font-semibold text-black/90 transition-all hover:border-[var(--peach)] hover:text-[var(--peach)]"
            >
              Ask About Discounts
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--peach)]">Ready to Start?</p>
          <h2 className="text-5xl font-bold leading-tight text-black sm:text-6xl">
            Your Healing<br />Journey Starts Here
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-8 text-black/65">
            Whether you&apos;re seeking support for yourself, your teen, or your family — I&apos;d be honored to walk alongside you. Your story matters, and healing is possible.
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
          <p className="mt-8 text-sm text-white/65">
            Free 30-minute consultation · Responds within 24–48 hours · Always confidential
          </p>
        </div>
      </section>

    </>
  );
}
