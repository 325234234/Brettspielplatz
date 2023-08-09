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
 
  return (    
    <section className="section--reservation">
      <h1 className="section--reservation--title">Reservierungen</h1>
      <p>Hier könnt ihr Reservierungen anfragen. Gebt neben eurem <span className="fett">Namen</span> und eurer <span className="fett">Email</span> auch den gewünschten <span className="fett">Termin</span> (Tag und Zeit)
        sowie die <span className="fett">Anzahl an Personen</span> an. Reservierungen für Samstage sind leider nicht mehr möglich, und jede bestätigte Reservierung muss angezahlt werden.
        Die Details hierzu erfahrt ihr in der Bestätigungsmail von uns. Gebt uns bitte ein oder zwei Tage Zeit, um auf eure Anfrage zu antworten.</p>
      {requestSend ? <h2>Anfrage verschickt!</h2> :        
        <form className="section--reservation--form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className="section--reservation--input" type="text" name="name" placeholder="Peter Lustig"/>
        <label>Email</label>
        <input className="section--reservation--input" type="email" name="email" placeholder="69sexypeter69@hotmail.com"/>
        <label>Anfrage</label>
        <textarea className="section--reservation--textarea" name="message" placeholder="Datum, Urzeit und Anzahl an Personen :)"/>
        <input className="section--reservation--button" type="submit" value="Abschicken" />
      </form>}
    </section>
  )
}