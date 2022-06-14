import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  handleStopWatch = () => {
    this.setState((previous) => ({
      isRunning: !previous.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }
  };

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();

      this.setState((previous) => ({
        previousTime: now,
        elapsedTime: previous.elapsedTime + (now - this.state.previousTime),
      }));
    }
  };

  handleReset = () => {
    this.setState({
      elapsedTime: 0,
    });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>StopWatch</h2>
        <span className="stopwatch-time">{seconds}s</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default StopWatch;
