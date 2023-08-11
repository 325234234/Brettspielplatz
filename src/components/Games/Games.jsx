import "./games.css"
import Game from "./Game"
import { useState, useEffect } from "react"
import BeatLoader from 'react-spinners/BeatLoader'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function Games() {    
  const [games, setGames] = useState([])
  const [gameNames, setGameNames] = useState([])
  const [searchInput, setSearchInput] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const API_KEY = "AIzaSyCklZWwaXvgmkfyq61E67DXNGpgYAwTapg"
  const SHEET_ID = "1Jn6LMK_MDTWrT_bZ8HjB6tLNpUHbsH-8w3I6y38dYlA"
  const SHEET_TAB_NAME = "Spieleliste"

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)

      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_TAB_NAME}?alt=json&key=${API_KEY}`)
      const data = await response.json()
      const gamesArray = data.values.slice(1)
      setGames(gamesArray) 

      const gameNames = gamesArray.map(game => game[0])
      setGameNames(gameNames) 

      setLoading(false)
    }
    fetchGames()
  }, [])

  // structure of game object in games
  // 0: "Spiel"
  // 1: "Spieler Min"
  // 2: "Spieler Max"
  // 3: "Spieler Empfohlen"
  // 4: "Spieldauer Min"
  // 5: "Spieldauer Max"
  // 6: "Complexity"
  // 7: "BGG ID"
  // 8: "Sprache"
  // 9: "Kinderspiel"

  // per default display all games
  let displayedGames = games
  // if there's a valid search input (neither "" nor null)
  if(searchInput) {
    // find the corresponding game object in the games list and display only that game
    displayedGames = [games.find(game => {
      return game[0].toUpperCase() === searchInput.toUpperCase()
    })]      
  }
  const gameElements = displayedGames.map(game => 
    <Game
      key={game[0]}
      name={game[0]}
      playersMin={game[1]}
      playersMax={game[2]} 
      lengthMin={game[4]} 
      lengthMax={game[5]} 
      complexity={game[6]} 
      language={game[8]} 
      childGame={game[9]} 
    />
  )

  return (
    <section className="content maxWidth1200">
      <h1 className="title supersonic">Spieleliste</h1>
      <div className="tile shadow">
        <p>Hier findet ihr eine Liste aller unserer Spiele. Wer auf Schmerzen steht, kann sich von Hand durchscrollen, alle anderen geben
          einfach den gesuchten Titel ein. Wenn wir ihn haben, wird er euch direkt vorgeschlagen. Wählt ihr ihn aus, bekommt ihr auch noch
          ein paar Informationen zum Spiel angezeigt. Wird euch der gesuchte Titel nicht vorgeschlagen, haben wir ihn leider noch nicht
          im Sortiment.
        </p>
        <Autocomplete
              disablePortal
              options={gameNames}
              value={searchInput}
              onChange={(event, inputValue) => {
                setSearchInput(inputValue);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Spiele" />}
        />
        {isLoading ?
          (
            <div className="section--games--loader">
              <BeatLoader color={"#00B0B2"}/>
            </div>
          ) : 
          (
            <div className="section--games--list">
              {gameElements}
            </div>
          )}
        </div>
    </section>
  )
}