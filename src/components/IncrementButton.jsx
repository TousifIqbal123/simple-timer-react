import React, { Component } from "react";
import Button from "./Button";

export default class DecrementButton extends Component {
  render() {
    const { incrementCount } = this.props;
    return (
      <React.Fragment>
        <Button innerText="+" onClick={incrementCount}></Button>
      </React.Fragment>
    );
  }
}
