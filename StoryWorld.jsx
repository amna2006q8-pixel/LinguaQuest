import { useState } from 'react'
import './StoryWorld.css'

function StoryWorld({ onBack }) {
  const [step, setStep] = useState(0)
  const [points, setPoints] = useState(0)

  const stories = [
    {
      title: 'A Day in Paris 🇫🇷',
      question: 'You are visiting Paris. What do you say when you meet someone?',
      options: ['Bonjour', 'Gracias', 'Hola'],
      answer: 'Bonjour'
    },
    {
      title: 'At a French Café 🥐',
      question: 'You want to thank the waiter. What do you say?',
      options: ['Au revoir', 'Merci', 'Hola'],
      answer: 'Merci'
    }
  ]

  const story = stories[step]

  function chooseAnswer(option) {
    if (option === story.answer) {
      setPoints(points + 5)
    }
    setStep(step + 1)
  }

  return (
    <div className="story-page">
      <button onClick={onBack}>← Back</button>

      <h1>📖 StoryWorld</h1>
      <p>Make choices and explore new worlds!</p>

      {step < stories.length ? (
        <div className="story-card">
          <h2>{story.title}</h2>
          <h3>{story.question}</h3>

          {story.options.map(option => (
            <button key={option} onClick={() => chooseAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="story-card">
          <h2>🎉 Story Completed!</h2>
          <h3>You earned {points} points!</h3>
          <button onClick={onBack}>Back to Dashboard</button>
        </div>
      )}
    </div>
  )
}

export default StoryWorld