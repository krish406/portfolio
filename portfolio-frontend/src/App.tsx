import "./App.css";
import Navbar from "./Navbar.tsx";
import Description from "./Description.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";

function App() {
  return (
    <div className="bg-neutral-950 w-full h-screen">
      <Navbar></Navbar>
      <Description></Description>
      <Experience></Experience>
      <Projects></Projects>
      {/*<Footer></Footer>*/}
    </div>
  );
}

export default App;
