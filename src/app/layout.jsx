import { Marcellus, Montserrat} from "next/font/google";
import "./globals.css";
import React from 'react';
import Header from "@/components/Header";
import CursorProvider from "@/components/CursorContext";
import Transition from "@/components/Transition";
import PageTransition from "@/components/PageTransition";

const marcellus = Marcellus ({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const montserrat = Montserrat ({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Frederick Costa Rica",
  description: "La presente página web pertenece a Frederickbs de Costa Rica, provincia de San José, distrito San Vicente, con correo electrónico frederickbs.cr@gmail.com. Y tiene por objeto facilitar al público en general, los servicios que presta y las características de sus productos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <head>
        <link rel="shortcut icon" href="/frederick-icon.ico" />
        <link rel="apple-touch-icon" href="/frederick-icon.ico" />
        <link rel="icon" href="/frederick-icon.ico" sizes="any" type="image/x-icon" />
      </head>
      <body className={`${marcellus.variable} ${montserrat.variable} overflow-x-hidden`}>
        <CursorProvider>
          <Transition/>
          <Header/>
          <PageTransition>
            {children}
          </PageTransition>
        </CursorProvider>
      </body>
    </html>
  );
}
