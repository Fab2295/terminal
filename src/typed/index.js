import React from "react";
import Typed from "typed.js";

import "./index.css";

export default class TypedJS extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { phrase } = this.props;

    const options = {
      strings: phrase,
      typeSpeed: 100
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span
        style={{ whiteSpace: "pre" }}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}
