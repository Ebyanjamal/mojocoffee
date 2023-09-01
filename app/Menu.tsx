import React from 'react'
import {motion} from 'framer-motion'

function Menu() {
  return (
    <div className= "h-screen flex bg-[rgb(138,112,82)] w-full max-[1800px] -z-0">
         <h3 className=' uppercase tracking-[20px] text-black text-2xl text-center justify-center'>Menu Items </h3>
    <div className='flex flex row space-x-5 items-center justify-between object-center'>
        {/* this will be the right side */}
    <div className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 pl-10 w-64'>
        <ul>
        <h1>Hot Drinks</h1>
            <li>Americano <span className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded- lg:p-4 ml-4 pl-10 '>$4.12</span> </li>
            <li>Cappacino</li>
            <li>latte</li>
            <li>breve latte</li>
            <li>Macchinato</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Red Eve</li>
            <li>Brewed Coffee</li>
            <li>Hot Chocalte</li>
            <li>Steamed Milk</li>
            <li>Hot Tea</li>
            <li>Expresso</li>
            <li>Caremal Macchiato</li>
            <li>Ethiopian Expresso</li>
        </ul>
    </div>

    {/* this will be for the left side */}

    <div  className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4'>
        <ul>
        <h1>Iced Drinks</h1>
            <li>Latte</li>
            <li>Chai</li>
            <li>Mocha</li>
            <li>Iced Tea</li>
            <li>Iced Coffee</li>
            <li>Americano</li>
        </ul>
    </div> 


    <div  className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4'>
        <ol>
        <h1>Blended Drinks</h1>
            <li>Frappe Mocha</li>
            <li>Frappe White Chocalte</li>
            <li>Frappe Carmael</li>
            <li>Vanilla</li>
            <li>Strawberry</li>
        </ol>
    </div>

    </div>
    

    </div>
  )
}

export default Menu



