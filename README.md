
# IoT Temperature Sensor Dashboard

This project is a React-based dashboard that visualizes temperature data in real-time using a line chart. The temperature data is simulated with random values to mimic data from an IoT temperature sensor. The dashboard displays the current temperature value in a message box, and a chart is dynamically updated with the latest sensor readings.

# Features

Real-time temperature updates: The temperature data is simulated and updated every 2 seconds.

Temperature chart visualization: A responsive line chart is used to display the temperature over time.

Current temperature display: A message box shows the most current temperature reading above the chart.

Responsive design: The layout adapts to various screen sizes for a smooth user experience on mobile devices.
## Demo

This image shows dashboard, that vizualize the temperature sensor data.

![Image](https://github.com/user-attachments/assets/627c803c-aeb2-4371-a0df-373bbcaf0e89)



# Technologies Used

React.js: A JavaScript library for building user interfaces.

Chart.js: A JavaScript library for creating beautiful charts and graphs.

React-Chartjs-2: A wrapper for Chart.js, allowing the use of Chart.js in React.

CSS: For styling the app with a responsive design.

# Installation
Follow these steps to get the project running on your local machine.

  1.Clone the repository:

    git clone https://github.com/your-username/temperature-sensor-dashboard.git

  2.Navigate to the project directory:

    cd temperature-sensor-dashboard
  3.Install the required dependencies:

    npm install

 4.Start the development server:

    npm start
The app should now be running on http://localhost:3000 in your web browser.

# Project Structure

/temperature-sensor-dashboard
│
├── /src
│   ├── /components
│   │   └── TemperatureChart.js  
│   ├── App.js                 
│   ├── App.css              
│   └── index.js               
├── package.json                
└── README.md  

# How It Works

The TemperatureChart component simulates the temperature data by generating random temperature values between 0 and 40°C. It updates the data every 2 seconds.

The chart is rendered using the Line component from react-chartjs-2, with Chart.js handling the chart rendering.

The most recent temperature is displayed in a message box above the chart, which updates every time a new temperature value is added.

# Styling

The app is styled with a simple, clean design using CSS. The temperature chart is placed in a responsive container that adapts to different screen sizes. The current temperature is displayed in a colored message box to make it stand out.

# Customization

You can adjust the simulation interval, temperature range, and chart appearance by modifying the useEffect hook and chartData in the TemperatureChart.js component.

If you have access to actual IoT temperature data, you can replace the simulated temperature generation with real sensor data by integrating an API.

# Acknowledgements

Chart.js: https://www.chartjs.org/

React: https://reactjs.org/

react-chartjs-2: https://github.com/reactchartjs/react-chartjs-2
