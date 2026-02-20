import React, { useState, useEffect } from "react";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const op = ["+", "-", "×"][getRandomInt(0, 2)];
  let answer;
  if (op === "+") answer = a + b;
  else if (op === "-") answer = a - b;
  else answer = a * b;
  return { a, b, op, answer };
}

export default function QuickMathGame({ onGameOver }) {
  const [question, setQuestion] = useState(generateQuestion());
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
      if (onGameOver) onGameOver(score);
    }
  }, [timeLeft, gameOver, score, onGameOver]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(input) === question.answer) {
      setScore(score + 1);
    }
    setInput("");
    setQuestion(generateQuestion());
  };

  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 4px 16px #377dff", maxWidth: 400, margin: "32px auto" }}>
      <h2 style={{ color: "#377dff", textAlign: "center" }}>Quick Math Game</h2>
      {!gameOver ? (
        <>
          <div style={{ textAlign: "center", fontSize: "1.3rem", marginBottom: 18 }}>
            Time Left: <span style={{ color: "#ee0979", fontWeight: "bold" }}>{timeLeft}s</span>
          </div>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: 16 }}>
              {question.a} {question.op} {question.b} = ?
            </div>
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ fontSize: "1.2rem", padding: "8px 16px", borderRadius: 8, border: "1px solid #ee0979", marginBottom: 12 }}
              disabled={gameOver}
              required
            />
            <br />
            <button
              type="submit"
              style={{ padding: "8px 18px", borderRadius: 8, background: "linear-gradient(90deg,#377dff,#2ec4b6)", color: "#fff", border: "none", fontWeight: "bold", fontSize: "1rem", cursor: "pointer", marginTop: 8 }}
              disabled={gameOver}
            >
              Submit
            </button>
          </form>
          <div style={{ textAlign: "center", color: "#377dff", fontWeight: "bold", marginTop: 16 }}>
            Score: {score}
          </div>
        </>
      ) : (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <h3 style={{ color: "#ee0979" }}>Game Over!</h3>
          <p style={{ color: "#377dff" }}>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
}
