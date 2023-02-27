import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Bargraph extends Component {

// }
// module.exports = Bargraph;

export default class AreaBargraph extends Component {
  render() {
    const options = {
      title: {
        text: this.props.title,
        fontStyle: "normal",
        fontSize: 16,
      },
      width: 6000,
      height: 600,
      axisX: {
        titleWrap:true,
        labelWrap:true,
        labelFontSize:12,
        labelAngle: 0,
      },
      axisY: {
        title: "Time Spent (Mins)",
      },
      data: [
        {
          type: "column",
          dataPoints: this.props.datasets,
        },
      ],
    };
    return (
      <div style={{  overflowX: "scroll" }}>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
