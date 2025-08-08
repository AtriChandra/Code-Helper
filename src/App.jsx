import { useState, useEffect } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  const handleEnterSite = () => {
    setShowWelcome(false)
  }

  return (
    <>
      {showWelcome && <WelcomeScreen onEnter={handleEnterSite} />}
      <Sidebar />
      <MainContent />
    </>
  )
}

export default App