 import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data }) => {
  const { positive, negative, totalTestResults } = data

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
  }

  const chartDataConfig = {
    labels: Object.keys(dataStructure),
    datasets: [
      {
        data: Object.values(dataStructure), 
        label: "COVID-19 Test Results",
        backgroundColor: ["rgba(255,0,0,.5)", "rgba(0,128,128,.5)", "rgba(112, 128, 144, .5)"],
        borderColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144,.5)"],
        borderWidth: 1,
        hoverBackgroundColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144)"],
        hoverBorderColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144)"],

      }
    ],
    // options: {
    //   scales: {
    //     yAxis: [{
    //       ticks: {
    //         beginAtZero: true,
    //         userCallback: function(value, index, values) {
    //           value = value.toString();
    //           value = value.split(/(?=(?:...)*$)/);
    //           value = value.join(',');
    //           return value;
    //         }
    //       }
    //     }]
    //   }
    // }
  }

  return (
    <div>
      <Bar data={chartDataConfig} />
    </div>
  )
}

export default BarChart;