import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
        <Link to="/skills/:nombre">MySkills</Link>
    </nav>
  )
}

export default Navbar

