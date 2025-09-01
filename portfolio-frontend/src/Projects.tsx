function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-black py-30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-neutral-900 rounded-xl p-8 shadow flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">
              Project One
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:underline"
            >
              View Code
            </a>
          </div>
          <div className="bg-neutral-900 rounded-xl p-8 shadow flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">
              Project Two
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:underline"
            >
              View Code
            </a>
          </div>
          <div className="bg-neutral-900 rounded-xl p-8 shadow flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">
              Project Three
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:underline"
            >
              View Code
            </a>
          </div>
          <div className="bg-neutral-900 rounded-xl p-8 shadow flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-2">
              Project Four
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur.
            </p>
            <a
              href="#"
              className="text-indigo-400 hover:underline"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
