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
  const [isMobile, setIsMobile] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Product Cart Dashboard",
      description: "Admin dashboard for e-commerce with product management, cart system, and analytics. Features CRUD operations, responsive design, and interactive data visualization.",
      image: dash,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "DaisyUI"],
      github: "https://github.com/ANJALI-G1/Product-Dashboard",
      live: "https://product-dashboard-gr2v.onrender.com/create",
    },
    {
      id: 2,
      title: "Blood Donation Tracker",
      description: "Platform connecting donors with blood camps through location-based search. Includes admin panel for camp management and real-time updates.",
      image: Camp,
      technologies: ["MERN Stack", "OpenCage API", "Cloudinary", "JWT Auth"],
      github: "https://github.com/ANJALI-G1/Blood-Donation-Camp",
      live: "https://blood-donation-camp-six.vercel.app/",
    },
    {
      id: 3,
      title: "Chit-Chatt",
      description: "Real-time chat application with image sharing, user authentication, and instant notifications. Built with socket.io for seamless communication.",
      image: Chat,
      technologies: ["MERN Stack", "Socket.IO", "Cloudinary", "JWT Auth"],
      github: "https://github.com/ANJALI-G1/Chat-App",
      live: "https://chitchat-pzll.onrender.com/",
    },
    {
      id: 4,
      title: "Let's Learn",
      description: "Centralized academic resource platform with study materials, PYQs, and subject-wise organization for college students.",
      image: learn,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/ANJALI-G1/Let-sLearn",
      live: "https://anjali-g1.github.io/Let-sLearn/",
    },
    {
      id: 5,
      title: "PassOp",
      description: "Secure password manager with encrypted storage, password generator, and categorized organization. Implements industry-standard security protocols.",
      image: Pass,
      technologies: ["MERN Stack", "JWT Auth", "Bcrypt", "MongoDB"],
      github: "https://github.com/ANJALI-G1/PassOp-passwordKeeper",
      live: "https://drive.google.com/drive/folders/17Wrc_fMR8b65yqktzx2vGfp-z1z26ZsF?usp=sharing",
    },
    {
      id: 6,
      title: "Coral Chapter",
      description: "Feature-rich online bookstore with product catalog, search functionality, and theme customization (dark/light mode).",
      image: Coral,
      technologies: ["MERN Stack", "Tailwind CSS", "Redux", "JWT Auth"],
      github: "https://github.com/ANJALI-G1/BookStore",
      live: "https://drive.google.com/file/d/14QYM2FVIYXwKTm1k1JdrWkYcmH2FIT18/view",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalItems = projects.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalItems - (itemsPerPage - 1)));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (totalItems - (itemsPerPage - 1))) % (totalItems - (itemsPerPage - 1)));
  };

  // useEffect(() => {
  //   if (!isHovered) {
  //     intervalRef.current = setInterval(next, 3000);
  //   }
  //   return () => clearInterval(intervalRef.current);
  // }, [isHovered, currentIndex, isMobile]);

  const visibleProjects = [];
  const endIndex = isMobile ? currentIndex + 1 : currentIndex + itemsPerPage;
  for (let i = currentIndex; i < endIndex; i++) {
    visibleProjects.push(projects[i % totalItems]);
  }

  return (
    <section
      id={id}
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          className="text-center text-gray-300 mx-auto mb-12 px-4 md:text-xl mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and demo. It reflects my 
          ability to solve complex problems, work with different technologies and manage projects effectively.
        </motion.p>

        <div className="relative px-4 md:px-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-blue-500/30"
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
                className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)] min-h-[500px] flex flex-col mx-auto w-full max-w-md md:max-w-none"
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

          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(Math.min(index, totalItems - itemsPerPage))}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  (index >= currentIndex && index < currentIndex + itemsPerPage) || 
                  (isMobile && index === currentIndex)
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