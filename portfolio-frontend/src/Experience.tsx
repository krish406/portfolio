import { RevealOnScroll } from "./RevealOnScroll";

function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Company Name",
      duration: "2023 - Present",
      description:
        "Developed and maintained web applications using React, TypeScript, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      duration: "2022 - 2023",
      description:
        "Built responsive user interfaces and improved application performance. Worked closely with design teams to implement pixel-perfect designs.",
      technologies: ["JavaScript", "React", "CSS", "HTML"],
    },
  ];

  return (
    <section
      id="experience"
      className="flex justify-center min-h-screen bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
      <div className="flex flex-col justify-center w-full max-w-6xl">
        <p className="text-5xl tracking-tight text-white text-center mb-8 mt-10">
          Experience
        </p>
        <div className="grid grid-cols-1">
          {experiences.map((experience, index) => (
            <div key={index}>
              <div
                className="flex flex-row mb-10 rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 p-6 hover:border-indigo-400 transition-all duration-300"
              >
                <img 
                  width={"150px"} 
                  height={"150px"} 
                  className="border border-white mr-8 flex-shrink-0"
                />
                <div className="flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-indigo-400 font-medium">
                        {experience.company}
                      </span>
                      <span className="text-neutral-400 text-sm">
                        {experience.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-neutral-800 text-indigo-300 rounded-full border border-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}

export default Experience;
