import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import shootingStar from '../assets/shooting-star.png';
import crystalBall from '../assets/crystal-ball-glow.png';
import './ProfilePage.css';

const destinyPredictions = [
  "🌠 A new opportunity is forming in the cosmos for you.",
  "🔮 Your spirit is awakening to its true destiny.",
  "💫 A hidden power within you is ready to shine!",
  "🌌 Energy shifts will bring unexpected joy.",
  "✨ The universe is aligning you with your dreams.",
  "🌟 Your aura is radiating powerful energy!",
  "🌓 A celestial shift will transform your future.",
  "🪐 A guiding force is helping you navigate life!",
  "🌞 Cosmic enlightenment is within your reach!"
];

const cardPredictionsList = [
  "🌟 A new door will open soon for you.",
  "💫 Unexpected happiness is coming your way.",
  "🌌 Trust the journey; stars guide you.",
  "🌞 New friendships bring fresh energy.",
  "🌙 Reflect and embrace your inner peace."
];

// Helper to get random prediction avoiding repeat index
const getRandomPrediction = (list, excludeIndex = null) => {
  if (list.length === 1) return { text: list[0], index: 0 };
  let index;
  do {
    index = Math.floor(Math.random() * list.length);
  } while (index === excludeIndex);
  return { text: list[index], index };
};

const ProfilePage = () => {
  const { username, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [destinyPrediction, setDestinyPrediction] = useState('');
  const [showDestinyPrediction, setShowDestinyPrediction] = useState(false);
  const [lastDestinyIndex, setLastDestinyIndex] = useState(null);

  const [showCardGame, setShowCardGame] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [cardPredictions, setCardPredictions] = useState(Array(cardPredictionsList.length).fill(null));
  const [lastCardPredictionsIndex, setLastCardPredictionsIndex] = useState(Array(cardPredictionsList.length).fill(null));

  useEffect(() => {
    if (!username) {
      navigate('/');
    }
  }, [username, navigate]);

  const generateDestinyPrediction = () => {
    if (!fullName.trim()) {
      alert("Please enter your full name to receive your astrology reading.");
      return;
    }
    const { text, index } = getRandomPrediction(destinyPredictions, lastDestinyIndex);
    setDestinyPrediction(text);
    setLastDestinyIndex(index);
    setShowDestinyPrediction(true);
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    // Hide prediction when user starts typing new name
    if (showDestinyPrediction) setShowDestinyPrediction(false);
  };

  const handleCardSelect = (index) => {
    if (selectedCardIndex === index) {
      // On re-click same card, assign new random prediction for that card
      const { text, index: newPredIndex } = getRandomPrediction(cardPredictionsList, lastCardPredictionsIndex[index]);
      const newCardPreds = [...cardPredictions];
      newCardPreds[index] = text;
      setCardPredictions(newCardPreds);

      const newLastIndices = [...lastCardPredictionsIndex];
      newLastIndices[index] = newPredIndex;
      setLastCardPredictionsIndex(newLastIndices);
    } else {
      // New card selected first time
      const { text, index: newPredIndex } = getRandomPrediction(cardPredictionsList, lastCardPredictionsIndex[index]);
      const newCardPreds = Array(cardPredictionsList.length).fill(null);
      newCardPreds[index] = text;
      setCardPredictions(newCardPreds);

      const newLastIndices = Array(cardPredictionsList.length).fill(null);
      newLastIndices[index] = newPredIndex;
      setLastCardPredictionsIndex(newLastIndices);

      setSelectedCardIndex(index);
    }
  };

  // Reset states on toggle
  const resetAll = () => {
    setShowDestinyPrediction(false);
    setSelectedCardIndex(null);
    setDestinyPrediction('');
    setFullName('');
    setCardPredictions(Array(cardPredictionsList.length).fill(null));
    setLastCardPredictionsIndex(Array(cardPredictionsList.length).fill(null));
  };

  return (
    <div className="profile-container">
      <div className="zodiac-background" />
      <div className="pink-overlay" />
      <img src={shootingStar} alt="Shooting Star" className="shooting-star" />

      <div className="profile-card">
        <h1 className="glowing-title">🔮 {username}'s Astro Japan 🔮</h1>
        <p className="subtitle">The stars whisper their secrets to you...</p>

        <div className="toggle-buttons">
          <button
            className={!showCardGame ? 'active' : ''}
            onClick={() => {
              setShowCardGame(false);
              resetAll();
            }}
          >
            Reveal Your Destiny
          </button>
          <button
            className={showCardGame ? 'active' : ''}
            onClick={() => {
              setShowCardGame(true);
              resetAll();
            }}
          >
            Card Game
          </button>
        </div>

        {!showCardGame && (
          <>
            <div className="input-section">
              <label htmlFor="fullNameInput">Enter Your Full Name:</label>
              <input
                id="fullNameInput"
                type="text"
                placeholder="Your Full Name"
                value={fullName}
                onChange={handleNameChange}
              />
              <button
                className="predict-button"
                onClick={generateDestinyPrediction}
                disabled={!fullName.trim()}
              >
                🔮 Reveal My Destiny
              </button>
            </div>

            {showDestinyPrediction && (
              <div className="prediction-box">
                <img
                  src={crystalBall}
                  alt="Crystal Ball"
                  className="crystal-ball"
                  onClick={generateDestinyPrediction}
                  style={{ cursor: 'pointer' }}
                  title="Click to get a new prediction"
                />
                <h2 style={{ marginTop: 0 }}>📜 Your Future Awaits:</h2>
                <p className="prediction-text">{destinyPrediction}</p>
              </div>
            )}
          </>
        )}

        {showCardGame && (
          <>
            <p style={{ color: '#ADD8E6', marginBottom: '20px', fontWeight: '600' }}>
              Pick a card to reveal your prediction:
            </p>
            <div className="card-game">
              {cardPredictionsList.map((_, index) => (
                <div
                  key={index}
                  className={`card 
                    ${selectedCardIndex === index ? 'selected center-card' : ''} 
                    ${selectedCardIndex !== null && selectedCardIndex !== index ? 'hidden' : ''}`}
                  onClick={() => handleCardSelect(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCardSelect(index); }}
                  aria-label={`Card ${index + 1}`}
                >
                  <div className="card-front">❓</div>
                  <div className="card-back">{cardPredictions[index] || '...'}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <button
          className="logout-button spaced-logout"
          onClick={() => {
            logout();
            navigate('/');
          }}
        >
          🚀 Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
