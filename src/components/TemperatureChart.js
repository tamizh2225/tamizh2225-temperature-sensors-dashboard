import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components explicitly
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null); // State to store the most recent temperature

  // Temporarily simulate data with random values
  useEffect(() => {
    const interval = setInterval(() => {
      const randomTemp = Math.random() * 40; // Simulate a random temperature between 0-40°C
      const currentTime = new Date().toLocaleTimeString();

      setTemperatureData((prevData) => {
        const updatedData = [...prevData, randomTemp];
        // Keep only the last 20 data points
        return updatedData.length > 20 ? updatedData.slice(1) : updatedData;
      });

      setLabels((prevLabels) => {
        const updatedLabels = [...prevLabels, currentTime];
        // Keep only the last 20 labels
        return updatedLabels.length > 20
          ? updatedLabels.slice(1)
          : updatedLabels;
      });

      setCurrentTemperature(randomTemp.toFixed(2)); // Update the current temperature state
    }, 2000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="current-temperature-box">
        <p>
          <strong>Current Temperature:</strong>{" "}
          {currentTemperature ? `${currentTemperature}°C` : "Loading..."}
        </p>
      </div>
      <h2>Temperature Sensor Data</h2>
      <Line data={chartData} />
    </div>
  );
};

export default TemperatureChart;
