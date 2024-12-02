'use client'
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import { Suspense, useState } from "react";
import Link from "next/link";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";
import Tarjeta from "./Cartas/Card";


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
        <header>
          <nav>
            <h5><Link href="/">{dict.home}</Link> - 
            <Link href="/Pokemon" className="principal">Generaciones</Link>
              <Link href="/Cartas/pokemon1/Tarjetas" className="enlaces">Generacion 1</Link>
              <Link href="/Cartas/pokemon2/Tarjetas" className="enlaces">Generacion 2</Link>
              <Link href="/Cartas/pokemon3/Tarjetas" className="enlaces">Generacion 3</Link> - 
            <button onClick={() => changeLanguage('es')} className="botton">
	<Image src="/Españita.jpeg" alt="Español" width={24} height={24} />
</button>
<button onClick={() => changeLanguage('en')} className="botton">
	<Image src="/uk.png" alt="Inglés" width={24} height={24} />
</button>
<button onClick={() => changeLanguage('it')} className="botton">
	<Image src="/italiano.png" alt="italiano" width={24} height={24} />
  </button>
          </h5></nav></header>
          <main>
          <h1>{dict.title}</h1>
          <h2>{dict.description}</h2>
          <Tarjeta/>
          </main>
      </body>
    </html>
  );
}