import React, { Component } from "react";
import Button from "./Button";

export default class ResetTimerButton extends Component {
  render() {
    const { resetTimer } = this.props;
    return (
      <React.Fragment>
        <Button innerText="Reset" onClick={resetTimer}></Button>
      </React.Fragment>
    );
  }
}
