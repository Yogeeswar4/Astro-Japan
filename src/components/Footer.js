import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Show footer if mouse near bottom 60px of viewport
      if (window.innerHeight - e.clientY <= 60) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : 'hidden'}`}>
      <p>© 2025 Japanese Astrology World | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
