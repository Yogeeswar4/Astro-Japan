import React, { useState, useEffect } from "react";
import peakpx from '../assets/peakpx.jpg';  // adjust path if needed

const dailyHoroscopes = {
  Aries: {
    text: `Today you might feel a surge of energy and courage, Aries. It's a perfect time to tackle those projects you've been putting off. Your confidence will inspire others around you, but be mindful of rushing into decisions. Balance boldness with patience.`,
    luckyColor: "Red",
    luckyNumber: 7,
  },
  Taurus: {
    text: `Patience and persistence are your allies today, Taurus. You may encounter some delays, but your steady approach will see you through. Enjoy some comfort and surround yourself with calming earth tones to boost your mood.`,
    luckyColor: "Green",
    luckyNumber: 4,
  },
  Gemini: {
    text: `Communication flows easily today, Gemini. Use your wit and charm to connect with new people or resolve any misunderstandings. Embrace variety and stay curious, but avoid overcommitting your energy to too many things at once.`,
    luckyColor: "Yellow",
    luckyNumber: 3,
  },
  Cancer: {
    text: `Your nurturing nature shines, Cancer. Take time to care for yourself and loved ones. Emotional intuition will guide you, especially in sensitive conversations. Soft pastels and cozy environments will recharge your spirit.`,
    luckyColor: "Silver",
    luckyNumber: 2,
  },
  Leo: {
    text: `Your charisma is magnetic today, Leo. Shine bright in social settings and take the lead when opportunity calls. However, be open to feedback and avoid dominating conversations. Gold hues will enhance your confidence.`,
    luckyColor: "Gold",
    luckyNumber: 1,
  },
  Virgo: {
    text: `Focus on details and organization, Virgo. Your analytical mind will help you solve tricky problems. Avoid being overly critical of yourself or others. Neutral and clean colors keep your mind clear and focused.`,
    luckyColor: "Navy Blue",
    luckyNumber: 8,
  },
  Libra: {
    text: `Harmony is your goal today, Libra. Seek balance in relationships and decision-making. Your diplomacy skills will help smooth over any conflicts. Balanced tones in your wardrobe will keep your energy centered.`,
    luckyColor: "Pink",
    luckyNumber: 6,
  },
  Scorpio: {
    text: `Intense emotions may arise, Scorpio. Trust your intuition but be cautious with secrets and vulnerabilities. Deep colors and mystery will fuel your passion and protect your energy.`,
    luckyColor: "Black",
    luckyNumber: 9,
  },
  Sagittarius: {
    text: `Adventure calls, Sagittarius! Embrace opportunities for exploration and learning. Keep an open heart and mind, and you'll discover new perspectives. Bold prints and vibrant colors will keep your spirit energized.`,
    luckyColor: "Purple",
    luckyNumber: 5,
  },
  Capricorn: {
    text: `Discipline and hard work are rewarded today, Capricorn. Focus on your goals but remember to take breaks and maintain balance. Classic styles and structured outfits will boost your professional presence.`,
    luckyColor: "Brown",
    luckyNumber: 10,
  },
  Aquarius: {
    text: `Innovation and originality lead the way, Aquarius. Don't be afraid to think outside the box and share your ideas. Unique and futuristic fashion choices will inspire creativity.`,
    luckyColor: "Turquoise",
    luckyNumber: 11,
  },
  Pisces: {
    text: `Your creativity flows freely today, Pisces. Express yourself through art, music, or writing. Be mindful of your boundaries and protect your energy. Dreamy and flowy outfits in soft hues will complement your mood.`,
    luckyColor: "Lavender",
    luckyNumber: 12,
  },
};

const zodiacSigns = Object.keys(dailyHoroscopes);

export default function DailyHoroscope() {
  const [sign, setSign] = useState("Aries");
  const [horoscope, setHoroscope] = useState(dailyHoroscopes["Aries"]);

  useEffect(() => {
    setHoroscope(dailyHoroscopes[sign]);
  }, [sign]);

  return (
   <div
  style={{
    fontFamily: "'Noto Serif JP', serif",
    minHeight: "100vh",
    padding: 20,
    color: "#fff",
    backgroundImage: `url(${peakpx})`,
    backgroundSize: "cover",        // full screen cover
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    imageRendering: "auto",         // try also "crisp-edges"
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundAttachment: "fixed",
  }}
>

      <h1
        style={{
          fontSize: "3rem",
          marginBottom: 20,
          color: "black",
          textShadow: "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700",
          fontWeight: "bold",
          fontFamily: "'Noto Serif JP', serif", // Ensure the font is applied
        }}
      >
        🌟 Daily Horoscope 🌟
      </h1>

      <select
        value={sign}
        onChange={(e) => setSign(e.target.value)}
        style={{
          padding: "12px 20px",
          fontSize: "1.2rem",
          borderRadius: 25,
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontWeight: "700",
          color: "#black",
          backgroundColor: "#FFD700",
          marginBottom: 30,
          minWidth: 220,
          boxShadow: "0 0 15px #ffd700",
          userSelect: "none",
        }}
      >
        {zodiacSigns.map((zodiac) => (
          <option key={zodiac} value={zodiac}>
            {zodiac}
          </option>
        ))}
      </select>

      <div
        style={{
          maxWidth: 700,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          padding: 30,
          borderRadius: 25,
          boxShadow: "0 0 40px #FFD700",
          fontSize: "1.3rem",
          lineHeight: 1.6,
          fontWeight: "600",
          userSelect: "text",
        }}
      >
        <p>{horoscope.text}</p>
        <p style={{ marginTop: 20 }}>
          <strong>Lucky Color:</strong>{" "}
          <span style={{ color: horoscope.luckyColor.toLowerCase() }}>
            {horoscope.luckyColor}
          </span>
        </p>
        <p>
          <strong>Lucky Number:</strong> {horoscope.luckyNumber}
        </p>
      </div>
    </div>
  );
}
