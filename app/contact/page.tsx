'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryAbout: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInquiry = (opt: string) => {
    setFormData((prev) => ({
      ...prev,
      inquiryAbout: prev.inquiryAbout.includes(opt)
        ? prev.inquiryAbout.filter((x) => x !== opt)
        : [...prev.inquiryAbout, opt],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder-black/40 transition focus:border-[var(--peach)] focus:outline-none focus:ring-2 focus:ring-[var(--peach)]/20';

  const inquiryOptions = [
    'Family Counseling Services',
    'Teens Counseling Services',
    'Young Adult Counseling Services',
    'Parental Counseling Services',
    'Speaking Engagement',
    'Ask about a discount',
    'Free 30-minute consultation',
    'Other',
  ];

  return (
    <>
      {/* ── HERO + FORM (parallel) ── */}
      <section className="relative bg-[var(--background)] px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:items-start lg:gap-16">

            {/* Left: heading + form */}
            <div>
              <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
                Get in Touch
              </p>
              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-black sm:text-5xl lg:text-6xl">
                Let&apos;s <span className="text-[var(--peach)]">Connect</span>
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-black/70">
                I&apos;m here to walk alongside you with biblical wisdom, prayer, and compassionate support.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-black/70">
                Whether you&apos;re seeking guidance, clarity, or a safe space to process life&apos;s challenges, I welcome the opportunity to connect with you.
              </p>

              <div className="mt-10">
              {submitted ? (
                <div className="rounded-3xl border border-[var(--teal)] bg-[var(--teal)]/20 p-10 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)]/50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7 text-black" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-black">Message received</p>
                  <p className="mt-2 text-base text-black/70">
                    Thank you for reaching out — I&apos;ll respond within 24–48 hours.
                  </p>
                </div>
              ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    First name<span className="ml-0.5 text-[var(--peach)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    Last name<span className="ml-0.5 text-[var(--peach)]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    Email<span className="ml-0.5 text-[var(--peach)]">*</span>
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
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-black">
                    Phone<span className="ml-0.5 text-[var(--peach)]">*</span>
                  </label>
                  <PhoneInput
                    defaultCountry="us"
                    value={formData.phone}
                    onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
                    inputProps={{ required: true, name: 'phone' }}
                    className="phone-brand"
                  />
                </div>
              </div>

              <fieldset>
                <legend className="mb-3 block text-sm font-semibold text-black">
                  What are you inquiring about?
                </legend>
                <div className="space-y-2.5">
                  {inquiryOptions.map((opt) => (
                    <label key={opt} className="flex cursor-pointer items-center gap-3">
                      <input
                        type="checkbox"
                        checked={formData.inquiryAbout.includes(opt)}
                        onChange={() => toggleInquiry(opt)}
                        className="h-4 w-4 cursor-pointer accent-[var(--peach)]"
                      />
                      <span className="text-sm text-black">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label className="mb-1.5 block text-sm font-semibold text-black">Write a message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a little about what's on your heart…"
                  className={`${inputCls} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[var(--peach)] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_28px_rgba(254,143,104,0.35)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
              >
                Submit
              </button>
              <p className="text-center text-sm text-black/55">
                I respond to every inquiry within 24–48 hours.
              </p>
            </form>
              )}
              </div>
            </div>

            {/* Right: image */}
            <div className="flex items-start justify-center lg:sticky lg:top-28 lg:justify-end">
              <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/10">
                <Image
                  src="/images/contact-hero.png"
                  alt="A virtual counseling session with Toyin Adefemi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="relative bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-[var(--peach)] sm:text-2xl md:text-3xl lg:text-4xl">
            Prefer to reach out directly?
          </p>
          <h2 className="text-2xl font-bold text-black sm:text-3xl">Other ways to connect</h2>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-[var(--peach)]" />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a
              href="tel:+13026599399"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-[var(--background)] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--peach)]/15">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[var(--peach)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/55">Phone</p>
              <p className="text-base font-semibold text-black group-hover:text-[var(--peach)] transition-colors">
                302 659 9399
              </p>
            </a>

            <a
              href="mailto:toyin.biblicalcounselor@gmail.com"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-[var(--background)] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--peach)]/15">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[var(--peach)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/55">Email</p>
              <p className="text-base font-semibold text-black group-hover:text-[var(--peach)] transition-colors break-all">
                toyin.biblicalcounselor@gmail.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
