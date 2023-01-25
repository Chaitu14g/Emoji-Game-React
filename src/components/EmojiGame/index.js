import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    winOrLoseCardClicked: false,
    win: false,
    list: [],
  }

  iconPresentOrNot = id => {
    const {list, topScore} = this.state
    const b = list.length
    const a = list.includes(id)
    if (a === true) {
      this.setState({
        winOrLoseCardClicked: true,
        win: false,
        score: b,
      })
    } else {
      this.setState(prevState => ({
        list: [...prevState.list, id],
      }))
      if (b + 1 > topScore) {
        this.setState({topScore: b + 1})
      }
      if (b + 1 === 12) {
        this.setState({
          winOrLoseCardClicked: true,
          win: true,
          score: b + 1,
        })
      } else {
        this.setState({
          winOrLoseCardClicked: false,
          win: false,
          score: b + 1,
        })
      }
    }
  }

  onPlayAgainClicked = () => {
    this.setState({
      score: 0,
      winOrLoseCardClicked: false,
      win: false,
      list: [],
    })
  }

  render() {
    const {win, score, topScore, winOrLoseCardClicked} = this.state
    const {emojisList} = this.props
    const navbarProps = {score, topScore}
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="emojiGame_background_container">
        <NavBar
          navbarProps={navbarProps}
          winOrLoseCardClicked={winOrLoseCardClicked}
        />
        <ul className="emojiCardContainer">
          {winOrLoseCardClicked ? (
            <WinOrLoseCard
              win={win}
              score={score}
              onPlayAgainClicked={this.onPlayAgainClicked}
            />
          ) : (
            <ul className="emojiCardSubContainer">
              {shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  eachItem={eachItem}
                  iconPresentOrNot={this.iconPresentOrNot}
                />
              ))}
            </ul>
          )}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
