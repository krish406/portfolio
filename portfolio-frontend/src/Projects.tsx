import { RevealOnScroll } from "./RevealOnScroll";

function Projects() {
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
            <div className="rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300 p-8">
              <h3 className="text-xl text-white mb-2">Project One</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur.
              </p>
              <a
                href="#"
                className="text-indigo-400"
              >
                View on Github
              </a>
            </div>
            <div className="rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300 p-8">
              <h3 className="text-xl text-white mb-2">Project Two</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur.
              </p>
              <a
                href="#"
                className="text-indigo-400"
              >
                View on Github
              </a>
            </div>
            <div className="rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300 p-8">
              <h3 className="text-xl text-white mb-2">Project Three</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur.
              </p>
              <a
                href="#"
                className="text-indigo-400"
              >
                View on Github
              </a>
            </div>
            <div className="rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300 p-8">
              <h3 className="text-xl text-white mb-2">Project Four</h3>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur.
              </p>
              <a
                href="#"
                className="text-indigo-400"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
