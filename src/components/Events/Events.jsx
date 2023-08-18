import "./events.css"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import events from '../../assets/events.jpg'

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
    </section>
  )
}