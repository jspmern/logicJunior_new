import React, { useState } from "react";
import './IQGames.css';
import MemoryMatchGame from "./MemoryMatchGame";

const games = [
  {
    id: 1,
    name: "Memory Match",
    description: "Find all matching pairs!",
    animation: "memory-animation"
  },
  // Add more games here as needed
];

export default function IQGames() {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(null);

  const handleStartGame = () => {
    setGameStarted(true);
    setScore(null);
  };

  const handleGameOver = (moves) => {
    setScore(moves);
    setGameStarted(false);
  };

  return (
    <div className="iqgames-footer">
      <h2 className="iqgames-title">IQ Games</h2>
      {!gameStarted ? (
        <div className="iqgames-list">
          {games.map((game) => (
            <div key={game.id} className={`iqgame-card ${game.animation}`}>
              <div className="iqgame-header">
                <span className="iqgame-name">{game.name}</span>
              </div>
              <div className="iqgame-desc">{game.description}</div>
              <button
                className="iqgame-play-btn"
                style={{
                  marginTop: 12,
                  padding: "8px 18px",
                  borderRadius: 8,
                  background: "linear-gradient(90deg,#ff6a00,#ee0979)",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px #ee0979"
                }}
                onClick={handleStartGame}
              >
                Play Game
              </button>
              {score !== null && (
                <div className="iqgame-score" style={{ marginTop: 10, color: "#ee0979", fontWeight: "bold" }}>
                  Game Over! Your Score: <span style={{ color: "#ff6a00", background: "#fff", borderRadius: 6, padding: "2px 8px" }}>{score}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <MemoryMatchGame onGameOver={handleGameOver} />
      )}
      <div className="iqgames-note">* Play a game and see your score after finishing!</div>
    </div>
  );
}
