import PropTypes from 'prop-types'

export default function Game({id, name, playersMin, playersMax, lengthMin, lengthMax, complexity, language, childGame}) {

  return (
    <div className="section--games--game" key={id}>
      <h1 className="supersonic">{name}</h1>
      <p>&#128106; {`Spieler: ${playersMin || "k.A."} - ${playersMax || "k.A."}`}</p>
      <p>&#8987; {` Dauer: ${lengthMin || "k.A."} - ${lengthMax || "k.A."} min.`}</p>
      <p>{`Komplexität (1`}&#129322;{` - 5`}&#129327;{`): ${Number.parseFloat(complexity).toFixed(1) || "k.A."}`}</p>
      <p>&#128220; {`Sprache: ${language || "k.A."}`}</p>
      {childGame ? <p> &#128118; Kinderspiel!</p> : ""}
    </div>
  )
}

Game.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playersMin: PropTypes.string.isRequired,
  playersMax: PropTypes.string.isRequired,
  lengthMin: PropTypes.string.isRequired,
  lengthMax: PropTypes.string.isRequired,
  complexity: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  childGame: PropTypes.string.isRequired,
}