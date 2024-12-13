import './Footer.css'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import ComplexForm from '../ComplexForm/ComplexForm'
import { useState } from 'react'

function Footer({ theme, toggleTheme }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-content">
        <button 
          className="footer-button"
          onClick={() => setIsModalOpen(true)}
        >
          Subscribe to Newsletter
        </button>
        <p className="copyright">&copy; 2024 Xiaoyu Wang -- INFO 6150 Final Project.</p>
        <div className="theme-section">
          <span className="theme-label">Switch to {theme === 'light' ? 'dark' : 'light'} mode</span>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      
      <ComplexForm 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  )
}

export default Footer