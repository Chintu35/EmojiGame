/* 
Quick Tip 
- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import Navbar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    gamestart: true,
    Score: 0,
    TopScore: 0,
    ClickedEmojitems: [],
    status: false,
  }

  addEmojiItem = id => {
    const {emojisList} = this.props
    const {ClickedEmojitems, Score} = this.state
    const newScore = Score + 1
    if (newScore === emojisList.length) {
      this.setState({
        gamestart: false,
        status: true,
        ClickedEmojitems: [],
      })
    } else if (!ClickedEmojitems.includes(id)) {
      this.setState({
        ClickedEmojitems: [...ClickedEmojitems, id],
        Score: newScore,
      })
    } else {
      this.setState({
        gamestart: false,
        ClickedEmojitems: [],
      })
    }
  }

  startGame = () => {
    const {Score, TopScore} = this.state
    const newScore = Score + 1
    const updatedtopScore = Math.max(newScore, TopScore)
    this.setState({
      gamestart: true,
      Score: 0,
      TopScore: updatedtopScore - 1,
      ClickedEmojitems: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {gamestart, Score, TopScore, status} = this.state

    const shuffledEmojis = this.shuffledEmojisList()
    return (
      <div className="game-container">
        <Navbar gamestatus={gamestart} score={Score} topscore={TopScore} />
        {gamestart ? (
          <ul className="emojis-list-conatiner">
            {shuffledEmojis.map(EmojiItem => (
              <EmojiCard
                key={EmojiItem.id}
                EmojicardDetails={EmojiItem}
                addEmojiItem={this.addEmojiItem}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard
            score={Score}
            topscore={TopScore}
            status={status}
            startGame={this.startGame}
          />
        )}
      </div>
    )
  }
}
export default EmojiGame
