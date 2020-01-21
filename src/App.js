import React from "react";

import Terminal from "./terminal";

import "./App.css";

class App extends React.Component {
  state = {
    phrase: [
      "`$>`<span style='color: blue'>cd dalcy-fabricio</span>\n`$dalcy-fabricio>` npm start\n`Hello. I'm Dalcy Fabrício`"
    ]
  };

  render() {
    return <Terminal data={this.state.phrase} />;
  }
}

export default App;
