'use client'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./globals.css";
import Image from "next/image";
import { Suspense, useState } from "react";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Pokemon } from '@/componentes/Pokemon';

export default function RootLayout({ children }) {
  let [idioma,setIdioma]=useState('en');
    let dict=getDictionary(idioma);
    
    const changeLanguage = (lang) => {
      setIdioma(lang);
    }
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <h5><a href="/">{dict.home}</a> - 
            <NavDropdown title="Generaciones" >
              <NavDropdown.Item href="/Cartas/pokemon1/">{dict.Gen} 1</NavDropdown.Item>
              <NavDropdown.Item href="/Cartas/pokemon2">{dict.Gen} 2</NavDropdown.Item>
              <NavDropdown.Item href="/Cartas/pokemon3">{dict.Gen} 3</NavDropdown.Item>
            </NavDropdown> - 
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
          <Pokemon/>
          </main>
      </body>
    </html>
  );
}