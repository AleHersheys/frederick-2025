import React, { useContext } from 'react';
import Link from 'next/link';
import { CursorContext } from './CursorContext';
import { usePathname } from 'next/navigation';

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
        <div className='container mx-auto flex gap-8'>
          {links.map((link, index) => {
            return (
              <Link href={link.href} key={index} className={`${pathname === link.href && "border-b-2 border-accent"} uppercase`}>
                {link.name}
              </Link>
            );
          })}
        </div>
    </nav>
  );
}

export default Nav;