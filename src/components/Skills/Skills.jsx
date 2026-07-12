import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section id="skills" className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      </div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A diverse set of technologies and tools that I have mastered through real-world projects and focused practice.
      </p>
      <div className="flex flex-wrap justify-between mt-10 gap-y-6">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <Tilt
              tiltMaxAngleY={20}
              tiltMaxAngleX={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 bg-transparent border border-gray-700 rounded-3xl py-2 px-2"
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 shrink-0" />
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
