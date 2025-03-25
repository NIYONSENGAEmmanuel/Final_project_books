import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const About = () => (
  <section
    className="sm:min-h-screen lg:bg-gradient-to-r  from-gray-200 to-gray-200  hover:animate-none flex items-center justify-center"
  >
    <div className="max-w-4xl bg-white shadow-lg mt-32 rounded-xl p-8 md:p-12">
      <h1 className="text-4xl mt-11 font-extrabold text-center mb-6 text-gray-800">
        About Me
      </h1>
      <p className="text-lg leading-relaxed text-gray-700">
        Hello, my name is{" "}
        <strong className="text-blue-600 text-xl">Niyonsenga Emmanuel</strong>. I
        am a front-end developer who loves creating and designing websites. I
        use technologies like <strong>HTML</strong>, <strong>CSS</strong>,{" "}
        <strong>JavaScript</strong>, and <strong>React</strong> to build
        websites that look good and are easy to use.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        I also have skills in <strong>Figma</strong>, which helps me turn design
        ideas into real projects by combining creativity and technical skills.
        My goal is to create websites that work well on all devices and give
        users a smooth experience.
      </p>
      <p className="mt-6 text-lg leading-relaxed text-gray-700">
        I am always learning and improving my skills in web development. I am
        also exploring database management and working towards building
        full-stack solutions. Whether I work alone or in a team, I always focus
        on delivering high-quality work that meets users needs.
      </p>
      <div className="mt-8">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Find Me On</h2>
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a
            href="https://github.com/NIYONSENGAEmmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            <FaGithub className="ml-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/NiyonsengaEmmanuel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            <FaLinkedin className="ml-4"/>
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
             target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            <MdEmail className="ml-4" />
            Email
          </a>
        </div>
    </div>
    </div>
  </section>
);

export default About;
