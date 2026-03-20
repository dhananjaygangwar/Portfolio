export function Projects() {
  return (
    <section id="projects">
      <p className="sec-label">03 / Projects</p>

      <div className="projects-intro reveal">
        <h2 className="sec-title" style={{ marginBottom: 0 }}>
          WHAT I&apos;M
          <br />
          BUILDING.
        </h2>
        <p className="projects-intro-text">
          Web projects are under active development. Simulation portfolio tells a cohesive story
          across physics, biology, consciousness, and information theory — each one a thinking
          experiment rendered in code.
        </p>
      </div>

      <div className="projects-grid reveal">
        {[
          {
            badge: 'live',
            bl: 'Completed',
            icon: '🌌',
            title: 'Three-Body Gravity',
            desc: 'Gravitational simulation of three bodies in mutual orbit. Runge-Kutta integration, real-time rendering. A meditation on chaos and determinism — tiny perturbations, wildly different fates.',
            tech: ['C++', 'OpenGL', 'GLSL', 'Physics'],
            dim: false,
          },
          {
            badge: 'live',
            bl: 'Completed',
            icon: '🧬',
            title: 'Digital Evolution',
            desc: 'Entities evolve over generations via selection pressure and mutation. Emergent behavior arises from simple rules. A visual argument for complexity without a designer.',
            tech: ['C++', 'OpenGL', 'Genetic Algo', 'Emergence'],
            dim: false,
          },
          {
            badge: 'dev',
            bl: 'In Development',
            icon: '⚫',
            title: 'Black Hole Accretion Disk',
            desc: 'Relativistic accretion disk simulation with Doppler beaming, gravitational lensing approximations, and thermal emission gradients. Next in the simulation arc.',
            tech: ['C++', 'OpenGL', 'GLSL', 'GR approx'],
            dim: true,
          },
          {
            badge: 'dev',
            bl: 'In Development',
            icon: '🤖',
            title: 'Chatbot Platform',
            desc: 'Conversational AI application built at Travash Software Solutions. Full-stack architecture with NLP integration, scalable backend, and real-time messaging.',
            tech: ['React', 'Node.js', 'FastAPI', 'Python'],
            dim: true,
          },
          {
            badge: 'planned',
            bl: 'Coming Soon',
            icon: '🔌',
            title: 'Project Slot Open',
            desc: 'Next web project incoming. Stack will include Next.js, NestJS, TypeScript — likely something in the API-first / developer-tooling space. Watch this space.',
            tech: ['Next.js', 'NestJS', 'TypeScript'],
            dim: true,
          },
        ].map(({ badge, bl, icon, title, desc, tech, dim }) => (
          <div key={title} className={`proj-card${dim ? ' dim' : ''}`}>
            <span className={`proj-badge badge-${badge}`}>{bl}</span>
            <div className="proj-icon">{icon}</div>
            <h3 className="proj-title">{title}</h3>
            <p className="proj-desc">{desc}</p>
            <div className="proj-tech">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="proj-cta">
          <div>
            <h3 className="proj-cta-title">More simulations &amp; web projects on the way.</h3>
            <p className="proj-cta-sub">
              Consciousness models, information theory visualizations, and full-stack SaaS
              projects in the pipeline. Each built with intention.
            </p>
          </div>
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

