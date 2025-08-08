import { useState } from 'react'

const WelcomeScreen = ({ onEnter }) => {
  const [isHiding, setIsHiding] = useState(false)

  const handleEnterClick = () => {
    setIsHiding(true)
    setTimeout(() => {
      onEnter()
    }, 900)
  }

  return (
    <div id="welcomeLanding" className={isHiding ? 'hidden' : ''}>
      <div className="landing-inner">
        <div className="landing-logo">
          <i className="fas fa-robot"></i>
        </div>
        <h1>Code Helper AI</h1>
        <p>Your interactive coding tutor, powered by advanced AI.</p>
        <button id="enterSiteBtn" onClick={handleEnterClick}>
          Enter
        </button>
      </div>
    </div>
  )
}

export default WelcomeScreen