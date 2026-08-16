import React from 'react'
import './Navbar.css'
import menu_icon from '../../Assets/menu.png'
import logo from '../../Assets/logo.png'
import search_icon from '../../Assets/search.png'


const Navbar = () => {
  return(
   <nav className= 'flex-div'>
    <div className= 'nav-left flex-div'>
        <img className= 'menu-icon' src={menu_icon} alt=""/>
        <img className= 'logo'src={logo} alt=""/>
    </div>

    <div className = "nav-middle flex-div">
        <input type= "text" placeholder="Search"/>
        <img className = 'search-icon' src={search_icon} alt=""/>
    </div>    
   </nav>
  )
}
export default App