import React, { Component } from "react";
import Button from "./Button";

export default class DecrementButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button innerText="-" onClick={this.props.decrementCount} />
      </React.Fragment>
    );
  }
}
