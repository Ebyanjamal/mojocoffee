import React from 'react'
import Image from 'next/image'
function Contact() {
  return (
    <div className='cover h-screen flex bg-transparent h-screen flex relative overflow-hidden flex-col test-lft md:flex-row max-w-full px-10 bg-back justify-evenly mx-auto items-center'>
      <div className='space-y-10'>
            <h4 className='text-4xl font-semibold text-center text-white font-space '>Enjoy the Fresh and Bitter taste of <span className='underline decoration-8 decoration-[rgb(250,87,24)] dark:decoration-[rgb(250,87,24)]'> authentic </span>coffee.{" "}
            </h4>

    <div className='space-y-10'> 
        <div className='flex items-center space-x-5 justify-center text-white'>
                <p className='text-2xl' > <span className='bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2'>Contact</span> (720) 387-8943</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
                <p className='text-2xl text-white bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2' >Business Hours</p>
                <div className='text-[white] font-mono font-semibold'>
                    <ul>
                    <li> <span className='text-4xl font-space'>Mon</span>: 9:00 AM - 6:00PM</li>
                    <li> <span className='text-4xl font-space'>Tue</span>: 9:00 AM - 7:30PM</li>
                    <li> <span className='text-4xl font-space'>Wed</span>: 9:00 AM - 7:30PM</li>
                    <li> <span className='text-4xl font-space'>Thu</span>: 9:00 AM - 7:30PM</li>
                    <li> <span className='text-4xl font-space'>Fri</span>: 9:00 AM - 7:30PM</li>
                    <li> <span className='text-4xl font-space'>Sat</span>: 9:00 AM - 7:30PM</li>
                    <li> <span className='text-4xl font-space'>Sun</span>: 9:00 AM - 7:30PM</li>
                    </ul>
                </div>
         </div>

        <div className='flex items center space-x-5 justify-center text-white'>
                <p className=' text-xl'> <span className='bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2'> Location </span>15256 East Hampden Avenue Aurora, CO 80014</p>
        </div>

         </div>
        </div>
    </div>
  )
}

export default Contact
 