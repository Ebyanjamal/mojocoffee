import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

function header() {
  return (
    <header className='items-start justify-between max-w-7xl mx-auto z-20 xl:items-center space-x-4'>
      <div className=' flex flex-row items-start justify-between pt-8 p-6 font-space text-white text-xl'>
    <Link href='#Menu'> 
      <h1>Menu</h1>
    </Link>



      <div>Contact</div>
      <div>Home</div>
      </div>
    </header>
  )
}

export default header
