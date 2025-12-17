"use client";
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CursorContext } from '@/components/CursorContext';
import aboutImg from "@/assets/aboutImg.webp";
import StatsItem from '@/components/StatsItem';

const page = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { 
        delay: 2 
      },
    }}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className='w-full h-full flex flex-col xl:flex-row items-center justify-between'>
          {/* Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className='relative w-[384px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0'
          >
            <Image src={aboutImg} fill quality={100} alt='aboutImg' className='object-contain'/>
          </motion.div>
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0'
          >
            <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>¡Salud, Belleza y Confort en cada prenda!</h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>Frederick es una empresa líder mexicana en lencería, que desde 1980 se ha dedicado a la atención de la mujer principalmente a través del tiempo, sin embargo, ahora también ofrece prendas para el hombre, con diseño innovador y materiales de alta calidad en la fabricación de sus prendas, buscando siempre la comodidad, belleza y también remodelando su figura y cuidando su salud, donde la ciencia y el diseño se conjuntan. <br />
            <br />Su función remodeladora y moldeadora, fabricadas en telas de Powernet, mezcla patentada de Spandex, lycra y naylon, para una mayor compresión, permite una fácil traspiración de la piel.</p>
            {/* Items */}
            <div className='grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0'>
              <div>
                <StatsItem countNum={30} countText={"+"} text={"años en el mercado costarricense."}/>
              </div>
              <div>
                <StatsItem countNum={40} countText={"k+"} text={"clientes satisfechos."}/>
              </div>
              <div>
                <StatsItem countNum={100} countText={"%"} text={"productos de gran calidad."}/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default page;