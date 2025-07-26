import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navItems = ['about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.getElementById(item);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 w-full bg-transparent z-50 flex justify-between items-center px-6 py-4 border-b border-[#ffffff10] backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <motion.a 
        href="#home"
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        AG
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 relative">
        {navItems.map((item) => (
          <div key={item} className="relative">
            <a 
              href={`#${item}`}
              className={`text-gray-300 hover:text-white transition-colors capitalize ${
                activeSection === item ? 'text-white' : ''
              }`}
            >
              {item}
            </a>
            {activeSection === item && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"
                layoutId="activeIndicator"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </div>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 p-2 text-gray-300 hover:text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm pt-24 px-6 z-40 flex flex-col items-end"
          >
            {navItems.map((item) => (
              <motion.div 
                key={item}
                className="relative"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={`#${item}`}
                  className={`text-2xl py-4 block ${activeSection === item ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
                {activeSection === item && (
                  <motion.div
                    className="absolute bottom-3 right-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"
                    layoutId="mobileActiveIndicator"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;