import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navItems = ['About', 'Projects', 'Contact'];

  return (
    <motion.div 
      className="fixed top-0 bg-transparent z-50 w-full flex justify-between items-center px-6 py-4 font-medium border-b border-[#ffffff10] backdrop-blur-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {/* Logo with animation */}
      <motion.div 
        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        AG
      </motion.div>

      {/* Navigation */}
      <div className="flex gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.span
              className={`block cursor-pointer text-gray-300 hover:text-white transition-colors ${
                hoveredItem === index ? 'text-white' : ''
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.span>
            
            {/* Animated underline */}
            {hoveredItem === index && (
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};