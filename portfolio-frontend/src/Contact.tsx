import { RevealOnScroll } from "./RevealOnScroll";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-screen bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
        <p className="text-5xl tracking-tight text-white text-center mb-8">
            Contact
        </p>
        <div className="flex items-center flex-col rounded-2xl w-full bg-neutral-900 border-2 border-neutral-700 max-w-4xl px-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaEnvelope className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">Email</h3>
              <a
                href="mailto:krishs1079@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                krishs1079@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaPhone className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">Phone</h3>
              <a
                href="tel:+12396994615"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                (239)-699-4615
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaLinkedin className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/krish-shah-a5734428b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                linkedin.com/in/krishshah
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Contact;
