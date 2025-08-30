import "./App.css";
import Navbar from "./Navbar.tsx";
import Description from "./Description.tsx";
import Projects from "./Projects.tsx";

function App() {
  return (
    <div className="bg-stone-900 w-full h-screen">
      <Navbar></Navbar>
      <Description></Description>
      <Projects></Projects>
      {/*<Technologies></Technologies>
      <Footer></Footer>*/}
    </div>
  );
}

export default App;
