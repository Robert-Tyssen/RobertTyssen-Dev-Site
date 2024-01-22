import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Navbar = () => {

  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleNavOpen = () => { setDrawerVisible(true) };
  const handleNavClose = () => { setDrawerVisible(false) };

  return (
    <div className='fixed w-full h-20 shadow-lg z-[100]'>

      {/* Navbar for larger devices, with horizontal list items */}
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <h2>RT</h2>
        </Link>
        <ul className='hidden md:flex'>
          <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'>Home</li></Link>
          <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'>About</li></Link>
          <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'>Projects</li></Link>
          <Link href='/'><li className='ml-10 text-sm uppercase hover:border-b'>Work</li></Link>
        </ul>

        {/* Menu hamburger for small devices */}
        <div className='md:hidden cursor-pointer'>
          <AiOutlineMenu onClick={handleNavOpen} size={25} />
        </div>
      </div>


      {/* Nav drawer opened from hamburger button */}

      {/* Scrim behind the nav side sheet */}
      <div
        className={
          drawerVisible
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500'
            : ''
        }
      >
        {/* Nav side sheet */}
        <div
          className={
            drawerVisible
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className='flex w-full items-center justify-between'>
            {/* TODO - replace with logo image */}
            <Link href='/'>
              <h2>RT</h2>
            </Link>

            {/* Nav sheet close button */}
            <div className='cursor-pointer'>
              <AiOutlineClose
                onClick={handleNavClose}
                size={25}
              />
            </div>
          </div>

          <div className='py-4 flex flex-col'>

            <ul className='uppercase'>
              <Link href='/'><li className='py-4 text-sm'>Home</li></Link>
              <Link href='/'><li className='py-4 text-sm'>About</li></Link>
              <Link href='/'><li className='py-4 text-sm'>Projects</li></Link>
              <Link href='/'><li className='py-4 text-sm'>Work</li></Link>
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest'>Contact</p>
              <div className='flex items-center justify-between my-8 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <FaLinkedinIn size={25} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <FaGithub size={25} />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <AiOutlineMail size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;