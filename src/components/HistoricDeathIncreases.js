import React from 'react';
import { Line } from 'react-chartjs-2';

const HistoricLineChart = ({ data }) => {

  const historicLineChartArray = []
  const dates = []
  const deathIncreases = []
  data.forEach((datum, index) => {
    if (index % 10 === 0 && datum.dateModified) {
      var datum_hash = {
        x: datum.dateModified,
        y: datum.deathIncreases
      }
      var d = new Date(datum.dateModified)
      // var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      var mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
      var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      dates.push(`${mo}/${da}`)
      // dates.push(new Date(datum.date))
      deathIncreases.push(datum.deathIncrease)

      historicLineChartArray.push(datum_hash)
    } else if (index % 10 === 0 && datum.deathIncrease > 0) {
      datum_hash = {
        x: datum.dateChecked,
        y: datum.deathIncrease
      }
      d = new Date(datum.dateChecked)
      var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
      da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      dates.push(`${mo}.${da}.${ye}`)
      // dates.push(new Date(datum.date))
      deathIncreases.push(datum.deathIncrease)
      historicLineChartArray.push(datum_hash)
    }
  })

  const chartDataConfig = {
    type: 'line',
    labels: dates,
    datasets: [
      {
        data: deathIncreases,
        label: "COVID-19 Death Increase/Decrease",
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