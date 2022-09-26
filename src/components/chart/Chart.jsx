import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: true,
      borderColor: "#742774",
    },
  ],
};

const MultiLineGraph = () => {
  return <Line data={data} />;
};

export default MultiLineGraph;
