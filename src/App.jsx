import React from "react"
import Navbar from "./components/Navbar"
import News from "./components/News"
import Calendar from "./components/Calendar"
import Reservation from "./components/Reservation"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Gamelist from "./components/Gamelist"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <img className="hero--image" src="/src/assets/hero.jpeg" />
      <News />
      <Calendar />
      <Reservation />
      <About />
      <Gallery />
      <Gamelist />
      <Footer />
    </div>
  )
}