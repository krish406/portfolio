function Navbar() {
  return (
    <nav className="navbar">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className="text-white text-xl">Krish Shah</span>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#about"
              className="link"
            >
              About
            </a>
            <a
              href="#experience"
              className="link"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="link"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="link"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
