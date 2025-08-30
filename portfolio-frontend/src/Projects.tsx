function Projects() {
  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-white mb-2">Project One</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur.
          </p>
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-white mb-2">Project Two</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur.
          </p>
        </div>
        <div className="bg-neutral-800 rounded-lg p-6 shadow">
          <h3 className="text-xl font-semibold text-white mb-2">
            Project Three
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
