import './index.css'

const EmojiCard = props => {
  const {emojiItem, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const onEmojiClick = () => {
    onClickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onEmojiClick} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
