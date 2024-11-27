'use client'
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Footer from "@/componentes/Footer";
import { Suspense, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./Andalucia/page";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Página prinicpal de IAW",
//   description: "Curso 2024/25",
//   icons: {
//     icon: '/buscar.png'
//   }
// };



export default function RootLayout({ children }) {
  let [idioma,setIdioma]=useState('en');
    let dict=getDictionary(idioma);
    
    const changeLanguage = (lang) => {
      setIdioma(lang);
    }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header><Image src="/header.jpg" width="500" height="400" alt="Cabecera de la página"></Image></header>
          <nav>
            <Link href="/">{dict.home}</Link> - 
            <Link href="/Pokemon">Pokemon React</Link> - 
            <Link href="/esperando">{dict.esperando}</Link>
            <button onClick={() => changeLanguage('es')} className="botton">
	<Image src="/Españita.jpeg" alt="Español" width={24} height={24} />
</button>
<button onClick={() => changeLanguage('en')} className="botton">
	<Image src="/uk.png" alt="Inglés" width={24} height={24} />
</button>
          </nav>
          <main>
          <h1>{dict.title}</h1>
          <h2>{dict.description}</h2>
          {children}</main>
        <Carousel/>
        <Footer/>
      </body>
    </html>
  );
}