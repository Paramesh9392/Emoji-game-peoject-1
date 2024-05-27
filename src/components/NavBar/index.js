// Write your code here.
import './index.css'

const navBarLogo = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-score-container">
        <div className="title-container">
          <img src={navBarLogo} alt="emoji logo" className="navBar-logo" />
          <h1 className="heading"> Emoji Game </h1>
        </div>

        {isGameInProgress && (
          <div className="score-container">
            <p className="score-text"> Score: {currentScore}</p>
            <p className="score-text"> Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
