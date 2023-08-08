import { HashRouter, Routes, Route } from "react-router-dom"
import News from "./components/News"
import Calendar from "./components/Calendar"
import Reservations from "./components/Reservations"
import About from "./components/About"
import Gamelist from "./components/Spiele"
import Layout from "./components/Layout"

export default function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<News />} />
            <Route path="kalender" element={<Calendar />} />
            <Route path="reservierungen" element={<Reservations />} />
            <Route path="about" element={<About />} />
            <Route path="spiele" element={<Gamelist />} />
          </Route>
      </Routes>
    </HashRouter>
  )
}