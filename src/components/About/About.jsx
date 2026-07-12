import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt'
import profile from '../../assets/pro.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aiswarya Deepan
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white mr-3">I am a</span>
            <Typewriter
              words={["Full Stack Developer","Python Web Developer","Django & React Developer","API & Backend Developer","Modern Web Application Developer",
              ]} loop cursor cursorStyle="|" typeSpeed={80} deleteSpeed={60} delaySpeed={1200}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer specializing in building modern, scalable, 
            and user-focused web applications. With strong expertise in Python and Django on 
            the backend and React on the frontend, I love creating seamless digital experiences 
            that solve real-world problems. I am skilled in crafting responsive interfaces 
            using HTML, CSS, Tailwind CSS, and Bootstrap, and I work confidently with 
            relational databases such as MySQL and PostgreSQL.  
            <br /><br />
            I enjoy transforming ideas into clean, efficient systems and continuously learning 
            new technologies to improve my craft. My focus is on writing elegant code, 
            building high-performance applications, and delivering solutions that combine 
            functionality with great user experience.
          </p>
          <a href="" target="_blank" rel="noopener noreferrer" className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec"
            }}> Download CV
          </a>
        </div>
       <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 border-4 border-purple-700 rounded-full"
          tiltMaxAngleY={20}
          tiltMaxAngleX={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full rounded-full object-cover object-[50%_25%] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />


          </Tilt>
        </div>

      </div>
    </section>
  );
};
export default About;
