'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captcha: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaNums, setCaptchaNums] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setCaptchaNums([
      Math.floor(Math.random() * 9) + 1,
      Math.floor(Math.random() * 9) + 1,
    ]);
  }, []);

  const captchaAnswer = captchaNums[0] + captchaNums[1];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (parseInt(formData.captcha) !== captchaAnswer) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitted(true);
  }

  const inputClass =
    'w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 transition focus:border-[var(--peach)] focus:outline-none focus:ring-2 focus:ring-[var(--peach)]/20';

  return (
    <footer className="bg-slate-900">

      {/* Certifications & Affiliations */}
      <div className="bg-[var(--background)] px-6 py-10 lg:py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Certifications &amp; Affiliations
          </p>
          <Image
            src="/images/certifications.png"
            alt="Toyin Adefemi's professional certifications and credentials"
            width={1756}
            height={334}
            className="mx-auto h-auto w-full max-w-3xl"
          />
          <Image
            src="/images/affiliations.png"
            alt="Member of the International Christian Coaching Association and the American Association of Christian Counselors"
            width={2560}
            height={197}
            className="mx-auto mt-8 h-auto w-full max-w-2xl"
          />
        </div>
      </div>

      {/* Main footer body */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1px_380px]">

          {/* ── Left: Contact Form ── */}
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--peach)]">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold text-white">Let Me Help You</h2>
            <p className="mt-2 text-sm text-slate-400">
              Fill out the form and I&apos;ll respond within 24–48 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-emerald-400" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white">Message sent!</p>
                <p className="mt-1 text-sm text-slate-400">Thank you for reaching out — I&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  placeholder="Message / Comments"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className={`${inputClass} resize-none`}
                />

                {/* Dynamic CAPTCHA */}
                <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-3">
                  <span className="text-sm text-slate-300">
                    Prove You Are Human:&nbsp;
                    <span className="font-semibold text-white">{captchaNums[0]} + {captchaNums[1]} =</span>
                  </span>
                  <input
                    type="number"
                    placeholder="?"
                    value={formData.captcha}
                    onChange={(e) => {
                      setFormData({ ...formData, captcha: e.target.value });
                      setCaptchaError(false);
                    }}
                    required
                    className="w-20 rounded-md border border-slate-600 bg-slate-700 px-3 py-1.5 text-center text-sm text-white placeholder-slate-500 focus:border-[var(--peach)] focus:outline-none"
                  />
                  {captchaError && (
                    <span className="text-xs font-medium text-red-400">Incorrect — try again</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[var(--peach)] py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_8px_20px_rgba(254,143,104,0.35)] transition hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Vertical divider */}
          <div className="hidden w-px self-stretch bg-slate-700/60 lg:block" />

          {/* ── Right: Contact Info ── */}
          <div className="flex flex-col justify-center gap-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--peach)]">
              Contact Details
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--peach)]/15">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[var(--peach)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Just One Phone Call Away</p>
                <a href="tel:+15122569236" className="mt-1 block text-base font-semibold text-white hover:text-[var(--peach)] transition-colors">
                  (512) 256-9236
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--peach)]/15">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[var(--peach)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">General Inquiries</p>
                <a href="mailto:toyin@spaceofgracecounseling.com" className="mt-1 block text-base font-semibold text-white hover:text-[var(--peach)] transition-colors break-all">
                  toyin@spaceofgracecounseling.com
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--peach)]/15">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-[var(--peach)]" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Office</p>
                <p className="mt-1 text-base font-semibold leading-relaxed text-white">
                  304 E. Main Street, Suite 207<br />
                  Round Rock, TX 78664
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-700/60" />

            {/* Social Icons */}
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">Follow Along</p>
              <div className="flex gap-3">
                {[
                  {
                    label: "Facebook",
                    href: "https://facebook.com",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>,
                  },
                  {
                    label: "Twitter / X",
                    href: "https://twitter.com",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                  },
                  {
                    label: "Instagram",
                    href: "https://instagram.com",
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>,
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 ring-1 ring-slate-700 transition hover:bg-[var(--peach)] hover:text-white hover:ring-[var(--peach)]"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Strip */}
      <div className="border-t border-slate-800 bg-black/20 px-6 py-5 text-center text-sm text-slate-500">
        © 2026 A Space Of Grace Counseling. All rights reserved.
      </div>
    </footer>
  );
}
