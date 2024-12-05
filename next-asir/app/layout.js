'use client'
import "./globals.css";
import { useState } from "react";
import { getDictionary } from "@/componentes/diccionario";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "@/componentes/Nav";

function RootLayout({ setGeneration }) {
  let [idioma, setIdioma] = useState('en');
  let dict = getDictionary(idioma);

  const changeLanguage = (lang) => {
    setIdioma(lang);
  }
  return (
    <html lang="en">
      <body>
        <header>
          <Nav setGeneration={setGeneration}/></header>

      </body>
    </html>
  );
}
export default RootLayout