import { motion } from "framer-motion";
import { TechIcons } from "./TechIcons";

const About = ({ id }) => {
  const stats = [
    { value: "600+", label: "Doubts Resolved in DSA", color: "cyan" },
    { value: "200+", label: "Students Impacted", color: "indigo" },
    { value: "3+", label: "Years of Coding", color: "purple" }
  ];

  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-white relative z-10 overflow-hidden">
      {/* Background elements - adjusted for mobile */}
      <div className="hidden sm:block absolute -right-20 -top-20 w-64 h-64 bg-blue-900/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="hidden sm:block absolute -left-20 bottom-0 w-64 h-64 md:w-96 md:h-96 bg-purple-900/10 rounded-full filter blur-3xl -z-10"></div>

      {/* About Me Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12 flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full "></div>
      </motion.div>

      {/* Content Grid - adjusted for mobile */}
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Text Content */}
        <div>
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-4 md:mb-6">
              I'm <span className="text-cyan-400 font-semibold">Anjali Gupta</span>, a passionate Computer Science student at{" "}
              <span className="text-purple-400 font-semibold">Shri Guru Tegh Bahadur Khalsa College, Delhi University</span>.
              Currently focused on Full-Stack Development and Open Source, I love transforming ideas into digital solutions.
            </p>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300">
              My toolkit includes <span className="text-blue-400">JavaScript</span>, <span className="text-green-400">Python</span>,{" "}
              <span className="text-cyan-400">React</span>, <span className="text-emerald-400">Node.js</span>, and various databases, 
              which I use to build innovative applications.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold text-teal-400 mb-2">Teaching Assistant @ APNA College</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Mentored 600+ students in Data Structures & Algorithms, helping them solve complex problems and improve their coding skills.
              </p>
            </div>

            <div className="p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
              <h3 className="text-lg md:text-xl font-semibold text-fuchsia-400 mb-2">General Secretary @ Curieux Computer Society</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Organized technical workshops and events for 200+ students, fostering a community of learning and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Stats & Skills */}
        <div>
          {/* Stats - now stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-4 md:p-6 rounded-xl bg-[#0f172a] border border-${stat.color}-400/30 shadow-lg text-center backdrop-blur-sm`}
              >
                <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-1 md:mb-2`}>{stat.value}</h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              My Skills
            </h3>
            <TechIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;