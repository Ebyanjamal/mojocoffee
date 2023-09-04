"use client"; 
import Image from 'next/image'
import Menu from './Menu'
import Contact from './Contact'
import {motion, AnimatePresence} from 'framer-motion'



export default function Homepage() {
  return(
    <div>
  <div
  className=' back h-screen items-center justify-center text-center overflow-hidden snap-center no-scrollbar '>
      <motion.h1 
           initial={{
               x:-500,
               opacity: 0,
               scale: 2
           }}
           animate={{
                x:0,
               opacity:1,
               scale:1
           }}
   
           transition={{
               duration:1.4,
           }}
      className=' text-white text-[12vw] font-header pt-32'>Mojo Coffee</motion.h1>
    </div>
    <AnimatePresence mode='wait'> 
      <Menu/>
      <section id="contact" className='snap-start'>
       <Contact/>
      </section>
      </AnimatePresence>
    </div>
  )
}
 