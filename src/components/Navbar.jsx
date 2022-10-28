import React, {useState} from 'react';
import {BiCaretLeftCircle, BiCartAlt, BiCommentCheck, BiHomeAlt, BiMap, BiMenuAltLeft, BiNews, BiSupport } from "react-icons/bi";


const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='bg-black max-w-[2640px] mx-auto flex justify-between items-center p-10'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer text-red-300'>
          <BiMenuAltLeft size={50} />
        </div>
      </div>
      

      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[330px] h-screen bg-gradient-to-b from-black to-red-500 z-10 duration-300 rounded-xl' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-300' }>
        <BiCaretLeftCircle
            onClick={()=> setNav(!nav)}
          size={40}
          className='absolute right-6 top-4 cursor-pointer  text-red-300'/>

        <nav>
            <ul className='flex flex-col p-14 text-gray-800'>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiHomeAlt size={30} className='mr-4 text-red-300' />
                    <a href="#Home">Home</a></li>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiNews size={30} className='mr-4  text-red-300' />
                    <a href="#Learn-More">Learn More</a></li>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiCartAlt size={30} className='mr-4  text-red-300' />
                    <a href="https://drizly.com/cindys-wine-and-spirits/s4712">Make An Order</a></li>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiCommentCheck size={30} className='mr-4  text-red-300' />
                    <a href="">Connect</a></li>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiMap size={30} className='mr-4  text-red-300' />
                    <a href="https://goo.gl/maps/8Lpo34KA7kgbJgTj9">Directions</a></li>
                <li className='text-2xl py-4 pb-5 flex text-white'><BiSupport size={30} className='mr-4  text-red-300' />
                    <a href="#Contact">Contact</a></li>

            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;


