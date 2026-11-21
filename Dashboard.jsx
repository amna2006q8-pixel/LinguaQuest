
import './Dashboard.css'

function Dashboard({ onLogout, onStartLearning, totalPoints, onDailyQuest }) {
  return (
   <div className="dashboard-page">

      <nav className="dashboard-nav">
        <h2>🌍 LinguaQuest</h2>
        <button onClick={onLogout}>Logout</button>
      </nav>

      <section className="welcome-section">
        <h1>Welcome to Your Learning Journey! ✨</h1>
        <p>Choose a language and start exploring a new world.</p>
      </section>
      <button onClick={onDailyQuest}>
  🎯 Explore Daily Quest
</button>

      <section className="learning-section">
        <h2>Choose Your Language 🌍</h2>

        <div className="learning-container">

          <div className="learning-card">
            <span>🇬🇧</span>
            <h3>English</h3>
            <p>Learn everyday English words.</p>
            <button onClick={() => onStartLearning('English')}>
  Start Learning
</button>
          </div>

          <div className="learning-card">
            <span>🇫🇷</span>
            <h3>French</h3>
            <p>Discover beautiful French vocabulary.</p>
            <button onClick={() => onStartLearning('French')}>
  Start Learning
</button>
          </div>

          <div className="learning-card">
            <span>🇪🇸</span>
            <h3>Spanish</h3>
            <p>Explore the Spanish language.</p>
           <button onClick={() => onStartLearning('Spanish')}>
  Start Learning
</button> 
          </div>

          <div className="learning-card">
            <span>🇸🇦</span>
            <h3>Arabic</h3>
            <p>Learn useful Arabic expressions.</p>
            <button onClick={() => onStartLearning('Arabic')}>
  Start Learning
</button>
          </div>

        </div>
      </section>

      <section className="progress-section">
        <h2>Your Learning Progress 🏆</h2>

        <div className="progress-card">
          <h3>⭐ {totalPoints} Points</h3>
          <p>Total points earned</p>
        </div>

        <div className="progress-card">
          <h3>📚 0 Words</h3>
          <p>Words learned</p>
        </div>
      </section>

    </div>
  )
}

export default Dashboard
