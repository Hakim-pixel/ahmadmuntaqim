'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
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
    <section id="about" className="py-28 px-6">
      <div className="divider mb-28" />
      <div ref={ref} className="appear max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-16 items-start">

        {/* Photo */}
        <div className="mx-auto lg:mx-0 lg:sticky lg:top-28">
          <div
            className="relative overflow-hidden"
            style={{ width: '260px', height: '320px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }}
          >
            <Image
              src="/profile.jpg"
              alt="Ahmad Muntaqim"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Ahmad Muntaqim</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Full Stack Developer · Serang, Banten</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="section-label">About</span>
          <h2
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px' }}
          >
            I AM{' '}
            <span className="badge-blue">AHMAD MUNTAQIM</span>{' '}
            <span className="badge-emerald">FULL STACK DEVELOPER</span>
          </h2>

          <div className="space-y-4 mb-10" style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: '1.75' }}>
            <p>
              Sebagai lulusan Rekayasa Perangkat Lunak dengan pengalaman 3+ tahun, saya spesialis dalam mentranslasikan
              kebutuhan bisnis yang kompleks menjadi aplikasi web yang efisien dan scalable. Dari sistem manajemen data
              desa hingga aplikasi kasir apotek — saya membangun solusi full-stack dari nol yang memberikan dampak nyata.
            </p>
            <p>
              Di luar koding, saya suka mencari masalah yang bisa diselesaikan dengan teknologi sederhana.
              Saya percaya bahwa UI yang baik tidak harus ramai, dan kode yang bersih lebih berharga dari yang cepat selesai.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { n: '3+', label: 'Tahun Exp.' },
              { n: '20+', label: 'Project' },
              { n: '10+', label: 'Klien' },
              { n: '8+', label: 'Tech Stack' },
            ].map(s => (
              <div key={s.label} className="card p-5 text-center">
                <p
                  className="font-black mb-1"
                  style={{ fontSize: '1.8rem', color: 'var(--violet)', letterSpacing: '-1px' }}
                >
                  {s.n}
                </p>
                <p className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm mb-8">
            {[
              { label: 'Email', val: 'rahmadciamis@gmail.com', href: 'mailto:rahmadciamis@gmail.com' },
              { label: 'Status', val: '🟢 Open for work' },
              { label: 'Bahasa', val: 'Indonesia, English' },
            ].map(i => (
              <div key={i.label}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  {i.label}
                </p>
                {i.href
                  ? <a href={i.href} className="font-medium transition-colors" style={{ color: 'var(--violet)' }}>{i.val}</a>
                  : <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{i.val}</p>
                }
              </div>
            ))}
          </div>

          <a
            href="/cv.pdf"
            download
            className="btn-dark"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
}
