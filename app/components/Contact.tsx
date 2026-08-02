export function Contact() {
  return (
    <section id="contact">
      <p className="sec-label">05 / Contact</p>
      <h2 className="sec-title reveal">LET&apos;S TALK.</h2>

      <div className="contact-grid reveal">
        <div>
          <div className="contact-email-block">
            <p className="contact-email-label">Business inquiries</p>
            <a href="mailto:kannu.2097@gmail.com" className="contact-email-val">
              kannu.2097@gmail.com
            </a>
          </div>

          <div className="contact-socials">
            {[
              ['GitHub', 'https://github.com/dhananjaygangwar'],
              ['LinkedIn', 'https://linkedin.com/in/dhananjaygangwar'],
              ['X / Twitter', 'https://x.com/kannu2097'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact-social-btn"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          {[
            {
              q: 'Are you open to relocating?',
              a: 'Yes — open to relocating within Europe and to remote-first teams. Visa and logistics are sorted; available within a few months.',
            },
            {
              q: 'What kind of roles are you looking for?',
              a: 'Full stack or backend-leaning engineering roles. C# / .NET and TypeScript primarily; Python / FastAPI secondary. I do my best work on product-driven teams that care about engineering quality.',
            },
            {
              q: "What's the deal with the simulations?",
              a: 'Pure intellectual hobby. C++ and OpenGL, no frameworks. Physics, biology, consciousness — each simulation is a question I\'m trying to think through visually.',
            },
            {
              q: 'Do you freelance?',
              a: "Occasionally, for interesting projects. Send a brief and we'll talk.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="faq-item">
              <p className="faq-q">{q}</p>
              <p className="faq-a">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

