import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ZodiacPage from './pages/ZodiacPage';
import DailyHoroscope from './pages/HoroscopePage';
import FindYourQuiz from './pages/FindYourQuiz';
import FunGamesPage from './pages/FunGamesPage';
import { UserProvider } from './UserContext'; // Import the UserProvider
import './App.css';

const App = () => {
  return (
    <UserProvider> {/* Wrap the app with the UserProvider */}
      <Router>
        <Navbar />
        <div className="main-content"> {/* Add a wrapper for consistent styling */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/zodiac" element={<ZodiacPage />} />
            <Route path="/daily-horoscope" element={<DailyHoroscope />} />
            <Route path="/FindYourQuiz" element={<FindYourQuiz />} />
            <Route path="/fun-games" element={<FunGamesPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
