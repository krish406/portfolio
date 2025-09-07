import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Description() {
  const finalText = "I'm a Software Engineer";
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(finalText.substring(0, index));
      if (index > finalText.length) {
        setIsLoaded(true);
        clearInterval(interval);
      }
      index += 1;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="about"
        className="py-25 flex flex-row flex-wrap items-center justify-evenly"
      >
        <div className="flex flex-col gap-2 p-8 py-20 w-lg">
          <p className="text-xl text-neutral-400">Hello, my name is Krish</p>
          <p className="text-5xl tracking-tight text-white py-1">
            {text} <span> {isLoaded ? null : "|"} </span>
          </p>
          <p className="text-lg text-gray-400">
            I specialize in making robust web applications using modern
            technologies like React, TypeScript, and Node.js.
          </p>
          <div className="mt-3 flex items-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl px-5 py-3 text-sm font-medium text-neutral-900 bg-indigo-300/90 border border-neutral-700 hover:bg-indigo-200 transition ease-in hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="/Krish_Shah_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl text-white px-5 py-3 text-sm font-medium border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition ease-in hover:-translate-y-1"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/krish406"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-3 text-sm font-medium text-white bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition flex items-center gap-2"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/krishshah"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-3 py-3 text-sm font-medium text-white bg-blue-700 border border-blue-800 hover:bg-blue-600 transition flex items-center gap-2"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <img
          className="w-[500px] border-solid border-white border-2 h-[500px]"
          src={reactLogo}
          alt=""
        />
      </section>
    </>
  );
}

export default Description;
