// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {EmojicardDetails, addEmojiItem} = props
  const {emojiUrl, id} = EmojicardDetails

  const onclickbutton = () => {
    addEmojiItem(id)
  }

  return (
    <li>
      <button type="button" className="emojicard" onClick={onclickbutton}>
        <img className="image" src={emojiUrl} alt="emojiName" />
      </button>
    </li>
  )
}

export default EmojiCard
