export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-90 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Victor Cruz</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#main" className="hover:text-blue-400">MAIN</a></li>
          <li><a href="#about" className="hover:text-blue-400">ABOUT ME</a></li>
          <li><a href="#skills" className="hover:text-blue-400">SKILLS</a></li>
          <li><a href="#projects" className="hover:text-blue-400">PROJECTS</a></li>
          <li><a href="#contact" className="hover:text-blue-400">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
}
