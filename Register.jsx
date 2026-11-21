import { useState } from 'react'
import './Register.css'

function Register({ onBack }) {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleRegister(e) {
    e.preventDefault()
    setMessage('')

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullname, email, password })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Registration successful! Please login.')
        setFullname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } else {
        setMessage(data.message)
      }
    } catch (error) {
      setMessage('Cannot connect to server. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>🌍 LinguaQuest</h1>
        <h2>Create Your Account</h2>
        <p>Start your language adventure today!</p>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {message && <p>{message}</p>}

        <p className="login-text">
          Already have an account?{' '}
          <a href="#" onClick={(e) => {
            e.preventDefault()
            onBack()
          }}>Login</a>
        </p>

      </div>
    </div>
  )
}

export default Register