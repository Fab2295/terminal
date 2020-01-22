import React, { Fragment } from "react";
import PropTypes from "prop-types";

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
  title: "Strange"
};

Terminal.propsTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default Terminal;
