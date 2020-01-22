import React from "react";

import Terminal from "./terminal";

import "./App.css";

class App extends React.Component {
  state = {
    phrase: [
      "Hello. I'm Dalcy Fabrício",
      "Hello. I'm <span style='color: red'>Dalcy Fabrício</span>"
    ],

    title: "Dalcy"
  };

  render() {
    return <Terminal data={this.state.phrase} title={this.state.title}/>;
  }
}

export default App;
