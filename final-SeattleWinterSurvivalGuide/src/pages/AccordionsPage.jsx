import './AccordionsPage.css'
import { useState } from 'react'
import Upvote from '../components/Upvote/Upvote'
import ShareTipForm from '../components/ShareTipForm/ShareTipForm'

function AccordionsPage() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [votes, setVotes] = useState({
    1: { count: 0, hasVoted: false },
    2: { count: 0, hasVoted: false },
    3: { count: 0, hasVoted: false },
    4: { count: 0, hasVoted: false },
    5: { count: 0, hasVoted: false }
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [communityTips, setCommunityTips] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  })

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }

  const handleVote = (accordionId) => {
    setVotes(prev => ({
      ...prev,
      [accordionId]: {
        count: prev[accordionId].count + 1,
        hasVoted: true
      }
    }))
  }

  const handleShareTip = (formData) => {
    const newTip = {
      name: formData.name,
      content: formData.tipContent
    }
    
    setCommunityTips(prev => ({
      ...prev,
      [formData.category]: [...prev[formData.category], newTip]
    }))
    setActiveAccordion(parseInt(formData.category))
  }

  return (
    <div className="accordions-page">
      <h1 className="page-title">Seattleite Survival Skills 101</h1>
      <div className="page-header">
        <p className="page-description">Check out these survival tips from fellow Seattleites, or 
          <button className="share-tip-link" onClick={() => setIsModalOpen(true)}>
             share your wisdom
          </button>!
        </p>
      </div>
      <ShareTipForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleShareTip} 
      />
      <div className="accordions-container">
        <div className={`accordion ${activeAccordion === 1 ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeAccordion === 1}
          >
            <div className="header-titles">
              <h2>Driving</h2>
              <h3>The Seattle Slide: Mastering Wet Roads</h3>
            </div>
            <span className="accordion-icon">{activeAccordion === 1 ? '−' : '+'}</span>
          </button>
          {activeAccordion === 1 && (
            <div className="accordion-content">
              <p className="description">When Seattle streets turn into slip-n-slides, here's how to keep your cool!</p>
              <ul className="tips-list">
                <li>Channel your inner snail - slow and steady wins the commute race</li>
                <li>Make sure your tires have more grip than your morning coffee cup</li>
                <li>Keep those chains handy - because surprise snow is very Seattle</li>
                {communityTips[1].map((tip, index) => (
                  <li key={index}>
                    {tip.content} <span className="tip-author">- {tip.name}</span>
                  </li>
                ))}
              </ul>
              <Upvote 
                votes={votes[1].count}
                hasVoted={votes[1].hasVoted}
                onVote={() => handleVote(1)}
              />
            </div>
          )}
        </div>

        <div className={`accordion ${activeAccordion === 2 ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeAccordion === 2}
          >
            <div className="header-titles">
              <h2>Mood</h2>
              <h3>Beating the Seattle Grey: Mood-Boosting Magic</h3>
            </div>
            <span className="accordion-icon">{activeAccordion === 2 ? '−' : '+'}</span>
          </button>
          {activeAccordion === 2 && (
            <div className="accordion-content">
              <p className="description">When the sky's doing its 50 shades of grey impression, here's how to keep your inner sun shining!</p>
              <ul className="tips-list">
                <li>Get yourself a happy lamp (because fake sun is better than no sun)</li>
                <li>Pop those Vitamin D pills like they're Seattle's favorite candy</li>
                <li>Turn into a gym rat, yoga warrior, or climbing monkey - just keep moving!</li>
                <li>Find a furry therapist - science says cat cuddles boost happiness! No cat? Visit a cat café or make friends with your neighbor's feline friend</li>
                <li>Join the "Yes, I'll go out even though it's raining" club with friends</li>
                {communityTips[2].map((tip, index) => (
                  <li key={index}>
                    {tip.content} <span className="tip-author">- {tip.name}</span>
                  </li>
                ))}
              </ul>
              <Upvote 
                votes={votes[2].count}
                hasVoted={votes[2].hasVoted}
                onVote={() => handleVote(2)}
              />
            </div>
          )}
        </div>

        <div className={`accordion ${activeAccordion === 3 ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(3)}
            aria-expanded={activeAccordion === 3}
          >
            <div className="header-titles">
              <h2>Clothing</h2>
              <h3>The Seattle Onion: Layer Like a Pro</h3>
            </div>
            <span className="accordion-icon">{activeAccordion === 3 ? '−' : '+'}</span>
          </button>
          {activeAccordion === 3 && (
            <div className="accordion-content">
              <p className="description">Master the art of dressing like a weather-ready fashionista!</p>
              <ul className="tips-list">
                <li>Base layer: Think second skin, but make it moisture-wicking</li>
                <li>Middle layer: Fleece is your friend (and so is that vintage Patagonia)</li>
                <li>Outer layer: Rain jacket game strong - because umbrellas are for tourists!</li>
                {communityTips[3].map((tip, index) => (
                  <li key={index}>
                    {tip.content} <span className="tip-author">- {tip.name}</span>
                  </li>
                ))}
              </ul>
              <Upvote 
                votes={votes[3].count}
                hasVoted={votes[3].hasVoted}
                onVote={() => handleVote(3)}
              />
            </div>
          )}
        </div>

        <div className={`accordion ${activeAccordion === 4 ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(4)}
            aria-expanded={activeAccordion === 4}
          >
            <div className="header-titles">
              <h2>Power</h2>
              <h3>When Seattle Goes Dark: Power Outage Party Prep</h3>
            </div>
            <span className="accordion-icon">{activeAccordion === 4 ? '−' : '+'}</span>
          </button>
          {activeAccordion === 4 && (
            <div className="accordion-content">
              <p className="description">Turn that power outage into an indoor camping adventure!</p>
              <ul className="tips-list">
                <li>Stock up on flashlights (because phone lights are so 2010)</li>
                <li>Create a snack stash worthy of a Netflix marathon</li>
                <li>Power bank collection = modern day treasure chest</li>
                <li>Write down those emergency numbers (yes, on actual paper!)</li>
                {communityTips[4].map((tip, index) => (
                  <li key={index}>
                    {tip.content} <span className="tip-author">- {tip.name}</span>
                  </li>
                ))}
              </ul>
              <Upvote 
                votes={votes[4].count}
                hasVoted={votes[4].hasVoted}
                onVote={() => handleVote(4)}
              />
            </div>
          )}
        </div>

        <div className={`accordion ${activeAccordion === 5 ? 'active' : ''}`}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(5)}
            aria-expanded={activeAccordion === 5}
          >
            <div className="header-titles">
              <h2>Home</h2>
              <h3>Mold: The Unwanted Roommate</h3>
            </div>
            <span className="accordion-icon">{activeAccordion === 5 ? '−' : '+'}</span>
          </button>
          {activeAccordion === 5 && (
            <div className="accordion-content">
              <p className="description">Keep your home cozy, not fuzzy - your guide to winning the war against moisture!</p>
              <ul className="tips-list">
                <li>Become a leak detective - Sherlock Holmes style</li>
                <li>Get a dehumidifier (AKA your new best friend)</li>
                <li>Master the art of strategic ventilation (yes, even when it's cold!)</li>
                <li>Weather-strip everything - if air can get in, rain wants to follow</li>
                {communityTips[5].map((tip, index) => (
                  <li key={index}>
                    {tip.content} <span className="tip-author">- {tip.name}</span>
                  </li>
                ))}
              </ul>
              <Upvote 
                votes={votes[5].count}
                hasVoted={votes[5].hasVoted}
                onVote={() => handleVote(5)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccordionsPage
