import React, {useState} from 'react';
import {BiMenu, BiCommentCheck, BiMap, BiX, BiNews, BiSupport } from "react-icons/bi";


const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='bg-black max-w-[2640px] mx-auto flex justify-between items-center p-10'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-red-500'>
          <p className='ml-5'>Open</p>
          <BiMenu className='ml-4' size={50}/>
        </div>
      </div>
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed rounded-xl ring-2 ring-red-300 top-10 left-22 w-[290px] h-screen bg-gradient-to-b from-black to-red-500 z-10 duration-300 rounded-xl' : 'fixed left-[-100%] bg-black z-10' }>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer text-red-500'>
          <p className='ml-5 mt-5'>Close</p>
          <BiX className='ml-4' size={50}/>
        </div>
 
   

        <nav>
            <ul className='flex flex-col p-14 text-gray-800'>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="/">Home</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="/order">Order</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="#Learn-More">About</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="#Learn-More">Menu</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="#Learn-More">Feedback</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiCommentCheck size={30} className='mr-4  text-red-300' />
                    <a href="https://linktr.ee/cindyswineandspirits">Connect</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiMap size={30} className='mr-4  text-red-300' />
                    <a href="https://goo.gl/maps/8Lpo34KA7kgbJgTj9">Location</a></li>
                    <li className='text-2xl py-4 pb-5 flex text-white'><BiSupport size={30} className='mr-4  text-red-300' />
                    <a href="tel:(860) 399-0007">Call Us</a></li>

            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


