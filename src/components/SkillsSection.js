'use client';
import { useEffect, useRef } from 'react';

const skills = {
  Frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'],
  Backend: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'REST API', 'PostgreSQL', 'MySQL'],
  Tools: ['Git', 'Docker', 'Figma', 'Vercel', 'Linux', 'Postman'],
};

export default function SkillsSection() {
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
      id="skills"
      ref={ref}
      className="py-24 px-6 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="divider mb-24" />
      <div className="max-w-5xl mx-auto">
        <p className="section-label">Skills</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 tracking-tight">
          Tech stack yang saya pakai
        </h2>
        <p className="text-text-secondary mb-12 max-w-lg">
          Teknologi yang biasa saya gunakan sehari-hari di project kerja maupun freelance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs font-mono text-text-muted mb-4 tracking-wider uppercase">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
