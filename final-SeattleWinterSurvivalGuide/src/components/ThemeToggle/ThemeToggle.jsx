import './ThemeToggle.css'
import darkIcon from '../../assets/images/dark_mode.svg'
import lightIcon from '../../assets/images/light_mode.svg'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <img 
        src={theme === 'light' ? darkIcon : lightIcon}
        alt={theme === 'light' ? 'Dark mode' : 'Light mode'}
        className="theme-icon"
      />
    </button>
  )
}

export default ThemeToggle