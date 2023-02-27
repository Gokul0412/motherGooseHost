import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class Bargraph extends Component {


// }
// module.exports = Bargraph;        




export default class Bargraph extends Component {
	render() {
		const options = {
			title: {
				text: this.props.title,
				fontStyle: "normal",
				fontSize: 20,
			},
			
			data: [
			{
				type: "column",
				dataPoints: this.props.datasets,			    
			}
			]
		}
		return (
		<div >
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}