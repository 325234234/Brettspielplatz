import "./footer.css"
import image from "../../assets/footer.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  return (
    <footer className="maxWidth1200">
      {/* image that is used as background that slowly fades in over the background color. Not required if done using a div with "background: image" instead */}
      <img className="footer--image" src={image}/>
      <div>
        <h2 className="supersonic outline">Kontakt</h2>
        <p>Brettspielplatz - Das Spielecafé</p>
        <a href="https://goo.gl/maps/SvxL2QFk8cRq3BHn6" className="footer--address--link">            
          <div className="footer--address">
            <div>
              <FontAwesomeIcon icon={faMapLocationDot} style={{color: "#ffffff", fontSize: "2rem"}} />
            </div>
            <div>
              <p>Waldstraße 50 </p>
              <p>10551 Berlin</p>
            </div>
          </div>
        </a>
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