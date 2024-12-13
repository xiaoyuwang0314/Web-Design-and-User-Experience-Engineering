import { useState, useRef, useEffect } from 'react'
import './ShareTipForm.css'

const ShareTipForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '1',
    tipContent: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [isOpen])

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name === 'tipContent' ? 'Tip' : 'Name'} is required`
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const nameError = validateField('name', formData.name)
    const tipError = validateField('tipContent', formData.tipContent)
    
    if (nameError || tipError) {
      setErrors({
        name: nameError,
        tipContent: tipError
      })
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      handleClose()
    } catch (error) {
      console.error('Failed to submit tip:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      category: '1',
      tipContent: ''
    })
    setErrors({})
    onClose()
  }

  return (
    <dialog 
      ref={dialogRef}
      onClose={handleClose}
      className="tip-dialog"
    >
      <button className="close-button" onClick={handleClose}>×</button>
      
      <h2>Share Your Tip</h2> 
      {/* this heading is "h2" because there is a "h1" in the accordionspage */}
      <p>All fields are required</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && (
            <span className="error-message">{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="1">Driving</option>
            <option value="2">Mood</option>
            <option value="3">Clothing</option>
            <option value="4">Power</option>
            <option value="5">Home</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tipContent">Your Tip</label>
          <textarea
            id="tipContent"
            name="tipContent"
            value={formData.tipContent}
            onChange={handleChange}
            rows="4"
            className={errors.tipContent ? 'error' : ''}
          />
          {errors.tipContent && (
            <span className="error-message">{errors.tipContent}</span>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Tip'}
        </button>
      </form>
    </dialog>
  )
}

export default ShareTipForm 