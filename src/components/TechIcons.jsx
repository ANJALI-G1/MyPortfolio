import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs, 
  SiGit ,
  SiExpress,
  SiGithub,
  SiFramer,
  SiPostman,
  SiCplusplus
} from 'react-icons/si';

const techStack = [
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#38BDF8' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiFramer, name: 'Framer Motion', color: '#ffffff', bg: '#121212' },
    { icon: SiMongodb, name: 'Mongodb', color: '#339931' },
    { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
    
  { icon: SiExpress, name: 'Express.js', color: '#ffffff' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiGithub, name: 'GitHub', color: '#181717' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  
];

export function TechIcons() {
  return (
    <motion.div 
      className="flex items-center flex-wrap justify-center space-x-6 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="group relative m-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.2 + index * 0.1, 
            duration: 0.5,
            type: "spring",
            stiffness: 200 
          }}
          whileHover={{ 
            scale: 1.2, 
            y: -5,
            transition: { duration: 0.6 }
          }}
        >
          <tech.icon 
            size={50} 
            style={{ color: tech.color }}
            className="filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 "
          />
          
          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
            style={{ 
              boxShadow: `0 4px 12px ${tech.color}20`
            }}
          >
            {tech.name}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
