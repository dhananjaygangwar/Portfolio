export function Skills() {
  return (
    <section id="skills">
      <p className="sec-label">03 / Skills</p>
      <h2 className="sec-title reveal">THE TOOLKIT.</h2>

      <div className="skills-table reveal">
        {[
          {
            cat: 'Backend',
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
            cat: 'Frontend',
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
            cat: 'Systems & Tools',
            skills: [
              { n: 'C++', h: true },
              { n: 'OpenGL', h: true },
              { n: 'GLSL Shaders', h: false },
              { n: 'Numerical Methods', h: false },
              { n: 'PostgreSQL', h: false },
              { n: 'Git / GitHub', h: false },
            ],
          },
        ].map(({ cat, skills }) => (
          <div key={cat} className="skills-row">
            <span className="skills-cat">{cat}</span>
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
