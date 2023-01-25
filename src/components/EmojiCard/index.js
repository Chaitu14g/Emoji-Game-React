import './index.css'

const EmojiCard = props => {
  const {eachItem, iconPresentOrNot} = props
  const {id, emojiName, emojiUrl} = eachItem
  const iconPresentOrNotCheck = () => {
    iconPresentOrNot(id)
  }
  return (
    <li className="emojiSingleCardContainer" onClick={iconPresentOrNotCheck}>
      <button className="emojiSingleCardButton" type="button">
        <img className="emojiSingleCardImage" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
