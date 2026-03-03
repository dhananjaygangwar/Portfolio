export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-6 py-4 text-white">
        
        <div className="space-x-10 text-lg font-semibold">
          <a href="#about" className="hover:text-orange-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-orange-400 transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-orange-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}