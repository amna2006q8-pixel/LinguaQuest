
import { useState } from 'react'
import './DailyQuest.css'
function getTodayKey() {
  const now = new Date()

  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}
function DailyQuest({ onBack, onBonusPoints }) {
  const [completed, setCompleted] = useState(() => {
  return localStorage.getItem('dailyQuestDate') === getTodayKey()
})
 function completeDailyQuest() {
  if (localStorage.getItem('dailyQuestDate') === getTodayKey()) {
    return
  }

  localStorage.setItem('dailyQuestDate', getTodayKey())
  setCompleted(true)
  onBonusPoints(10)
}
  const [bonusPoints, setBonusPoints] = useState(() => {
  return Number(localStorage.getItem('dailyQuestPoints')) || 0
})

  return (
    <div className="daily-page">

      <div className="daily-header">
        <h2>🌍 LinguaQuest</h2>
        <button onClick={onBack}>← Dashboard</button>
      </div>

      <div className="daily-hero">
        <span>✨ YOUR DAILY ADVENTURE</span>
        <h1>Daily Quest 🎯</h1>
        <p>Complete a little challenge every day and grow your language skills!</p>
      </div>

      <div className="daily-card">
        <h2>🌟 Today's Challenge</h2>
        <h3>Learn 5 New French Words</h3>
        <p>Discover five useful French words and expand your vocabulary.</p>

        <div className="daily-reward">
          🏆 Reward: 10 Bonus Points
        </div>

        {completed ? (
          <div className="completed-message">
            🎉 Quest Completed!
            <p>You've earned 10 bonus points!</p>
          </div>
        ) : (
        <button onClick={completeDailyQuest}>
  Complete Daily Quest
</button>  
        )}
      </div>

      <div className="daily-stats">
        <div>
          <h2>🔥 1</h2>
          <p>Demo Streak</p>
        </div>

        <div>
          <h2>🏆 10</h2>
          <p>Bonus Points</p>
        </div>

        <div>
          <h2>🥇 1</h2>
          <p>Achievement</p>
        </div>
      </div>

    </div>
  )
}

export default DailyQuest
