// src/App.js
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import TemperatureChart from "./components/TemperatureChart";

function App() {
  return (
    <div className="App">
      <h1>IoT Temperature Sensor Dashboard</h1>
      <TemperatureChart />
      <ToastContainer />
    </div>
  );
}

export default App;
