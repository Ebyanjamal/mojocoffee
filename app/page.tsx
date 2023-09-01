import Image from 'next/image'
import Menu from './Menu'
import Contact from './Contact'
import {motion} from 'framer-motion'



export default function Homepage() {
  return(
    <div>
  <div
  className=' back h-screen items-center justify-center text-center overflow-hidden'>
      <h1 
      className=' text-white text-[12vw] font-header'>Mojo Coffee</h1>
    </div>
    <Menu/>
      <section id="contact" className='snap-start'>
       <Contact/>
      </section>
    </div>
  )
}
 