import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

import { constants } from "../utils/constants";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    // resize listener
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    // map object
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();
    map.tapToActivate = true;

    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];

    polygonSeries.data = [
      {
        id: "US",
        name: "United States",
        data: "Since 3rd of July",
        fill: am4core.color(constants.DANGER_COLOR),
      },
      {
        id: "UA",
        name: "Ukraine",
        data: "Since 15th of July",
        fill: am4core.color(constants.DANGER_COLOR),
      },
    ];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {data}";

    polygonTemplate.propertyFields.fill = "fill";

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    if (this.map) {
      this.map.dispose();
    }
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const mapHeight = this.state.height / 3;
    return (
      <div className="row">
        <div className="map-container col-lg-12">
          <div className="border border-3 border-primary rounded">
            <div id="chartdiv" style={{ height: mapHeight }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
