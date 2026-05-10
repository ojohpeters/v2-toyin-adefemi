'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const services = [
  {
    label: "Teen Counseling",
    href: "/services/teens",
    desc: "Ages 13–17 · Safe & judgment-free",
    color: "bg-sky-50 text-sky-700",
    dot: "bg-sky-400",
  },
  {
    label: "Young Adults",
    href: "/services/young-adults",
    desc: "Clarity, healing & direction",
    color: "bg-emerald-50 text-emerald-700",
    dot: "bg-emerald-400",
  },
  {
    label: "Family Counseling",
    href: "/services/family",
    desc: "Restoring peace at home",
    color: "bg-amber-50 text-amber-700",
    dot: "bg-amber-400",
  },
  {
    label: "Parenting Counseling",
    href: "/services/parenting",
    desc: "Support for your journey",
    color: "bg-violet-50 text-violet-700",
    dot: "bg-violet-400",
  },
];

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Services", href: "/work-with-me", hasDropdown: true },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isServicesActive = pathname.startsWith('/services') || pathname === '/work-with-me';

  return (
    <>
      <header className={`sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 shadow-sm backdrop-blur-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-10">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Toyin Adefemi Counsels"
              width={1536}
              height={1024}
              priority
              className="h-[68px] w-auto md:h-[84px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {navigation.map((item) => {
              const isActive = item.hasDropdown ? isServicesActive : pathname === item.href;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1.5 py-1 transition-colors ${isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'}`}
                    >
                      {item.label}
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-[var(--peach)]" />
                      )}
                    </button>

                    {/* Dropdown panel */}
                    <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                      <div className="w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                        <div className="p-2">
                          {services.map((svc) => (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              onClick={() => setServicesOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-slate-50"
                            >
                              <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${svc.dot}`} />
                              <div>
                                <p className="text-sm font-semibold text-slate-900 group-hover:text-[var(--peach)] transition-colors">{svc.label}</p>
                                <p className="mt-0.5 text-xs text-slate-500">{svc.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-slate-100 px-4 py-3">
                          <Link
                            href="/work-with-me"
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center justify-between text-xs font-semibold text-[var(--peach)] hover:text-[var(--peach-deep)]"
                          >
                            View all services
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 transition-colors ${isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-[var(--peach)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden rounded-xl bg-[var(--peach)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_16px_rgba(254,143,104,0.3)] transition-all hover:bg-[var(--peach-deep)] hover:-translate-y-0.5 sm:inline-flex"
            >
              Book a Session
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 md:hidden"
              aria-label="Open navigation menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[#3A4A52] md:hidden overflow-hidden"
          style={{ animation: 'slideInFromRight 300ms ease-in-out forwards' }}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-4 flex h-10 w-10 items-center justify-center text-white hover:opacity-70 transition-opacity z-50"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex flex-1 items-center justify-center overflow-y-auto py-20">
            <nav className="flex w-full flex-col items-center gap-2 px-8 text-center">
              {navigation.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.label} className="w-full">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex w-full items-center justify-center gap-2 py-3 text-3xl font-semibold text-white hover:opacity-70 transition-opacity"
                        style={{ animation: `fadeInDown 400ms ease-out ${50 * (index + 1)}ms forwards`, opacity: 0 }}
                      >
                        Services
                        <svg viewBox="0 0 20 20" fill="currentColor" className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-1 mb-2 flex flex-col gap-1">
                          {services.map((svc) => (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="py-2 text-lg font-medium text-white/70 hover:text-white transition-colors"
                            >
                              {svc.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 text-3xl font-semibold text-white hover:opacity-70 transition-opacity"
                    style={{ animation: `fadeInDown 400ms ease-out ${50 * (index + 1)}ms forwards`, opacity: 0 }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="m-6 block rounded-xl bg-[var(--peach)] px-6 py-4 text-center text-xl font-semibold text-white shadow-[0_8px_16px_rgba(254,143,104,0.3)] hover:bg-[var(--peach-deep)] transition-all"
            style={{ animation: `fadeInUp 400ms ease-out ${50 * (navigation.length + 1)}ms forwards`, opacity: 0 }}
          >
            Book a Session
          </a>
        </div>
      )}

      <style>{`
        @keyframes slideInFromRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
