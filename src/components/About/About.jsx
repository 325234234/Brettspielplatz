import "./about.css"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import hero from '../../assets/hero.jpg'
import laden1 from '../../assets/laden1.jpg'
import laden1_tb from '../../assets/laden1_tb.jpg'
import laden2 from '../../assets/laden2.jpg'
import laden2_tb from '../../assets/laden2_tb.jpg'
import laden3 from '../../assets/laden3.jpg'
import laden3_tb from '../../assets/laden3_tb.jpg'
import laden4 from '../../assets/laden4.jpg'
import laden4_tb from '../../assets/laden4_tb.jpg'
import laden5 from '../../assets/laden5.jpg'
import laden5_tb from '../../assets/laden5_tb.jpg'
import laden6 from '../../assets/laden6.jpg'
import laden6_tb from '../../assets/laden6_tb.jpg'

export default function About() {
  const images = [
    {
      image: laden1,
      thumbnail: laden1_tb,
      width: 1600,
      height: 900,
      key: 1
    },
    {
      image: laden2,
      thumbnail: laden2_tb,
      width: 1496,
      height: 844,
      key: 2
    },
    {
      image: laden3,
      thumbnail: laden3_tb,
      width: 1600,
      height: 1069,
      key: 3
    },
    {
      image: laden4,
      thumbnail: laden4_tb,
      width: 1600,
      height: 805,
      key: 4
    },
    {
      image: laden5,
      thumbnail: laden5_tb,
      width: 1600,
      height: 1066,
      key: 5
    },
    {
      image: laden6,
      thumbnail: laden6_tb,
      width: 640,
      height: 640,
      key: 6
    }
  ];

  const imageElements = images.map(image => {
    const smallItemStyles = {
      cursor: 'pointer',
      objectFit: 'cover',
      width: '100%',
      height: '100%',
      backgrundColor: 'white'
    }

    return (<Item
              original={image.image}
              thumbnail={image.thumbnail}
              width={image.width}
              height={image.height}
              key={image.key}
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={image.thumbnail} style={smallItemStyles} />
              )}
            </Item>)
  })

  return (
    <section className="content maxWidth1200">
      <h1 className="title supersonic">Über uns</h1>
      <div className="tile shadow">
        <img src={hero} className="section--about--hero"/>
        <h2 className="section--about--heading supersonic">Willkommen in Berlins größtem Brettspielecafé!</h2>
        <p className="justified">Im Herzen Moabits bieten wir euch bei Kaffee, Waffeln und Süßgetränk über 200 Spiele zum ausgiebigen Spielen und Genießen an.
          Unser Konzept: Bezahlt nur die Zeit, die ihr im Laden verbringt. Ob dann ein oder einhundert Spiele gespielt werden - ganz egal. Spielt so viel, wie ihr wollt. Also schaut mal vorbei.
          Wir haben das passende Spiel für jede Gelegenheit :)
        </p>
        <Gallery>
          <div className="section--about--gallery">
            {imageElements}
          </div>
        </Gallery>
      </div>
    </section>
  )
}