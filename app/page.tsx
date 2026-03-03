export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold">Dhananjay</h1>
          <div className="space-x-6 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I’m Dhananjay Gangwar.
        </h2>
        <p className="text-gray-400 max-w-xl mb-8">
          Backend-focused Full-Stack Developer building scalable APIs 
          and clean web applications using .NET and JavaScript.
        </p>

        <div className="space-x-4">
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-lg"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            className="border border-white px-6 py-2 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-6">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <p className="text-gray-400 leading-relaxed">
          I’m a backend-focused developer passionate about building scalable
          systems and clean APIs. I primarily work with C#, ASP.NET Core,
          PostgreSQL, and JavaScript.
          <br /><br />
          Currently focused on backend development and system design,
          preparing for international developer roles.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-10">Skills</h3>

          <div className="grid md:grid-cols-2 gap-10 text-gray-400">
            <div>
              <h4 className="text-white font-semibold mb-3">Backend</h4>
              <p>C#, ASP.NET Core, REST APIs, Authentication</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Frontend</h4>
              <p>HTML, CSS, JavaScript</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Database</h4>
              <p>PostgreSQL, SQL Server</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Tools</h4>
              <p>Git, GitHub, Vercel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto py-24 px-6">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>

        <div className="text-gray-400 space-y-4">
          <p>Email: yourmail@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              className="underline"
            >
              github.com/YOUR_GITHUB
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="underline"
            >
              linkedin.com/in/YOUR_LINKEDIN
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}