import { useState } from 'react'
import './Learning.css'

const quizQuestions = {
French: [
{ word: 'Bonjour', options: ['Hello', 'Goodbye', 'Thank you', 'Sorry'], answer: 'Hello' },
{ word: 'Merci', options: ['Please', 'Thank you', 'Good night', 'Welcome'], answer: 'Thank you' },
{ word: 'Au revoir', options: ['Hello', 'Goodbye', 'Sorry', 'Please'], answer: 'Goodbye' },
{ word: 'S’il vous plaît', options: ['Thank you', 'Welcome', 'Please', 'Good night'], answer: 'Please' }
],

Spanish: [
{ word: 'Hola', options: ['Goodbye', 'Sorry', 'Hello', 'Please'], answer: 'Hello' },
{ word: 'Gracias', options: ['Thank you', 'Good morning', 'Welcome', 'Goodbye'], answer: 'Thank you' },
{ word: 'Adiós', options: ['Hello', 'Goodbye', 'Please', 'Sorry'], answer: 'Goodbye' },
{ word: 'Por favor', options: ['Thank you', 'Please', 'Welcome', 'Good night'], answer: 'Please' }
],

English: [
{ word: 'Hello', options: ['Hola', 'Bonjour', 'Hello', 'Gracias'], answer: 'Hello' },
{ word: 'Thank you', options: ['Merci', 'Gracias', 'Danke', 'Thank you'], answer: 'Thank you' },
{ word: 'Goodbye', options: ['Hello', 'Goodbye', 'Please', 'Welcome'], answer: 'Goodbye' },
{ word: 'Please', options: ['Sorry', 'Please', 'Thanks', 'Good night'], answer: 'Please' }
],

Arabic: [
{ word: 'مرحبا', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], answer: 'Hello' },
{ word: 'شكرا', options: ['Sorry', 'Thank you', 'Welcome', 'Good night'], answer: 'Thank you' },
{ word: 'مع السلامة', options: ['Hello', 'Goodbye', 'Please', 'Welcome'], answer: 'Goodbye' },
{ word: 'من فضلك', options: ['Thank you', 'Sorry', 'Please', 'Hello'], answer: 'Please' }
]
}

function Learning({ language, onBack, onScoreUpdate }) {
const questions = quizQuestions[language] || quizQuestions.French

const [current, setCurrent] = useState(0)
const [score, setScore] = useState(0)
const [selected, setSelected] = useState('')
const [finished, setFinished] = useState(false)
const [feedback, setFeedback] = useState(null)
const [answered, setAnswered] = useState(false)

const question = questions[current]

function checkAnswer() {
  if (!selected || answered) return

  const isCorrect = selected === question.answer
  const updatedScore = score + (isCorrect ? 5 : 0)

  setScore(updatedScore)
  onScoreUpdate(updatedScore)
  setAnswered(true)

  setFeedback(
    isCorrect
      ? '🎉 Correct! You earned 5 points.'
      : `❌ Incorrect! The correct answer is ${question.answer}.`
  )
}
function goToNextQuestion() {
  if (current === questions.length - 1) {
    setFinished(true)
  } else {
    setCurrent(current + 1)
  }

  setSelected('')
  setFeedback(null)
  setAnswered(false)
}

return (
<div className="learning-page">

  <div className="learning-header">
    <h2>🌍 LinguaQuest</h2>
    <button onClick={onBack}>← Dashboard</button>
  </div>

  <div className="quiz-card">

    {finished ? (
      <>
        <h1>🎉 Quest Completed!</h1>

        <div className="score-display">
          <p>YOUR TOTAL SCORE</p>
          <h2>{score} / 20</h2>
          <span>🏆 Points Earned</span>
        </div>

        <p>{score / 5} out of 4 correct answers!</p>
        <p>Great job! Keep exploring new languages.</p>

        <button onClick={() => {
          setCurrent(0)
          setScore(0)
          setSelected('')
          setFeedback(null)
setAnswered(false)
          setFinished(false)
        }}>
          Try Again
        </button>
      </>
    ) : (
      <>
        <span className="quiz-tag">🎮 Word Detective</span>

        <h1>{language} Word Challenge</h1>
        <h2>What does this word mean?</h2>

        <div className="word-box">
          <h2>{question.word}</h2>
          <p>{language}</p>
        </div>

        <p>Question {current + 1} of {questions.length}</p>

        <div className="options-container">
          {question.options.map((option) => (
            <button
              key={option}
              className={selected === option ? 'selected-option' : ''}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>
{feedback && (
  <p className={`quiz-feedback ${selected === question.answer ? 'correct' : 'incorrect'}`}>
    {feedback}
  </p>
)}
 {!answered ? (
  <button
    className="submit-answer"
    onClick={checkAnswer}
    disabled={!selected}
  >
    Submit Answer →
  </button>
) : (
  <button
    className="submit-answer"
    onClick={goToNextQuestion}
  >
    {current === questions.length - 1
      ? 'Finish Quest →'
      : 'Next Question →'}
  </button>
)}

      </>
    )}

  </div>
</div>

)
}

export default Learning