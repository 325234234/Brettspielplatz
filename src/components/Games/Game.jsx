import PropTypes from 'prop-types'

export default function Game({id, name, playersMin, playersMax, lengthMin, lengthMax, complexity, bggId, language, childGame, onClick}) {

  return (
    <div className="section--games--game" key={id} onClick={() => onClick(bggId)}>
      <h1 className="supersonic">{name}</h1>
      <p>{`👪 Spieler: ${playersMin || "k.A."} - ${playersMax || "k.A."}`}</p>
      <p>{`⏳ Dauer: ${lengthMin || "k.A."} - ${lengthMax || "k.A."} min.`}</p>
      <p>{`Komplexität (🤪1 - 5🤯): ${Number.parseFloat(complexity).toFixed(1) || "k.A."}`}</p>
      <p>{`📜 Sprache: ${language === "deutsch" ? "🇩🇪" : language === "englisch" ? "🇬🇧" : "k.A."}`}</p>
      {childGame ? <p>{`👶 Kinderspiel!`}</p> : ""}
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
  bggId: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  childGame: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
}