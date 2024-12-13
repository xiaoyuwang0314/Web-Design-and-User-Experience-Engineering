import { useState } from 'react'
import './Upvote.css'

function Upvote({ votes, hasVoted, onVote }) {
  return (
    <div className="upvote-container">
      <button 
        className={`upvote-button ${hasVoted ? 'voted' : ''}`}
        onClick={onVote}
        disabled={hasVoted}
        aria-label={`${votes} people found this helpful`}
      >
        <span className="upvote-icon">👍</span>
        <span className="upvote-text">
          {hasVoted ? 'Thank you!' : 'Helpful'}
        </span>
        <span className="vote-count">{votes}</span>
      </button>
    </div>
  )
}

export default Upvote 