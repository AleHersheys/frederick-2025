"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/components/CursorContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsData = [
  {
    id: 1,
    img: "Bel Air.PNG",
    title: "Bel Air",
    alt: "Bel Air",
    category: "Bodies",
  },
  {
    id: 2,
    img: "Bel View.PNG",
    title: "Bel View",
    alt: "Bel View",
    category: "Bodies",
  },
  {
    id: 3,
    img: "Body  cuartos con copas.PNG",
    title: "Body cuartos con copas",
    alt: "Body cuartos con copas",
    category: "Bodies",
  },
  {
    id: 4,
    img: "Body 3-4 sin copas.PNG",
    title: "Body ¾ sin copas",
    alt: "Body ¾ sin copas",
    category: "Bodies",
  },
  {
    id: 5,
    img: "Body corto con copas.PNG",
    title: "Body corto con copas",
    alt: "Body corto con copas",
    category: "Bodies",
  },
  {
    id: 6,
    img: "BODY CORTO SIN COPAS.PNG",
    title: "Body corto sin copas",
    alt: "Body corto sin copas",
    category: "Bodies",
  },
  {
    id: 7,
    img: "Body Largo con copas.PNG",
    title: "Body largo con copas",
    alt: "Body largo con copas",
    category: "Bodies",
  },
  {
    id: 8,
    img: "Body Largo sin copas.PNG",
    title: "Body largo sin copas",
    alt: "Body largo sin copas",
    category: "Bodies",
  },
  {
    id: 9,
    img: "Body Line Maxi.PNG",
    title: "Body Line Maxi",
    alt: "Body Line Maxi",
    category: "Bodies",
  },
  {
    id: 10,
    img: "Body Line Ultra.PNG",
    title: "Body Line Ultra",
    alt: "Body Line Ultra",
    category: "Bodies",
  },
  {
    id: 11,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 12,
    img: "Body Support Men.PNG",
    title: "Body Support Men",
    alt: "Body Support Men",
    category: "Bodies",
  },
  {
    id: 13,
    img: "Bra encaje 2.1.PNG",
    title: "Bra Encaje 2.1",
    alt: "Bra Encaje 2.1",
    category: "Brasier",
  },
  {
    id: 14,
    img: "BRA ENCAJE 2.3.PNG",
    title: "Bra Encaje 2.3",
    alt: "Bra Encaje 2.3",
    category: "Brasier",
  },
  {
    id: 15,
    img: "Bra Fantastick.PNG",
    title: "Bra Fantastick",
    alt: "Bra Fantastick",
    category: "Brasier",
  },
  {
    id: 16,
    img: "Bra unico 2.1.PNG",
    title: "Bra único 2.1",
    alt: "Bra único 2.1",
    category: "Brasier",
  },
  {
    id: 17,
    img: "Bra Unico negro.PNG",
    title: "Bra único negro",
    alt: "Bra único negro",
    category: "Brasier",
  },
  {
    id: 18,
    img: "Chaleco Maxi Plus.PNG",
    title: "Chaleco Maxi Plus",
    alt: "Chaleco Maxi Plus",
    category: "Chaleco",
  },
  {
    id: 19,
    img: "Confort Bra.PNG",
    title: "Confort Bra",
    alt: "Confort Bra",
    category: "Brasier",
  },
  {
    id: 20,
    img: "Confort Light.PNG",
    title: "Confort Light",
    alt: "Confort Light",
    category: "Brasier",
  },
  {
    id: 21,
    img: "Europower Light.PNG",
    title: "Europower Light",
    alt: "Europower Light",
    category: "Brasier",
  },
  {
    id: 22,
    img: "Fantasia Fit.PNG",
    title: "Fantasia Fit",
    alt: "Fantasia Fit",
    category: "Bodies",
  },
  {
    id: 23,
    img: "Fashion Fit cerrada.PNG",
    title: "Fashion Fit cerrada",
    alt: "Fashion Fit cerrada",
    category: "Bodies",
  },
  {
    id: 24,
    img: "Fashion Fit con Bicorchete.PNG",
    title: "Fashion Fit con Bicorchete",
    alt: "Fashion Fit con Bicorchete",
    category: "Bodies",
  },
  {
    id: 25,
    img: "Manguitas.PNG",
    title: "Manguitas",
    alt: "Manguitas",
    category: "Bodies",
  },
  {
    id: 26,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 27,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 28,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 29,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 30,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 31,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 32,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 33,
    img: "Body Line.PNG",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
];

const page = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  React.useEffect(() => {
    AOS.init({
      offset: 100, // Distancia desde el viewport para iniciar la animación
      duration: 800, // Duración de la animación de AOS
      easing: "ease-in-out", // Suavidad de la animación
      delay: 1000, // Retraso global para dar paso a las animaciones de framer-motion
      once: true, // Ejecutar las animaciones una sola vez
    });
    AOS.refresh();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0,
        duration: 2,
      }}
      className="min-h-screen overflow-x-hidden pt-48 pb-10 hide-scrollbar"
    >
      <div>
        {/* Sección Header del Catálogo */}
        <div className="container mx-auto">
          <h3 className="h3 mb-8 text-center xl:text-left">Catálogo</h3>
          <p className="lead max-w-[600px] mx-auto xl:mx-0">
            Revisa nuestro catálogo actualizado.
          </p>
        </div>
        {/* Sección Body con las Cards */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.id * 100}
                className="space-y-3 cursor-pointer"
              >
                <img
                  src={data.img}
                  alt={data.alt}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm">{data.category}</p>
                  <p className="text-sm">{data.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;