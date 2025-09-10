import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

type NavProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ menuOpen, setMenuOpen }: NavProps) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="mx-auto px-4 h-full">
        <div className="flex flex-row justify-between items-center h-full">
          <span className="text-white text-xl">Krish Shah</span>
          <div className="absolute right-[20px] cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10">
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
