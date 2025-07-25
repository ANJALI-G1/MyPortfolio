// components/Sparkle.jsx
import { motion } from 'framer-motion';

const Sparkle = ({ x, y, size, delay, duration }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-tr from-cyan-400 via-pink-500 to-purple-500 opacity-60 blur-sm"
    style={{
      top: `${y}%`,
      left: `${x}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ✅ Make this the default export
export default Sparkle;
