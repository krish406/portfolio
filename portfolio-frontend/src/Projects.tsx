import { RevealOnScroll } from "./RevealOnScroll";

function Projects() {
  const projects = [
    {
      title: "Etch-A-Sketch",
      description: "An interactive web application that allows users to create pixel art from their mouse interactions. Built using JavaScript and DOM manipulation",
      github: "https://github.com/krish406/Etch-A-Sketch",
    },
    {
      title: "Spatial Distance Histogram",
      description: "A CUDA-optimized implementation of a spatial distance histogram algorithm with accelerated performance achieved through parallel programming.",
      github: "#",
    },
    {
      title: "Forecast Finder",
      description: "A full-stack application to display real-time weather data from OpenWeather API using a responsive grid-based UI.",
      github: "https://github.com/krish406/weather-site",
    },
    {
      title: "Calculator",
      description:
        "An online calculator application that evaluate arithmetic expressions created through button inputs.",
      github: "https://github.com/krish406/odin-calculator",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "An interactive web application that allows users to play Tic-Tac-Toe against each other.",
      github: "https://github.com/krish406/tic-tac-toe-v2",
    },
    {
      title: "Assembly Selection Sort",
      description:
        "An implementation of the selection sort algorithm using RISC-V assembly.",
      github: "https://github.com/krish406/Assembly-Selection-Sort",
    },
    {
      title: "Line Following Robot",
      description:
        "The arduino program used to direct a Line Following Robot's navigation based on IR sensor readings.",
      github: "https://github.com/krish406/Line_Follower",
    },
    {
      title: "Wall Following Robot",
      description:
        "A Webots program used to allow a virtual robot to navigate through a maze using a PID controller and Left and Right Wall Following. Built using Python and the FAIRIS-Lite Library.",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="flex justify-center min-h-screen bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
        <div className="flex flex-col w-full max-w-6xl px-6 lg:px-8">
          <p className="text-5xl tracking-tight text-white text-center mt-10 mb-8">
            Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300 p-8"
              >
                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  className="text-indigo-400"
                >
                  View on Github
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
