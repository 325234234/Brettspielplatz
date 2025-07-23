import "./reservations.css"
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Reservations() {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      telephone: "",
      date: "",
      time: "",
      people: "",
      misc: ""
    }
  )
  const [requestSend, setRequestSend] = useState(false)
  const form = useRef();

  const SERVICE_ID = "service_oaix6v8"
  const TEMPLATE_ID = "template_keuf6xv"
  const PUBLIC_KEY = "T-yI4A91waFtj-88g"

  function handleSubmit(event) {
    event.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    setRequestSend(true)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
  }

  const todaysDate = new Date()
  const minDaysAhead = new Date()
  minDaysAhead.setDate(todaysDate.getDate() + 4)
  const maxDaysAhead = new Date()
  maxDaysAhead.setDate(todaysDate.getDate() + 90)

  return (
    <section className="content maxWidth1200">
      <h1 className="title supersonic">Reservierungen</h1>
      <div className="tile shadow">
        <p className="justified">
          Hier könnt ihr Reservierungen anfragen (erst ab vier Personen!). Gebt hierfür einfach alle benötigten Informationen an.
          Solltet ihr für <span className="supersonic">mehr als zwölf Personen</span> oder <span className="supersonic">außerhalb unserer regulären Öffnungszeiten</span> reservieren
          wollen, dann schreibt uns bitte noch eine kurze Nachricht in der ihr uns die genaue Personenzahl
          und eure Pläne mitteilt. Wir melden uns innerhalb von ein oder zwei Tagen bei euch.<br/>
          Solltet ihr eure Reservierung absagen müssen, dann bitte <b>mindestens 24 Stunden im Voraus!</b>
        </p>
        <form className="section--reservation--form" ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="section--reservation--input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Peter Lustig"
            required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="section--reservation--input"
            value={formData.email}
            onChange={handleChange}
            placeholder="peter@lustig.de"
            required />

          <label htmlFor="telephone">Telefon</label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            className="section--reservation--input"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="030 / 55522236"
            required />
          <div>
            Aus organisatorischen Gründen nehmen wir Reservierungen nur <span className="supersonic">mindestens 4 Tage</span> im
            Voraus und für <span className="supersonic">4 Personen oder mehr</span> an. 
          </div>
          <div className="section--reservation--layoutContainer">
            <div className="inputContainer">
              <label htmlFor="date">Tag</label>
              <input
                type="date"
                name="date"
                id="date"
                className="section--reservation--date section--reservation--input"
                value={formData.date}
                onChange={handleChange}
                min={minDaysAhead.toISOString().split("T")[0]}
                max={maxDaysAhead.toISOString().split("T")[0]}
                required
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="time">Uhrzeit</label>
              <input
                type="time"
                name="time"
                id="time"
                className="section--reservation--time section--reservation--input"
                value={formData.time}
                onChange={handleChange}
                min="10:00"
                max="23:00"
                step="900"
                required
              />
            </div>

            <div className="inputContainer">
              <label htmlFor="people">Personen</label>
              <select
                name="people"
                id="people"
                className="section--reservation--people section--reservation--input"
                value={formData.people}
                onChange={handleChange}
                required>
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
            </div>
          </div>

          <label htmlFor="misc">Sonstiges</label>
          <textarea
            name="misc"
            id="misc"
            className="section--reservation--misc"
            value={formData.misc}
            onChange={handleChange}
            placeholder="Sonstige Informationen :)"
          />

          <input
            className="section--reservation--button supersonic outline"
            type="submit"
            value={requestSend ? "Anfrage verschickt!" : "Abschicken"}
            disabled={requestSend}
          />
        </form>
      </div>
    </section>
  )
}
