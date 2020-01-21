import React, { Component } from "react";

import "./index.css";

export default class Terminal extends Component {
  render() {
    return (
      <div className="content">
        <div className="menu">
          <div className="buttons close"></div>
          <div className="buttons minimize"></div>
          <div className="buttons zoom"></div>
        </div>
        <div className="screen">
          <p className="line1">
            $ cd dalcy-fabricio<span className="cursor1">|</span>
          </p>
          <p className="line2">
            Hi. I'm Dalcy Fabrício<span className="cursor2">|</span>
          </p>
          <p className="line4">
            ><span className="cursor4">|</span>
          </p>
        </div>
      </div>
    );
  }
}
