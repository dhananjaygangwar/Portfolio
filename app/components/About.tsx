export function About() {
  return (
    <section id="about">
      <p className="sec-label">01 / About</p>
      <h2 className="sec-title reveal">ABOUT.</h2>

      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            Backend-focused developer with an MSc in Bioinformatics from the University of Liverpool.
            I build <strong>scalable APIs, clean interfaces</strong>, and performance-driven systems —
            currently deepening TypeScript and .NET.
          </p>
          <p>
            Outside of web development, I build <strong>science simulations in C++ and OpenGL</strong> —
            gravitational systems, evolutionary models, and whatever physical phenomenon grabs my
            attention next. Each one is a way of thinking: determinism, chaos, emergence, and the
            limits of what can be known.
          </p>
          <p>
            I work with precision, value intellectual depth over hype, and believe the best systems —
            technical or otherwise — are built to outlast the context they were born in.
          </p>

          <div className="about-quote">
            &quot;In this world, winning is everything.&quot; — Ayanokoji
          </div>
        </div>

        <div className="about-facts">
          {[
            { label: 'Based in', value: 'New Delhi, India' },
            { label: 'Education', value: 'B.Tech · MSc', note: 'University of Liverpool, UK' },
            { label: 'Focus', value: 'Backend & Systems' },
            { label: 'Languages', value: 'English · Hindi · German' },
            { label: 'Availability', value: 'Open · Relocatable' },
          ].map(({ label, value, note }) => (
            <div key={label} className="about-fact">
              <span className="fact-label">{label}</span>
              <span className="fact-right">
                <span className="fact-val">{value}</span>
                {note && <span className="fact-note">{note}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
