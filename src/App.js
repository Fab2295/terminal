import React from "react";

import Terminal from "./terminal";

import "./App.css";

class App extends React.Component {
  data = {
    phrase1: [
      {
        phrase: "$ cd dalcy-fabricio",
        command: true,
        position: 1,
      },

      {
        phrase: "$dalcy-fabricio",
        command: true,
        position: 2,
      },

      {
        phrase: "$dalcy-fabricio",
        command: true,
        position: 2,
      }
    ]
  };

  render() {
    return <Terminal data={} />;
  }
}

export default App;
