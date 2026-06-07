'use client';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Satu Data Sikondang',
    description: 'Platform Satu Data dan Statistik Kota Serang untuk manajemen informasi daerah terintegrasi.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web App',
    year: '2025',
    links: { github: 'https://github.com/Hakim-pixel/Sikondang', live: 'https://sikondang.vercel.app' },
  },
  {
    id: 2,
    title: 'Medical Check Center',
    description: 'Aplikasi manajemen pemeriksaan medis terintegrasi dengan sistem backend Laravel.',
    tags: ['Next.js', 'TypeScript', 'Laravel', 'REST API'],
    category: 'Web App',
    year: '2026',
    links: { github: 'https://github.com/Hakim-pixel/medicalcheckcenter', live: 'https://medicalcheckcenter.vercel.app' },
  },
  {
    id: 3,
    title: 'Gxyer Booth',
    description: 'Platform photobooth digital interaktif dengan kustomisasi sticker dan template foto secara real-time.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Canvas API'],
    category: 'Web App',
    year: '2026',
    links: { github: 'https://github.com/Hakim-pixel/GxyerBooth', live: 'https://gxyer-booth.vercel.app' },
  },
  {
    id: 4,
    title: 'Web Parkir',
    description: 'Sistem manajemen perparkiran berbasis web untuk mencatat masuk dan keluar kendaraan secara efisien.',
    tags: ['React', 'Vite', 'Laravel', 'MySQL'],
    category: 'Web App',
    year: '2026',
    links: { github: 'https://github.com/Hakim-pixel/webparkir', live: '#' },
  },
  {
    id: 5,
    title: 'Preloved Store',
    description: 'Platform e-commerce marketplace untuk transaksi jual-beli barang bekas berkualitas.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS'],
    category: 'Web App',
    year: '2025',
    links: { github: 'https://github.com/Hakim-pixel/preloved', live: '#' },
  },
  {
    id: 6,
    title: 'YouTube Clone Mobile',
    description: 'Aplikasi mobile clone YouTube dengan fitur pemutaran video feed dan antarmuka responsif.',
    tags: ['Flutter', 'Dart', 'Mobile Dev'],
    category: 'Mobile App',
    year: '2025',
    links: { github: 'https://github.com/Hakim-pixel/tugasUprak', live: '#' },
  },
  {
    id: 7,
    title: 'XII-RPL Class Website',
    description: 'Prototype website profil kelas XII RPL untuk menyimpan informasi siswa dan galeri kegiatan kelas.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    year: '2025',
    links: { github: 'https://github.com/Hakim-pixel/XII-RPL', live: '#' },
  },
];

const cats = ['All', 'Web App', 'Mobile App', 'Landing Page'];

export default function ProjectsSection() {
  const [active, setActive] = useState('All');
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

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 px-6 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="divider mb-12" />
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Projects</p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
          Yang sudah saya bangun
        </h2>
        <p className="mb-10" style={{ color: 'var(--text-secondary)', maxWidth: '32rem' }}>
          Beberapa project yang cukup saya banggakan — dari freelance maupun personal.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-3 py-1 rounded-md text-xs font-medium border transition-all duration-200 cursor-pointer"
              style={{
                background: active === cat ? 'rgba(139,92,246,0.1)' : 'transparent',
                color: active === cat ? 'var(--violet)' : 'var(--text-secondary)',
                borderColor: active === cat ? 'rgba(139,92,246,0.3)' : 'var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p => (
            <div key={p.id} className="card p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-200">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <span className="text-xs font-mono shrink-0" style={{ color: 'var(--text-muted)' }}>{p.year}</span>
              </div>
              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="tag" style={{ fontSize: '10px', padding: '2px 8px' }}>{t}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-1" style={{ borderTop: '1px solid var(--border)' }}>
                {p.links.github && p.links.github !== '#' && (
                  <a href={p.links.github} target="_blank" rel="noreferrer"
                    className="text-xs flex items-center gap-1 transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    Code
                  </a>
                )}
                {p.links.live && p.links.live !== '#' && (
                  <a href={p.links.live} target="_blank" rel="noreferrer"
                    className="text-xs flex items-center gap-1 transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
