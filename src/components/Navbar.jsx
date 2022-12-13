import React, {useState} from 'react';
import {BiMenu, BiCommentCheck, BiMap, BiX, BiNews, BiSupport, BiHomeAlt, BiShoppingBag, BiUserVoice, BiDrink } from "react-icons/bi";


const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='bg-black max-w-[2640px] mx-auto flex justify-between items-center p-10'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-white hover:text-red-500'>
          <p className='ml-4'>Open</p>
          <BiMenu className='ml-4' size={40}/>
        </div>
      </div>
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed rounded-xl ring-2 ring-red-300 top-10 left-22 w-[290px] h-screen bg-gradient-to-b from-black via-red-900 to-red-700 z-10 duration-300 rounded-xl' : 'fixed left-[-100%] bg-black z-10' }>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer text-red-500 hover:text-red-300'>
          <p className='ml-4 mt-5'>Close</p>
          <BiX className='ml-4' size={40}/>
        </div>
 
   

        <nav>
            <ul className='flex flex-col p-14 text-gray-800'>
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiHomeAlt size={30} className='mr-4  text-red-400' />
                    <a href="/" className="mt-2 text-red-300 hover:text-red-200">Home</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiShoppingBag size={30} className='mr-4  text-red-400' />
                    <a href="/order" className="mt-2 text-red-300 hover:text-red-200">Order</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiNews size={30} className='mr-4  text-red-400' />
                    <a href="#Learn-More" className="mt-2 text-red-300 hover:text-red-200">About</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiDrink size={30} className='mr-4  text-red-400' />
                    <a href="#Learn-More" className="mt-2 text-red-300 hover:text-red-200">Selection</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiUserVoice size={30} className='mr-4  text-red-400' />
                    <a href="#Learn-More" className="mt-2 text-red-300 hover:text-red-200">Feedback</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiCommentCheck size={30} className='mr-4  text-red-400' />
                    <a href="https://linktr.ee/cindyswineandspirits" className="mt-2 text-red-300 hover:text-red-200">Connect</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiMap size={30} className='mr-4  text-red-400' />
                    <a href="https://goo.gl/maps/8Lpo34KA7kgbJgTj9" className="mt-2 text-red-300 hover:text-red-300">Location</a></li>
                      
                    <li className='text-1xl py-4 pb-5 flex text-white'>
                      <BiSupport size={30} className='mr-4  text-red-400' />
                    <a href="tel:(860) 399-0007" className="mt-2 text-red-400 hover:text-red-300">Call Us</a></li>

            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


