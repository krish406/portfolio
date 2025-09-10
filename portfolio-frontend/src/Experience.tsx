import { RevealOnScroll } from "./RevealOnScroll";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: Array<string> | string;
  technologies: Array<string>;
}

function Experience() {
  const experiences: Array<Experience> = [
    {
      title: "Software Engineering Intern",
      company: "Typical PT",
      duration: "Dec 2024 - Jan 2024",
      description: [
        "•	Collaborated with the lead web developer to create an NPTE exam preparation platform for DPT students",
        "•	Automated the transfer of test bank questions using the Python-Excel library to reduce total development time by eight hours",
        "•	Tested the site to ensure that it worked well across web and mobile platforms",
      ],
      technologies: ["Python", "openpyxl", "docx", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      duration: "2022 - 2023",
      description: [
        "•	Collaborated with the lead web developer to create an NPTE exam preparation platform for DPT students",
        "•	Automated the transfer of test bank questions using the Python-Excel library to reduce total development time by eight hours",
        "•	Tested the site to ensure that it worked well across web and mobile platforms",
      ],
      technologies: ["JavaScript", "React", "CSS", "HTML"],
    },
  ];

  return (
    <section
      id="experience"
      className="flex justify-center min-h-screen bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
        <div className="flex flex-col justify-center w-full max-w-6xl px-6 lg:px-8">
          <p className="text-5xl tracking-tight text-white text-center mb-8 mt-10">
            Experience
          </p>
          <div className="grid grid-cols-1 gap-1">
            {experiences.map((experience, index) => (
              <div key={index}>
                <div className="flex flex-row items-center mb-10 rounded-xl shadow-xl bg-neutral-900/95 border border-neutral-700 p-6 hover:border-indigo-400 transition-all duration-300">
                  <img
                    src="./typt.png"
                    className="w-[150px] h-[150px] object-cover border border-white mr-8 flex-shrink-0 hidden md:block"
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

                    <ul className="text-gray-400 mb-4">
                      {Array.isArray(experience.description)
                        ? experience.description.map(
                            (exp: string, index: number) => (
                              <li key={index}>{exp}</li>
                            )
                          )
                        : ""}
                    </ul>

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
