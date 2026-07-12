import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white">EXPERIENCE</h1>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-16 ${
              index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 bg-gray-50 border-4 border-[#8245ec] w-8 h-8 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img src={experience.img} alt={experience.company} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ml-12 sm:ml-0 ${
                index % 2 === 0 ? 'sm:mr-44' : 'sm:ml-44'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-10 bg-white rounded-md overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src={experience.img} alt={experience.company} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{experience.role}</h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm">Skills:</h5>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.skills.map((skill, i) => (
                    <span key={i} className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-md">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
