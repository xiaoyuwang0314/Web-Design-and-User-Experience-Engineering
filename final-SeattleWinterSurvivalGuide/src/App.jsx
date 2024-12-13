import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ComplexForm from './components/ComplexForm/ComplexForm'
import WelcomePage from './pages/WelcomePage' 
import CardsPage from './pages/CardsPage'
import AccordionsPage from './pages/AccordionsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main id="main-content" className="main-content">
        {currentPage === 'welcome' && <WelcomePage />}
        {currentPage === 'cards' && <CardsPage />}
        {currentPage === 'accordions' && <AccordionsPage />}
        {currentPage === 'complexform' && <ComplexForm />}
      </main>
      <Footer theme={theme} toggleTheme={toggleTheme} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App 