import { HashRouter, Routes, Route } from "react-router-dom"
import News from "./components/News/News"
import Events from "./components/Events/Events"
import Reservations from "./components/Reservations/Reservations"
import About from "./components/About/About"
import Games from "./components/Games/Games"
import Layout from "./components/Layout"

export default function App() {
  return (
    //HashRouter to allow refreshs/direct links to subpages while the page is hosted on netlify (BrowserRouter on live)
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<News />} />
            <Route path="events" element={<Events />} />
            <Route path="reservierungen" element={<Reservations />} />
            <Route path="about" element={<About />} />
            <Route path="spiele" element={<Games />} />
          </Route>
      </Routes>
    </HashRouter>
  )
}