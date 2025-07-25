import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", border: "border-yellow-400", text: "text-yellow-400" },
  { name: "React", border: "border-cyan-400", text: "text-cyan-400" },
  { name: "Node.js", border: "border-green-400", text: "text-green-400" },
  { name: "MongoDB", border: "border-green-300", text: "text-green-300" },
  { name: "MySQL", border: "border-blue-300", text: "text-blue-300" },
  { name: "Python", border: "border-blue-400", text: "text-blue-400" },
  { name: "HTML & CSS", border: "border-pink-300", text: "text-pink-300" },
  { name: "Tailwind CSS", border: "border-sky-400", text: "text-sky-400" },
  { name: "Git & GitHub", border: "border-orange-300", text: "text-orange-300" },
];

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-white relative z-10">
      {/* About Me Title */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      {/* Paragraphs */}
      <p className="text-lg leading-7 text-gray-300 mb-4">
        I'm <span className="text-cyan-400 font-semibold">Anjali Gupta</span>, a dedicated Computer Science student at{" "}
        <span className="text-purple-400 font-semibold">Shri Guru Tegh Bahadur Khalsa College, Delhi University</span>
        (Aug 2023 - Present). Passionate about Full-Stack Web Development, Open Source, and solving real-world problems through tech.
        I actively apply my skills in JavaScript, Python, React, Node.js, and databases like MongoDB/MySQL to create innovative solutions.
      </p>

      <p className="text-lg leading-7 text-gray-300 mb-10">
        As a{" "}
        <span className="text-teal-400 font-medium">Teaching Assistant Intern at APNA College</span>, I helped over 600 students resolve DSA queries.
        I also serve as the{" "}
        <span className="text-fuchsia-400 font-medium">General Secretary of the Curieux Computer Society</span>, leading workshops and technical events for 200+ students. Always curious, always building.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="border border-cyan-400 p-6 rounded-lg bg-[#0f172a] shadow-md text-center">
          <h3 className="text-3xl font-bold text-cyan-300">600+</h3>
          <p className="mt-2 text-gray-400">Doubts Resolved in DSA</p>
        </div>
        <div className="border border-indigo-500 p-6 rounded-lg bg-[#0f172a] shadow-md text-center">
          <h3 className="text-3xl font-bold text-indigo-400">200+</h3>
          <p className="mt-2 text-gray-400">Students Impacted via Events</p>
        </div>
        <div className="border border-purple-500 p-6 rounded-lg bg-[#0f172a] shadow-md text-center">
          <h3 className="text-3xl font-bold text-purple-400">3+</h3>
          <p className="mt-2 text-gray-400">Years of Coding Journey</p>
        </div>
      </div>

      {/* Skills Section */}
      <motion.h3
        className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h3>

      {/* Modern Auto-Scrolling Carousel */}
      <div className="relative w-full overflow-hidden py-6">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>
        
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", `-${100 * (skills.length / 5)}%`],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              className={`flex-shrink-0 w-40 h-32 bg-[#0f172a] p-4 rounded-xl shadow-md border ${skill.border} flex items-center justify-center`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 0 15px ${skill.border.split('-')[1] === 'yellow' ? 'rgba(234, 179, 8, 0.5)' : 
                          skill.border.split('-')[1] === 'cyan' ? 'rgba(34, 211, 238, 0.5)' :
                          skill.border.split('-')[1] === 'green' ? 'rgba(74, 222, 128, 0.5)' : 
                          'rgba(192, 132, 252, 0.5)'}`
              }}
              transition={{ duration: 0.3 }}
            >
              <p className={`text-center text-lg font-semibold ${skill.text}`}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Alternative: Step-by-Step Moving Cards */}
      <div className="mt-16">
        <h4 className="text-xl font-semibold mb-6 text-gray-300">Featured Skills</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`bg-[#0f172a] p-4 rounded-xl border ${skill.border} shadow-md h-32 flex items-center justify-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className={`text-center text-lg font-semibold ${skill.text}`}>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;