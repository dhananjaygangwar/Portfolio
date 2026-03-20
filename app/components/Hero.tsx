export function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-orb" />

      <div className="hero-info">
        <span>
          Location <b>/ New Delhi, India </b>
        </span>
        <span>
          Focus <b>/ Full Stack + Simulations</b>
        </span>
        <span>
          Stack <b>/ Next.js · Node · C++ · Python</b>
        </span>
      </div>

      <div className="hero-status">
        <span className="status-dot" />
        Open for opportunities
      </div>

      <h1 className="hero-name">
        DHANANJAY
        <br />
        <span>GANGWAR</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          <strong>Full Stack Developer</strong> building scalable APIs and clean web applications.
          <br />
          Side-obsession: physics simulations in C++ — three-body gravity, evolution, and next up:
          black hole accretion disks.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}

