import StoryWorld from './StoryWorld'
import DailyQuest from './DailyQuest'
import Learning from './Learning'
import Dashboard from './Dashboard'
import { useState } from 'react'
import './App.css'
import Login from './Login'
import Register from './Register'
import CultureExplore from './CultureExplore'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showLearning, setShowLearning] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('French')
  const [totalPoints, setTotalPoints] = useState(() => {
  return Number(localStorage.getItem('linguaQuestPoints')) || 0
})
const [showDailyQuest, setShowDailyQuest] = useState(false)
const [showCulture, setShowCulture] = useState(false)
const [showStoryWorld, setShowStoryWorld] = useState(false)
const [learningStreak, setLearningStreak] = useState(() => {
  return Number(localStorage.getItem('linguaQuestStreak')) || 0
})
function updatePoints(points) {
  setTotalPoints(points)
  localStorage.setItem('linguaQuestPoints', points)
  recordLearningDay()
}
function addBonusPoints(points) {
  const updated = totalPoints + points
  setTotalPoints(updated)
  localStorage.setItem('linguaQuestPoints', String(updated))
}
function recordLearningDay() {
  const now = new Date()
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

  const lastDate = localStorage.getItem('linguaQuestLastDate')

  if (lastDate === today) return

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)

  const yesterdayKey = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`

  const updated = lastDate === yesterdayKey ? learningStreak + 1 : 1

  setLearningStreak(updated)
  localStorage.setItem('linguaQuestStreak', String(updated))
  localStorage.setItem('linguaQuestLastDate', today)
}

if (showRegister) {
  return (
    <Register
      onBack={() => {
        setShowRegister(false)
        setShowLogin(true)
      }}
    />
  )
}
if (showLearning) {
  return (
    <Learning
      language={selectedLanguage}
      onBack={() => setShowLearning(false)}
      onScoreUpdate={updatePoints}
    />
  )
}
if (showDailyQuest) {
  return (
    <DailyQuest
      onBack={() => setShowDailyQuest(false)}
      onBonusPoints={addBonusPoints}
    />
  )
}
if (showCulture) {
  return (
    <CultureExplore
      onBack={() => setShowCulture(false)}
    />
  )
}
if (showStoryWorld) {
  return (
    <StoryWorld
      onBack={() => setShowStoryWorld(false)}
    />
  )
}
if (showDashboard) {
  return (
  <Dashboard
  onLogout={() => setShowDashboard(false)}
  onStartLearning={(language) => {
  setSelectedLanguage(language)
  setShowLearning(true)
}}
  totalPoints={totalPoints}
  onDailyQuest={() => setShowDailyQuest(true)}
/>  
  )
}
if (showLogin) {
  return (
    <Login
      onBack={() => setShowLogin(false)}
      onRegister={() => {
        setShowLogin(false)
        setShowRegister(true)
      }}
      onLogin={() => {
        setShowLogin(false)
        setShowDashboard(true)
      }}
    />
  )
}
  return (
    <div>
  <nav className="navbar">
    <h2 className="logo">🌍 LinguaQuest</h2>

    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Explore</a>
      <a href="#">Daily Quest</a>
      <a href="#" onClick={(e) => {
  e.preventDefault()
  setShowLogin(true)
}}>
  Login
</a>
      <button onClick={() => setShowRegister(true)}>
  Sign Up
</button>
    </div>
  </nav>

  <section className="hero-section">
  <div className="hero-content">
    <span className="tagline">🌍 Your Language Adventure Starts Here</span>

    <h1>
      Learn Languages.
      <br />
      Explore New Worlds!
    </h1>

    <p>
      Discover new languages, play exciting games,
      practise conversations and explore amazing cultures.
    </p>

    <button className="explore-btn">
      Explore Languages ✈️
    </button>
  </div>

  <div className="hero-image">
    <span>🌍</span>
    <span>✈️</span>
    <span>🗺️</span>
  </div>
</section>
<section className="languages-section">
  <h2>Choose Your Language 🌍</h2>
  <p className="section-description">
    Pick a language and begin your exciting learning adventure!
  </p>

  <div className="language-container">

    <div className="language-card">
      <span>🇬🇧</span>
      <h3>English</h3>
      <p>Master everyday English</p>
      <button>Start Learning</button>
    </div>

    <div className="language-card">
      <span>🇫🇷</span>
      <h3>French</h3>
      <p>Discover the language of love</p>
      <button>Start Learning</button>
    </div>

    <div className="language-card">
      <span>🇪🇸</span>
      <h3>Spanish</h3>
      <p>Explore the Spanish world</p>
      <button>Start Learning</button>
    </div>

    <div className="language-card">
      <span>🇸🇦</span>
      <h3>Arabic</h3>
      <p>Discover a beautiful language</p>
      <button>Start Learning</button>
    </div>

    <div className="language-card">
      <span>🇯🇵</span>
      <h3>Japanese</h3>
      <p>Explore Japanese culture</p>
      <button>Start Learning</button>
    </div>

    <div className="language-card">
      <span>🇮🇳</span>
      <h3>Hindi</h3>
      <p>Learn a new way to connect</p>
      <button>Start Learning</button>
    </div>

  </div>
</section>
<section className="features-section">
  <h2>Why Choose LinguaQuest? ✨</h2>

  <p className="section-description">
    Learning a language is more exciting when you play,
    explore and experience!
  </p>

  <div className="features-container">

    <div className="feature-card">
      <span>🎮</span>
      <h3>Word Detective</h3>
      <p>Solve fun vocabulary puzzles and discover new words.</p>
    </div>

    <div className="feature-card">
      <span>🗣️</span>
      <h3>SpeakQuest</h3>
      <p>Practise everyday conversations through exciting scenarios.</p>
    </div>

   <div className="feature-card">
  <span>📖</span>
  <h3>StoryWorld</h3>
  <p>Explore interactive stories and make your own choices.</p>
  <button onClick={() => setShowStoryWorld(true)}>
    Start Story →
  </button>
</div>

    <div className="feature-card">
      <span>🏆</span>
      <h3>Daily Quest</h3>
      <p>Complete daily challenges, earn points and unlock badges.</p>
    </div>

  </div>
</section>
<section className="culture-section">
  <h2>Explore the World of Cultures 🌍</h2>

  <p className="section-description">
    Discover traditions, delicious food, festivals and fascinating lifestyles.
  </p>

  <div className="culture-container">

    <div className="culture-card">
      <span>🇯🇵</span>
      <h3>Japan</h3>
      <p>Discover cherry blossoms, anime and beautiful traditions.</p>
      <button onClick={() => setShowCulture(true)}>
  Explore Culture
</button>
    </div>

    <div className="culture-card">
      <span>🇫🇷</span>
      <h3>France</h3>
      <p>Experience French cuisine, art and elegant lifestyles.</p>
      <button onClick={() => setShowCulture(true)}>
  Explore Culture
</button>
    </div>

    <div className="culture-card">
      <span>🇮🇳</span>
      <h3>India</h3>
      <p>Explore colourful festivals, heritage and traditions.</p>
      <button onClick={() => setShowCulture(true)}>
  Explore Culture
</button>
    </div>

    <div className="culture-card">
      <span>🇪🇸</span>
      <h3>Spain</h3>
      <p>Discover flamenco, music and exciting celebrations.</p>
      <button onClick={() => setShowCulture(true)}>
  Explore Culture
</button>
    </div>

  </div>
</section>
<section className="quest-section">
  <h2>Your Daily Adventure Starts Here! 🎯</h2>

  <p className="section-description">
    Learn a little every day, collect rewards and become a language champion!
  </p>

  <div className="quest-stats">

    <div className="quest-box">
      <span>⭐</span>
      <h3>250</h3>
      <p>Total Points</p>
    </div>

    <div className="quest-box">
      <span>🔥</span>
      <h3>{learningStreak} Days</h3>
<p>Learning Streak 🔥</p>
    </div>

    <div className="quest-box">
      <span>🏅</span>
      <h3>5</h3>
      <p>Badges Earned</p>
    </div>

  </div>

  <div className="daily-challenge">
    <h3>🌟 Today's Challenge</h3>
    <p>Learn 5 new French words today!</p>
    <button>Start Challenge</button>
  </div>

  <div className="badges-section">
    <h3>🏆 Achievement Badges</h3>

    <div className="badge-container">
      <span>🌱 Beginner</span>
      <span>🔥 Streak Master</span>
      <span>📚 Word Explorer</span>
      <span>🌍 Culture Lover</span>
    </div>
  </div>
</section>
<footer className="footer">
  <h2>🌍 LinguaQuest</h2>

  <p>Learn Languages. Explore Cultures. Unlock New Worlds.</p>

  <div className="footer-links">
    <a href="#">Home</a>
    <a href="#">Explore</a>
    <a href="#">Culture</a>
    <a href="#">Daily Quest</a>
  </div>

  <p className="copyright">
    © 2026 LinguaQuest. All Rights Reserved.
  </p>
</footer>
</div>
  )
}

export default App