import React from 'react'
import './Footer.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div class="footer">
    <a href='https://www.instagram.com/iescuravalerarevista/?hl=es'><FaInstagram />Instagram</a>
    <a href='https://www.facebook.com/people/Ies-Cura-Valera/pfbid02QkvRECuKtQm7DJuHR4PPDkDezUbzMnknbXnw4wR4zqhoXX8xeX25xMT2oUgs7vJwl/?hc_ref=ARQfeXP21l_XL8qMwa2DinrAS6-3ugUiip6-LIyLIcDC_d59RHzG89LEEuAeeyG5gZo' class="footer">
    <FaFacebook />Facebook</a>
    <a href="https://iescuravalera.es" ><img src="./logo.png" width="50"/> IES Cura Valera </a>
    </div>
  )
}
