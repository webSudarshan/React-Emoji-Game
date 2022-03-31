import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
class EmojiGame extends Component {
  emojisList = this.props

  state = {
    score: 0,
    topScore: 0,
    emojisList: this.emojisList.emojisList,
    clickedEmojisList: [],
    isGameOver: false,
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    if (!clickedEmojisList.includes(id)) {
      this.setState(prevState => ({
        emojisList: emojisList.sort(() => Math.random() - 0.5),
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
        isGameOver: prevState.score + 1 === 12,
        topScore: prevState.score + 1 === 12 ? 12 : prevState.topScore,
      }))
    } else {
      this.setState(prevState => ({
        isGameOver: true,
        topScore:
          prevState.topScore < prevState.score
            ? prevState.score
            : prevState.topScore,
      }))
    }
  }

  playAgain = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      emojisList: this.emojisList.emojisList,
      clickedEmojisList: [],
      isGameOver: false,
    }))
  }

  render() {
    const {score, topScore, emojisList, isGameOver} = this.state

    return (
      <div className="container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {!isGameOver ? (
          <ul>
            {emojisList.map(eachItem => (
              <EmojiCard
                key={eachItem.id}
                emojiItem={eachItem}
                onClickEmoji={this.shuffledEmojisList}
              />
            ))}
          </ul>
        ) : (
          <WinOrLoseCard score={score} onPlayAgain={this.playAgain} />
        )}
      </div>
    )
  }
}
export default EmojiGame
