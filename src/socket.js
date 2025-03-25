// // src/socket.js
// import { io } from "socket.io-client";

// // Set up a connection to the WebSocket server
// const socket = io("http://localhost:4000"); // Replace with your actual WebSocket server URL

// // Listen to real-time temperature updates
// export const subscribeToTemperature = (callback) => {
//   socket.on("temperature", (data) => {
//     callback(data); // The data will be the current temperature
//   });
// };
