export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 text-center text-white max-w-2xl shadow-xl">

        <h2 className="text-5xl font-extrabold tracking-tight mb-6">
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

      <div className="absolute bottom-10 left-10 text-white/40 text-xs italic max-w-xs hidden md:block">
        In this world, winning is everything.
        <br />
        <span className="text-white/30">— Ayanokoji</span>
      </div>

    </section>
  );
}