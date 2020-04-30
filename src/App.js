import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.newAdvice();
  }

  newAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        const advice = data.slip.advice;
        this.setState({ advice });
        // console.log(data.slip.advice);
      });
  };

  render() {
    return (
      <div className="app">
        <h1>{this.state.advice}</h1>
        <button onClick={this.newAdvice}>Click me!</button>
      </div>
    );
  }
}

export default App;
