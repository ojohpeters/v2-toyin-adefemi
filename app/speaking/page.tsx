import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Speaking & Workshops | Biblical Trauma-Informed Messages",
  description:
    "Invite Toyin Adefemi to speak at your church, conference, or youth event. Biblical, trauma-informed keynotes, breakouts, and workshops on healing, identity, and emotional wellness.",
  openGraph: {
    title: "Speaking & Workshops | Toyin Adefemi",
    description:
      "Biblical, trauma-informed speaking for churches, conferences, and youth organizations. Keynotes, breakouts, staff training, and more.",
    images: [{ url: "/images/about-toyin.jpg", width: 4480, height: 6720, alt: "Toyin Adefemi — Speaker & Biblical Counselor" }],
  },
};

export default function Speaking() {
  const topics = [
    {
      title: "Healing from Trauma",
      description: "Biblical foundations for understanding and healing from trauma, with practical tools for emotional restoration.",
    },
    {
      title: "Identity in Christ",
      description: "Discovering your God-given identity in the midst of confusion, comparison, and cultural pressure.",
    },
    {
      title: "Emotional Wellness",
      description: "Practical strategies for emotional regulation, managing anxiety, and building resilience in Christ.",
    },
    {
      title: "Relationship & Communication",
      description: "Building healthy relationships and improving family communication through biblical, trauma-informed principles.",
    },
    {
      title: "Youth Mental Health",
      description: "Understanding adolescent development, mental health challenges, and how to support young people's emotional wellbeing.",
    },
    {
      title: "Purpose & Calling",
      description: "Exploring purpose, gifts, and calling in a way that honors both your story and God's design for your life.",
    },
  ];

  const formats = [
    {
      title: "Keynote Addresses",
      description: "Inspiring 45-60 minute keynote presentations for conferences, retreats, and events.",
    },
    {
      title: "Breakout Sessions",
      description: "Focused 45-90 minute workshops diving deep into specific topics with interactive elements.",
    },
    {
      title: "Multi-Day Trainings",
      description: "Comprehensive trainings for staff, leaders, and teams seeking deeper skill-building and transformation.",
    },
    {
      title: "Youth Events",
      description: "High-energy, relatable presentations designed specifically for teen and young adult audiences.",
    },
    {
      title: "Staff Development",
      description: "Professional development for educators, counselors, pastors, and organizational leaders.",
    },
    {
      title: "Church Services",
      description: "Sunday morning messages or special event presentations for faith communities.",
    },
  ];

  return (
    <>
      {/* Bold Stage-Like Hero with Youth Group Image Background */}
      <section className="relative overflow-hidden px-6 py-36 lg:px-10 lg:py-48">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp"
            alt="Joyful youth group circle"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Speaking & Workshops
            </p>
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
              A Speaker <span className="block text-[var(--peach)]">Who Inspires</span>
            </h1>
            <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-white/90">
              Biblical, trauma-informed messages that bring healing, identity, and transformation to your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invite Me — Horizontal Feature Cards */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Why Invite Me to Speak?
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            I&apos;m a sought-after speaker and trainer who equips youth, young adults, families, churches, and leaders with biblical truth, emotional wisdom, and practical tools for healing and spiritual growth.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Scripture-Centered",
                description: "Every message is rooted in biblical truth and Christ's redemptive example.",
                icon: "✦",
              },
              {
                title: "Practical & Applicable",
                description: "Tangible tools and strategies your audience can implement immediately.",
                icon: "✦",
              },
              {
                title: "Engaging & Interactive",
                description: "Discussion, activities, and genuine space for real connection and learning.",
                icon: "✦",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="border-l-4 border-[var(--peach)] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-4 text-3xl text-[var(--peach)]">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Large Immersive Image Break - Image M */}
      <section className="relative h-[400px] overflow-hidden md:h-[500px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-AHwozixyiwPpwYmHgTtO96klIjYk8N.webp"
          alt="Hands on Bible together, faith community"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Speaking Topics — Conference Card Style with Image J */}
      <section className="relative bg-white px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Speaking Topics
          </h2>
          <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            I customize presentations for your specific audience and needs. Here are some of my popular topics:
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="scroll-animate rounded-xl border-t-4 border-[var(--peach)] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {topic.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>

          {/* Image J - Group from behind */}
          <div className="mt-20 relative overflow-hidden rounded-[2.5rem] h-72">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30-n3SiOuqM9SIL7y3DrKZbc4CjNhiy5g.webp"
              alt="Group united together, unity and hope"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Bible Hands Atmospheric Image with Scripture - Image M */}
      <section className="relative overflow-hidden px-6 py-40 lg:px-10 lg:py-52">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-AHwozixyiwPpwYmHgTtO96klIjYk8N.webp"
            alt="Hands on Bible together, faith community"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="italic text-3xl leading-relaxed text-white sm:text-4xl">
            "Come to me, all you who are weary and burdened, and I will give you rest."
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--peach)]">
            Matthew 11:28
          </p>
        </div>
      </section>

      {/* Speaking Formats — Two-Column List Layout with Image C */}
      <section className="relative bg-slate-50 px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-slate-900">
                Speaking Formats
              </h2>
              <div className="mt-6 h-1 w-20 bg-[var(--peach)]" />

              <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
                Flexible options designed to fit your organization's needs and audience:
              </p>

              <div className="mt-16 grid gap-10 md:grid-cols-2">
                {formats.map((format) => (
                  <div key={format.title} className="flex gap-6">
                    <div className="flex-shrink-0 pt-1">
                      <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[var(--peach)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {format.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {format.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image C - Young woman on video call */}
            <div className="relative h-[500px] overflow-hidden rounded-[2rem] lg:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-dKD35Ht8rkT1J8nSOqv6IdMG0U8UvR.webp"
                alt="Young woman on video call, engaged"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warm Genuine Invitation CTA with Image K - Joyful Teens */}
      <section className="relative overflow-hidden px-6 py-40 lg:px-10 lg:py-52">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31-N424m4nO0REek7JhpPtoSuCDBhsxZZ.webp"
            alt="Joyful teenagers laughing"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--peach)]/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Ready to Inspire Your Community?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-2xl leading-relaxed text-white/95">
            I&apos;d love to discuss how I can support your event, organization, or community with a message of healing, hope, and transformation rooted in Scripture and emotional wisdom.
          </p>

          <div className="mt-14 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-lg font-semibold text-[var(--peach)] shadow-[0_16px_30px_rgba(0,0,0,0.2)] transition-all hover:bg-slate-50 hover:-translate-y-1"
            >
              Inquire About Speaking
            </a>
          </div>

          <p className="mt-12 text-sm text-white/80">
            Let&apos;s talk about bringing healing and hope to your audience.
          </p>
        </div>
      </section>
    </>
  );
}
