import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import './Navbar.css';

const Navbar = () => {
  const { username } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Show navbar if mouse near top 60px of viewport
      if (e.clientY <= 60) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo">🌸 AstroJapan 🌸</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/zodiac">Japanese Zodiac</Link></li>
        <li><Link to="/daily-horoscope">Daily Horoscope</Link></li>
        <li><Link to="/FindYourQuiz">FindYourQuiz</Link></li>
        <li><Link to="/fun-games">Fun Games</Link></li>
        {username && (
          <li><Link to="/profile">{username}'s Profile</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
