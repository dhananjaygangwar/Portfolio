import { LocalTime } from './LocalTime'

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-orb" />

      <div className="hero-eyebrow">
        <span className="hero-role">Full Stack Developer — Backend &amp; Systems</span>
        <div className="hero-status">
          <span className="status-dot" />
          Open to opportunities
        </div>
      </div>

      <div className="hero-main">
        <h1 className="hero-name">
          DHANANJAY
          <br />
          <span>GANGWAR</span>
        </h1>

        <div className="hero-rule" />

        <div className="hero-bottom">
          <p className="hero-desc">
            I design and ship <strong>backend systems and full-stack web apps</strong> — TypeScript,
            NestJS, Node. Off the clock, I build <strong>physics simulations in C++</strong> to think
            through chaos, emergence, and the limits of computation.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </div>

      <div className="hero-meta">
        <span className="meta-item">
          <b>Based in</b> New Delhi, India
        </span>
        <span className="meta-item">
          <b>Local time</b> <LocalTime />
        </span>
        <span className="meta-item">
          <b>Stack</b> Next.js · Node · C++ · Python
        </span>
      </div>
    </section>
  )
}
