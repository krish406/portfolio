import "./App.css";
import Navbar from "./Navbar.tsx";
import { MobileMenu } from "./MobileMenu.tsx";
import Description from "./Description.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 w-full h-screen">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      ></Navbar>
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      ></MobileMenu>
      <Description></Description>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
