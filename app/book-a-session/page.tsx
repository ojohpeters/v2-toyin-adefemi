'use client';

import { useState } from 'react';
import Image from 'next/image';
import IntakeForms from './_components/intake-forms';

export default function BookASession() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: 'Initial Consultation',
    dayTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder-black/40 transition focus:border-[var(--peach)] focus:outline-none focus:ring-2 focus:ring-[var(--peach)]/20';

  const sessionOptions = [
    {
      duration: '30 minutes',
      title: 'Initial Consultation',
      desc: 'A brief introductory meeting to discuss your concerns, explore your goals, and determine whether biblical counseling is the right fit.',
    },
    {
      duration: '60 minutes',
      title: 'Individual Counseling Session',
      desc: 'One-on-one Christ-centered counseling focused on emotional, spiritual, and relational growth.',
    },
    {
      duration: '60 minutes',
      title: 'Family or Parenting Session',
      desc: 'A guided session for families or parents seeking biblical wisdom, communication support, and restoration.',
    },
  ];

  const prepItems = [
    'Sessions are held virtually unless otherwise arranged.',
    'Please ensure you are in a quiet, private space.',
    'Bring any questions, concerns, or Scriptures on your heart.',
    'Payment and intake details will be provided upon confirmation.',
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
            <div>
              <div className="mb-3 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
                  Book a Session
                </p>
              </div>
              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-black sm:text-5xl">
                Begin Your Counseling Journey
                <br />
                <span className="text-[var(--peach)]">with Toyin Adefemi</span>
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-black/70">
                Finding support rooted in Scripture can make all the difference. If you&apos;re ready to take the next step toward emotional, spiritual, and relational healing, you can book your session below. I look forward to walking with you through this season with grace, wisdom, and prayerful guidance.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
                <Image
                  src="/images/book-session.png"
                  alt="A peaceful home setting for a virtual counseling session with Toyin Adefemi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO SCHEDULE ── */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
              <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
                How to Schedule
              </p>
            </div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl">
              Choose the option that best fits your needs
            </h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {sessionOptions.map((o) => (
              <article
                key={o.title}
                className="rounded-2xl border-l-4 border-[var(--peach)] bg-[var(--background)] p-7 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">
                  {o.duration}
                </p>
                <h3 className="mt-2 text-xl font-bold text-black">{o.title}</h3>
                <p className="mt-3 text-base leading-7 text-black/65">{o.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUEST AN APPOINTMENT ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
              <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
                Request an Appointment
              </p>
            </div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl">Tell me about your session</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          </div>

          {submitted ? (
            <div className="mt-10 rounded-3xl border border-[var(--teal)] bg-[var(--teal)]/20 p-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)]/50">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-black" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-xl font-bold text-black">Request received</p>
              <p className="mt-2 text-base text-black/70">
                You will receive a confirmation email with available times and next steps.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    Name<span className="ml-0.5 text-[var(--peach)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    Email Address<span className="ml-0.5 text-[var(--peach)]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-black">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-black">
                  Preferred Session Type
                </label>
                <select
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option>Initial Consultation</option>
                  <option>Teens</option>
                  <option>Young Adults</option>
                  <option>Family</option>
                  <option>Parenting</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-black">
                  Preferred Day / Time
                </label>
                <input
                  type="text"
                  name="dayTime"
                  value={formData.dayTime}
                  onChange={handleChange}
                  placeholder="e.g. Weekday evenings, Saturday morning"
                  className={inputCls}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-black">
                  Message or Brief Description of Your Need<span className="ml-0.5 text-[var(--peach)]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--peach)] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Request Session
              </button>

              <p className="text-center text-sm text-black/55">
                You will receive a confirmation email with available times and next steps.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── BEFORE YOUR SESSION ── */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
              <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
                Before Your Session
              </p>
            </div>
            <h2 className="text-3xl font-bold text-black sm:text-4xl">To help you prepare</h2>
            <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          </div>

          <ul className="mt-10 space-y-3">
            {prepItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl bg-[var(--background)] p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--peach)]/15">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[var(--peach)]" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-base text-black/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── IMPORTANT NOTE ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border-l-4 border-[var(--peach)] bg-[var(--peach)]/10 p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--peach)]">
              Important Note
            </p>
            <p className="mt-3 text-base leading-7 text-black/85">
              Biblical counseling is not a substitute for emergency or psychiatric care.
            </p>
            <p className="mt-3 text-base leading-7 text-black/85">
              If you are in crisis, please contact local emergency services or a crisis hotline immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTAKE / CONSENT FORMS ── */}
      <IntakeForms />

      {/* ── LOOKING FORWARD ── */}
      <section className="relative bg-black px-6 py-14 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--peach)] sm:w-10" />
            <p className="text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
              Looking Forward to Connecting
            </p>
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Thank you for taking this step</h2>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />
          <p className="mt-7 text-lg leading-8 text-white/80">
            My prayer is that our time together will bring clarity, healing, and renewed hope through the truth of God&apos;s Word.
          </p>
        </div>
      </section>
    </>
  );
}
