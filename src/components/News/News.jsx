import "./news.css"
import { useState, useEffect } from "react"
import BeatLoader from 'react-spinners/BeatLoader'

export default function News() {
    const [news, setNews] = useState([])
    const [isLoading, setLoading] = useState(false)

    const API_KEY = "AIzaSyCklZWwaXvgmkfyq61E67DXNGpgYAwTapg"
    const SHEET_ID = "1uamZ6CFNVrjcLWGxaUhYijae1KqS3AsewA7qpn1XZhk"
    const SHEET_TAB_NAME = "News"

    useEffect(() => {
      async function fetchNews() {
        setLoading(true)

        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB_NAME}?alt=json&key=${API_KEY}`)
        const data = await response.json()
        setNews(data.values.slice(1,6))

        setLoading(false)
      }
      fetchNews()
    }, [])

    const newsElements = news.map(news => {
      return (
        <div className="news shadow" key={news[0]}>
          <img src={news[1]} className="news--image" />
          <p className="news--date">{news[0]}</p>
          <p className="news--content justified">{(news[2])}</p>
        </div>
      )
    })

    return (
      <section className="content maxWidth1200">
        <h1 className="title supersonic">Neuigkeiten</h1>
        {isLoading ? (
          <div className="section--news--loader">
            <BeatLoader color={"#00B0B2"}/>
          </div>
          ) : 
          (
            <div className="section--news--newsitems">
              {newsElements}
            </div>
            )
          }
      </section>
    )
}