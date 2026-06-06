'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const roles = ['Full Stack Developer', 'Frontend Engineer', 'Next.js Specialist'];

export default function HeroSection() {
  const roleRef = useRef(null);

  useEffect(() => {
    let ri = 0, ci = 0, del = false, t;
    const tick = () => {
      const cur = roles[ri];
      if (!del) {
        ci++;
        if (roleRef.current) roleRef.current.textContent = cur.slice(0, ci);
        if (ci === cur.length) { del = true; t = setTimeout(tick, 2200); return; }
      } else {
        ci--;
        if (roleRef.current) roleRef.current.textContent = cur.slice(0, ci);
        if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
      }
      t = setTimeout(tick, del ? 55 : 95);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-5xl mx-auto w-full py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
        {/* Text */}
        <div>
          <p className="section-label mb-6">Available For Work</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-primary leading-[1.15] mb-4 tracking-[-1.5px]">
            Ahmad Muntaqim
          </h1>
          <p className="text-xl sm:text-2xl text-text-secondary font-light mb-3 min-h-[36px] flex items-center gap-1.5">
            <span ref={roleRef} className="text-accent-dim font-normal"></span>
            <span className="text-accent animate-blink font-extralight">|</span>
          </p>
          <p className="text-[1.05rem] text-text-secondary leading-relaxed mb-10 max-w-[500px]">
            Saya bangun aplikasi web — dari interface yang nyaman dipakai sampai backend yang stabil. Fokus di React, Next.js, dan Node.js.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Lihat Proyek
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = '';
                link.click();
              }}
              className="btn-outline"
            >
              Download CV
            </button>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/Hakim-pixel', label: 'GitHub', icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              )},
              { href: 'https://linkedin.com', label: 'LinkedIn', icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              )},
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
            <span className="text-text-muted text-xs">·</span>
            <span className="flex items-center gap-1.5 text-xs text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Open for work
            </span>
          </div>
        </div>

        {/* Photo */}
        <div className="hidden lg:block">
          <div className="relative w-[280px] h-[280px]">
            {/* Orbital ring */}
            <div className="absolute inset-[-12px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_rgba(95,82,238,0.6)]" />
            </div>
            {/* Glow */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-sm" />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/15">
              <Image
                src="/profile.jpg"
                alt="Ahmad Muntaqim"
                width={280}
                height={280}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
