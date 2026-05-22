'use client';

import { useState } from 'react';
import Image from 'next/image';

function InfoIcon({ type }: { type: string }) {
  if (type === "money") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
      </svg>
    );
  }

  if (type === "card") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M20 8H4V4h16m0 12H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm-6 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 6h16V4H4z" />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6z" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-7 0c0 .83-.67 1.5-1.5 1.5S5 12.83 5 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
        <path d="M17.92 7.02C17.45 4.18 14.97 2 12 2c-2.97 0-5.45 2.18-5.92 5.02C3.97 7.55 2 9.69 2 12s1.97 4.45 4.08 4.98C6.55 19.82 9.03 22 12 22c2.97 0 5.45-2.18 5.92-5.02C20.03 16.45 22 14.31 22 12s-1.97-4.45-4.08-4.98zM12 20c-2.33 0-4.32-1.45-5.12-3.5h10.24c-.8 2.05-2.79 3.5-5.12 3.5zm0-14c2.33 0 4.32 1.45 5.12 3.5H6.88c.8-2.05 2.79-3.5 5.12-3.5z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-[var(--peach)]" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'individual-counseling',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'individual-counseling',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Warm Editorial Hero with Image E */}
      <section className="relative overflow-hidden bg-[var(--background)] px-6 py-36 lg:px-10 lg:py-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                Get in Touch
              </p>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-7xl">
                Let&apos;s Connect
              </h1>
              <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-slate-600">
                I&apos;m here to support your healing journey. Reach out with questions or to book a session—I respond within 24-48 hours.
              </p>
            </div>

            {/* Image E - One-on-one counseling */}
            <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] lg:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-PP3b2FIhmDYtGarg7jonW91ebBHnrl.webp"
                alt="One-on-one counseling session, warm and inviting"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form — Two-Column Layout with Image */}
      <section className="relative bg-[var(--background)] px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <form
              onSubmit={handleSubmit}
              className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:p-14"
            >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-900">
                  What brings you here? *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                >
                  <option value="individual-counseling">Individual Counseling</option>
                  <option value="family-counseling">Family Counseling</option>
                  <option value="youth-counseling">Youth Counseling</option>
                  <option value="speaking-inquiry">Speaking Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me a bit about what you're looking for..."
                rows={6}
                className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[var(--peach)] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(254,143,104,0.3)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                Thank you for reaching out! I&apos;ll be in touch shortly.
              </p>
            )}
            </form>

            {/* Image E - One-on-one counseling */}
            <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] lg:h-[500px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-PP3b2FIhmDYtGarg7jonW91ebBHnrl.webp"
                alt="One-on-one counseling session, warm and inviting"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Image Break with Image H */}
      <section className="relative h-[350px] overflow-hidden md:h-[450px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-hskpGkVkXncEE10BoJcxFHbYnDRas7.webp"
          alt="Hands held together, warmth and connection"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky-600/30" />
      </section>

      {/* Additional Info — Two-Column Grid */}
      <section className="relative bg-[var(--background)] px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-5xl font-bold tracking-tight text-slate-900">
            What You Should Know
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                iconType: "money",
                label: "Session Rates",
                description: "Individual sessions start at $80-150/hour depending on location and format. Family sessions and group workshops available.",
              },
              {
                iconType: "target",
                label: "Session Format",
                description: "Sessions are available in-person or via secure video conferencing. Initial consultations are complimentary.",
              },
              {
                iconType: "card",
                label: "Payment Methods",
                description: "We accept all major credit cards, PayPal, and bank transfers. Insurance is not accepted. Superbills can be provided for potential reimbursement depending on your plan.",
              },
              {
                iconType: "document",
                label: "Cancellation Policy",
                description: "Cancellations made 48 hours in advance receive a full refund. Late cancellations may incur a fee.",
              },
              {
                iconType: "lock",
                label: "Confidentiality",
                description: "All sessions are confidential. I maintain professional standards and follow ethical guidelines.",
              },
              {
                iconType: "clock",
                label: "Response Time",
                description: "I typically respond to inquiries within 24-48 hours. For urgent matters, please call directly.",
              },
            ].map((item, index) => (
              <article key={item.label} className="scroll-animate border-l-4 border-[var(--peach)] bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="mb-4">
                  <InfoIcon type={item.iconType} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.label}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Connect with Image B */}
      <section className="relative bg-[var(--background)] px-6 py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            <div>
              <h2 className="mb-8 text-5xl font-bold tracking-tight text-slate-900">
                Other Ways to Connect
              </h2>
              <p className="mb-20 max-w-2xl text-xl text-slate-600">
                Whether you have questions, want to book a session, or are interested in speaking opportunities, I&apos;m here to help.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    iconType: "email",
                    title: "Email",
                    detail: "Reach out anytime",
                    description: "Send me a message and I'll respond within 24-48 hours",
                  },
                  {
                    iconType: "phone",
                    title: "Phone",
                    detail: "For urgent matters",
                    description: "Call directly to connect right away",
                  },
                  {
                    iconType: "instagram",
                    title: "Instagram",
                    detail: "@toyinadefemi",
                    description: "Follow for resources and updates",
                  },
                ].map((item) => (
                  <div key={item.title} className="scroll-animate flex flex-col items-start gap-4 rounded-2xl bg-white p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-all">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--peach)]/10">
                      <InfoIcon type={item.iconType} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-[var(--peach)]">
                        {item.detail}
                      </p>
                      <p className="mt-2 text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image B - Young woman on sofa with phone and credit card */}
            <div className="relative h-[500px] overflow-hidden rounded-[2rem] lg:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-nD4TQL7qg2yWE0vOnAjnpQvUwTEpHo.webp"
                alt="Young woman on sofa, relaxed and accessible"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
