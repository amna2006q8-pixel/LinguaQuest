import './CultureExplore.css'

function CultureExplore({ onBack }) {
  const cultures = [
    {
      country: 'Japan',
      flag: '🇯🇵',
      food: 'Sushi 🍣',
      festival: 'Cherry Blossom Festival 🌸',
      fact: 'Japan is famous for anime, technology and beautiful temples.'
    },
    {
      country: 'France',
      flag: '🇫🇷',
      food: 'Croissant 🥐',
      festival: 'Bastille Day 🎆',
      fact: 'France is known for fashion, art and the Eiffel Tower.'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      food: 'Biryani 🍛',
      festival: 'Diwali 🪔',
      fact: 'India celebrates many colourful festivals and has diverse traditions.'
    },
    {
      country: 'Spain',
      flag: '🇪🇸',
      food: 'Paella 🥘',
      festival: 'La Tomatina 🍅',
      fact: 'Spain is famous for flamenco, music and lively celebrations.'
    }
  ]

  return (
    <div className="culture-explore">
      <header>
        <h2>🌍 LinguaQuest</h2>
        <button onClick={onBack}>← Back</button>
      </header>

      <h1>Explore World Cultures ✨</h1>
      <p className="culture-intro">
        Discover amazing traditions, food, festivals and facts!
      </p>

      <div className="culture-grid">
        {cultures.map((culture) => (
          <div className="explore-card" key={culture.country}>
            <span className="culture-flag">{culture.flag}</span>
            <h2>{culture.country}</h2>
            <p><strong>Famous Food:</strong> {culture.food}</p>
            <p><strong>Festival:</strong> {culture.festival}</p>
            <p>{culture.fact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CultureExplore