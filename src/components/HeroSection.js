'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      requestAnimationFrame(() => {
        el.classList.add('visible');
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div ref={ref} className="appear max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Left — Text */}
        <div>
          <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>
            Hello, I&apos;m
          </p>

          <h1
            className="font-black leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', letterSpacing: '-2px', color: 'var(--text-primary)' }}
          >
            Ahmad Muntaqim.
          </h1>

          <p
            className="font-black mb-6"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: 'var(--text-secondary)', letterSpacing: '-0.5px' }}
          >
            Full Stack Developer
          </p>

          <p
            className="leading-relaxed mb-10 max-w-[520px]"
            style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
          >
            Saya membangun aplikasi web yang fungsional, interaktif, dan berpusat pada pengguna.
            Dari interface yang nyaman hingga backend yang stabil — fokus di React, Next.js, dan Laravel.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Lihat Proyek
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            {[
              {
                href: 'https://github.com/Hakim-pixel',
                label: 'GitHub',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              {
                href: 'https://linkedin.com',
                label: 'LinkedIn',
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-semibold transition-colors duration-200"
                style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--violet)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <span className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--emerald)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Open for work
            </span>
          </div>
        </div>

        {/* Right — Bento Card */}
        <div className="hidden lg:block">
          <div className="bento-card w-[280px]" style={{ background: '#fef9c3' }}>
            {/* Photo */}
            <div className="relative w-full" style={{ height: '300px' }}>
              <Image
                src="/profile.jpg"
                alt="Ahmad Muntaqim"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Glassmorphic overlay card */}
            <div
              className="mx-3 mb-3 -mt-12 relative z-10 rounded-2xl p-4 flex items-center justify-between gap-3"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white">
                  <Image src="/profile.jpg" alt="avatar" fill className="object-cover object-top" />
                </div>
                <div>
                  <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>@ahmadmntqm</p>
                  <p className="flex items-center gap-1 text-xs" style={{ color: 'var(--emerald)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                style={{ padding: '6px 12px', fontSize: '0.75rem', borderRadius: '8px' }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
