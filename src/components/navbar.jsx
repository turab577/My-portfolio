import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import React from 'react'
import '../index.css'

const  Navbar = ()=>  {
    return (
      <nav className='mb-20 flex items-center justify-between overflow-x-hidden'>
        
       <div className='flex flex-shrink-0 items-center'>
         <img src={logo} alt="Not found" />
       </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/abu-turab-hassan-339840329/" target='_blank'><FaLinkedin/> </a>
        <a href="#"><FaGithub/></a>
        <a href="#"><FaSquareXTwitter/></a>
        <a href="#"><FaInstagram/></a>
        
        </div>

      </nav>
    )
  }


export default Navbar
