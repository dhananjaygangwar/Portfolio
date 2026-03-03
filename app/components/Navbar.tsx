export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* <h1 className="font-bold">Dhananjay</h1> */}
        <div className="space-x-6 text-sm">
          <a href="#about" className="hover:text-orange-400">About</a>
          <a href="#skills" className="hover:text-orange-400">Skills</a>
          <a href="#contact" className="hover:text-orange-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}