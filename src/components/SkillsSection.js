'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const skills = [
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
];

// Split into 2 rows, duplicate for seamless marquee
const half = Math.ceil(skills.length / 2);
const row1Base = skills.slice(0, half);
const row2Base = skills.slice(half);
const row1 = [...row1Base, ...row1Base, ...row1Base];
const row2 = [...row2Base, ...row2Base, ...row2Base];

export default function SkillsSection() {
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
    <section id="skills" className="py-16 overflow-hidden">
      <div className="divider mb-12" />

      {/* Heading */}
      <div ref={ref} className="appear px-6 max-w-6xl mx-auto mb-10">
        <span className="section-label">Skills</span>
        <h2
          className="font-black"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: 'var(--text-primary)' }}
        >
          Tech <span style={{ color: 'var(--violet)' }}>Skills</span>
          <span style={{ color: 'var(--violet)' }}>.</span>
        </h2>
      </div>

      {/* Row 1 — left scroll */}
      <div className="marquee-wrap mb-4">
        <div className="marquee-track">
          {row1.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white cursor-default select-none"
              style={{
                border: '1.5px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                minWidth: '160px',
                whiteSpace: 'nowrap',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = '#c4b5fd';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.name}
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <span
                className="font-semibold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="marquee-wrap">
        <div className="marquee-track-reverse">
          {row2.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white cursor-default select-none"
              style={{
                border: '1.5px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                minWidth: '160px',
                whiteSpace: 'nowrap',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = '#c4b5fd';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={skill.icon}
                alt={skill.name}
                width={28}
                height={28}
                style={{ objectFit: 'contain' }}
                loading="lazy"
              />
              <span
                className="font-semibold text-sm"
                style={{ color: 'var(--text-primary)' }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
