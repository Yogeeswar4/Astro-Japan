import React, { useState} from "react";

const zodiacSigns = [
  { name: "Aries", color: "#FF4E50", horoscope: "Aries are dynamic and full of energy. Their assertive nature makes them natural leaders, but they need to learn to be more patient and considerate." },
  // ... same zodiacSigns as before
  { name: "Pisces", color: "#9370DB", horoscope: "Pisces are compassionate and imaginative. They are dreamers who see the world through a different lens. While they are deeply intuitive, they may struggle with boundaries." },
];

const questions = [
  {
    question: "What is your zodiac sign?",
    options: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
  },
  // ... rest questions unchanged
];

const petalsCount = 40;

const FindYourQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [zodiacSign, setZodiacSign] = useState("");
  const [ripples, setRipples] = useState([]);

  // Add ripple effect on button click
  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, key: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => setRipples((prev) => prev.filter(r => r.key !== newRipple.key)), 600);
  };

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer]);
    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
      setZodiacSign(answers[0]);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setZodiacSign("");
  };

  return (
    <div
      style={{
        fontFamily: "'Noto Serif JP', serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, #f6d1e1 0%, #ffb6c1 100%)`,
        overflow: "hidden",
        position: "relative",
        color: "#4b004b",
        padding: "20px",
        animation: "pulseGlow 6s ease-in-out infinite",
        boxShadow: "0 0 40px 8px #d95ca4aa",
        borderRadius: "25px",
      }}
    >
      {/* Floating Petals */}
      {[...Array(petalsCount)].map((_, i) => {
        const size = 10 + Math.random() * 20;
        const style = {
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: size,
          height: size,
          background: `rgba(255, 182, 193, ${0.4 + Math.random() * 0.5})`,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          filter: "drop-shadow(0 0 3px #ffb6c1)",
          animation: `fallPetal ${10 + Math.random() * 15}s linear infinite`,
          animationDelay: `${Math.random() * 15}s`,
          opacity: 0.6,
          transform: `translateX(${Math.sin(i) * 10}px)`,
          pointerEvents: "none",
        };
        return <div key={i} style={style} />;
      })}

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textShadow: "0 0 15px #d95ca4",
          marginBottom: 30,
          userSelect: "none",
        }}
      >
        🌸 Astrology Quiz - Find Your Path 🌸
      </h1>

      {!showResult ? (
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
            background: "rgba(255 255 255 / 0.9)",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 0 40px #d95ca4cc",
            color: "#6a004a",
            animation: "fadeInUp 0.8s ease",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h2 style={{ color: "#b0326a", marginBottom: 30, fontFamily: "'Noto Serif JP', serif", fontWeight: "700" }}>
            {questions[currentQuestion].question}
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  addRipple(e);
                  handleAnswer(option);
                }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#d95ca4",
                  color: "white",
                  border: "none",
                  borderRadius: 30,
                  padding: "14px 36px",
                  fontSize: "1.15rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 0 16px #d95ca4",
                  transition: "background-color 0.3s ease",
                  userSelect: "none",
                  minWidth: 130,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c34993")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d95ca4")}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Ripple Effect Elements */}
          {ripples.map((r) => (
            <span
              key={r.key}
              style={{
                position: "absolute",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.7)",
                width: r.size,
                height: r.size,
                top: r.y,
                left: r.x,
                pointerEvents: "none",
                animation: "ripple 0.6s ease-out",
                transform: "scale(0)",
              }}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            maxWidth: "600px",
            width: "100%",
            background: "rgba(255 255 255 / 0.95)",
            borderRadius: "20px",
            padding: "40px 30px",
            boxShadow: "0 0 40px #d95ca4cc",
            color: "#6a004a",
            textAlign: "center",
            animation: "fadeInUp 0.8s ease",
          }}
        >
          <h2 style={{ color: "#b0326a", marginBottom: 20 }}>🌟 Your Astrology Report 🌟</h2>
          <p style={{ fontSize: "1.4rem", marginBottom: 30 }}>
            Based on your answers, your zodiac sign is <strong>{zodiacSign}</strong>!
          </p>
          <div
            style={{
              backgroundColor: zodiacSigns.find((s) => s.name === zodiacSign)?.color || "#d95ca4",
              padding: "24px",
              borderRadius: "15px",
              color: "#fff",
              fontSize: "1.2rem",
              boxShadow: `0 0 25px ${zodiacSigns.find((s) => s.name === zodiacSign)?.color || "#d95ca4"}`,
              lineHeight: 1.6,
            }}
          >
            <p>{zodiacSigns.find((s) => s.name === zodiacSign)?.horoscope || "No prediction available."}</p>
          </div>
          <button
            onClick={handleRestart}
            style={{
              marginTop: 40,
              padding: "14px 36px",
              borderRadius: 30,
              backgroundColor: "#b0326a",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 0 22px #b0326a",
              userSelect: "none",
              fontSize: "1.1rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9f2757")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#b0326a")}
          >
            Restart Quiz
          </button>
        </div>
      )}

      <style>{`
        @keyframes fallPetal {
          0% { transform: translateY(-20px) rotate(0deg); opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 40px 8px #d95ca4aa; }
          50% { box-shadow: 0 0 60px 12px #ff8fc1bb; }
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FindYourQuiz;
