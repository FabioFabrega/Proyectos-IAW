import React from 'react'
import './Footer.module.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div><a href='https://react-icons.github.io/react-icons/search/#q=Whatsapp'><FaWhatsapp /></a>
    <a href='https://react-icons.github.io/react-icons/search/#q=instagram'><FaInstagram /></a>
    <a href='https://react-icons.github.io/react-icons/search/#q=facebook'><FaFacebook /></a></div>
  )
}
