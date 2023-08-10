import "./footer.css"

export default function Footer() {

  return (
    <footer>
      <div>
        <h2 className="supersonic outline">Kontakt</h2>
        <p>Brettspielplatz</p>
        <p>Waldstraße 50 <a href="https://goo.gl/maps/SvxL2QFk8cRq3BHn6">(Maps)</a></p>
        <p>10551 Berlin</p>
        <p>030 / 55522236</p>
        <a href="mailto:kontakt@brettspielplatz.de">kontakt@brettspielplatz.de</a>
      </div>
      <div>
        <h2 className="supersonic outline">Öffnungszeiten</h2>
        <p>Wochentags: 16 - 24 Uhr</p>
        <p>Wochenende: 14 - 24 Uhr</p>
        <br />
        <p>An Feiertagen gelten die regulären Öffnungszeiten.</p>
      </div>
    </footer>
  )
}