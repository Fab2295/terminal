import React, { Fragment } from "react";
import * as PropTypes from "prop-types";

import TypedJS from "../typed/index";

import "./index.css";

const Terminal = props => {
  return (
    <Fragment>
      <div className="menu">
        <div className="buttons close"></div>
        <div className="buttons minimize"></div>
        <div className="buttons zoom"></div>
        <div className="title text-center">Terminal - {props.title}</div>
      </div>
      <div className="screen">
        <TypedJS phrase={props.data} />
      </div>
    </Fragment>
  );
};

Terminal.defaultProps = {
  title: "Strange",
  data: [
    "<b style='color: red'>You need to pass the String Array</b>\n`<span style='color: blue; font-size= 6px'>Try again...</span>`"
  ]
};

Terminal.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};

export default Terminal;
