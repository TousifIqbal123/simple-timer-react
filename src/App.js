import React, { Component } from "react";
import DecrementButton from "./components/DecrementButton";
import IncrementButton from "./components/IncrementButton";
import StartTimerButton from "./components/StartTimerButton";
import ResetTimerButton from "./components/ResetTimerButton";
import StopTimerButton from "./components/StopTimerButton";
import "./App.css";

export default class App extends Component {
  state = {
    count: 0,
  };
  intervalID = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.intervalID) {
      this.intervalID = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Time's up!");
            clearInterval(this.intervalID);
            this.intervalID = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalID) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalID);
    this.intervalID = null;
  };

  render() {
    return (
      <div className="App">
        <h3>Simple Counter</h3>
        <span>
          <DecrementButton decrementCount={this.decrementCount} />
          {this.state.count}
          <IncrementButton incrementCount={this.incrementCount} />
        </span>

        <br />
        <StartTimerButton startTimer={this.startTimer} />
        <ResetTimerButton resetTimer={this.resetTimer} />
        <StopTimerButton stopTimer={this.stopTimer} />
      </div>
    );
  }
}
