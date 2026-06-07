'use client';
import { useEffect, useRef } from 'react';

const items = [
  {
    type: 'work',
    company: 'Freelance / Self-Employed',
    role: 'Full Stack Developer',
    period: '2024 – Sekarang',
    desc: 'Membangun dan mengembangkan aplikasi web interaktif, dashboard manajemen data, serta integrasi API untuk berbagai project klien. Spesialis Next.js, Laravel, dan PostgreSQL.',
    tags: ['Next.js', 'Laravel', 'PostgreSQL', 'REST API'],
  },
  {
    type: 'edu',
    company: 'SMKS Informatika',
    role: 'Rekayasa Perangkat Lunak (RPL)',
    period: '2023 – 2026',
    desc: 'Mengambil konsentrasi Rekayasa Perangkat Lunak. Mempelajari algoritma pemrograman, web development, basis data, serta dasar-dasar software engineering dan sistem informasi.',
    tags: ['Web Dev', 'Database', 'Algoritma', 'Software Engineering'],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="divider mb-28" />
      <div ref={ref} className="appear max-w-6xl mx-auto">
        <span className="section-label">Experience</span>
        <h2
          className="font-black leading-tight mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px' }}
        >
          <span style={{ WebkitTextStroke: '2px var(--text-primary)', color: 'transparent' }}>Work</span>
          {' '}
          <span style={{ color: 'var(--violet)' }}>Experience.</span>
        </h2>

        <div className="flex flex-col gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="card p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Icon */}
              <div
                className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black"
                style={{
                  background: item.type === 'work' ? 'var(--violet-light)' : 'var(--amber-light)',
                  color: item.type === 'work' ? 'var(--violet)' : 'var(--amber)',
                }}
              >
                {item.type === 'work' ? '💼' : '🎓'}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-black text-base" style={{ color: 'var(--violet)', marginBottom: '2px' }}>
                      {item.company}
                    </p>
                    <p className="font-bold" style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>
                      {item.role}
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                  >
                    {item.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.75rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
