const skills = [
  { name: "MongoDB", level: "Intermediate Level" },
  { name: "Express", level: "Intermediate Level" },
  { name: "React", level: "Intermediate Level" },
  { name: "Node.js", level: "Intermediate Level" },
  { name: "Tailwind CSS", level: "Intermediate Level" },
  { name: "Framer Motion", level: "Intermediate Level" }
];

const SkillsSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] border border-gray-800 rounded-xl p-5 hover:scale-105 transition transform duration-300 shadow-lg hover:shadow-green-500/20"
          >
            <h3 className="text-green-400 text-lg font-semibold mb-1">
              {skill.name}
            </h3>
            <p className="text-gray-400 text-sm">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
