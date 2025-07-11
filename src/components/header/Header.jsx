"use client"
import Image from 'next/image';
import { IoMenu } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import logo from '../../../public/logo.png'; 

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className='hidden lg:flex bg-[#ffff]'>
      <div className='container mx-auto flex justify-center gap-20 py-2'>
        <span>
          <a href="#" className='hover:text-[#3db7ef] font-[500] duration-350'>speedyhiring.info@gmail.com</a>
        </span>
        <span>
          <p className='hover:text-[#3db7ef] font-[500] duration-350 cursor-pointer'>Mon-Sat: 08:00 - 17:00</p>
        </span>
        <span>
          <p className='hover:text-[#3db7ef] font-[500] duration-350 cursor-pointer'>+16155383883</p>
        </span>
      </div>
    </div>
    <div className='hidden lg:flex bg-[#3db7ef]'>
      <div className='container mx-auto py-4'>
        <Image src={logo} alt='logo bor' className='w-[110px] h-[110px] text-center mx-auto'/>
      </div>
    </div>
    <section className='sticky top-0 z-100 shadow-sm bg-white md:bg-[#172246]'>
      <div className='container mx-auto py-4'>
      <nav className='hidden md:flex justify-center gap-8 py-1.5'>
        {/* <Link href='/' className={`${"/" === path ? "active" : "" }`}></Link> */}
        <a href="#home" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4 duration-325'>Home</a>
        <p className='text-[#ffff] opacity-40'>|</p>
        <a href="#about" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4'>About Us</a>
        <p className='text-[#ffff] opacity-40'>|</p>
        <a href="#services" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4'>Our Services</a>
        <p className='text-[#ffff] opacity-40'>|</p>
        <a href="#why" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4'>Why Us</a>
        <p className='text-[#ffff] opacity-40'>|</p>
        <a href="#news" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4'>News</a> 
        <p className='text-[#ffff] opacity-40'>|</p>
        <a href="#contact" className='text-[#ffff] font-[500] hover:underline hover:underline-offset-24 hover:decoration-blue-500 hover:decoration-4'>Contacts</a>
      </nav>
      <div className='flex items-center justify-between px-1'>
        <div className='text-gray-800 font-bold text-3xl md:hidden cursor-pointer' onClick={() => setShowModal(!showModal) }>{showModal  ? <FaArrowLeftLong /> : <IoMenu/>} </div>
        <h2 className='md:hidden text-3xl text-gray-800 font-bold'>Town Cargo</h2>
        <p className='md:hidden text-[#ffff]'>.</p>
      </div>
      </div>
      {showModal && (
        <div className='fixed inset-0 top-[68px] bg-opacity-50 flex flex-col z-100 w-[280px] '>
          <div className='bg-[#3db7ef] w-full py-5 pl-2'>
            <Image src={logo} alt='logo' className='w-[78px] h-[78px] ' />
          </div>
          <div className='flex flex-col p-6 min-h-screen bg-[#172246] '>
            <a href="#home" className='text-[#ffff] font-[500] w-[200px] py-3'>Home</a>
            <a href="#about" className='text-[#ffff] font-[500] w-[200px] py-3'>About Us</a>
            <a href="#service" className='text-[#ffff] font-[500] w-[200px] py-3'>Our Services</a>
            <a href="#why" className='text-[#ffff] font-[500] w-[200px] py-3'>Why Us</a>
            <a href="#news" className='text-[#ffff] font-[500] w-[200px] py-3'>News</a>
            <a href="#contact" className='text-[#ffff] font-[500] w-[200px] py-3'>Contact Us</a>
          </div>
        </div>
      )}
    </section>
    </>
  )
}

export default Header