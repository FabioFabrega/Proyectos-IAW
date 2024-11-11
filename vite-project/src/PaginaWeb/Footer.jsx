import React from 'react'
import './footer.module.css'
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer({RRSS}) {
  return (
    <footer>
        <a href="https://www.instagram.com/explore/locations/115645025115521/ies-cura-valera/"><InstagramIcon/> Instagram</a>
        <a href="https://www.facebook.com/p/IesCura-Valera-100064751317201/"><FacebookIcon/>Facebook</a>
        <a href="https://iescuravalera.es" > <img src="/logo.png" width="50"/> IES Cura Valera </a>
    </footer>
  )
}

export default Footer

export default Footer