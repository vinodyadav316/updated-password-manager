import './index.css'

const PasswordItem = props => {
  const {isToggle, passwdItem, onDeleteBtn} = props
  const {id, website, text, password} = passwdItem
  const firstLetter = website[0].toUpperCase()
  const changePassword = isToggle ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const onDeleteTrash = () => {
    onDeleteBtn(id)
  }
  return (
    <li className="list-con">
      <div className="first-letter-con">{firstLetter}</div>
      <div className="content-con">
        <p className="content-detail">{website}</p>
        <p className="content-detail">{text}</p>
        <p className="content-detail">{changePassword}</p>
      </div>
      <button
        type="button"
        className="trash-btn"
        onClick={onDeleteTrash}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="trash-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
