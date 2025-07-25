import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", color: "text-yellow-400", border: "border-yellow-500" },
  { name: "React", color: "text-cyan-400", border: "border-cyan-600" },
  { name: "Node.js", color: "text-green-400", border: "border-green-600" },
  { name: "MongoDB", color: "text-green-300", border: "border-green-500" },
  { name: "MySQL", color: "text-blue-300", border: "border-blue-500" },
  { name: "Python", color: "text-blue-400", border: "border-blue-600" },
  { name: "HTML & CSS", color: "text-pink-300", border: "border-pink-500" },
  { name: "Tailwind CSS", color: "text-sky-400", border: "border-sky-500" },
  { name: "Git & GitHub", color: "text-orange-300", border: "border-orange-500" },
];

const SkillsSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 relative z-10">
      <motion.h2
        className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={`bg-[#0f172a] p-4 rounded-xl shadow-md border ${skill.border}`}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <p className={`text-center text-lg font-semibold ${skill.color}`}>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
