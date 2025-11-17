"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "@/components/CursorContext";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductsData = [
  {
    id: 1,
    img: "Bra encaje 2.1.webp",
    title: "Bra Encaje",
    alt: "Bra Encaje",
    category: "Brasieres",
  },
  {
    id: 2,
    img: "Bra Fantastick.webp",
    title: "Bra Fantastick",
    alt: "Bra Fantastick",
    category: "Brasieres",
  },
  {
    id: 3,
    img: "Bra Unico negro.webp",
    title: "Bra único",
    alt: "Bra único",
    category: "Brasieres",
  },
  {
    id: 4,
    img: "Confort Bra.webp",
    title: "Confort Bra",
    alt: "Confort Bra",
    category: "Brasieres",
  },
  {
    id: 5,
    img: "Confort Light.webp",
    title: "Confort Light",
    alt: "Confort Light",
    category: "Brasieres",
  },
  {
    id: 6,
    img: "SleeP.webp",
    title: "Sleep Care",
    alt: "Sleep Care",
    category: "Brasieres",
  },
  {
    id: 7,
    img: "Body  cuartos con copas.webp",
    title: "Body ¾ con copas",
    alt: "Body ¾ con copas",
    category: "Bodies",
  },
  {
    id: 8,
    img: "Body 3-4 sin copas.webp",
    title: "Body ¾ sin copas",
    alt: "Body ¾ sin copas",
    category: "Bodies",
  },
  {
    id: 9,
    img: "Body Beautifull.webp",
    title: "Body Beautiful",
    alt: "Body Beautiful",
    category: "Bodies",
  },
  {
    id: 10,
    img: "Body corto con copas.webp",
    title: "Body corto con copas",
    alt: "Body corto con copas",
    category: "Bodies",
  },
  {
    id: 11,
    img: "BODY CORTO SIN COPAS.webp",
    title: "Body corto sin copas",
    alt: "Body corto sin copas",
    category: "Bodies",
  },
  {
    id: 12,
    img: "Body Largo con copas.webp",
    title: "Body largo con copas",
    alt: "Body largo con copas",
    category: "Bodies",
  },
  {
    id: 13,
    img: "Body Largo sin copas.webp",
    title: "Body largo sin copas",
    alt: "Body largo sin copas",
    category: "Bodies",
  },
  {
    id: 14,
    img: "Body Line Maxi.webp",
    title: "Body Line Maxi",
    alt: "Body Line Maxi",
    category: "Bodies",
  },
  {
    id: 15,
    img: "Body Line Ultra.webp",
    title: "Body Line Ultra",
    alt: "Body Line Ultra",
    category: "Bodies",
  },
  {
    id: 16,
    img: "Body Line.webp",
    title: "Body Line",
    alt: "Body Line",
    category: "Bodies",
  },
  {
    id: 17,
    img: "Body Skirt.webp",
    title: "Body Skirt",
    alt: "Body Skirt",
    category: "Bodies",
  },
  {
    id: 18,
    img: "Body Strap.webp",
    title: "Body Strap",
    alt: "Body Strap",
    category: "Bodies",
  },
  {
    id: 19,
    img: "Bel Air.webp",
    title: "Bel Air",
    alt: "Bel Air",
    category: "Panties",
  },
  {
    id: 20,
    img: "Bel View.webp",
    title: "Bel View",
    alt: "Bel View",
    category: "Panties",
  },
  {
    id: 21,
    img: "Body Support Men.webp",
    title: "Body Support Men",
    alt: "Body Support Men",
    category: "Caballeros",
  },
  {
    id: 22,
    img: "Chaleco Maxi Plus.webp",
    title: "Chaleco Maxi Plus",
    alt: "Chaleco Maxi Plus",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 23,
    img: "Europower Light.webp",
    title: "Europower Light",
    alt: "Europower Light",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 24,
    img: "Fantasia Fit.webp",
    title: "Fantasía Fit",
    alt: "Fantasia Fit",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 25,
    img: "Fashion Fit cerrada.webp",
    title: "Fashion Fit cerrada",
    alt: "Fashion Fit cerrada",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 26,
    img: "Fashion Fit con Bicorchete.webp",
    title: "Fashion Fit con Bicorchete",
    alt: "Fashion Fit con Bicorchete",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 27,
    img: "Manguitas.webp",
    title: "Manguitas",
    alt: "Manguitas",
    category: "Chalecos/Cinturillas",
  },
  {
    id: 28,
    img: "Motherly Band.webp",
    title: "Motherly Band",
    alt: "Motherly Band",
    category: "Maternales",
  },
  {
    id: 29,
    img: "Panty Activa.webp",
    title: "Panty Activa",
    alt: "Panty Activa",
    category: "Panties",
  },
  {
    id: 30,
    img: "Panty Siluette.webp",
    title: "Panty Siluette",
    alt: "Panty Siluette",
    category: "Panties",
  },
  {
    id: 31,
    img: "Panty Support.webp",
    title: "Panty Support",
    alt: "Panty Support",
    category: "Panties",
  },
  {
    id: 32,
    img: "Panty T-Shirt Blanca.webp",
    title: "Panty T-Shirt",
    alt: "Panty T-Shirt",
    category: "Panties",
  },
  {
    id: 33,
    img: "T- Sport Men.webp",
    title: "T-Sport Men",
    alt: "T-Sport Men",
    category: "Caballeros",
  },
  {
    id: 34,
    img: "Va Bien Plus.webp",
    title: "Va Bien Plus",
    alt: "Va Bien Plus",
    category: "Panties",
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

  const [selectedCategory, setSelectedCategory] = React.useState("Todos");

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
        {/* Botones de filtrado centrados */}
        <div className="container mx-auto flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Bodies",
            "Brasieres",
            "Caballeros",
            "Chalecos/Cinturillas",
            "Maternales",
            "Panties",
            "Todos",
          ].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05, transition: { duration: 0.05, ease: "linear" } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.05, ease: "linear" } }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`text-sm w-[160px] px-3 py-1 border rounded text-center transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-white border-accent"
                  : "bg-secondary text-primary border-accent"
              } hover:bg-primary hover:text-secondary hover:border-secondary`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="container mx-auto text-center mb-4">
          <p className="text-lg">
            Productos disponibles: <strong>{ProductsData.filter((product) => selectedCategory === "Todos" ? true : product.category === selectedCategory).length}</strong>
          </p>
        </div>
        {/* Sección Body con las Cards */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductsData.filter((product) => selectedCategory === "Todos" ? true : product.category === selectedCategory).map((data) => (
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.05, ease: "linear" } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.05, ease: "linear" } }}                      
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                key={data.id}
                data-aos=""
                className="space-y-3 cursor-pointer"
              >
                <img
                  src={data.img}
                  alt={data.alt}
                  className="h-[220px] w-[150px] sm:h-[260px] sm:w-[180px] lg:h-[300px] lg:w-[200px] object-cover rounded-md card-border"
                />
                <div className="h-[80px] flex flex-col justify-center items-center">
                  <h3 className="font-semibold text-center break-words max-w-[150px]">{data.title}</h3>
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