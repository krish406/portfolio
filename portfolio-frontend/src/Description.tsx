function Description() {
  return (
    <>
      <section
        id="about"
        className="py-25 flex flex-row items-center justify-evenly"
      >
        <div className="flex flex-col gap-2 p-8 w-lg">
          <p className="text-xl text-neutral-400">
            Hello, my name is Krish
          </p>
          <p className="text-5xl tracking-tight text-white py-1">
            I am a Software Engineer.
          </p>
          <p className="text-lg text-gray-400">
            I specialize in making robust web applications using modern technologies like React, TypeScript, and Node.js.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-2xl px-5 py-3 text-sm font-medium text-neutral-900 bg-indigo-300 hover:bg-indigo-200 transition"
            >
              View Projects
            </a>
            <a
              href="/Krish_Shah_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl text-white px-5 py-3 text-sm font-medium border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-900 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="text-sm text-neutral-400 hover:text-neutral-200"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <img className="w-[500px] border-solid border-white border-2 h-[500px]" src="" alt=""/>
      </section>
    </>
  );
}

export default Description;
