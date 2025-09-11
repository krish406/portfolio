import { RevealOnScroll } from "./RevealOnScroll";

function Projects() {
  const projects = [
    {
      title: "Etch-A-Sketch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/Etch-A-Sketch",
    },
    {
      title: "Spatial Distance Histogram",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "#",
    },
    {
      title: "Forecast Finder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/weather-site",
    },
    {
      title: "Calculator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/odin-calculator",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/tic-tac-toe-v2",
    },
    {
      title: "Line Following Robot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/Line_Follower",
    },
    {
      title: "Assembly Selection Sort",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
      github: "https://github.com/krish406/Assembly-Selection-Sort",
    },
    {
      title: "Wall Following Robot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.",
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
