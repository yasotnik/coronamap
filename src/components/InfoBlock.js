import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";

class InfoBlock extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <Jumbotron>
            <p>
              <h2>
                Information on the designation of international risk areas
              </h2>
            </p>
            <p>Last update: 7 August 2020 – 7:45 p.m.</p>
            <Button variant="info">button</Button>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default InfoBlock;
