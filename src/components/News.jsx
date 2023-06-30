import React, { useState, useEffect } from "react"

export default function News() {
    const [news, setNews] = useState([])

    const API_KEY = "AIzaSyCklZWwaXvgmkfyq61E67DXNGpgYAwTapg"
    const SHEET_ID = "1uamZ6CFNVrjcLWGxaUhYijae1KqS3AsewA7qpn1XZhk"
    const SHEET_TAB_NAME = "News"

    useEffect(() => {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB_NAME}?alt=json&key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => setNews(data.values.slice(1,6)))
    }, [])

    const newsElements = news.map(news => {
        return (
            <div className="news" key={news[0]}>
                <img src={news[1]} className="news--image" />
                <p className="news--date">{news[0]}</p>
                <p className="news--content">{(news[2])}</p>
            </div>
        )
    })

    return (
        <section className="section--news" id="section--news">
            <h1 className="section--news--heading"><span className="news--heading--accent">Neuigkeiten</span></h1>
            {newsElements}
        </section>
    )
}