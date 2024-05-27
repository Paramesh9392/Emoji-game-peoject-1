// Write your code here.
import './index.css'

const gameLossImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const gameWinImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const image = isWon ? gameWinImg : gameLossImg
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-conatiner">
      <div className="details-container">
        <h1 className="result-text">{gameResult}</h1>
        <div className="texts-container">
          <p className="score-label">{scoreLabel}</p>
          <p className="score">{score}/12</p>
          <button className="button" type="button" onClick={onClickPlayAgain}>
            Play Again
          </button>
        </div>
      </div>

      <div className="img-container">
        <img src={image} className="win-loss-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
