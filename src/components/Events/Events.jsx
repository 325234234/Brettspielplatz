import "./events.css"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import events from '../../assets/events.jpg'
import clocktower from '../../assets/clocktower.webp'

export default function Events() {

  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    backgrundColor: 'white'
  }

  return (
    <section className="content maxWidth1200">
      <h1 className="title supersonic">Events</h1>
      <div className="tile shadow">
        <p className="justified">Hier findet ihr eine Auflistung unserer regelmäßig stattfindenden Events. Bei allen sind Neulinge gerne willkommen.
        </p>
        <Gallery>
          <Item
              original={events}
              thumbnail={events}
              width={1300}
              height={900}
              key={1}
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={events} style={smallItemStyles} />
              )}
            </Item>
        </Gallery>
      </div>
      <h1 className="title supersonic">Firmen/Team-Events</h1>
      <div className="tile shadow">
        <p className="justified">
          Ihr möchtet euer Firmen- oder Team-Event gerne bei uns veranstalten? Kein Problem! Wir bieten euch ein unvergessliches
          Erlebnis für 10 bis 30 Mitarbeiter, bei dem es unter professioneller Anleitung durch unser Team um Intrigen, Zusammenhalt und
          die Jagd nach einem Dämonen geht. Wir spielen mit euch ein angeleitetes Social Deduction Spiel, bei dem ihr in 90 bis 180 Minuten
          lernt, welchen Kollegen man vertrauen kann und wer das beste Pokerface beim Lügen hat.
        </p>
        <p className="justified">
          Ihr habt das ganze Café nur für euch und spielt bei uns bis spätestens 16 Uhr ein durch uns organisiertes "Murder Mystery Abenteuer".
          Von 10 bis 30 Personen, zum Festpreis inklusive Snacks und Getränke. Es kann auch gerne auf eigene Kosten ein Catering oder Mittagessen
          organisiert werden. Interesse? Schreibt uns eine Mail an <a href="mailto:kontakt@brettspielplatz.berlin">kontakt@brettspielplatz.berlin</a>
        </p>
        <Gallery>
          <Item
              original={clocktower}
              thumbnail={clocktower}
              width={1300}
              height={900}
              key={1}
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={clocktower} style={smallItemStyles} />
              )}
            </Item>
        </Gallery>
      </div>
    </section>
  )
}
