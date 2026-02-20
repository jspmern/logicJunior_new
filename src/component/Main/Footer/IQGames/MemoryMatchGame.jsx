import React, { useState } from "react";

const initialCards = [
  { id: 1, value: "A" },
  { id: 2, value: "B" },
  { id: 3, value: "A" },
  { id: 4, value: "B" },
];

function shuffle(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

export default function MemoryMatchGame({ onGameOver }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setCards(shuffle(initialCards));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameStarted(true);
    setGameOver(false);
  };

  const handleFlip = (idx) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;
    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].value === cards[second].value) {
        setMatched((m) => [...m, first, second]);
        setTimeout(() => {
          setFlipped([]);
          if (matched.length + 2 === cards.length) {
            setGameOver(true);
            setGameStarted(false);
            if (onGameOver) onGameOver(moves + 1);
          }
        }, 800);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 4px 16px #ee0979", maxWidth: 400, margin: "32px auto" }}>
      <h2 style={{ color: "#ee0979", textAlign: "center" }}>Memory Match Game</h2>
      {!gameStarted ? (
        <button onClick={startGame} style={{ padding: "10px 24px", fontSize: "1.1rem", borderRadius: 8, background: "linear-gradient(90deg,#ff6a00,#ee0979)", color: "#fff", border: "none", cursor: "pointer", margin: "16px auto", display: "block" }}>
          Start Game
        </button>
      ) : (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "12px", justifyContent: "center", margin: "24px 0" }}>
            {cards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => handleFlip(idx)}
                style={{
                  width: 60,
                  height: 60,
                  background: flipped.includes(idx) || matched.includes(idx) ? "#ee0979" : "#ffd6e0",
                  color: "#fff",
                  fontSize: "2rem",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: flipped.includes(idx) || matched.includes(idx) ? "default" : "pointer",
                  boxShadow: "0 2px 8px #ff6a00",
                  transition: "background 0.3s",
                }}
              >
                {flipped.includes(idx) || matched.includes(idx) ? card.value : "?"}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", color: "#ee0979", fontWeight: "bold" }}>Moves: {moves}</div>
        </>
      )}
      {gameOver && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <h3 style={{ color: "#ff6a00" }}>Game Over!</h3>
          <p style={{ color: "#ee0979" }}>You finished in {moves} moves.</p>
        </div>
      )}
    </div>
  );
}
