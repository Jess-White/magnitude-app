import React from 'react';
import { Line } from 'react-chartjs-2';

const HistoricLineChart = ({ data }) => {

  data = data.reverse();

  const historicLineChartArray = []
  const dates = []
  const deaths = []
  data.map((datum, index) => {
    if (index % 10 === 0 && datum.dateModified) {
      var datum_hash = {
        x: datum.dateModified,
        y: datum.death
      }
      var d = new Date(datum.dateModified)
      // var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      var mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
      var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      dates.push(`${mo}/${da}`)
      // dates.push(new Date(datum.date))
      deaths.push(datum.death)

      historicLineChartArray.push(datum_hash)
    } else if (index % 10 === 0 && datum.death > 0) {
      var datum_hash = {
        x: datum.dateChecked,
        y: datum.death
      }
      var d = new Date(datum.dateChecked)
      var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      var mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
      var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      dates.push(`${mo}.${da}.${ye}`)
      // dates.push(new Date(datum.date))
      deaths.push(datum.death)
      historicLineChartArray.push(datum_hash)
    }
  })

  const chartDataConfig = {
    type: 'line',
    labels: dates,
    datasets: [
      {
        data: deaths,
        label: "COVID-19 Deaths",
        backgroundColor: ["rgba(255,0,0,.5)", "rgba(0,128,128,.5)", "rgba(112, 128, 144, .5)"],
        borderColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144,.5)"],
        borderWidth: 1,
        hoverBackgroundColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144)"],
        hoverBorderColor: ["rgba(255,0,0)", "rgba(0,128,128)", "rgba(112,128,144)"]
      }
    ]
  }

  return (
    <div>
      <Line data={chartDataConfig} />
    </div>
  )
}

export default HistoricLineChart;