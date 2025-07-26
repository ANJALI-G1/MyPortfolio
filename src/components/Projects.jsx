import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import dash from '../assets/dash.png';
import learn from '../assets/learn.png';
import Camp from '../assets/Camp.png';
import Chat from '../assets/Chat.png';
import Pass from '../assets/Pass.png';
import Coral from '../assets/Coral.png';
const Projects = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Product Cart Dashboard",
      description: "Portfolio built with Framer Motion, TailwindCSS, and React. Features animations and responsiveness.",
      image: dash,
      technologies: ["MERN", "Tailwind", "React"],
      github: "https://github.com/ANJALI-G1/Product-Dashboard",
      live: "https://product-dashboard-gr2v.onrender.com/create",
    },
    {
      id: 2,
      title: "Blood Donation Tracker",
      description: "An app to organize and track blood donation camps, donors, and recipients efficiently.",
      image: Camp,
      technologies: ["MERN", "MongoDB", "Cloudinary"],
      github: "https://github.com/ANJALI-G1/Blood-Donation-Camp",
      live: "https://blood-donation-camp-six.vercel.app/",
    },
    {
      id: 3,
      title: "Chit-Chatt",
      description: "A real-time collaborative code editor with syntax highlighting.",
      image:Chat,
      technologies: ["React", "Socket.IO", "Monaco Editor"],
      github: "https://github.com/ANJALI-G1/Chat-App",
      live: "https://chitchat-pzll.onrender.com/",
    },
    {
      id: 4,
      title: "Let's Learn",
      description: "Built using OpenAI, WebSocket, and React. Handles real-time chat with intelligent responses.",
      image: learn,
      technologies: ["OpenAI", "React", "WebSocket"],
      github: "https://github.com/ANJALI-G1/Let-sLearn",
      live: "https://anjali-g1.github.io/Let-sLearn/",
    },
    
    {
      id: 5,
      title: "PassOp",
      description: "A password keeper.",
      image: Pass,
      technologies: ["React", "Node.js", "Chart.js","JWT token"],
      github: "https://github.com/ANJALI-G1/PassOp-passwordKeeper",
      live:"https://drive.google.com/drive/folders/17Wrc_fMR8b65yqktzx2vGfp-z1z26ZsF?usp=sharing",
    },
    {
      id: 6,
      title: "Coral Chapter",
      description: "Full-featured online store with product management and payment processing.",
      image: Coral,
      technologies: ["React", "Node.js", "Stripe"],
      github: "https://github.com/ANJALI-G1/BookStore",
      live: "https://drive.google.com/file/d/14QYM2FVIYXwKTm1k1JdrWkYcmH2FIT18/view",
    },
  ];

  const itemsPerPage = 3;
  const totalItems = projects.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(next, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, currentIndex]);

  const visibleProjects = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleProjects.push(projects[(currentIndex + i) % totalItems]);
  }

  return (
    <section
      id={ id }
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/15 to-pink-900/15 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.p 
          className="text-center text-gray-300  mx-auto mb-12 px-4 md:text-xl mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and demo. It reflects my 
          ability to solve complex problems, work with different technologies and manage projects effectively.
        </motion.p>

        <div className="relative px-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/30 "
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-gray-800 hover:bg-purple-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/30"
          >
            ❯
          </button>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {visibleProjects.map((project) => (
            

            <motion.div
  key={project.id}
  className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)] min-h-[500px] flex flex-col"
  whileHover={{ y: -10 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="w-full h-56 overflow-hidden relative flex-shrink-0">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>
  <div className="p-6 space-y-4 flex-grow flex flex-col">
    <h3 className="text-xl font-semibold text-blue-400">
      {project.title}
    </h3>
    <p className="text-gray-300 text-sm flex-grow">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-4 pt-2">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-400 transition"
      >
        <FaGithub size={20} />
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-purple-400 transition"
      >
        <FaExternalLinkAlt size={20} />
      </a>
    </div>
  </div>
</motion.div>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-gradient-to-r from-blue-400 to-purple-500 scale-125" 
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

//   <motion.div
            //     key={project.id}
            //     className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)]"
            //     whileHover={{ y: -10 }}
            //     transition={{ type: "spring", stiffness: 300 }}
            //   >
            //     <div className="w-full h-56 overflow-hidden relative">
            //       <img
            //         src={project.image}
            //         alt={project.title}
            //         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            //       />
            //       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            //         <p className="text-white text-sm">{project.description}</p>
            //       </div>
            //     </div>
            //     <div className="p-6 space-y-4">
            //       <h3 className="text-xl font-semibold text-blue-400">
            //         {project.title}
            //       </h3>
            //       <div className="flex flex-wrap gap-2">
            //         {project.technologies.map((tech, idx) => (
            //           <span
            //             key={idx}
            //             className="text-xs bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
            //           >
            //             {tech}
            //           </span>
            //         ))}
            //       </div>
            //       <div className="flex gap-4 pt-2">
            //         <a
            //           href={project.github}
            //           target="_blank"
            //           rel="noopener noreferrer"
            //           className="text-gray-400 hover:text-blue-400 transition"
            //         >
            //           <FaGithub size={20} />
            //         </a>
            //         <a
            //           href={project.live}
            //           target="_blank"
            //           rel="noopener noreferrer"
            //           className="text-gray-400 hover:text-purple-400 transition"
            //         >
            //           <FaExternalLinkAlt size={20} />
            //         </a>
            //       </div>
            //     </div>
            //   </motion.div>