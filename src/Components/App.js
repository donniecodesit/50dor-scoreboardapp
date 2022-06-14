import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import "../App.css";

class App extends Component {
  state = {
    players: [
      { name: "Doug", id: 1, score: 0 },
      { name: "Velma", id: 2, score: 0 },
      { name: "Jonathan", id: 3, score: 0 },
    ],
  };

  prevPlayerId = 3;

  handleAddPlayer = (name) => {
    this.setState((previous) => {
      return {
        players: [
          ...previous.players,
          { name, score: 0, id: (this.prevPlayerId += 1) },
        ],
      };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((previous) => {
      return { players: previous.players.filter((player) => player.id !== id) };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState((previous) => ({
      score: (previous.players[index].score += delta),
    }));
  };

  getHighScore = () => {
    const scores = this.state.players.map((player) => player.score);
    const highScore = Math.max(...scores);
    return highScore ? highScore : null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="App">
        <Header title="Scoreboard App" players={this.state.players} />
        <div className="player-list">
          {this.state.players.map((player, index) => (
            <Player
              key={player.id.toString()}
              id={player.id}
              index={index}
              score={player.score}
              changeScore={this.handleScoreChange}
              name={player.name}
              removePlayer={this.handleRemovePlayer}
              isHighScore={highScore === player.score}
            />
          ))}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </div>
    );
  }
}

export default App;
