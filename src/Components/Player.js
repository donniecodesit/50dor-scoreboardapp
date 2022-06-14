import React, { PureComponent } from "react";
import Icon from "./Icon";
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    const { name, id, index, score, removePlayer, changeScore, isHighScore } =
      this.props;
    return (
      <div className="player">
        <div className="player-name">
          <button className="player-remove" onClick={() => removePlayer(id)}>
            X
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </div>
        <div className="player-score">
          <Counter score={score} index={index} changeScore={changeScore} />
        </div>
      </div>
    );
  }
}

export default Player;
