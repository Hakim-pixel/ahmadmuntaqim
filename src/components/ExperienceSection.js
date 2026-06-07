'use client';
import { useEffect, useRef } from 'react';

const items = [
  {
    type: 'work',
    role: 'Full Stack Developer — Freelance',
    period: '2026 – Sekarang',
    desc: 'Membangun dan mengembangkan aplikasi web interaktif, dashboard manajemen data, serta integrasi API untuk berbagai project klien.',
  },
  {
    type: 'edu',
    role: 'SMKS Informatika',
    period: '2023 – 2026',
    desc: 'Mengambil konsentrasi Rekayasa Perangkat Lunak (RPL). Mempelajari algoritma pemrograman, web development, basis data, serta dasar-dasar software engineering.',
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
    <section
      id="experience"
      ref={ref}
      className="appear py-24 px-6"
    >
      <div className="divider mb-24" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
        <div>
          <p className="section-label">Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug" style={{ color: 'var(--text-primary)' }}>
            Perjalanan saya
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <div key={i} className="relative pl-4 pb-10 last:pb-0" style={{ borderLeft: '1px solid var(--border)' }}>
              <div className="absolute left-[-4px] top-1.5 w-[7px] h-[7px] rounded-full" style={{ background: 'var(--violet)' }} />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.role}</p>
                <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{item.period}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
