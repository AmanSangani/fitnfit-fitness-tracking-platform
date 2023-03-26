import React from 'react'
import '../../styles/header.css'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

  return (
    <header className="header">
        <div className='logo'>
            Fit N Fit
        </div>

        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Schedule</a>
            <a href="#">Classes</a>
            <a href="#" className='btn'>Register</a>
        </nav>

        <FontAwesomeIcon  icon={faBars} size="2xl" id='menu-btn' /> 
   </header>
  )
}

export default Header