import "./reservations.css"
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Reservations() {
  const [requestSend, setRequestSend] = useState(false)
  const form = useRef();

  const SERVICE_ID = "service_oaix6v8"
  const TEMPLATE_ID = "template_keuf6xv"
  const PUBLIC_KEY = "T-yI4A91waFtj-88g"

  async function sendEmail(event) {
    event.preventDefault()
 
    const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    if(response) {
      console.log(response)
      setRequestSend(true)
    }
  }

  const todaysDate = new Date()
  const twoDaysAhead = new Date()
  const sixtyDaysAhead = new Date()
  twoDaysAhead.setDate(todaysDate.getDate() + 2)
  sixtyDaysAhead.setDate(todaysDate.getDate() + 60)
  
  return (    
    <section className="content maxWidth1200">
      <h1 className="title supersonic">Reservierungen</h1>
      <div className="tile shadow">
        <p className="justified">
          Hier könnt ihr Reservierungen anfragen. Gebt hierfür einfach euren <span className="supersonic">Namen</span>,
          eure <span className="supersonic">Email</span>, eine <span className="supersonic">Telefonnummer</span>,
          den gewünschten <span className="supersonic">Tag</span> (mindestens zwei Tage in der Zukunft),
          die gewünschte <span className="supersonic">Uhrzeit</span> sowie die geplante <span className="supersonic">Anzahl an Personen</span> an.
          Solltet ihr für mehr als zwölf Personen reservieren wollen, dann schreibt uns bitte noch eine kurze Nachricht in der ihr die
          genaue Personenzahl und eventuelle zusätzliche Vorhaben mitteilt. Wir melden uns innerhalb ein oder zwei Tage bei euch.
        </p>
        {requestSend ? <h2 className="title supersonic">Anfrage verschickt!</h2> :        
          <form className="section--reservation--form" ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input className="section--reservation--input" type="text" name="name" id="name" placeholder="Peter Lustig" required />
            <label htmlFor="email">Email</label>
            <input className="section--reservation--input" type="email" name="email" id="email" placeholder="sexypeter69@hotmail.com" required />
            <label htmlFor="telefon">Telefon</label>
            <input className="section--reservation--input" type="text" name="telefon" id="telefon" placeholder="0123 4567890" required />
            <label htmlFor="date">Tag</label>
            <input
              type="date"
              name="date"
              id="date"
              defaultValue={todaysDate}
              min={twoDaysAhead.toISOString().split("T")[0]}
              max={sixtyDaysAhead.toISOString().split("T")[0]}
              required
            />
            <label htmlFor="time">Uhrzeit</label>
            <input type="time" name="time" id="time" defaultValue="14:00" min="14:00" max="23:00" step="900" required />
            <label htmlFor="personen">Personen</label>
            <select name="personen" required>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="12+">12+</option>
            </select>
            <label htmlFor="message">Sonstiges</label>
            <textarea className="section--reservation--textarea" name="message" id="message" placeholder="Sonstige Informationen :)" />

            <input className="section--reservation--button supersonic outline" type="submit" value="Abschicken" />
          </form>}
      </div>
    </section>
  )
}