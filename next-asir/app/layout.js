'use client'
import "./globals.css";
import Image from "next/image";
import { Suspense, useState } from "react";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";

function RootLayout({ setGeneration }) {
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
            <h5> - 
            <button type="button" className="btn btn-secondary" onClick={() => setGeneration(0)}>{dict.home}</button> -
        <button
          className="btn btn-secondary dropdown-toggle"
          href="#"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >{dict.Gens}</button>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <button
              className="dropdown-item"
              onClick={() => setGeneration(1)}
            >
              {dict.Gen} 1
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setGeneration(2)}
            >
              {dict.Gen} 2
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => setGeneration(3)}
            >
              {dict.Gen} 3
            </button>
          </li>
        </ul> - 
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
          </main>
      </body>
    </html>
  );
}
export default RootLayout