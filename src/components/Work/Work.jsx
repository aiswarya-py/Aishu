import { projects } from "../../constants";

const Work = () => {
  return (
    <section id="projects" className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative clip-path-custom-2">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-xl" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                {project.description.split("|").map((point, i) => (
                  <li key={i}>{point.trim()}</li>
                ))}
              </ul>
              <div className="mb-4 mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 text-sm underline hover:text-purple-300 transition break-all"
              >
                {project.webapp}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
