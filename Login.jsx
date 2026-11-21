
import './Login.css'

function Login({ onBack, onRegister, onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>🌍 LinguaQuest</h1>
        <h2>Welcome Back!</h2>
        <p>Continue your language adventure.</p>

        <form onSubmit={(e) => {
  e.preventDefault()
  onLogin()
}}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#" onClick={(e) => {
  e.preventDefault()
  onRegister()
}}>
  Sign Up
</a>
        </p>
<button type="button" onClick={onBack}>
  ← Back to Home
</button>
      </div>
    </div>
  )
}

export default Login
