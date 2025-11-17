"use client";
import React, { useContext } from 'react';
import { delay, motion } from 'framer-motion';
import { CursorContext } from '@/components/CursorContext';
import Image from 'next/image';
import homeImg from "@/assets/homeImg.webp";
import { FaStore } from "react-icons/fa";
import Link from 'next/link';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.section
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { 
        delay: 2 
      },
    }}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row items-center h-full'>
          {/* Texto */}
          <div 
            initial={{ opacity: 0, y: -100 }} 
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className='w-full text-center xl:text-left xl:w-[580px] pt-[120px]'>
            <h1 className='h1 mb-6 text-5xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Bienvenidos a <br />Frederick
            </h1>
            <p className='lead max-w-xl mx-auto'>¡Porque cada una se merece lo mejor!</p>
            <motion.div 
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className='flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0'
            >
              <button 
                className='btn btn-lg'
                onClick={() => window.open('https://api.whatsapp.com/send?phone=50684493847&text=Buenas%2C%20estoy%20interesado%20en%20agendar%20una%20cita%20en%20Prendas%20Frederick.')}
              >
                Agendar cita
              </button>
              <Link href="/catalogo">
                <div className='flex items-center gap-4 cursor-pointer'>
                  <button className='relative w-[58px] h-[58px] bg-white rounded-full flex items-center justify-center shadow-2xl shadow-accent'>
                    <FaStore width={36} height={36}/>
                  </button>
                  <span className='text-lg font-primary'>Ver catálogo</span>
                </div>
              </Link>
            </motion.div>
          </div>
          {/* Imagen */}
          <div className='flex-1'>
            <motion.div 
              initial={{ opacity: 0, bottom: '-100%' }} 
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2, duration: 1.2, ease: "easeInOut" },
              }}
              className='hidden xl:flex fixed bottom-0'
            >
              <Image src={homeImg} width={600} height={650} quality={100} alt='homeImg'/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;