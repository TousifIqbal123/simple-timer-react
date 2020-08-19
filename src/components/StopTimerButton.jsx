import React, { Component } from "react";
import Button from "./Button";

export default class StopTimerButton extends Component {
  render() {
    const { stopTimer } = this.props;
    return (
      <React.Fragment>
        <Button innerText="Stop" onClick={stopTimer}></Button>
      </React.Fragment>
    );
  }
}
