"use client";
import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Socials from "@/components/Socials";

const links = [
  {
    href: "/",
    name: "Inicio",
  },
  {
    href: "/sobre-nosotros",
    name: "Sobre nosotros",
  },
  {
    href: "/catalogo",
    name: "Catálogo",
  },
  {
    href: "/contactanos",
    name: "Contáctanos",
  },
];

const MobileNav = ({ setMobileNav }) => {
  const pathname = usePathname();
  return (
    <nav className='relative flex flex-col justify-between h-full p-8'>
      <div className='cursor-pointer text-accent' onClick={() => setMobileNav(false)}>
        <IoCloseOutline className='text-4xl'/>
      </div>
      <ul className='flex flex-col gap-10 text-white text-xl'>
        {links.map((link, index) => {
          return (
            <Link 
              href={link.href} 
              key={index} 
              className={`${pathname === link.href && "border-b-2 border-accent"} uppercase max-w-max mx-auto`}
              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center"/>
    </nav>
  );
}

export default MobileNav;