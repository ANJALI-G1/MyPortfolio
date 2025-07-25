import { motion, useScroll } from 'motion/react';
import './App.css';
import { Cursor } from './pages/Cursor';
import { Header } from './components/Header';
import Home from './components/Home';
import About from './components/About';
export default function Rotate() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <div className=' bg-black min-h-screen'>
       <Header/>
       <Home/>
       <About/>
       
    </div>
   
    {/* <motion.div
    style={{
      scaleX:scrollYProgress
    }}
    className='bg-red-500 w-full h-3 fixed top-10 '
    >
      
    </motion.div>

    <motion.div
      animate={{ rotate: 360 ,scale:2,transition:{duration:8}}}
  
      className="box"
    />

    <motion.div 
    className='box'
    whileHover={{scale:1.2}}
    whileTap={{scale:0.2}}
    />
    <motion.h1 
    animate={{x:100, y:100 ,rotate:360}}
    transition={{duration:5 ,delay:5}}
    >Hi this is Anjali</motion.h1>
    <Cursor/>

    <motion.div
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 ,duration:100}}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
  transition={{duration:5}}
  
  className='box'
/>
    <motion.div
    className='box'
    initial={{
      x:100,
      y:100
    }}
    animate={{
      x:1000,
      y:1000,
      rotateX:360
    }}
    transition={{
      duration:5,
      delay:1
    }}
    >

    </motion.div> */}
    </>

  
  );
}
