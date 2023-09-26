import React, { Component } from "react";

class Kalkulator extends Component {
  constructor() {
    super();
    this.state = {
      display: "0", // The current input or result to display
      operator: "", // The current operator (+, -, *, /)
      prevValue: "", // The previous input value
    };
  }

  handleDigitClick = (digit) => {
    this.setState((prevState) => ({
      display: prevState.display === "0" ? digit : prevState.display + digit,
    }));
  };

  handleOperatorClick = (operator) => {
    this.setState((prevState) => ({
      prevValue: prevState.display,
      display: "0",
      operator,
    }));
  };

  handleEqualsClick = () => {
    const { prevValue, display, operator } = this.state;
    let result;

    switch (operator) {
      case "+":
        result = parseFloat(prevValue) + parseFloat(display);
        break;
      case "-":
        result = parseFloat(prevValue) - parseFloat(display);
        break;
      case "*":
        result = parseFloat(prevValue) * parseFloat(display);
        break;
      case "/":
        result = parseFloat(prevValue) / parseFloat(display);
        break;
      default:
        result = display;
    }

    this.setState({
      display: result.toString(),
      operator: "",
      prevValue: "",
    });
  };

  render() {
    return (
      <div className="kalkulator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <button onClick={() => this.handleDigitClick("7")}>7</button>
          <button onClick={() => this.handleDigitClick("8")}>8</button>
          <button onClick={() => this.handleDigitClick("9")}>9</button>
          <button onClick={() => this.handleOperatorClick("+")}>+</button>
          <button onClick={() => this.handleDigitClick("4")}>4</button>
          <button onClick={() => this.handleDigitClick("5")}>5</button>
          <button onClick={() => this.handleDigitClick("6")}>6</button>
          <button onClick={() => this.handleOperatorClick("-")}>-</button>
          <button onClick={() => this.handleDigitClick("1")}>1</button>
          <button onClick={() => this.handleDigitClick("2")}>2</button>
          <button onClick={() => this.handleDigitClick("3")}>3</button>
          <button onClick={() => this.handleOperatorClick("*")}>*</button>
          <button onClick={() => this.handleDigitClick("0")}>0</button>
          <button onClick={() => this.handleOperatorClick(".")}>.</button>
          <button onClick={this.handleEqualsClick}>=</button>
          <button onClick={() => this.handleOperatorClick("/")}>/</button>
          <button onClick={() => this.setState({ display: "0" })}>C</button>
        </div>
      </div>
    );
  }
}

export default Kalkulator;