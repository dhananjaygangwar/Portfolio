export function About() {
  return (
    <section id="about">
      <p className="sec-label">01 / About</p>
      <h2 className="sec-title reveal">ABOUT ME.</h2>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            Backend-focused developer with an MS in Bioinformatics from the University of Liverpool.
            I build <strong>scalable APIs, clean interfaces</strong>, and performance-driven systems —
            currently deepening TypeScript and NestJS while targeting a move to Germany.
          </p>
          <p>
            Outside of web dev, I build <strong>science simulations in C++ and OpenGL</strong> —
            gravitational systems, evolutionary models, and whatever physical phenomenon grabs my
            attention next. Each simulation is a way of thinking: determinism, chaos, emergence, the
            limits of what can be known.
          </p>
          <p>
            I work in shadows, prefer intellectual depth over hype, and think Nietzsche had the right
            idea about building something that outlasts you.
          </p>

          <div className="about-quote">&quot;In this world, winning is everything.&quot; — Ayanokoji</div>
        </div>

        <div className="stat-grid">
          {[
            { label: 'Location', val: 'Delhi', sub: '→ Germany soon' },
            { label: 'Education', val: 'MSc', sub: 'Bioinformatics, Liverpool' },
            { label: 'Primary Focus', val: 'APIs', sub: 'Backend & systems' },
            { label: 'Side Projects', val: 'C++', sub: 'Physics simulations' },
          ].map(({ label, val, sub }) => (
            <div key={label} className="stat-card">
              <p className="stat-label">{label}</p>
              <p className="stat-val">{val}</p>
              <p className="stat-sub">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

