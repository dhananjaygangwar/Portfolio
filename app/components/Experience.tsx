// NOTE: Dates and titles below are placeholders — replace with your real
// employment / study periods before publishing.
const timeline = [
  {
    period: '2023 — Present',
    kind: 'Work',
    role: 'Full Stack Developer',
    org: 'Travash Software Solutions',
    desc: 'Built a conversational AI platform end-to-end — React frontend, Node and FastAPI backend, NLP integration, and real-time messaging. Focused on scalable architecture and clean, well-documented API design.',
    stack: ['React', 'Node.js', 'FastAPI', 'Python', 'NLP'],
  },
  {
    period: '2021 — 2022',
    kind: 'Education',
    role: 'MSc, Bioinformatics',
    org: 'University of Liverpool, UK',
    desc: 'Graduate study bridging biology and computation — data pipelines, statistical modelling, and algorithmic thinking applied to large biological datasets.',
    stack: ['Python', 'Statistics', 'Data Pipelines', 'Research'],
  },
  {
    period: '2017 — 2021',
    kind: 'Education',
    role: 'B.Tech, Computer Science',
    org: 'Computer Science & Engineering',
    desc: 'Undergraduate foundation in computer science — data structures, operating systems, databases, and software engineering fundamentals.',
    stack: ['C++', 'Java', 'DBMS', 'Operating Systems'],
  },
]

export function Experience() {
  return (
    <section id="experience">
      <p className="sec-label">02 / Experience</p>
      <h2 className="sec-title reveal">THE PATH SO FAR.</h2>

      <div className="exp-list reveal">
        {timeline.map(({ period, kind, role, org, desc, stack }) => (
          <div key={`${role}-${org}`} className="exp-row">
            <div className="exp-left">
              <span className="exp-period">{period}</span>
              <span className={`exp-kind kind-${kind.toLowerCase()}`}>{kind}</span>
            </div>
            <div className="exp-right">
              <h3 className="exp-role">{role}</h3>
              <p className="exp-org">{org}</p>
              <p className="exp-desc">{desc}</p>
              <div className="exp-stack">
                {stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
