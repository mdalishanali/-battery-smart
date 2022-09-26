import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function LineGraph({ chartData }) {
  return <Line data={chartData} />;
}

export default LineGraph;
