export function Skills() {
  return (
    <section id="skills">
      <p className="sec-label">02 / Skills</p>
      <h2 className="sec-title reveal">WHAT I BUILD WITH.</h2>

      <div className="skills-grid reveal">
        {[
          {
            icon: '⚙️',
            title: 'Backend',
            skills: [
              { n: 'Node.js', h: true },
              { n: 'NestJS', h: true },
              { n: 'FastAPI', h: true },
              { n: 'C# / ASP.NET', h: false },
              { n: 'REST APIs', h: false },
              { n: 'Auth / JWT', h: false },
              { n: 'Python', h: false },
            ],
          },
          {
            icon: '🖥️',
            title: 'Frontend',
            skills: [
              { n: 'Next.js', h: true },
              { n: 'TypeScript', h: true },
              { n: 'React', h: false },
              { n: 'Tailwind CSS', h: false },
              { n: 'JavaScript', h: false },
              { n: 'HTML / CSS', h: false },
            ],
          },
          {
            icon: '🔬',
            title: 'Simulations',
            skills: [
              { n: 'C++', h: true },
              { n: 'OpenGL', h: true },
              { n: 'GLSL Shaders', h: false },
              { n: 'Numerical Methods', h: false },
              { n: 'SQL / PostgreSQL', h: false },
              { n: 'Git / GitHub', h: false },
            ],
          },
        ].map(({ icon, title, skills }) => (
          <div key={title} className="skill-card">
            <div className="skill-icon">{icon}</div>
            <h3 className="skill-title">{title}</h3>
            <div className="skill-tags">
              {skills.map(({ n, h }) => (
                <span key={n} className={`skill-tag${h ? ' hot' : ''}`}>
                  {n}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

