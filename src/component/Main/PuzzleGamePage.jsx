import React, { useState } from "react";

// Simple sliding puzzle (3x3)
function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isSolved(tiles) {
  return tiles.every((tile, idx) => tile === idx + 1 || (idx === 8 && tile === null));
}

export default function PuzzleGamePage() {
  const [tiles, setTiles] = useState(() => shuffle([1,2,3,4,5,6,7,8,null]));
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleTileClick = (idx) => {
    if (gameOver) return;
    const emptyIdx = tiles.indexOf(null);
    const validMoves = [emptyIdx-1, emptyIdx+1, emptyIdx-3, emptyIdx+3];
    if (validMoves.includes(idx) &&
      ((Math.abs(emptyIdx-idx) === 1 && Math.floor(emptyIdx/3) === Math.floor(idx/3)) || Math.abs(emptyIdx-idx) === 3)) {
      const newTiles = tiles.slice();
      newTiles[emptyIdx] = newTiles[idx];
      newTiles[idx] = null;
      setTiles(newTiles);
      setMoves(m => m+1);
      if (isSolved(newTiles)) setGameOver(true);
    }
  };

  const handleRestart = () => {
    setTiles(shuffle([1,2,3,4,5,6,7,8,null]));
    setMoves(0);
    setGameOver(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 16px #ee0979", padding: 32 }}>
      <h2 style={{ color: "#ee0979", textAlign: "center" }}>Sliding Puzzle Game</h2>
      <div style={{ textAlign: "center", marginBottom: 18, color: "#222" }}>
        <b>Instructions:</b> Arrange the tiles in order (1-8) by sliding them into the empty space. Try to solve in the fewest moves!
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 70px)", gap: "8px", justifyContent: "center", margin: "24px auto" }}>
        {tiles.map((tile, idx) => (
          <div
            key={idx}
            onClick={() => tile && handleTileClick(idx)}
            style={{
              width: 70,
              height: 70,
              background: tile ? "#ee0979" : "#ffd6e0",
              color: tile ? "#fff" : "#ee0979",
              fontSize: "2rem",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: tile ? "pointer" : "default",
              boxShadow: "0 2px 8px #ff6a00",
              transition: "background 0.3s",
              userSelect: "none"
            }}
          >
            {tile ? tile : ""}
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", color: "#ee0979", fontWeight: "bold", marginTop: 12 }}>Moves: {moves}</div>
      {gameOver && (
        <div style={{ marginTop: 24, textAlign: "center" }}>
          <h3 style={{ color: "#ff6a00" }}>Congratulations!</h3>
          <p style={{ color: "#ee0979" }}>You solved the puzzle in {moves} moves.</p>
          <button onClick={handleRestart} style={{ marginTop: 12, background: "#ee0979", color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer" }}>Play Again</button>
        </div>
      )}
    </div>
  );
}
