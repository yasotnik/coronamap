import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class InfoBlock extends Component {
  render() {
    return (
      <div className="row">
        <div className="infoblock col-lg-12">
          <Jumbotron>
            <h2>
              Information on the designation of international risk areas
              <h5>(Last update 01.01.2001)</h5>
            </h2>
            <p>Last update: 7 August 2020 – 7:45 p.m.</p>
            <Button variant="info">button</Button>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default InfoBlock;
