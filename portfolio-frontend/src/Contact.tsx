import { RevealOnScroll } from "./RevealOnScroll";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-center min-h-screen bg-neutral-950 pt-19"
    >
      <RevealOnScroll>
        <div className="flex flex-col justify-center w-full max-w-4xl px-6 lg:px-8">
          <p className="text-5xl tracking-tight text-white text-center mb-8 mt-10">
            Contact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaEnvelope className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                your.email@example.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaPhone className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">Phone</h3>
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-neutral-900/95 border border-neutral-700 hover:border-indigo-400 transition-all duration-300">
              <FaLinkedin className="text-indigo-400 text-3xl mb-4" />
              <h3 className="text-xl text-white mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/krishshah"
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
