import { useEffect, useRef } from "react";
import Chart, { ChartType } from "chart.js/auto";

const SummaryChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Explicitly define the type of chartRef
  const chartInstance = useRef<Chart<ChartType, number[], string> | null>(null); // Explicitly define the type of chartInstance

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    // Destroy the previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart<ChartType, number[], string>(ctx!, {
      // Ensure ctx is not null before using it
      type: "bar",
      data: {
        labels: [
          "Total Balance",
          "Staffs",
          "SMS Balance",
          "Students",
          "Marksheet Download",
          "New Applications",
          "Visitors",
        ],
        datasets: [
          {
            label: "Value",
            data: [130, 60, 90, 56, 100, 160, 195],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup function to destroy the chart instance when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-md-7 mx-auto my-2">
      <div className="p-2 card">
        <canvas
          className="w-100"
          style={{ minHeight: "162px", maxHeight: "250px", height: "250px" }}
          ref={chartRef}
        />
      </div>
    </div>
  );
};

export default SummaryChart;
