import './WelcomePage.css'
import lightImage from '../assets/images/seattle-light.jpg'
import darkImage from '../assets/images/seattle-dark.jpg'
import { useState } from 'react'
import ComplexForm from '../components/ComplexForm/ComplexForm'

function WelcomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <div className="welcome-image">
          <img className="light-mode-image" src={lightImage} alt="Seattle skyline with Space Needle during a bright day" />
          <img className="dark-mode-image" src={darkImage} alt="Seattle skyline with illuminated Space Needle at night" />
        </div>
        
        <div className="welcome-text">
          <h1>Embrace the Drizzle: Your Seattle Winter Adventure Guide! 🌧️</h1>
          
          <p className="intro">
            Think Seattle winters are just about hiding under blankets? Think again! 
            We're here to show you how to turn those notorious rainy days into your 
            favorite time of year. Whether you're a seasoned Seattleite or fresh off 
            the plane, we've got the insider scoop on making the most of our 
            beautifully moody winter season. ☔
          </p>

          <div className="features">
            <h2>Your Rainy Day Toolkit:</h2>
            <ul>
              <li>
                <span className="feature-label">Cozy Indoor Escapes</span> - From hidden gem 
                cafés to adrenaline-pumping climbing walls, discover why "indoor" doesn't 
                mean "boring" in Seattle! 🏰
              </li>
              <li>
                <span className="feature-label">Winter Survival Hacks</span> - Master the art 
                of puddle-dodging, learn the sacred rules of umbrella etiquette, and get pro 
                tips on staying warm (while looking cool) in our signature drizzle. 🌂
              </li>
              <li>
                <span className="feature-label">Adventure-Ready Trails</span> - Because a 
                little rain never stopped a true PNW explorer! Before you head out, check our 
                trail guides for:
                <ul className="sub-list">
                  <li>Real-time mud and puddle reports 🌲</li>
                  <li>Parking ninja tips (because finding a spot is an adventure too)</li>
                  <li>Weather wisdom (when "light rain" actually means "bring a kayak")</li>
                  <li>Trail difficulty ratings (from "Sunday stroll" to "mountain goat mode")</li>
                  <li>Seasonal secrets (like the best spots for dramatic misty photos)</li>
                </ul>
              </li>
              <li>
                <span className="feature-label">Insider Updates</span> - Join our community 
                of winter enthusiasts!{' '}
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="subscribe-link"
                >
                  Subscribe
                </button>{' '}
                for weekly doses of rainy inspiration, local 
                secrets, and maybe a few umbrella jokes. ✨
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ComplexForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}

export default WelcomePage