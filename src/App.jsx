import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import News from "./components/News"
import Calendar from "./components/Calendar"
import Reservation from "./components/Reservation"
import About from "./components/About"
import Kontakt from "./components/Kontakt"
import Gamelist from "./components/Spiele"
import Layout from "./components/Layout"
import heroImage from "./assets/hero.jpeg"

export default function App() {
  return (
    // <div className="container">  
      <BrowserRouter>
        <Routes>
            {/* <img className="hero--image" src={heroImage} />   */}
            <Route path="/" element={<Layout />}>
              <Route index element={<News />} />
              <Route path="kalender" element={<Calendar />} />
              <Route path="reservierungen" element={<Reservation />} />
              <Route path="about" element={<About />} />
              <Route path="kontakt" element={<Kontakt />} />
              <Route path="spiele" element={<Gamelist />} />
            </Route>
        </Routes>
      </BrowserRouter>
    // </div>
  )
}