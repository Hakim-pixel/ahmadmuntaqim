'use client';
import { useEffect, useRef } from 'react';

const baseRow1 = ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Laravel', 'PostgreSQL', 'HTML & CSS', 'JavaScript'];
const baseRow2 = ['MySQL', 'PHP', 'Git', 'Figma', 'Node.js', 'REST API', 'Docker', 'Vercel', 'Express.js', 'Linux'];

// Triple to ensure seamless loop on all screen widths
const row1 = [...baseRow1, ...baseRow1, ...baseRow1];
const row2 = [...baseRow2, ...baseRow2, ...baseRow2];

const tagColors = [
  { bg: '#ede9fe', color: '#7c3aed' },
  { bg: '#dbeafe', color: '#1d4ed8' },
  { bg: '#d1fae5', color: '#065f46' },
  { bg: '#fef3c7', color: '#92400e' },
  { bg: '#fce7f3', color: '#9d174d' },
  { bg: '#e0f2fe', color: '#0369a1' },
];

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
    <section id="skills" className="py-28 px-6 overflow-hidden">
      <div className="divider mb-28" />
      <div ref={ref} className="appear max-w-6xl mx-auto mb-16">
        <span className="section-label">Skills</span>
        <h2
          className="font-black leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-1px', color: 'var(--text-primary)' }}
        >
          Tech Skills<span style={{ color: 'var(--violet)' }}>.</span>
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-wrap mb-4">
        <div className="marquee-track">
          {row1.map((skill, i) => {
            const c = tagColors[i % tagColors.length];
            return (
              <span
                key={i}
                className="tag"
                style={{ background: c.bg, color: c.color, border: 'none', padding: '10px 20px', fontSize: '0.9rem', fontWeight: 700 }}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      {/* Marquee Row 2 — reverse */}
      <div className="marquee-wrap">
        <div className="marquee-track-reverse">
          {row2.map((skill, i) => {
            const c = tagColors[(i + 2) % tagColors.length];
            return (
              <span
                key={i}
                className="tag"
                style={{ background: c.bg, color: c.color, border: 'none', padding: '10px 20px', fontSize: '0.9rem', fontWeight: 700 }}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
