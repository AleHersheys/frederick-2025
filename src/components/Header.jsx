"use client";
import React, { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/frederick-logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();

  // Si estamos en la ruta "/catalogo", agregamos la clase para el borde inferior
  const lowerBarClass =
    pathname === "/catalogo"
      ? "xl:border-b xl:border-[#CEA39C]"
      : ""; // Sin borde en otras rutas

  // Rutas en las que queremos que la barra inferior tenga fondo sólido
  const pagesWithSolidBg = ["/", "/catalogo", "/sobre-nosotros", "/contactanos"];
  const lowerBg = pagesWithSolidBg.includes(pathname) ? "bg-[#F2DFCE]" : "bg-transparent";

  // Funciones para confirmar llamada y envío de correo
  const handlePhoneClick = () => {
    if (window.confirm("¿Desea realizar una llamada a +506 8449-3847?")) {
      window.location.href = "tel:+50684493847";
    }
  };

  const handleMailClick = () => {
    if (window.confirm("¿Desea enviar un correo a frederickbs.cr@gmail.com?")) {
      window.location.href = "mailto:frederickbs.cr@gmail.com";
    }
  };

  return (
    <header className="fixed z-40 w-full">
      {/* Top Bar: fondo fijo #CEA39C */}
      <div className="bg-[#CEA39C] xl:h-[50px] py-4 xl:py-0">
        <div className="container mx-auto h-full">
          <div
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between xl:items-center text-white xl:pt-4"
          >
            {/* Teléfono y Correo */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handlePhoneClick}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <FaPhoneAlt />
                <span>+506 8449-3847</span>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleMailClick}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <IoMdMail />
                <span>frederickbs.cr@gmail.com</span>
              </div>
            </div>

            {/* Redes sociales */}
            <motion.div
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex gap-6 text-white items-center"
            >
              <Socials containerStyles="flex gap-6" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lower Bar: logo y navegación */}
      <div
        className={`${lowerBg} ${lowerBarClass} container mx-auto flex items-center justify-between px-6 xl:py-4`}
      >
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href={"/"}>
            <Image src={Logo} width={120} height={44} priority alt="Frederick Logo" />
          </Link>
        </motion.div>
        <div className="xl:hidden cursor-pointer" onClick={() => setMobileNav(!mobileNav)}>
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;