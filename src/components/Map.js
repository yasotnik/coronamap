import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

class Map extends Component {
  componentDidMount() {
    let map = am4core.create("chartdiv", am4maps.MapChart);
    map.geodata = am4geodata_worldLow;
    map.projection = new am4maps.projections.Miller();

    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];

    polygonSeries.data = [
      {
        id: "US",
        name: "United States",
        value: 100,
        fill: am4core.color("#F05C5C"),
      },
      {
        id: "FR",
        name: "France",
        value: 50,
        fill: am4core.color("#5C5CFF"),
      },
    ];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";

    polygonTemplate.propertyFields.fill = "fill";

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12"></div>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      </div>
    );
  }
}

export default Map;
