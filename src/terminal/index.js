import React, { Component } from "react";

import TypedJS from "../typed/index";

import "./index.css";

export default class Terminal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="content">
        <div className="menu">
          <div className="buttons close"></div>
          <div className="buttons minimize"></div>
          <div className="buttons zoom"></div>
        </div>
        <div className="screen">
          <TypedJS phrase={this.props.data} />
        </div>
      </div>
    );
  }
}
