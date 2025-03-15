"use client";
import React, { useContext, useState } from 'react';
import { CursorContext } from './CursorContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/assets/frederick-logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);

  // Función para confirmar llamada:
  const handlePhoneClick = () => {
    if (window.confirm("¿Desea realizar una llamada a +506 8449-3847?")) {
      window.location.href = "tel:+506 844-93847";
    }
  };

  // Función para confirmar envío de correo:
  const handleMailClick = () => {
    if (window.confirm("¿Desea enviar un correo a frederickbs.cr@gmail.com?")) {
      window.location.href = "mailto:frederickbs.cr@gmail.com";
    }
  };

  return (
    <header className='pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent'>
      {/* Barra de navegación */}
      <div className='bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0'>
        <div className="container mx-auto h-full">
          <div className='flex items-center justify-between h-full'>
            {/* Teléfono y Correo electrónico */}
            <div className='flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 w-full justify-between xl:justify-normal'>
              {/* Teléfono */}
              <motion.div 
                onMouseEnter={mouseEnterHandler} 
                onMouseLeave={mouseLeaveHandler}
                className='flex items-center gap-2 text-white cursor-pointer' 
                onClick={handlePhoneClick}
              >
                <FaPhoneAlt/>
                <span>+506 8449-3847</span>
              </motion.div>
              {/* Correo electrónico */}
              <motion.div 
                onMouseEnter={mouseEnterHandler} 
                onMouseLeave={mouseLeaveHandler}
                className='flex items-center gap-2 text-white cursor-pointer' 
                onClick={handleMailClick}
              >
                <IoMdMail/>
                <span>frederickbs.cr@gmail.com</span>
              </motion.div>
            </div>
            {/* Redes Sociales */}
            <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:block'>
              <Socials containerStyles="flex gap-6 text-white"/>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='container mx-auto flex items-center justify-between px-6'>
        {/* Logo Frederick */}
        <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <Link href={"/"}>
            <Image src={Logo} width={120} height={44} priority alt='Frederick Logo'/>
          </Link>
        </motion.div>
        {/* Menú Hamburguesa */}
        <div 
          className='xl:hidden cursor-pointer' 
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className='text-3xl text-primary' />
        </div>
        {/* Navegación móvil */}
        <motion.div 
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className='fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50'
        >
          <MobileNav setMobileNav={setMobileNav}/>
        </motion.div>
        {/* Navegación desktop */}
        <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:block'>
          <Nav/>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;