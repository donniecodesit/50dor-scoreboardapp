import React from "react";

export default function Stats({ players }) {
  const totalPlayers = players.length;
  const totalPoints = players.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}
