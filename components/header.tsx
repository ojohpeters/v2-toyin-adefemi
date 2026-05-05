'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/work-with-me" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Toyin Adefemi Counsels"
              width={190}
              height={68}
              priority
              className="h-auto w-[120px] md:w-[150px]"
            />
          </Link>
          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-700 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative pb-1 transition-colors ${
                    isActive ? 'text-slate-900' : 'hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--peach)]" />
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
            
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 list-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 cursor-pointer md:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay - Outside Header Container */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-[#3A4A52] md:hidden overflow-hidden"
          style={{
            animation: 'slideInFromRight 300ms ease-in-out forwards',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-6 top-4 flex h-10 w-10 items-center justify-center text-white hover:opacity-70 transition-opacity z-50"
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Centered Navigation */}
          <div className="flex h-full items-center justify-center">
            <nav className="flex flex-col items-center gap-10 text-center px-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-4xl font-semibold hover:opacity-70 transition-opacity"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: isMenuOpen ? `fadeInDown 400ms ease-out ${50 * (index + 1)}ms forwards` : 'none',
                    opacity: 0,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="absolute bottom-8 left-6 right-6 block rounded-xl bg-[var(--peach)] px-6 py-4 text-center text-xl font-semibold text-white shadow-[0_8px_16px_rgba(254,143,104,0.3)] hover:bg-[var(--peach-deep)] transition-all"
            onClick={() => setIsMenuOpen(false)}
            style={{
              animation: isMenuOpen ? `fadeInUp 400ms ease-out ${50 * (navigation.length + 1)}ms forwards` : 'none',
              opacity: 0,
            }}
          >
            Book a Session
          </a>
        </div>
      )}

      <style>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
