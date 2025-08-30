function Navbar() {
  return (
    <nav className="navbar">
      <div className="text-white text-xl">Krish Shah</div>
      <ul className="flex space-x-6">
        <li>
          <a
            href="#about"
            className="link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="link"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="link"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="link"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
