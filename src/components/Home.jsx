import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const Home = ({ id }) => {
    const roles = [' Student', ' Learner', ' FullStack Developer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentRole, setCurrentRole] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);
    const [showContent, setShowContent] = useState(false);

    // Generate static twinkling stars
    const stars = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.8 + 0.3,
        delay: Math.random() * 20,
        duration: (Math.random() * Math.random() + 4),
        opacity: [0.2, 0.8, 0.2] // Simple fade in/out
    }));

    // Initial content animation
    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Typing effect
    // useEffect(() => {
    //     if (!showContent) return;

    //     if (isTyping) {
    //         if (currentTextIndex < roles[currentRoleIndex].length) {
    //             const timeout = setTimeout(() => {
    //                 setCurrentRole(roles[currentRoleIndex].substring(0, currentTextIndex + 1));
    //                 setCurrentTextIndex(currentTextIndex + 1);
    //             }, 100);

    //             return () => clearTimeout(timeout);
    //         } else {
    //             setIsTyping(false);
    //             setTimeout(() => setIsTyping(true), 2000);
    //         }
    //     } else {
    //         if (currentTextIndex > 0) {
    //             const timeout = setTimeout(() => {
    //                 setCurrentRole(roles[currentRoleIndex].substring(0, currentTextIndex - 1));
    //                 setCurrentTextIndex(currentTextIndex - 1);
    //             }, 50);

    //             return () => clearTimeout(timeout);
    //         } else {
    //             setIsTyping(true);
    //             setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    //         }
    //     }
    // }, [currentTextIndex, currentRoleIndex, isTyping, showContent]);

     useEffect(() => {
        if (!showContent) return;

        if (isTyping) {
            if (currentTextIndex < roles[currentRoleIndex].length) {
                const timeout = setTimeout(() => {
                    setCurrentRole(prev => 
                        roles[currentRoleIndex].substring(0, currentTextIndex + 1)
                    );
                    setCurrentTextIndex(prev => prev + 1);
                }, 100);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 2000);
                return () => clearTimeout(timeout);
            }
        } else {
            if (currentTextIndex > 0) {
                const timeout = setTimeout(() => {
                    setCurrentRole(prev => 
                        prev.substring(0, prev.length - 1)
                    );
                    setCurrentTextIndex(prev => prev - 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                setCurrentRoleIndex(prev => (prev + 1) % roles.length);
                setIsTyping(true);
            }
        }
    }, [currentTextIndex, currentRoleIndex, isTyping, showContent]);
    // Cursor blink effect
    useEffect(() => {
        if (!showContent) return;

        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, [showContent]);

    return (
        <div id={ id } className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black">
            {/* Static Starry Background */}
            <div className="absolute inset-0 overflow-hidden">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: star.opacity,
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            repeatDelay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            {showContent && (
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        className="text-2xl md:text-3xl font-semibold text-gray-300 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi👋, I'm
                    </motion.h1>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Anjali Gupta
                    </motion.h1>

                    <motion.div
  className="text-2xl md:text-4xl font-medium text-gray-300 h-12 flex items-center justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  I am a{' '}
  <AnimatePresence mode="wait">
    <motion.span
      key={currentRoleIndex}
      className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent min-w-[10px] ml-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {currentRole}
      <motion.span
        className="ml-1 w-1 h-6 bg-purple-500 inline-block"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  </AnimatePresence>
</motion.div>

                    {/* Button Section */}
                    <motion.div className="flex gap-6 justify-center items-center mt-8">
                        <motion.a
                            href="https://www.linkedin.com/in/anjali-gupta-189863292/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_#8B5CF6]"
                        >
                            <div className="bg-[#0f172a] p-3 rounded-full text-blue-300 hover:text-white transition duration-300">
                                <Linkedin size={22} />
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://github.com/ANJALI-G1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_15px_#8B5CF6]"
                        >
                            <div className="bg-[#0f172a] p-3 rounded-full text-blue-300 hover:text-white transition duration-300">
                                <Github size={22} />
                            </div>
                        </motion.a>
                    </motion.div>

                    <motion.a
                        href="https://drive.google.com/file/d/1H93DBjEYkCu8Fv7iT29slVY640ifi5oU/view?usp=sharing"
                        download
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-6 text-black font-semibold bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-8 text-lg rounded-full shadow-[0_0_20px_#8B5CF6] hover:shadow-[0_0_35px_#8B5CF6] transition duration-300"
                    >
                        Download CV
                    </motion.a>
                </div>
            )}
        </div>
    );
};

export default Home;