import { useState } from 'react'

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-home', text: 'Dashboard' },
    { id: 'settings', icon: 'fas fa-cog', text: 'Settings' }
  ]

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-robot"></i>
        </div>
        <div className="logo-text">Code Helper</div>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${activeMenuItem === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenuItem(item.id)}
          >
            <i className={item.icon}></i>
            <span className="menu-text">{item.text}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <p>Powered by Gemini 2.5 flash</p>
      </div>
    </div>
  )
}

export default Sidebar