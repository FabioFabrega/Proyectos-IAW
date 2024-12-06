'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "@/componentes/Nav";

function RootLayout({ setGeneration }) {
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