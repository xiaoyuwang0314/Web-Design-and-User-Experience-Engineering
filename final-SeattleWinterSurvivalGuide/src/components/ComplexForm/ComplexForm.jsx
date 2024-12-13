import { useState, useEffect } from 'react'
import './ComplexForm.css'

const ComplexForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'weekly',
    hasComment: false,
    comment: ''
  })

  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.hasComment && !formData.comment.trim()) {
      newErrors.comment = 'Please enter your comment'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        hasComment: checked,
        comment: checked ? prev.comment : ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    console.log('Form submitted:', formData)
    onClose()
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      frequency: 'weekly',
      hasComment: false,
      comment: ''
    })
    setErrors({})
    onClose()
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
    }

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen])

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="complex-form">
          <h2>Subscribe to Our Newsletter</h2>
          <p className="form-note">Fields marked with <span className="required">*</span> are required</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="frequency">Email Frequency</label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
              >
                <option value="weekly">Weekly Digest</option>
                <option value="biweekly">Bi-weekly Updates</option>
                <option value="monthly">Monthly Newsletter</option>
              </select>
            </div>

            <div className="form-group-checkbox">
              <label>
                <input
                  type="checkbox"
                  name="hasComment"
                  checked={formData.hasComment}
                  onChange={handleChange}
                />
                Do you have any comments?
              </label>
            </div>

            {formData.hasComment && (
              <div className="form-group">
                <label htmlFor="comment">Your Comment</label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Please share your thoughts..."
                />
                {errors.comment && <span className="error">{errors.comment}</span>}
              </div>
            )}

            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ComplexForm