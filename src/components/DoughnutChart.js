import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => {
  const { positive, negative } = data

  const dataStructure = {
    positive,
    negative
  }

  const chartDataConfig = {
    labels: Object.keys(dataStructure),
    datasets: [
      {
        data: Object.values(dataStructure),
        label: "COVID-19 Test Results",
        backgroundColor: ["rgba(255,0,0,.5)","rgba(0,128,128,.5)"],
        borderColor: ["rgba(255,0,0)","rgba(0,128,128)"],
        borderWidth: 1,
        hoverBackgroundColor: ["rgba(255,0,0)","rgba(0,128,128)"],
        hoverBorderColor: ["rgba(255,0,0)","rgba(0,128,128)"],
      }
    ]
  }

  return (
    <div>
      <Doughnut data={chartDataConfig} />
    </div>
  )
}

export default DoughnutChart;