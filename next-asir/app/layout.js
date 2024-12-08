'use client'
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import "./globals.css";
import Image from "next/image";
import { useState } from "react";
import { getDictionary } from "@/componentes/diccionario";
import  "bootstrap/dist/css/bootstrap.min.css";


export default function RootLayout({ children }) {
  let [idioma,setIdioma]=useState('en');
    let dict=getDictionary(idioma);
    
    const changeLanguage = (lang) => {
      setIdioma(lang);
    }
  return (
    <html lang="en">
      <body >
        <header>
        <nav>
                <h5>
                    <Link href="/pokemon"><button type="button" className="btn btn-secondary" >
                        {dict.home}
                    </button></Link> -
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {dict.Gens}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                           <Dropdown.Item><Link href="/pokemon1">
                                <button className="dropdown-item">
                                    {dict.Gen} 1
                                </button></Link>
                            </Dropdown.Item>
                            <Dropdown.Item><Link href="/pokemon2">
                                <button className="dropdown-item">
                                    {dict.Gen} 2
                                </button></Link>
                            </Dropdown.Item>
                            <Dropdown.Item><Link href="/pokemon3">
                                <button className="dropdown-item" onClick={() => setGeneration(3)}>
                                    {dict.Gen} 3
                                </button></Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> -
                    <button onClick={() => changeLanguage('es')} className="button">
                        <Image src="/Españita.jpeg" alt="Español" width={24} height={24} />
                    </button>
                    <button onClick={() => changeLanguage('en')} className="button">
                        <Image src="/uk.png" alt="Inglés" width={24} height={24} />
                    </button>
                    <button onClick={() => changeLanguage('it')} className="button">
                        <Image src="/italiano.png" alt="italiano" width={24} height={24} />
                    </button>
                </h5>
            </nav></header>
          <main>
          <h1>{dict.title}</h1>
          <h2>{dict.description}</h2>
          {children}</main>
      </body>
    </html>
  );
}