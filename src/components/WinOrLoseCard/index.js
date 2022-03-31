import './index.css'

const WinOrLoseCard = props => {
  const {score, onPlayAgain} = props
  const playAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="card-container">
      {score === 12 ? (
        <div className="card">
          <div className="score-card">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p className="score-text">{score}/12</p>
            <button
              type="button"
              onClick={playAgain}
              className="play-again-button"
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        </div>
      ) : (
        <div className="card">
          <div className="score-card">
            <h1>You Lose</h1>
            <p>Score</p>
            <p className="score-text">{score}/12</p>
            <button
              type="button"
              onClick={playAgain}
              className="play-again-button"
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
