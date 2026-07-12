import { education } from '../../constants';

const Educational = () => {
  return (
    <section
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white">EDUCATIONAL</h1>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 w-1 bg-white h-full"></div>

        {education.map((item) => (
          <div
            key={item.id}
            className="relative flex items-start mb-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-8 -translate-x-1/2 bg-gray-50 border-4 border-[#8245ec] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center z-10">
              <img src={item.img} alt={item.school} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Card */}
            <div
              className="w-[calc(100%-3rem)] sm:w-[calc(100%-5rem)] p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ml-12 sm:ml-16"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-10 bg-white rounded-md overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" src={item.img} alt={item.school} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{item.school}</h3>
                  <h4 className="text-sm text-gray-300">{item.grade}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Educational;
