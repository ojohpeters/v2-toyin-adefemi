import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Speaking & Workshops | Toyin Adefemi",
  description:
    "Invite Toyin Adefemi to speak at your church, conference, or youth event. Biblical, trauma-informed keynotes, breakouts, and workshops on healing, identity, parenting, and emotional wellness.",
  openGraph: {
    title: "Speaking & Workshops | Toyin Adefemi",
    description:
      "Biblical, trauma-informed speaking for churches, conferences, and youth organizations. Keynotes, breakouts, staff training, and more.",
    images: [{ url: "/images/speaking-hero.jpg", width: 4032, height: 3024, alt: "Toyin Adefemi — Speaker & Biblical Counselor" }],
  },
};

const topics = [
  { title: "Healing from Trauma",            description: "Biblical foundations for understanding and healing from trauma, with practical tools for emotional restoration." },
  { title: "Identity in Christ",             description: "Discovering your God-given identity in the midst of confusion, comparison, and cultural pressure." },
  { title: "Emotional Wellness",             description: "Practical strategies for emotional regulation, managing anxiety, and building resilience in Christ." },
  { title: "Relationship & Communication",   description: "Building healthy relationships and improving family communication through biblical, trauma-informed principles." },
  { title: "Youth Mental Health",            description: "Understanding adolescent development, mental health challenges, and how to support young people's emotional wellbeing." },
  { title: "Purpose & Calling",              description: "Exploring purpose, gifts, and calling in a way that honors both your story and God's design for your life." },
];

const formats = [
  { title: "Keynote Addresses",   description: "Inspiring 45–60 minute keynotes for conferences, retreats, and events." },
  { title: "Breakout Sessions",   description: "Focused 45–90 minute workshops diving deep into specific topics with interactive elements." },
  { title: "Multi-Day Trainings", description: "Comprehensive trainings for staff, leaders, and teams seeking deeper skill-building and transformation." },
  { title: "Youth Events",        description: "High-energy, relatable presentations designed specifically for teen and young adult audiences." },
  { title: "Staff Development",   description: "Professional development for educators, counselors, pastors, and organizational leaders." },
  { title: "Church Services",     description: "Sunday morning messages or special event presentations for faith communities." },
];

const pillars = [
  { title: "Scripture-Centered",     description: "Every message is rooted in biblical truth and Christ's redemptive example." },
  { title: "Practical & Applicable", description: "Tangible tools and strategies your audience can implement immediately." },
  { title: "Engaging & Interactive", description: "Discussion, activities, and genuine space for real connection and learning." },
];

export default function Speaking() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_460px] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Speaking & Workshops</p>
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl">
                A Speaker
                <br />
                <span className="text-[var(--peach)]">Who Inspires</span>
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-black/70 sm:text-xl">
                Biblical, trauma-informed messages that bring healing, identity, and transformation to your church, conference, or youth event.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.38)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Inquire About Speaking
                </a>
                <a
                  href="#topics"
                  className="inline-flex items-center justify-center rounded-2xl border-2 border-black/15 bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:border-black/30"
                >
                  View Topics
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
                <Image
                  src="/images/speaking-hero.jpg"
                  alt="Toyin Adefemi speaking on stage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY INVITE ME ── */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Why Invite Me to Speak</p></div>
            <h2 className="text-lg font-bold tracking-tight text-black sm:text-xl md:text-2xl">
              Equipping people with truth, tools &amp; hope
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/65">
              I&apos;m a sought-after speaker and trainer who equips youth, young adults, families, churches, and leaders with biblical truth, emotional wisdom, and practical tools for healing and spiritual growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                className={`rounded-2xl border-t-4 ${i % 2 === 1 ? 'border-[var(--teal)]' : 'border-[var(--peach)]'} bg-[var(--background)] p-7 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]`}
              >
                <h3 className="text-xl font-bold text-black">{p.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/65">{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERIC IMAGE BREAK (conference hall) ── */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[240px] sm:h-[340px] lg:h-[440px]">
          <Image
            src="/images/speaking-hall.png"
            alt="Toyin Adefemi speaking at a conference"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ── SPEAKING TOPICS ── */}
      <section id="topics" className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Speaking Topics</p></div>
            <h2 className="text-lg font-bold tracking-tight text-black sm:text-xl md:text-2xl">
              Talks tailored to your audience
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/65">
              I customize presentations for your specific audience and needs. Here are some of my most-requested topics:
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl bg-white p-7 shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[var(--peach)]" />
                <h3 className="text-xl font-bold text-black">{topic.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/65">{topic.description}</p>
              </article>
            ))}
          </div>

          {/* Featured event photo — full natural width */}
          <div className="mt-14">
            <div className="w-full overflow-hidden rounded-3xl shadow-[0_20px_52px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/speaking-stage.jpg"
                alt="Toyin Adefemi speaking on stage"
                width={1600}
                height={489}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCRIPTURE BANNER ── */}
      <section className="relative bg-black px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-6xl leading-none text-[var(--peach)]">❝</span>
          <p className="mt-2 text-2xl italic leading-relaxed text-white sm:text-3xl">
            Come to me, all you who are weary and burdened, and I will give you rest.
          </p>
          <div className="mt-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
            <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
              Matthew 11:28
            </p>
          </div>
        </div>
      </section>

      {/* ── SPEAKING FORMATS ── */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:items-center lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--peach)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">Speaking Formats</p></div>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-xl md:text-2xl">
                Flexible formats for your event
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
              <p className="mt-7 max-w-xl text-lg leading-8 text-black/65">
                In person or virtual — designed to fit your organization&apos;s needs and audience.
              </p>

              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                {formats.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--peach)]" />
                    <div>
                      <h3 className="text-base font-bold text-black">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-black/65">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
                <Image
                  src="/images/speaking-family-talk.png"
                  alt='Toyin Adefemi giving a "Family Talk" presentation'
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIRTUAL SESSION HIGHLIGHT ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-[0_20px_52px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/speaking-virtual.png"
                alt="Toyin Adefemi hosting a virtual session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-3 inline-flex items-center gap-3"><span className="h-px w-8 bg-[var(--teal)] sm:w-10" /><p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--teal)] sm:text-2xl md:text-3xl lg:text-4xl">Online & In-Person</p></div>
              <h2 className="text-lg font-bold tracking-tight text-black sm:text-xl md:text-2xl">
                Speak to your audience — wherever they are
              </h2>
              <div className="mt-5 h-1 w-14 rounded-full bg-[var(--teal)]" />
              <p className="mt-7 text-lg leading-8 text-black/65">
                From a Sunday-morning sanctuary to a private virtual session for your team, I bring the same Christ-centered, trauma-informed depth to every room — in person and online.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[var(--peach)] px-8 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Discuss Your Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[var(--peach)] px-6 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
            Ready to Inspire Your Community?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
            I&apos;d love to discuss how I can support your event, organization, or community with a message of healing, hope, and transformation.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-bold text-[var(--peach)] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1"
            >
              Inquire About Speaking
            </a>
          </div>
          <p className="mt-8 text-sm text-white/85">
            Let&apos;s talk about bringing healing and hope to your audience.
          </p>
        </div>
      </section>
    </>
  );
}
