import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
    <div className='nav-bar'>
      <Image src="/logo.png" alt='logo' width={100} height={100}  />
      <Link href="#services">Services</Link>
      <Link href="#about-us">About Us</Link>
      <Link href="#gallery">Gallery</Link>
      <button className='appt-request-btn'>Request an Appointment</button>
    </div>
    </div>
  )
}

export default NavBar