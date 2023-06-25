import React from "react"

export default function Navbar() {

    function burgerMenuClick(event) {
        document.getElementById("burger--bars").classList.toggle("change");
        document.getElementById("burger--links").classList.toggle("change");
        document.getElementById("burger--background").classList.toggle("change-bg");


        console.log(event.target.hash)
        if(event && event.target.tagName === "A") {
            // window.scrollTo(0, document.getElementById(event.target.hash).offsetTop-50);
        }        
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
                        <li><a href="#section--news" onClick={burgerMenuClick}>Neuigkeiten</a></li>
                        <li><a href="#" onClick={burgerMenuClick}>Kalender</a></li>
                        <li><a href="#" onClick={burgerMenuClick}>Reservierungen</a></li>
                        <li><a href="#" onClick={burgerMenuClick}>Spieleliste</a></li>
                        <li><a href="#" onClick={burgerMenuClick}>Über uns</a></li>
                        <li><a href="#" onClick={burgerMenuClick}>Kontakt</a></li>
                    </ul>
                </div> 
            </div>
            <div className="burger--background" id="burger--background"></div>
        </nav>
    )
}