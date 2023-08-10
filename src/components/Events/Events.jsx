import "./events.css"
import events from '../../assets/events.jpg'

export default function Events() {
  return (
    <section className="section">
      <h1 className="title supersonic">Events</h1>
      <div className="tile shadow">
        <p>Hier findet ihr eine Auflistung unserer regelmäßig stattfindenden Events. Bei allen sind Neulinge gerne willkommen. 
        </p>
        <img src={events} className="section--events--calendar"/>
      </div>
    </section>
  )
}