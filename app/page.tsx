import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      
      <Navbar />
     

      {/* Hero */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/onepiece.jpg')" }}
      >
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-10 text-center text-white max-w-2xl shadow-xl">

          <h2 className="text-5xl font-bold mb-6">
            Hey There! I am Dhananjay
          </h2>

          <p className="text-gray-200 mb-8">
            Backend-focused Full-Stack Developer building scalable APIs and
            clean web applications using .NET and JavaScript.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition"
            >
              Contact
            </a>

            <a
              href="https://github.com/dhananjaygangwar"
              target="_blank"
              className="px-6 py-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>

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
              href="https://github.com/dhananjaygangwar"
              target="_blank"
              className="underline"
            >
              Dhananjay Gangwar
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/dhananjaygangwar/"
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