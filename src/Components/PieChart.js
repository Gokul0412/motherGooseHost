import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart = (props) => {
    console.log('datasets',props.datasets)

    const options = {
        animationEnabled: true,
        title: {
            text:props?.title,
            fontStyle: "normal",
			fontSize: 20,
        },
        subtitles: [{
            text: "",
            verticalAlign: "center",
            fontSize: 16,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            // indexLabel: "{name}: {y}",
            indexLabel: " {name}: {y}(#percent%) ",
            yValueFormatString: "",
            toolTipContent: "{y} (#percent%)",
            dataPoints: props?.datasets,
            innerRadius: "50%",

            // dataPoints: [
            //     { name: "Unsatisfied", y: 5 },
            //     { name: "Very Unsatisfied", y: 31 },
            //     { name: "Very Satisfied", y: 40 },
            //     { name: "Satisfied", y: 17 },
            //     { name: "Neutral", y: 7 }
            // ]
        }]
    }
    return (

        <div>
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
        </div>
    )
}

export default PieChart