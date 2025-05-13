import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      firstName: firstName.trim() === '',
      lastName: lastName.trim() === ''
    }

    setErrors(newErrors)

    // If no errors, display full name
    if (!newErrors.firstName && !newErrors.lastName) {
      setFullName(`${firstName} ${lastName}`)
      setSubmitted(true)
    }
  }

  return (
    <div className="app-container">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <span className="error-message">
              <span className="error-icon">!</span>
              Please fill out this field.
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <span className="error-message">
              <span className="error-icon">!</span>
              Please fill out this field.
            </span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitted && fullName && (
        <div className="full-name">
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  )
}

export default App
