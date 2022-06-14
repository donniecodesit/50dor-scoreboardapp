import React from "react";

export default function Counter({ score, index, changeScore }) {
  return (
    <div className="score">
      <button
        className="score-button decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      <div className="score-result">{score}</div>
      <button
        className="score-button increment"
        onClick={() => changeScore(index, 1)}
      >
        +
      </button>
    </div>
  );
}
