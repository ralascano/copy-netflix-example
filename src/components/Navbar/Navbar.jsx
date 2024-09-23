import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import serch_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="logo.png" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={serch_icon} alt="serach_icon.svg" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon.svg" className='icons'/>
        <div className="navbar-profile">
            <img src={profile_img} alt="profile_img.svg" className='profile'/>
            <img src={caret_icon} alt="caret_icon.svg"/>    
            <div className="dropdown">
                <p>Sign Out of Netflix</p>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default Navbar
