"use client";
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '@/components/CursorContext';
import Form from '@/components/Form';
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const page = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleMailClick = () => {
    if (window.confirm("¿Desea enviar un correo a frederickbs.cr@gmail.com?")) {
      window.location.href = "mailto:frederickbs.cr@gmail.com";
    }
  };

  const handlePhoneClick = (phoneNumber) => {
    if (window.confirm(`¿Desea llamar al número ${phoneNumber}?`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl-pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          {/* Texto */}
          <motion.div className='flex-1 flex flex-col justify-center'>
            <h3 className='h3 mb-8 text-center xl:text-left'>Contáctanos</h3>
            {/* Items */}
            <div className='flex flex-col items-center xl:items-start gap-12'>
              {/* Dirección */}
              <div className='flex items-start gap-4'>
                {/* Icono */}
                <div className='relative w-[36px] h-[36px] flex items-center justify-center'>
                  <FaMapMarkerAlt />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Dirección</h4>
                  <motion.div
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                  >
                    <a href="https://maps.app.goo.gl/Yk7XbL8CdZ59qHSk7" target="_blank" rel="noopener noreferrer" className='leading-relaxed cursor-pointer'>San José, Moravia, San Vicente, <br />frente a la entrada principal del estadio Pipilo Umaña.</a>
                  </motion.div>
                </div>
              </div>
              {/* Fin Dirección */}
              {/* Horario */}
              <div className='flex items-start gap-4'>
                {/* Icono */}
                <div className='relative w-[36px] h-[36px] flex items-center justify-center'>
                  <FaCalendarAlt />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Horario</h4>
                  <p className='leading-relaxed'>Lunes a Viernes de 9:00 a.m. a 5:00 p.m. Se atiende con cita previa.</p>
                </div>
              </div>
              {/* Fin Horario */}
              {/* Correo electrónico */}
              <div className='flex items-start gap-4'>
                {/* Icono */}
                <div className='relative w-[36px] h-[36px] flex items-center justify-center'>
                  <IoMail />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Correo electrónico</h4>
                  <motion.div
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                  >
                    <p className='leading-relaxed cursor-pointer' onClick={handleMailClick}>Administración: frederickbs.cr@gmail.com</p>
                  </motion.div>
                </div>
              </div>
              {/* Fin Correo electrónico */}
              {/* Teléfonos */}
              <div className='flex items-start gap-4'>
                {/* Icono */}
                <div className='relative w-[36px] h-[36px] flex items-center justify-center'>
                  <FaPhoneAlt />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Teléfonos</h4>
                  <motion.div 
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    className='flex flex-col gap-1 cursor-pointer'
                  >
                    <span onClick={() => handlePhoneClick('+506 8449-3847')}> Nro. de administración: +506 8382-5708</span>
                  </motion.div>
                </div>
              </div>
              {/* Fin Teléfonos */}
            </div>
          </motion.div>
          {/* Formulario */}
          <div className='flex-1'>
            <div className='bg-[#F0CFBC] w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0'>
              <h4 className='h4 mb-8 text-center'>Escríbenos cualquier duda o sugerencia.</h4>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default page;
