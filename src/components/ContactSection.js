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
      if (!res.ok) {
        setErrorMsg(data.error || 'Gagal mengirim pesan.');
        setStatus('error');
        return;
      }
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
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="divider mb-24" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

        {/* Kiri — Info */}
        <div>
          <p className="section-label">Contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
            Ada project tapi mager?
          </h2>
          <p className="leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            Kirim pesan, atau langsung hubungi lewat email atau WhatsApp.
            Saya akan balas secepatnya.
          </p>

          <div className="flex flex-col gap-4 text-sm">
            {[
              { label: 'Email', val: 'rahmadciamis@gmail.com', href: 'mailto:rahmadciamis@gmail.com' },
              { label: 'WhatsApp', val: '+62 895-1640-9902', href: 'https://wa.me/6289516409902' },
              { label: 'GitHub', val: 'github.com/Hakim-pixel', href: 'https://github.com/Hakim-pixel' },
              { label: 'LinkedIn', val: 'linkedin.com/in/ahmad', href: 'https://linkedin.com' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <span className="text-xs font-mono w-16 shrink-0" style={{ color: 'var(--text-muted)' }}>{c.label}</span>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {c.val}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Kanan — Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="c-name" className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Nama
              </label>
              <input
                id="c-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Masukan nama kamu"
                className="input-base"
                disabled={status === 'sending'}
              />
            </div>
            <div>
              <label htmlFor="c-email" className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-muted)' }}>
                Email
              </label>
              <input
                id="c-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Masukan email kamu"
                className="input-base"
                disabled={status === 'sending'}
              />
            </div>
          </div>

          <div>
            <label htmlFor="c-msg" className="block text-xs font-mono mb-1.5" style={{ color: 'var(--text-muted)' }}>
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
            <div className="flex items-center gap-2 text-sm rounded-lg px-4 py-3" style={{ color: '#f87171', background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {errorMsg}
            </div>
          )}

          {status === 'success' && (
            <div className="flex items-center gap-2 text-sm rounded-lg px-4 py-3" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
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
                  <span className="w-3.5 h-3.5 border-[1.5px] border-white/30 border-t-white rounded-full animate-spin inline-block" />
                  Mengirim…
                </span>
              ) : status === 'success' ? 'Terkirim ✓' : 'Kirim Pesan'}
            </button>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Atau langsung{' '}
              <a href="https://wa.me/6289516409902" target="_blank" rel="noreferrer"
                style={{ color: 'var(--violet)', fontWeight: 600 }}>
                WhatsApp
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
