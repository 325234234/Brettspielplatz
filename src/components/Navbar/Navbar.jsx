import "./navbar.css"

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)


  //style the active link differently
  const activeStyle = {
      color: "#2A4359",
      textShadow: "none"      
  }

  // show/hide the nav menu
  function burgerMenuClick() {
    document.getElementById("burger--bars").classList.toggle("change")
    document.getElementById("burger--background").classList.toggle("change-bg")

    // the links should vanish immediately if the menu is to be closed, but appear with a small delay if the menu is to be opened
    if(isOpen) {
      document.getElementById("burger--links").classList.toggle("change")
    } else {      
      setTimeout(() => {
        document.getElementById("burger--links").classList.toggle("change")
      }, 100)
    }    
    setOpen(prevState => !prevState)
  }

  return (
    <nav>
      <h1 className="logo--text"><span className="logo--accent">Brettspielplatz</span></h1>
      <div id="burger">
        <div id="burger--bars" onClick={burgerMenuClick}>
          <div id="burger--bar1" className="burger--bar"></div>
          <div id="burger--bar2" className="burger--bar"></div>
          <div id="burger--bar3" className="burger--bar"></div>
        </div>
        <div className="burger--links" id="burger--links">
          <ul>
            <li><NavLink to="/" onClick={burgerMenuClick} style={({ isActive }) => 
                isActive ? activeStyle : null}>Neuigkeiten</NavLink></li>
            <li><NavLink to="/kalender" onClick={burgerMenuClick} style={({ isActive }) => 
                isActive ? activeStyle : null}>Kalender</NavLink></li>
            <li><NavLink to="/reservierungen" onClick={burgerMenuClick} style={({ isActive }) => 
                isActive ? activeStyle : null}>Reservierungen</NavLink></li>
            <li><NavLink to="/about" onClick={burgerMenuClick} style={({ isActive }) => 
                isActive ? activeStyle : null}>Über uns</NavLink></li>
            <li><NavLink to="/spiele" onClick={burgerMenuClick} style={({ isActive }) => 
                isActive ? activeStyle : null}>Spiele</NavLink></li>
          </ul>
        </div> 
      </div>
      <div className="burger--background" id="burger--background"></div>
    </nav>
  )
}