import React from "react";

import Terminal from "./terminal";

import "./App.css";

class App extends React.Component {
  state = {
    phrase: [
      "Hello. I'm Dalcy Fabrício",
      "Hello. I'm <span style='color: red'>Dalcy Fabrício</span>"
    ]
  };

  render() {
    return <Terminal data={this.state.phrase} />;
  }
}

export default App;
