import React, { useState } from "react";
import MemoryMatchGame from "./Footer/IQGames/MemoryMatchGame";
import QuickMathGame from "./Footer/IQGames/QuickMathGame";

const games = [
  {
    id: 1,
    name: "Memory Match",
    description: "Find all matching pairs! Test your memory skills.",
    component: MemoryMatchGame,
    instructions: "Flip two cards at a time to find matching pairs. Try to finish in the fewest moves!"
  },
  {
    id: 2,
    name: "Quick Math",
    description: "Solve math problems quickly!",
    component: QuickMathGame,
    instructions: "Answer as many math questions as you can in 30 seconds. Each correct answer gives you a point!"
  }
];

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [score, setScore] = useState(null);

  const handleGameOver = (score) => {
    setScore(score);
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <h1 style={{ textAlign: "center", color: "#ee0979", marginBottom: 32 }}>Play IQ Games</h1>
      {!selectedGame ? (
        <div style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
          {games.map((game) => (
            <div key={game.id} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 4px 16px #ee0979", padding: 24, minWidth: 260 }}>
              <h2 style={{ color: "#ff6a00", marginBottom: 12 }}>{game.name}</h2>
              <p style={{ color: "#ee0979", marginBottom: 16 }}>{game.description}</p>
              <button
                style={{ padding: "10px 24px", fontSize: "1.1rem", borderRadius: 8, background: "linear-gradient(90deg,#ff6a00,#ee0979)", color: "#fff", border: "none", cursor: "pointer", marginBottom: 12 }}
                onClick={() => { setSelectedGame(game); setScore(null); }}
              >
                Start Game
              </button>
              <div style={{ fontSize: "0.95rem", color: "#222", marginTop: 8 }}><b>Instructions:</b> {game.instructions}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={() => { setSelectedGame(null); setScore(null); }} style={{ marginBottom: 18, background: "#ffd6e0", color: "#ee0979", border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer" }}>Back to Games</button>
          <h2 style={{ color: "#ff6a00", marginBottom: 12 }}>{selectedGame.name}</h2>
          <div style={{ fontSize: "1rem", color: "#222", marginBottom: 18 }}><b>Instructions:</b> {selectedGame.instructions}</div>
          <selectedGame.component onGameOver={handleGameOver} />
          {score !== null && (
            <div style={{ marginTop: 24, textAlign: "center", color: "#ee0979", fontWeight: "bold" }}>
              Game Over! Your Score: <span style={{ color: "#ff6a00", background: "#fff", borderRadius: 6, padding: "2px 8px" }}>{score}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
