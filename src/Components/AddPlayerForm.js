import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: "",
    badName: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      badName: "",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === "" || this.state.value.split("").every((char) => char === " ")) {
      this.setState({
        value: "",
        badName: "Name cannot be empty.",
      });
    } 
    else if (this.state.value.length > 12) {
        this.setState({
            value: this.state.value,
            badName: "Name should be 12 chars or less.",
        });
    }
    else {
      this.props.addPlayer(this.state.value);
      this.setState({
        value: "",
        badName: "",
      });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            placeholder="Enter Name"
            onChange={this.handleChange}
          />
          <input type="submit" value="Add Player" />
        </form>
        {this.state.badName && <p className="badName">{this.state.badName}</p>}
      </>
    );
  }
}

export default AddPlayerForm;
