import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: "",
    badName: false,
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      badName: false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.value === "" ||
      this.state.value.split("").every((char) => char === " ")
    ) {
      this.setState({
        value: "",
        badName: true,
      });
    } else {
      this.props.addPlayer(this.state.value);
      this.setState({
        value: "",
        badName: false,
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
        {this.state.badName && <p className="badName">Name cannot be empty.</p>}
      </>
    );
  }
}

export default AddPlayerForm;
