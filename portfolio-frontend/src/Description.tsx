import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

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
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
        <div className="flex flex-col sm:flex-col m-2 lg:m-6 lg:flex-row justify-center items-center max-w-[calc(100vw-5rem)] lg:max-w-5xl bg-neutral-900 lg:p-10 p-4 rounded-2xl border-2 border-neutral-700 overflow-hidden">
          <div className="flex flex-col gap-2 md:p-8 py-10 md:py-20 lg:max-w-lg w-full">
            <p className="text-xl text-neutral-400">Hello, my name is Krish</p>
            <span className="text-5xl tracking-tight text-white py-1">
              {text} <span> {isLoaded ? null : "|"} </span>
            </span>
            <p className="text-lg text-gray-400">
              I specialize in making robust web applications using modern
              technologies like React, TypeScript, and Node.js.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="text-white rounded-2xl px-5 py-3 text-sm font-medium border border-neutral-700 hover:border-indigo-400 hover:bg-neutral-800 transition ease-in hover:-translate-y-1"
              >
                View Projects
              </a>
              <a
                href="/Krish_Shah_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl text-white px-5 py-3 text-sm font-medium border border-neutral-700 hover:border-indigo-400 hover:bg-neutral-800 transition ease-in hover:-translate-y-1"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/krish406"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-sm font-medium text-white border border-neutral-700 hover:bg-neutral-800 hover:border-indigo-400 transition ease-in hover:-translate-y-1 flex gap-2"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/krishshah"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-3 py-3 text-sm font-medium text-white border border-neutral-700 hover:border-indigo-400 hover:bg-neutral-800 transition ease-in hover:-translate-y-1 flex gap-2"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <img
            className="lg:w-[300px] lg:h-[300px] max-w-[400px] max-h-[400px] w-full h-full border-2 border-white m-4"
            src={reactLogo}
            alt=""
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Description;
