'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-4');
        }
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="divider mb-24" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-16 items-start">
        {/* Photo */}
        <div className="lg:sticky lg:top-24">
          <div className="relative w-[200px] h-[200px] mx-auto lg:mx-0">
            {/* Glow */}
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-accent/20 via-transparent to-accent/10 blur-sm" />
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/15">
              <Image
                src="/profile.jpg"
                alt="Ahmad Muntaqim"
                width={200}
                height={200}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-4 text-center lg:text-left">
            <p className="text-sm font-medium text-text-primary">Ahmad Muntaqim</p>
            <p className="text-xs text-text-secondary">Full Stack Developer</p>
            <p className="text-xs text-text-muted mt-1">Serang, Banten</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="section-label">About</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 tracking-tight">
            Sedikit tentang saya
          </h2>

          <div className="space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              Saya developer dengan pengalaman 2+ tahun membangun aplikasi web,
              dari sistem manajemen data desa sampai aplikasi kasir apotek.
              Lebih sering kerja di stack Next.js + PostgreSQL, tapi tidak kaku — sesuaikan kebutuhan project.
            </p>
            <p>
              Di luar koding, saya suka cari masalah yang bisa diselesaikan dengan teknologi sederhana.
              Saya percaya bahwa UI yang baik tidak harus ramai, dan code yang bersih lebih berharga daripada yang cepat selesai.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { n: '3+', label: 'Tahun exp.' },
              { n: '20+', label: 'Project' },
              { n: '10+', label: 'Klien' },
              { n: '5+', label: 'Tech stack' },
            ].map(s => (
              <div key={s.label} className="card p-4">
                <p className="text-2xl font-bold text-text-primary mb-0.5">{s.n}</p>
                <p className="text-xs text-text-secondary">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-text-secondary">
            {[
              { label: 'Email', val: 'ahmad@email.com', href: 'mailto:ahmad@email.com' },
              { label: 'Status', val: 'Open for work' },
              { label: 'Bahasa', val: 'Indonesia, English' },
            ].map(i => (
              <div key={i.label}>
                <p className="text-xs text-text-muted mb-1 font-mono">{i.label}</p>
                {i.href
                  ? <a href={i.href} className="text-text-secondary hover:text-text-primary transition-colors">{i.val}</a>
                  : <p className="text-text-secondary">{i.val}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
