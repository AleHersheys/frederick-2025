import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Socials = ({containerStyles}) => {
  return (
    <ul className={`${containerStyles}`}>
        <li>
            <Link href="https://www.facebook.com/share/14qe5z6ozvh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebook/>
            </Link>
        </li>
        <li>
            <Link href="https://www.instagram.com/frederickbs.cr/" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </Link>
        </li>
        <li>
            <Link href="https://api.whatsapp.com/message/UPU6GZZZDQRYD1" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp/>
            </Link>
        </li>
    </ul>
  );
}

export default Socials;