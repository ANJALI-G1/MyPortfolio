import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-12 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Branding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Anjali Gupta
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer & Open Source Enthusiast</p>
          </motion.div>

          {/* Middle - Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 md:mb-0"
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-3 text-center md:text-left">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Right side - Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-auto"
          >
            <h4 className="text-lg font-semibold text-blue-400 mb-3 text-center md:text-left">Connect With Me</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a 
                href="https://github.com/ANJALI-G1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-700 hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:border-transparent"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/anjali-gupta-189863292/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-700 hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:border-transparent"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
             
              <a 
                href="mailto:anjaligupta3406@gmail.com" 
                className="text-gray-400 hover:text-white p-2 rounded-full border border-gray-700 hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 hover:border-transparent"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom - Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Anjali Gupta. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;