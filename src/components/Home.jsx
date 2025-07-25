// import { motion, AnimatePresence } from "framer-motion";
// import { Github, Linkedin } from "lucide-react";
// import { useEffect, useState } from "react";

// const Home = () => {
//     const roles = [' Student', ' Learner', ' FullStack Developer'];
//     const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
//     const [currentRole, setCurrentRole] = useState('');
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [isTyping, setIsTyping] = useState(true);
//     const [showCursor, setShowCursor] = useState(true);
//     const [showContent, setShowContent] = useState(false);

//     // Generate random sparkles
//     const sparkles = Array.from({ length: 30 }).map((_, i) => ({
//         id: i,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         size: Math.random() * 0.5 + 0.5,
//         delay: Math.random() * 2,
//         duration: Math.random() * 3 + 2
//     }));

//     // Initial content animation
//     useEffect(() => {
//         const timer = setTimeout(() => setShowContent(true), 300);
//         return () => clearTimeout(timer);
//     }, []);

//     // Typing effect
//     useEffect(() => {
//         if (!showContent) return;

//         if (isTyping) {
//             if (currentTextIndex < roles[currentRoleIndex].length) {
//                 const timeout = setTimeout(() => {
//                     setCurrentRole(roles[currentRoleIndex].substring(0, currentTextIndex + 1));
//                     setCurrentTextIndex(currentTextIndex + 1);
//                 }, 100);

//                 return () => clearTimeout(timeout);
//             } else {
//                 setIsTyping(false);
//                 setTimeout(() => setIsTyping(true), 2000);
//             }
//         } else {
//             if (currentTextIndex > 0) {
//                 const timeout = setTimeout(() => {
//                     setCurrentRole(roles[currentRoleIndex].substring(0, currentTextIndex - 1));
//                     setCurrentTextIndex(currentTextIndex - 1);
//                 }, 50);

//                 return () => clearTimeout(timeout);
//             } else {
//                 setIsTyping(true);
//                 setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
//             }
//         }
//     }, [currentTextIndex, currentRoleIndex, isTyping, showContent]);

//     // Cursor blink effect
//     useEffect(() => {
//         if (!showContent) return;

//         const interval = setInterval(() => {
//             setShowCursor(prev => !prev);
//         }, 500);
//         return () => clearInterval(interval);
//     }, [showContent]);

//     return (
//         <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
//             {/* Animated Background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
//                 {/* Floating Orbs */}
//                 <motion.div
//                     className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full filter blur-3xl"
//                     animate={{
//                         scale: [1, 1.1, 1],
//                         opacity: [0.3, 0.4, 0.3]
//                     }}
//                     transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                     }}
//                 />

//                 <motion.div
//                     className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/15 to-pink-900/15 rounded-full filter blur-3xl"
//                     animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.2, 0.3, 0.2]
//                     }}
//                     transition={{
//                         duration: 10,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 2
//                     }}
//                 />

//                 <motion.div
//                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-full filter blur-3xl"
//                     animate={{
//                         scale: [1, 1.15, 1],
//                         opacity: [0.2, 0.25, 0.2]
//                     }}
//                     transition={{
//                         duration: 12,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 1
//                     }}
//                 />

//                 {/* Sparkles */}
//                 {sparkles.map((sparkle) => (
//                     <motion.div
//                         key={sparkle.id}
//                         className="absolute bg-white rounded-full"
//                         style={{
//                             left: `${sparkle.x}%`,
//                             top: `${sparkle.y}%`,
//                             width: `${sparkle.size}px`,
//                             height: `${sparkle.size}px`,
//                             boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.8)'
//                         }}
//                         animate={{
//                             opacity: [0, 1, 0],
//                             scale: [0.5, 1.2, 0.5]
//                         }}
//                         transition={{
//                             duration: (sparkle.duration * sparkle.duration),
//                             repeat: Infinity,
//                             repeatDelay: sparkle.delay,
//                             ease: "easeInOut"
//                         }}
//                     />
//                 ))}
//             </div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {Array.from({ length: 20 }).map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute bg-white rounded-full"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                             width: `${Math.random() * 2 + 1}px`,
//                             height: `${Math.random() * 2 + 1}px`,
//                             opacity: Math.random() * 0.5 + 0.1
//                         }}
//                         animate={{
//                             y: [0, Math.random() * 100 - 50],
//                             x: [0, Math.random() * 100 - 50],
//                             opacity: [0.2, 0.8, 0.2]
//                         }}
//                         transition={{
//                             duration: (Math.random() * Math.random() + 10),
//                             repeat: Infinity,
//                             repeatType: "reverse",
//                             ease: "linear"
//                         }}
//                     />
//                 ))}
//             </div>

//             {/* Content */}
//             {showContent && (
//                 <div className="relative z-10 text-center px-4">
//                     <motion.h1
//                         className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Hi👋, I'm
//                     </motion.h1>

//                     <motion.h1
//                         className="text-5xl md:text-7xl font-bold text-white mb-6"
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         Anjali Gupta
//                     </motion.h1>

//                     <motion.div
//                         className="text-2xl md:text-4xl font-medium text-gray-300 h-12 flex items-center justify-center"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                     >
//                         I am a{' '}
//                         <AnimatePresence mode="wait">
//                             <motion.span
//                                 key={currentRoleIndex}
//                                 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent min-w-[10px] ml-2"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 transition={{ duration: 0.6 }}
//                             >
//                                 {currentRole}
//                             </motion.span>
//                         </AnimatePresence>

//                         <motion.span
//                             className="ml-1 w-1 h-6 bg-purple-500"
//                             animate={{ opacity: showCursor ? 1 : 0 }}
//                             transition={{ duration: 0.3 }}
//                         />

//                     </motion.div>

    

//                     {/* Button Section */}
//                     <motion.div className="flex gap-6 justify-center items-center mt-8">
//                         {/* LinkedIn */}
//                         <motion.a
//                             href="https://www.linkedin.com/in/your-profile"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             whileHover={{ scale: 1.2 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_#8B5CF6]"
//                         >
//                             <div className="bg-[#0f172a] p-3 rounded-full text-blue-300 hover:text-white transition duration-300">
//                                 <Linkedin size={22} />
//                             </div>
//                         </motion.a>

//                         {/* GitHub */}
//                         <motion.a
//                             href="https://github.com/your-username"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             whileHover={{ scale: 1.2 }}
//                             whileTap={{ scale: 0.95 }}
//                             className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_#8B5CF6]"
//                         >
//                             <div className="bg-[#0f172a] p-3 rounded-full text-blue-300 hover:text-white transition duration-300">
//                                 <Github size={22} />
//                             </div>
//                         </motion.a>
//                     </motion.div>

//                     {/* Download Resume Button */}
//                     <motion.a
//                         href="/your-resume.pdf"
//                         download
//                         whileHover={{
//                             scale: 1.1,
//                             boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)", // #8B5CF6 (purple-500)
//                         }}
//                         whileTap={{ scale: 0.95 }}
//                         className="inline-block mt-6 text-black font-semibold bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-8 text-lg rounded-full shadow-[0_0_20px_#8B5CF6] hover:shadow-[0_0_35px_#8B5CF6] transition duration-300"
//                     >
//                         Download CV
//                     </motion.a>



                    




//                 </div>
//             )}


//         </div>
//     );
// };

// export default Home;
import { motion } from "framer-motion";
import { generateSparkles } from "../utils/generateSparkles";

const Home = () => {
  const sparkles = generateSparkles(40, 123); // Consistent seed

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black text-white">
      
      {/* Floating Gradient Orbs Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/15 to-pink-900/15 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-900/10 to-blue-900/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Sparkles Layer */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-white rounded-full z-10"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            boxShadow: '0 0 6px 1px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            repeatDelay: sparkle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-20 text-center px-4">
        <motion.h1
          className="text-5xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I’m Anjali 👋
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A Computer Science student passionate about Full Stack Development, DSA & Tech Communities.
        </motion.p>

        
      </div>

      
    </div>
  );
};

export default Home;
