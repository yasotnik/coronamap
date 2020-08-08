import React, { Component } from "react";
import Map from "./Map";
import InfoBlock from "./InfoBlock";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Interactive Coronavirus SARS-CoV-2 risk areas map for Germany</h2>
        <Map></Map>
        <InfoBlock></InfoBlock>
      </div>
    );
  }
}

export default App;
