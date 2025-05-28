import React, { useState, useEffect, useRef } from "react";

// Zodiac signs data (fixed)
const zodiacSigns = [
  { name: "Aries", symbol: "♈", color: "#FF4E50", fashion: "Red & Bold looks", horoscope: "Today is a day for bold moves. Confidence will pay off." },
  { name: "Taurus", symbol: "♉", color: "#00A388", fashion: "Earth tones & Comfort wear", horoscope: "Patience brings you closer to your goals." },
  { name: "Gemini", symbol: "♊", color: "#FFBB00", fashion: "Bright colors & Fun accessories", horoscope: "Communication is your superpower today. Use it wisely." },
  { name: "Cancer", symbol: "♋", color: "#5DA9E9", fashion: "Soft pastels & Cozy fabrics", horoscope: "Take time to nurture yourself and others." },
  { name: "Leo", symbol: "♌", color: "#FFD700", fashion: "Golds & Glamorous styles", horoscope: "Your energy lights up the room — shine bright!" },
  { name: "Virgo", symbol: "♍", color: "#228B22", fashion: "Neutrals & Clean lines", horoscope: "Focus on the details; your precision is key." },
  { name: "Libra", symbol: "♎", color: "#FF69B4", fashion: "Balanced tones & Elegant wear", horoscope: "Seek harmony in relationships and decisions." },
  { name: "Scorpio", symbol: "♏", color: "#800020", fashion: "Dark colors & Mysterious vibes", horoscope: "Trust your intuition, it won’t lead you astray." },
  { name: "Sagittarius", symbol: "♐", color: "#FF7F50", fashion: "Adventure-ready & Bold prints", horoscope: "Explore new horizons with an open heart." },
  { name: "Capricorn", symbol: "♑", color: "#2F4F4F", fashion: "Classic & Structured styles", horoscope: "Discipline today will open doors tomorrow." },
  { name: "Aquarius", symbol: "♒", color: "#40E0D0", fashion: "Unique & Futuristic fashion", horoscope: "Innovation and originality will bring success." },
  { name: "Pisces", symbol: "♓", color: "#9370DB", fashion: "Flowy & Dreamy outfits", horoscope: "Creativity flows effortlessly — express yourself." },
];

// Lucky Number Generator
function LuckyNumberGenerator() {
  const [zodiacIndex, setZodiacIndex] = useState(0);
  const [luckyNumbers, setLuckyNumbers] = useState([]);

  useEffect(() => {
    const base = zodiacIndex + 1;
    let numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(((base * (i + 3) * 7) % 50) + 1);
    }
    setLuckyNumbers(numbers);
  }, [zodiacIndex]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎲 Your Lucky Numbers Today</h2>
      <label style={{ fontWeight: "600", marginBottom: 8, display: "block" }}>
        Select Your Zodiac Sign:
      </label>
      <select
        value={zodiacIndex}
        onChange={(e) => setZodiacIndex(Number(e.target.value))}
        style={{
          padding: "8px 12px",
          borderRadius: 8,
          fontSize: 16,
          marginBottom: 20,
          cursor: "pointer",
          outline: "none",
          border: `2px solid ${zodiacSigns[zodiacIndex].color}`,
          color: zodiacSigns[zodiacIndex].color,
          fontWeight: "700",
          backgroundColor: "rgba(255 255 255 / 0.1)",
          userSelect: "none",
          minWidth: 200,
        }}
      >
        {zodiacSigns.map((sign, i) => (
          <option key={sign.name} value={i}>
            {sign.name} {sign.symbol}
          </option>
        ))}
      </select>

      <p style={{ fontSize: "1.2rem", marginBottom: 10 }}>
        Based on your zodiac sign: <b>{zodiacSigns[zodiacIndex].name} {zodiacSigns[zodiacIndex].symbol}</b>
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        {luckyNumbers.map((num, i) => (
          <div key={i} style={{
            backgroundColor: zodiacSigns[zodiacIndex].color,
            borderRadius: "50%",
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "700",
            boxShadow: `0 0 10px ${zodiacSigns[zodiacIndex].color}`,
            color: "white",
            userSelect: "none",
          }}>{num}</div>
        ))}
      </div>
      <p style={{ marginTop: 15, fontStyle: "italic", color: "#ddd" }}>
        Keep these numbers close and see what luck unfolds!
      </p>
    </div>
  );
}

// Zodiac Fashion Style Guide
function FashionStyleGuide() {
  const [zodiacIndex, setZodiacIndex] = useState(0);
  const [bgColor, setBgColor] = useState(zodiacSigns[0].color);

  useEffect(() => {
    const day = new Date().getDate();
    const baseColor = zodiacSigns[zodiacIndex].color;
    setBgColor(day % 2 === 0 ? baseColor : "#1b1b2f");
  }, [zodiacIndex]);

  return (
    <div style={{
      padding: 30,
      borderRadius: 25,
      background: `radial-gradient(circle at center, ${bgColor}55, #000a22cc)`,
      color: "#fff",
      textAlign: "center",
      boxShadow: `0 0 40px ${bgColor}`,
      userSelect: "none",
      maxWidth: 480,
      margin: "0 auto",
      fontFamily: "'Georgia', serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle starry overlay */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `url("https://www.transparenttextures.com/patterns/stardust.png") repeat`,
        opacity: 0.15,
        pointerEvents: "none",
        borderRadius: 25,
      }} />

      <label style={{ fontWeight: "700", marginBottom: 8, display: "block", color: "#fff", position: "relative", zIndex: 2 }}>
        Select Your Zodiac Sign:
      </label>
      <select
        value={zodiacIndex}
        onChange={(e) => setZodiacIndex(Number(e.target.value))}
        style={{
          padding: "10px 14px",
          borderRadius: 12,
          fontSize: 18,
          marginBottom: 30,
          cursor: "pointer",
          outline: "none",
          border: `3px solid ${zodiacSigns[zodiacIndex].color}`,
          color: zodiacSigns[zodiacIndex].color,
          fontWeight: "700",
          backgroundColor: "rgba(255 255 255 / 0.12)",
          userSelect: "none",
          minWidth: 220,
          boxShadow: `0 0 12px ${zodiacSigns[zodiacIndex].color}`,
          position: "relative",
          zIndex: 2,
          transition: "all 0.3s ease",
        }}
      >
        {zodiacSigns.map((sign, i) => (
          <option key={sign.name} value={i}>
            {sign.name} {sign.symbol}
          </option>
        ))}
      </select>

      <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: "700", fontSize: "2rem", marginBottom: 15, position: "relative", zIndex: 2 }}>
        👗 Zodiac Fashion Style Guide
      </h2>
      <p style={{ fontSize: "1.4rem", margin: "15px 0", position: "relative", zIndex: 2 }}>
        Your sign: <b>{zodiacSigns[zodiacIndex].name} {zodiacSigns[zodiacIndex].symbol}</b>
      </p>
      <p style={{ fontSize: "1.15rem", fontStyle: "italic", position: "relative", zIndex: 2 }}>
        Today’s fashion tip:<br />
        <em>{zodiacSigns[zodiacIndex].fashion}</em>
      </p>
      <div style={{ marginTop: 25, position: "relative", zIndex: 2 }}>
        <img
          src={`https://www.astrology-zodiac-signs.com/images/${zodiacSigns[zodiacIndex].name.toLowerCase()}.png`}
          alt={`${zodiacSigns[zodiacIndex].name} symbol`}
          style={{
            width: 110,
            filter: "drop-shadow(0 0 15px white) drop-shadow(0 0 8px #FFF8)",
            transition: "transform 0.5s ease",
            borderRadius: 15,
            backgroundColor: "#00000040"
          }}
          onError={e => e.target.style.display = "none"}
        />
      </div>
    </div>
  );
}

// Horoscope Wheel Spinner
function HoroscopeWheelSpinner() {
  const [spinning, setSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setSelectedIndex(null);
    const spins = Math.floor(Math.random() * 4) + 5; // 5 to 8 spins
    const randomIndex = Math.floor(Math.random() * zodiacSigns.length);
    const rotation = 360 * spins + (randomIndex * (360 / zodiacSigns.length));

    if (wheelRef.current) {
      wheelRef.current.style.transition = "transform 4.5s cubic-bezier(0.33, 1, 0.68, 1)";
      wheelRef.current.style.transform = `rotate(${rotation}deg)`;
    }

    setTimeout(() => {
      setSpinning(false);
      setSelectedIndex(randomIndex);
      if (wheelRef.current) {
        wheelRef.current.style.transition = "none";
        wheelRef.current.style.transform = `rotate(${randomIndex * (360 / zodiacSigns.length)}deg)`;
      }
    }, 4600);
  };

  const getSegmentFill = (color, index) => `url(#grad${index})`;

  return (
    <div style={{ textAlign: "center", maxWidth: 350, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 12, fontFamily: "'Playfair Display', serif" }}>Horoscope Wheel Spinner</h2>
      <div style={{ position: "relative", margin: "20px auto", width: 320, height: 320, boxShadow: "0 0 30px #0008", borderRadius: "50%", background: "radial-gradient(circle at center, #120c38, #000)" }}>
        <svg
          ref={wheelRef}
          width="320"
          height="320"
          viewBox="0 0 300 300"
          style={{ borderRadius: "50%", cursor: spinning ? "wait" : "pointer" }}
          aria-label="Horoscope Wheel"
          onClick={spinWheel}
        >
          <defs>
            {zodiacSigns.map((sign, idx) => (
              <radialGradient id={`grad${idx}`} key={idx} cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor={sign.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor="#000" stopOpacity="0.9" />
              </radialGradient>
            ))}
          </defs>

          {zodiacSigns.map((sign, idx) => {
            const angle = 360 / zodiacSigns.length;
            const startAngle = idx * angle;
            const largeArcFlag = angle > 180 ? 1 : 0;

            const radius = 150;
            const rad = Math.PI / 180;
            const x1 = radius + radius * Math.cos(rad * startAngle);
            const y1 = radius + radius * Math.sin(rad * startAngle);
            const x2 = radius + radius * Math.cos(rad * (startAngle + angle));
            const y2 = radius + radius * Math.sin(rad * (startAngle + angle));

            const pathData = `M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2} Z`;

            return (
              <path
                key={idx}
                d={pathData}
                fill={getSegmentFill(sign.color, idx)}
                stroke="#311b70"
                strokeWidth="3"
                filter="url(#glow)"
              />
            );
          })}

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8A2BE2" floodOpacity="0.6" />
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#6A5ACD" floodOpacity="0.4" />
          </filter>

          {zodiacSigns.map((sign, idx) => {
            const angle = (idx * (360 / zodiacSigns.length)) + (360 / (2 * zodiacSigns.length));
            const rad = (angle * Math.PI) / 180;
            const textRadius = 100;
            const x = 150 + textRadius * Math.cos(rad);
            const y = 150 + textRadius * Math.sin(rad);

            return (
              <text
                key={idx}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="24"
                fontWeight="700"
                fill="#fff"
                style={{ userSelect: "none", filter: "drop-shadow(0 0 4px #6A5ACD)" }}
              >
                {sign.symbol}
              </text>
            );
          })}
        </svg>

        {/* Fancy pointer */}
        <div style={{
          position: "absolute",
          top: 8,
          left: "50%",
          width: 0,
          height: 0,
          borderLeft: "18px solid transparent",
          borderRight: "18px solid transparent",
          borderBottom: "36px solid #FFD700",
          filter: "drop-shadow(0 0 5px #FFD700)",
          transform: "translateX(-50%)",
          borderRadius: 4,
          zIndex: 10,
          pointerEvents: "none",
          animation: spinning ? "pulse 1.5s infinite" : "none"
        }} />

      </div>

      <button
        onClick={spinWheel}
        disabled={spinning}
        style={{
          marginTop: 20,
          padding: "16px 32px",
          borderRadius: 30,
          backgroundColor: "#6A5ACD",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: spinning ? "wait" : "pointer",
          boxShadow: "0 0 25px #6A5ACD",
          userSelect: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={e => !spinning && (e.currentTarget.style.backgroundColor = "#483D8B")}
        onMouseLeave={e => !spinning && (e.currentTarget.style.backgroundColor = "#6A5ACD")}
        aria-label="Spin the Horoscope Wheel"
      >
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </button>

      {selectedIndex !== null && (
        <div style={{
          marginTop: 25,
          fontSize: "1.3rem",
          fontWeight: "600",
          color: zodiacSigns[selectedIndex].color,
          textShadow: `0 0 20px ${zodiacSigns[selectedIndex].color}`,
          maxWidth: 400,
          marginLeft: "auto",
          marginRight: "auto",
          userSelect: "none",
          backgroundColor: "rgba(255 255 255 / 0.1)",
          padding: 20,
          borderRadius: 20,
          fontFamily: "'Georgia', serif",
          boxShadow: `0 0 20px ${zodiacSigns[selectedIndex].color}`,
          transition: "opacity 0.5s ease",
        }}>
          <p>Your zodiac sign is <b>{zodiacSigns[selectedIndex].name}</b> {zodiacSigns[selectedIndex].symbol}</p>
          <p><em>{zodiacSigns[selectedIndex].horoscope}</em></p>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { filter: drop-shadow(0 0 5px #FFD700); }
          50% { filter: drop-shadow(0 0 15px #FFD700); }
        }
      `}</style>
    </div>
  );
}

// Zodiac Memory Match
function ZodiacMemoryMatch() {
  const deck = [...zodiacSigns, ...zodiacSigns].map((sign, idx) => ({
    id: idx,
    name: sign.name,
    symbol: sign.symbol,
    color: sign.color,
  }));

  const shuffleArray = (array) => {
    let arr = [...array];
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const [cards, setCards] = useState(shuffleArray(deck));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);

  const handleClick = (index) => {
    if (disabled || flipped.includes(index) || matched.includes(cards[index].id)) return;
    if (flipped.length === 0) {
      setFlipped([index]);
    } else if (flipped.length === 1) {
      setFlipped([flipped[0], index]);
      setDisabled(true);
      setMoves(moves + 1);

      setTimeout(() => {
        const first = cards[flipped[0]];
        const second = cards[index];
        if (first.name === second.name) {
          setMatched([...matched, first.id]);
        }
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(deck));
    setFlipped([]);
    setMatched([]);
    setDisabled(false);
    setMoves(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Zodiac Memory Match ♒️</h2>
      <p style={{ marginBottom: 15 }}>Find all matching zodiac pairs!</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 70px)", justifyContent: "center", gap: "12px" }}>
        {cards.map((card, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(card.id);
          return (
            <div
              key={card.id + "-" + i}
              onClick={() => handleClick(i)}
              style={{
                width: 70,
                height: 90,
                borderRadius: 10,
                backgroundColor: isFlipped ? card.color : "#444",
                color: "white",
                fontWeight: "bold",
                fontSize: 26,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: isFlipped ? `0 0 10px ${card.color}` : "none",
                userSelect: "none",
                transition: "background-color 0.3s ease"
              }}
              aria-label={`Card ${card.name} ${isFlipped ? "flipped" : "face down"}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") handleClick(i); }}
            >
              {isFlipped ? card.symbol : "❓"}
            </div>
          );
        })}
      </div>
      <p style={{ marginTop: 20 }}>Moves: {moves}</p>
      <button
        onClick={resetGame}
        style={{ padding: "10px 20px", marginTop: 10, cursor: "pointer", borderRadius: 10 }}
      >
        Restart Game
      </button>
    </div>
  );
}

// Main container & navigation with centered buttons and refined styles
export default function ZodiacGamesPage() {
  const [activeGame, setActiveGame] = useState(null);

  const containerStyle = {
    minHeight: "100vh",
    fontFamily: "'Noto Serif JP', serif",
    background: "linear-gradient(135deg, #2c0a3e, #4a1a6b, #6b2b9a)",
    color: "#e0e0e0",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",  // center vertically as well
    textAlign: "center",
  };

  const navButtonStyle = {
    padding: "16px 32px",
    margin: "12px",
    borderRadius: 30,
    background: "linear-gradient(135deg, #4B0082, #8A2BE2)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 20px #8A2BE2",
    border: "none",
    minWidth: 200,
    fontSize: 18,
    userSelect: "none",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  const realCardsButtonStyle = {
    ...navButtonStyle,
    background: "linear-gradient(135deg, #FF69B4, #FF1493)", // Pink gradient
    boxShadow: "0 0 25px #FF69B4, 0 0 40px #FF1493",
  };

  const handleRealCardsClick = () => {
    window.open("https://www.free-tarot-reading.net/free", "_blank", "noopener,noreferrer");
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: 25, userSelect: "none" }}>🔮 Zodiac Fun Games 🔮</h1>

      {!activeGame ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 800,
          }}
        >
          <button
            style={navButtonStyle}
            onClick={() => setActiveGame("lucky")}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #6A5ACD, #483D8B)";
              e.currentTarget.style.boxShadow = "0 0 25px #6A5ACD";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #4B0082, #8A2BE2)";
              e.currentTarget.style.boxShadow = "0 0 20px #8A2BE2";
            }}
          >
            Lucky Number Generator
          </button>
          <button
            style={navButtonStyle}
            onClick={() => setActiveGame("fashion")}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #6A5ACD, #483D8B)";
              e.currentTarget.style.boxShadow = "0 0 25px #6A5ACD";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #4B0082, #8A2BE2)";
              e.currentTarget.style.boxShadow = "0 0 20px #8A2BE2";
            }}
          >
            Zodiac Fashion Style Guide
          </button>
          <button
            style={navButtonStyle}
            onClick={() => setActiveGame("memory")}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #6A5ACD, #483D8B)";
              e.currentTarget.style.boxShadow = "0 0 25px #6A5ACD";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #4B0082, #8A2BE2)";
              e.currentTarget.style.boxShadow = "0 0 20px #8A2BE2";
            }}
          >
            Zodiac Memory Match
          </button>
          <button
            style={navButtonStyle}
            onClick={() => setActiveGame("wheel")}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #6A5ACD, #483D8B)";
              e.currentTarget.style.boxShadow = "0 0 25px #6A5ACD";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #4B0082, #8A2BE2)";
              e.currentTarget.style.boxShadow = "0 0 20px #8A2BE2";
            }}
          >
            Horoscope Wheel Spinner
          </button>
          <button
            style={realCardsButtonStyle}
            onClick={handleRealCardsClick}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 0 40px #FF69B4, 0 0 60px #FF1493";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "0 0 25px #FF69B4, 0 0 40px #FF1493";
              e.currentTarget.style.transform = "scale(1)";
            }}
            aria-label="Go to Real Cards Find Tarot Reading"
          >
            RealCardsFind
          </button>
        </div>
      ) : (
        <div style={{ marginTop: 35, width: "100%", maxWidth: 640 }}>
          <button
            onClick={() => setActiveGame(null)}
            style={{
              marginBottom: 25,
              backgroundColor: "#8A2BE2",
              borderRadius: 25,
              padding: "10px 24px",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              border: "none",
              boxShadow: "0 0 18px #8A2BE2",
              userSelect: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6A5ACD")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#8A2BE2")}
          >
            ← Back to Games
          </button>
          {activeGame === "lucky" && <LuckyNumberGenerator />}
          {activeGame === "fashion" && <FashionStyleGuide />}
          {activeGame === "memory" && <ZodiacMemoryMatch />}
          {activeGame === "wheel" && <HoroscopeWheelSpinner />}
        </div>
      )}
    </div>
  );
}
