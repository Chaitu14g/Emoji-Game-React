import './index.css'

const NavBar = props => {
  const {navbarProps, winOrLoseCardClicked} = props
  const {score, topScore} = navbarProps
  const answer = winOrLoseCardClicked ? null : (
    <div className="winOrLoseContainer">
      <p className="navBar_heading nav_bar_scores">Score: {score}</p>
      <p className="navBar_heading nav_bar_scores">Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="navBar_container">
      <img
        className="navBar_image"
        alt="emoji logo"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
      />
      <h1 className="navBar_heading">Emoji Game</h1>
      {answer}
    </div>
  )
}

export default NavBar
