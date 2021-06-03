import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  addPlus = () => {
    this.setState({ value: this.state.value + 1 });
  };

  reduceValue = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    const { title } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div>{title}</div>
        <input type="text" value={value} />

        <button onClick={() => this.addPlus()}>+</button>
        <button onClick={() => this.reduceValue()}>-</button>
      </div>
    );
  }
}

export default Counter;
