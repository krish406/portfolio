import type { Dispatch, SetStateAction } from "react";

type NavProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({ menuOpen, setMenuOpen }: NavProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out
                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }
                    `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute right-[20px] top-[20px] text-white text-3xl focus:outline-none cursor-pointer z-50"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="link"
      >
        About
      </a>
      <a
        href="#experience"
        onClick={() => setMenuOpen(false)}
        className="link"
      >
        Experience
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="link"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="link"
      >
        Contact
      </a>
    </div>
  );
};
