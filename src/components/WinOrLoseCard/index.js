import './index.css'

const WinOrLoseCard = props => {
  const {win, score, onPlayAgainClicked} = props
  const imgUrlWin = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const winHeadingText = win ? 'You Won' : 'You Lose'
  const winParaText = win ? 'Best Score' : 'Score'
  const onPlayAgainClickedButton = () => {
    onPlayAgainClicked()
  }
  return (
    <li className="winOrLoseCardSubContainer">
      <img className="winOrLoseCardImage" alt="win or lose" src={imgUrlWin} />
      <h1 className="winOrLoseCardHeading">{winHeadingText}</h1>
      <p className="winOrLoseCardPara">{winParaText}</p>
      <p className="winOrLoseCardScore">{score}/12</p>
      <button
        className="winOrLoseCardButton"
        type="button"
        onClick={onPlayAgainClickedButton}
      >
        Play Again
      </button>
    </li>
  )
}

export default WinOrLoseCard
