import React from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {

    const activeStyle = {
        color: "#2A4359"
    }

    function burgerMenuClick(event) {
        // show/hide the nav menu
        document.getElementById("burger--bars").classList.toggle("change");
        document.getElementById("burger--links").classList.toggle("change");
        document.getElementById("burger--background").classList.toggle("change-bg");

        // // scroll down to the correct segment while leaving enough room for the nav bar
        // event.preventDefault()
        // if(event && event.target.tagName === "A") {
        //     window.scrollTo(0, document.querySelector(event.target.hash).offsetTop-50);
        // }        
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
                        <li><NavLink to="/kontakt" onClick={burgerMenuClick} style={({ isActive }) => 
                            isActive ? activeStyle : null}>Kontakt</NavLink></li>
                        <li><NavLink to="/spiele" onClick={burgerMenuClick} style={({ isActive }) => 
                            isActive ? activeStyle : null}>Spiele</NavLink></li>
                    </ul>
                </div> 
            </div>
            <div className="burger--background" id="burger--background"></div>
        </nav>
    )
}