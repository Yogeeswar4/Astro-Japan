import React, { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../UserContext';
import sakuraImage from '../assets/sakura.png';
import soundFile from '../assets/japanese-theme.mp3';
import './HomePage.css';

const HomePage = () => {
  const { username, updateUser } = useContext(UserContext);
  const [tempName, setTempName] = useState('');
  const [audio] = useState(new Audio(soundFile));
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(!username);
  const sakuraContainerRef = useRef(null);

  // Cherry blossom effect
  useEffect(() => {
    const sakuraContainer = sakuraContainerRef.current; // Capture ref value

    let interval;
    let timeout;

    const createSakura = () => {
      const sakura = document.createElement('div');
      sakura.classList.add('sakura');
      sakura.style.backgroundImage = `url(${sakuraImage})`;
      sakura.style.left = `${Math.random() * 100}vw`;
      sakura.style.animationDuration = `${Math.random() * 5 + 3}s`;
      if (sakuraContainer) {
        sakuraContainer.appendChild(sakura);
        setTimeout(() => sakura.remove(), 8000);
      }
    };

    interval = setInterval(createSakura, 300);

    // Stop sakura effect after 2 minutes (120000 ms)
    timeout = setTimeout(() => {
      clearInterval(interval);
      // Optionally, remove all remaining sakura petals
      if (sakuraContainer) {
        sakuraContainer.innerHTML = '';
      }
    }, 130000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (sakuraContainer) {
        sakuraContainer.innerHTML = '';
      }
    };
  }, []);

  // Handle audio autoplay with fade-out after 1 minute
  useEffect(() => {
    const enableAudio = () => {
      audio.volume = 0.3;
      audio.loop = false;
      audio.muted = isMuted;
      audio.play().catch(err => console.log('Autoplay failed:', err));

      setTimeout(() => {
        const fadeOutInterval = setInterval(() => {
          if (audio.volume > 0.01) {
            audio.volume = Math.max(0.01, audio.volume - 0.01);
          } else {
            audio.volume = 0.01;
            audio.pause();
            clearInterval(fadeOutInterval);
          }
        }, 200);
      }, 60000);

      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };

    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);

    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
    };
  }, [audio, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audio.muted = isMuted ? false : true;
    audio.volume = isMuted ? 0.3 : 0;
  };

  const handleModalSubmit = () => {
    if (tempName.trim()) {
      updateUser(tempName);
      setShowModal(false);
    } else {
      alert('Please enter your name.');
    }
  };

return (
  <div className="homepage">
    {/* Backgrounds and sakura */}
    <div className="homepage-bg-temple" />
    <div ref={sakuraContainerRef} className="sakura-container" style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1
    }} />

    <div className="homepage-content">
      <h1 className="homepage-title">🌸 Welcome to AstroJapan 🌸</h1>
      <p className="homepage-subtitle">
        Discover the wisdom of Japanese astrology and explore your destiny.
      </p>

      {showModal && (
        <div className="modal">
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <button onClick={handleModalSubmit}>Submit</button>
        </div>
      )}

      {!showModal && (
        <p className="welcome-message">
          Welcome, <span className="username">{username}</span>! 🌟
        </p>
      )}
    </div>

    {/* Mute button outside homepage-content for proper fixed positioning */}
    <button
      className="mute-button"
      onClick={toggleMute}
      aria-label="Toggle sound"
    >
      {isMuted ? '🔇' : '🔊'}
    </button>
  </div>
);


};

export default HomePage;