'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && window.scrollY >= sections[i].offsetTop - 120) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pt-5 px-4">
      <nav className={`navbar-floating flex items-center gap-1 px-3 py-2 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-black text-lg mr-3 px-2 cursor-pointer bg-transparent border-0"
          style={{ color: 'var(--text-primary)' }}
        >
          AM<span style={{ color: 'var(--pink)' }}>.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-pill ${active === link ? 'active' : ''}`}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Hire Me */}
        <button
          onClick={() => scrollTo('contact')}
          className="btn-primary ml-2 hidden md:inline-flex"
          style={{ padding: '8px 18px', fontSize: '0.82rem' }}
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 bg-transparent border-0 cursor-pointer ml-2"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`block w-5 h-[2px] rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block w-5 h-[2px] rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block w-5 h-[2px] rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ background: 'var(--text-primary)' }} />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-20 left-4 right-4 rounded-2xl p-4 flex flex-col gap-1"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-lg)' }}
        >
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left py-2.5 px-4 rounded-xl text-sm font-semibold bg-transparent border-0 cursor-pointer transition-colors"
              style={{ color: active === link ? 'var(--violet)' : 'var(--text-secondary)' }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="btn-primary mt-2 justify-center"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
