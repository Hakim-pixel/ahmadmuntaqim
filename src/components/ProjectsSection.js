'use client';
import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Satu Data Sikondang',
    category: 'Web App',
    year: '2025',
    short: 'Platform Satu Data dan Statistik Kota Serang untuk manajemen informasi daerah terintegrasi.',
    desc: 'Sistem informasi data dan statistik terintegrasi untuk Kota Serang. Memungkinkan pengelolaan data daerah secara terpusat, visualisasi statistik interaktif, dan pelaporan berbasis web yang mudah diakses oleh seluruh perangkat daerah.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    color: '#ede9fe',
    links: { github: 'https://github.com/Hakim-pixel/Sikondang', live: 'https://sikondang.vercel.app' },
  },
  {
    id: 2,
    title: 'Medical Check Center',
    category: 'Web App',
    year: '2026',
    short: 'Aplikasi manajemen pemeriksaan medis terintegrasi dengan sistem backend Laravel.',
    desc: 'Platform manajemen klinik pemeriksaan medis yang memungkinkan pengelolaan pasien, jadwal pemeriksaan, hasil lab, dan pelaporan medis secara digital. Dibangun dengan Next.js frontend dan Laravel backend.',
    tags: ['Next.js', 'TypeScript', 'Laravel', 'REST API'],
    color: '#dbeafe',
    links: { github: 'https://github.com/Hakim-pixel/medicalcheckcenter', live: 'https://medicalcheckcenter.vercel.app' },
  },
  {
    id: 3,
    title: 'Gxyer Booth',
    category: 'Web App',
    year: '2026',
    short: 'Platform photobooth digital interaktif dengan kustomisasi sticker dan template foto secara real-time.',
    desc: 'Aplikasi photobooth digital berbasis web yang memungkinkan pengguna mengambil foto, menambahkan sticker, memilih template frame, dan mengunduh hasil foto. Dibangun menggunakan Canvas API dengan antarmuka yang intuitif dan responsif.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Canvas API'],
    color: '#fef3c7',
    links: { github: 'https://github.com/Hakim-pixel/GxyerBooth', live: 'https://gxyer-booth.vercel.app' },
  },
  {
    id: 4,
    title: 'Web Parkir',
    category: 'Web App',
    year: '2026',
    short: 'Sistem manajemen perparkiran berbasis web untuk mencatat masuk dan keluar kendaraan.',
    desc: 'Sistem parkir digital yang mengelola masuk/keluar kendaraan secara real-time, perhitungan tarif otomatis, cetak struk, dan laporan harian/bulanan. Cocok untuk area parkir komersial maupun gedung perkantoran.',
    tags: ['React', 'Vite', 'Laravel', 'MySQL'],
    color: '#d1fae5',
    links: { github: 'https://github.com/Hakim-pixel/webparkir', live: '#' },
  },
  {
    id: 5,
    title: 'Preloved Store',
    category: 'Web App',
    year: '2025',
    short: 'Platform e-commerce marketplace untuk transaksi jual-beli barang bekas berkualitas.',
    desc: 'Marketplace online untuk jual beli barang preloved dengan fitur listing produk, pencarian & filter canggih, sistem chat antar pengguna, manajemen pesanan, dan dashboard seller. Dibangun dengan Laravel sebagai full-stack framework.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Tailwind CSS'],
    color: '#fce7f3',
    links: { github: 'https://github.com/Hakim-pixel/preloved', live: '#' },
  },
  {
    id: 6,
    title: 'XII-RPL Class Website',
    category: 'Landing Page',
    year: '2025',
    short: 'Website profil kelas XII RPL dengan informasi siswa dan galeri kegiatan kelas.',
    desc: 'Prototype website profil kelas XII Rekayasa Perangkat Lunak yang menampilkan informasi seluruh siswa, galeri foto kegiatan kelas, jadwal pelajaran, dan prestasi. Dibangun dengan HTML, CSS, dan JavaScript murni.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#e0f2fe',
    links: { github: 'https://github.com/Hakim-pixel/XII-RPL', live: '#' },
  },
];

const cats = ['All', 'Web App', 'Landing Page'];

export default function ProjectsSection() {
  const [activeCat, setActiveCat] = useState('All');
  const [drawer, setDrawer] = useState(null);
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

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawer]);

  const filtered = activeCat === 'All' ? projects : projects.filter(p => p.category === activeCat);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="divider mb-28" />
      <div ref={ref} className="appear max-w-6xl mx-auto">
        <span className="section-label">Projects</span>
        <h2
          className="font-black leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: 'var(--text-primary)' }}
        >
          Featured Works<span style={{ color: 'var(--violet)' }}>.</span>
        </h2>
        <p className="mb-10" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
          Beberapa project yang cukup saya banggakan — dari freelance maupun personal.
          Klik card untuk melihat detail lengkap.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer"
              style={{
                background: activeCat === cat ? 'var(--violet)' : 'transparent',
                color: activeCat === cat ? '#fff' : 'var(--text-secondary)',
                borderColor: activeCat === cat ? 'var(--violet)' : 'var(--border)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => (
            <div
              key={p.id}
              className="card-project"
              onClick={() => setDrawer(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setDrawer(p)}
            >
              {/* Color header */}
              <div
                className="h-28 flex items-center justify-center"
                style={{ background: p.color }}
              >
                <p
                  className="font-black text-center px-4 leading-tight"
                  style={{ fontSize: '1.1rem', color: 'rgba(0,0,0,0.5)' }}
                >
                  {p.title}
                </p>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: p.color, color: 'rgba(0,0,0,0.6)' }}
                  >
                    {p.category}
                  </span>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{p.year}</span>
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>{p.short}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="tag" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>+{p.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Drawer */}
      {drawer && (
        <>
          <div className="drawer-overlay" onClick={() => setDrawer(null)} />
          <div className="drawer-panel">
            {/* Header */}
            <div
              className="sticky top-0 flex items-center justify-between px-6 py-4 border-b"
              style={{ borderColor: 'var(--border)', background: 'var(--bg-card)', zIndex: 1 }}
            >
              <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Detail Proyek</p>
              <button
                onClick={() => setDrawer(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent border-0 cursor-pointer transition-colors"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* Color banner */}
              <div
                className="w-full h-40 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: drawer.color }}
              >
                <p
                  className="font-black text-xl text-center px-4"
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                >
                  {drawer.title}
                </p>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: drawer.color, color: 'rgba(0,0,0,0.6)' }}
                >
                  {drawer.category}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'var(--surface)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                >
                  {drawer.year}
                </span>
              </div>

              <h3 className="font-black text-xl mb-3" style={{ color: 'var(--text-primary)' }}>{drawer.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{drawer.desc}</p>

              {/* Tech stack */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {drawer.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3">
                {drawer.links.live && drawer.links.live !== '#' && (
                  <a
                    href={drawer.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary justify-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Live Project
                  </a>
                )}
                {drawer.links.github && drawer.links.github !== '#' && (
                  <a
                    href={drawer.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline justify-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
