import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => (
  <div className="theme-toggle">
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-button"
    >
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  </div>
);

export default ThemeToggle;