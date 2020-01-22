import React, { Fragment } from "react";

import TypedJS from "../typed/index";

import "./index.css";

const Terminal = props => {
  return (
    <Fragment>
      <div className="menu">
        <div className="buttons close"></div>
        <div className="buttons minimize"></div>
        <div className="buttons zoom"></div>
        <div className="title text-center">Terminal - Dalcy Fabrício</div>
      </div>
      <div className="screen">
        <TypedJS phrase={props.data} />
      </div>
    </Fragment>
  );
};

export default Terminal;
