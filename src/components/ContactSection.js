'use client';
import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setErrorMsg(data.error || 'Gagal mengirim pesan.'); setStatus('error'); return; }
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setErrorMsg('Tidak ada koneksi. Periksa internet kamu.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="divider mb-28" />
      <div ref={ref} className="appear max-w-6xl mx-auto">
        <span className="section-label">Contact</span>
        <h2
          className="font-black leading-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: 'var(--text-primary)' }}
        >
          Let&apos;s Work{' '}
          <span style={{ WebkitTextStroke: '2px var(--text-primary)', color: 'transparent' }}>Together</span>
          <span style={{ color: 'var(--violet)' }}>.</span>
        </h2>
        <p className="mb-14" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
          Ada project menarik atau ingin berkolaborasi? Kirim pesan dan saya akan balas secepatnya.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          {/* Left — Info */}
          <div>
            <div className="flex flex-col gap-5">
              {[
                {
                  label: 'Email',
                  val: 'rahmadciamis@gmail.com',
                  href: 'mailto:rahmadciamis@gmail.com',
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  bg: 'var(--violet-light)',
                  color: 'var(--violet)',
                },
                {
                  label: 'WhatsApp',
                  val: '+62 895-1640-9902',
                  href: 'https://wa.me/6289516409902',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  ),
                  bg: 'var(--emerald-light)',
                  color: 'var(--emerald)',
                },
                {
                  label: 'GitHub',
                  val: 'github.com/Hakim-pixel',
                  href: 'https://github.com/Hakim-pixel',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  ),
                  bg: '#f1f5f9',
                  color: 'var(--text-primary)',
                },
              ].map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 card p-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: c.bg, color: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {c.label}
                    </p>
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="c-name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Nama
                </label>
                <input
                  id="c-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nama kamu"
                  className="input-base"
                  disabled={status === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="email@kamu.com"
                  className="input-base"
                  disabled={status === 'sending'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="c-msg" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                Pesan
              </label>
              <textarea
                id="c-msg"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Ceritakan project atau kebutuhan kamu..."
                className="input-base resize-none"
                disabled={status === 'sending'}
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm rounded-xl px-4 py-3" style={{ color: '#dc2626', background: '#fee2e2', border: '1px solid #fca5a5' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {errorMsg}
              </div>
            )}

            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm rounded-xl px-4 py-3" style={{ color: 'var(--emerald)', background: 'var(--emerald-light)', border: '1px solid #6ee7b7' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Pesan terkirim! Saya akan membalas segera.
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                id="contact-submit"
                disabled={status === 'sending' || status === 'success'}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-[2px] border-white/30 border-t-white rounded-full animate-spin inline-block" />
                    Mengirim…
                  </span>
                ) : status === 'success' ? 'Terkirim ✓' : 'Kirim Pesan'}
              </button>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Atau langsung{' '}
                <a href="https://wa.me/6289516409902" target="_blank" rel="noreferrer" style={{ color: 'var(--violet)', fontWeight: 600 }}>
                  WhatsApp
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
