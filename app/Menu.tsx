import React from 'react'
import {motion} from 'framer-motion'

function Menu() {
  return (
    <div className= "h-screen flex bg-[rgb(138,112,82)] w-full max-[1800px] -z-0 ">
         {/* <button className=' uppercase font-header text-black text-4xl p-10  px-2 text-white bg-[rgb(171,151,124)]'>Menu Items </button> */}
    <div className='flex flex row space-x-5 items-center justify-between object-center'>
        {/* this will be the right side */}
    <div className=' flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 pl-10 w-64 border'>
        <ul>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Hot Drinks</h1>

            <li>Americano =  <span className='text-xl font-mono hover:text-dark '>$4.12</span> </li>
            <li>Cappacino =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>latte = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>breve latte = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Macchinato = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Mocha = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Chai = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Red Eve = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Brewed Coffee = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Hot Chocalte = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Steamed Milk = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Hot Tea = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Expresso = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Caremal Macchiato = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Ethiopian Expresso = <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
        </ul>
    </div>

    {/* this will be for the left side */}

    <div className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 border'>
        <ul>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Iced Drinks</h1>

            <li>Latte =  <span className='text-xl font-mono hover:text-dark'>$4.12</span>  </li>
            <li>Chai =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Mocha =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Iced Tea =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Iced Coffee =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li>Americano =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
        </ul>
    </div> 


    <div className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 border' >
        <ol>
        <h1 className= "mb-8 text-sm font-extrabold text-gray-200 dark:text-white md:text-2xl lg:text-6xl border-black">Blended Drinks</h1>

            <li> Frappe Mocha =  <span className='text-xl font-mono hover:text-dark'>$4.12</span>  </li>
            <li> Frappe White Chocalte =  <span className='text-xl font-mono hover:text-dark'>$4.12</span>  </li>
            <li> Frappe Carmael =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li> Vanilla  =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
            <li> Strawberry  =  <span className='text-xl font-mono hover:text-dark'>$4.12</span> </li>
        </ol>

    </div>
    <div className='overflow:hidden flex relative px-0 md:px-10 p-4 col-span-3 shadow-xl shadow-white-100 rounded-xl lg:p-4 ml-4 border'>
        <ul className='flex space-x-5'>
        <li>12oz. 
            <br /> 
                <ol>$3.85</ol>
                <ol>$4.25</ol>
                <ol>$3.85</ol>
                <ol>$2.75</ol>
                <ol>$2.85</ol> 
                <ol>$3.50</ol>
            </li>
        <li className='font-mono'>16oz.
            <br />
            <ol>$4.20</ol>
            <ol>$4.55</ol>
            <ol>$4.25</ol>
            <ol>$3.25</ol>
            <ol>$3.25</ol>
            <ol>$4.25</ol>
            </li>
        <li className='font-mono '>20oz.
            <br />
            <ol>$4.75</ol>
            <ol>$4.55</ol>
            <ol>$4.25</ol>
            <ol>$3.25</ol>
            <ol>$3.25</ol>
            <ol>$4.25</ol>
            </li>
        </ul>
    </div>

    </div>
    

    </div>
  )
}

export default Menu

