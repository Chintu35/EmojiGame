const WinOrLoseCard = props => {
  const {score, status, startGame} = props // Receive startGame as a prop
  const scoreText = `${score}/12`

  const state = status ? 'You Won' : 'You Loss'
  const img = status
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onRestartGame = () => {
    startGame() // Call startGame from props to restart the game
  }

  return (
    <div className="container">
      <img className="state" src={img} alt="win or lose" />
      <h1>{state}</h1>
      <p>Best Score</p>
      <p>{scoreText}</p>
      <button type="button" onClick={onRestartGame}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
