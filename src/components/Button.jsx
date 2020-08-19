import React, { Component } from "react";
import "../App.css";
export default class Button extends Component {
  render() {
    const { innerText, onClick } = this.props;
    return (
      <React.Fragment>
        <button onClick={onClick}>{innerText}</button>
      </React.Fragment>
    );
  }
}
