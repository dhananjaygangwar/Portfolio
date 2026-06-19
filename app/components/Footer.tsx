export function Footer() {
  return (
    <footer>
      <div className="footer-col">
        <span className="footer-name">DHANANJAY GANGWAR</span>
        <span className="footer-l">Full Stack Developer · New Delhi, India</span>
      </div>
      <div className="footer-links">
        <a href="https://github.com/dhananjaygangwar" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/dhananjaygangwar" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:kannu.2097@gmail.com">Email</a>
      </div>
      <span className="footer-r">© {new Date().getFullYear()} — Built with Next.js</span>
    </footer>
  )
}
