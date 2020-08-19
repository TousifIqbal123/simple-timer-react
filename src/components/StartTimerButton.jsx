import React, { Component } from "react";
import Button from "./Button";

export default class StartTimerButton extends Component {
  render() {
    const { startTimer } = this.props;
    return (
      <React.Fragment>
        <Button innerText="Start" onClick={startTimer}></Button>
      </React.Fragment>
    );
  }
}
