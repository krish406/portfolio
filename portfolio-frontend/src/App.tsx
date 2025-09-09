import "./App.css";
import Navbar from "./Navbar.tsx";
import Description from "./Description.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-neutral-950 w-full h-screen">
      <Navbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} ></Navbar>
      <Description></Description>
      <Experience></Experience>
      <Projects></Projects>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
