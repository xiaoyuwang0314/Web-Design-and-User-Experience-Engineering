import { useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.svg'

function Header({ currentPage, setCurrentPage }) {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNav = (page) => {
    setCurrentPage(page)
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  return (
    <header className="header">
      <div className="header-content">
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleNav('welcome')
          }}
          className="logo"
        >
          <img src={logo} alt="a Logo with two peaks" className="logo-icon" />
          <p className="site-title">Seattle Winter Survival Guide</p>
        </a>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleNav('accordions')
            }}
            className={currentPage === 'accordions' ? 'active' : ''}
          >
            Winter Tips
          </a>

          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault()
              handleNav('cards')
            }}
            className={currentPage === 'cards' ? 'active' : ''}
          >
            Indoor Activities
          </a>

          <div className="dropdown-container">
            <button 
              onClick={() => toggleDropdown('hiking')}
              className="dropdown-trigger"
              aria-expanded={activeDropdown === 'hiking'}
              aria-haspopup="true"
            >
              Hiking Trails
            </button>
            {activeDropdown === 'hiking' && (
              <div className="dropdown-menu">
                <a href="https://mtsgreenway.org/location/snow-lake-trailhead/" target="_blank" rel="noopener noreferrer">
                  Snow Lake
                </a>
                <a href="https://parks.wa.gov/find-parks/state-parks/deception-pass-state-park" target="_blank" rel="noopener noreferrer">
                  Deception Pass State Park
                </a>
                <a href="https://parks.wa.gov/find-parks/state-parks/wallace-falls-state-park" target="_blank" rel="noopener noreferrer">
                  Wallace Falls State Park
                </a>
                <a href="https://parks.wa.gov/find-parks/state-parks/fort-ebey-state-park" target="_blank" rel="noopener noreferrer">
                  Fort Ebey State Park
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
