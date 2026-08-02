export function Projects() {
  return (
    <section id="projects">
      <p className="sec-label">04 / Projects</p>

      <div className="projects-intro reveal">
        <h2 className="sec-title" style={{ marginBottom: 0 }}>
          WHAT I&apos;M
          <br />
          BUILDING.
        </h2>
        <p className="projects-intro-text">
          Simulation portfolio tells a cohesive story across physics, biology, and information theory.
          Web projects under active development — each one built with intention.
        </p>
      </div>

      <div className="projects-list reveal">
        {[
          {
            num: '01',
            badge: 'live',
            bl: 'Completed',
            title: 'Three-Body Gravity',
            desc: 'Gravitational simulation of three bodies in mutual orbit. Runge-Kutta integration, real-time rendering. A meditation on chaos and determinism — tiny perturbations, wildly different fates.',
            tech: ['C++', 'OpenGL', 'GLSL', 'Physics'],
            dim: false,
          },
          {
            num: '02',
            badge: 'live',
            bl: 'Completed',
            title: 'Digital Evolution',
            desc: 'Entities evolve over generations via selection pressure and mutation. Emergent behavior arises from simple rules. A visual argument for complexity without a designer.',
            tech: ['C++', 'OpenGL', 'Genetic Algorithm', 'Emergence'],
            dim: false,
          },
          {
            num: '03',
            badge: 'dev',
            bl: 'In Development',
            title: 'Black Hole Accretion Disk',
            desc: 'Relativistic accretion disk simulation with Doppler beaming, gravitational lensing approximations, and thermal emission gradients. Next in the simulation arc.',
            tech: ['C++', 'OpenGL', 'GLSL', 'General Relativity'],
            dim: true,
          },
          {
            num: '04',
            badge: 'dev',
            bl: 'In Development',
            title: 'Chatbot Platform',
            desc: 'Conversational AI application built at Travash Software Solutions. Full-stack architecture with NLP integration, scalable backend, and real-time messaging.',
            tech: ['React', 'Node.js', 'FastAPI', 'Python'],
            dim: true,
          },
          {
            num: '05',
            badge: 'planned',
            bl: 'Coming Soon',
            title: 'Developer Tooling — TBD',
            desc: 'Next web project in the pipeline. API-first, developer-tooling space. Stack will include Next.js, .NET, and TypeScript.',
            tech: ['Next.js', '.NET', 'TypeScript', 'PostgreSQL'],
            dim: true,
          },
        ].map(({ num, badge, bl, title, desc, tech, dim }) => (
          <div key={title} className={`proj-item${dim ? ' dim' : ''}`}>
            <div className="proj-item-top">
              <div className="proj-item-left">
                <span className="proj-num">{num}</span>
                <h3 className="proj-title">{title}</h3>
              </div>
              <span className={`proj-badge badge-${badge}`}>{bl}</span>
            </div>
            <p className="proj-desc">{desc}</p>
            <div className="proj-tech">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="proj-footer">
          <p className="proj-footer-text">
            Consciousness models, information theory visualizations, and full-stack SaaS projects in the pipeline.
          </p>
          <a
            href="https://github.com/dhananjaygangwar"
            target="_blank"
            rel="noreferrer"
            className="proj-cta-link"
          >
            VIEW GITHUB →
          </a>
        </div>
      </div>
    </section>
  )
}
