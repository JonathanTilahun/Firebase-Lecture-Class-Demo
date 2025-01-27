// Import Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDud19TNQPN41nT4dHQMBF1F-GfnJEvH-o",
  authDomain: "fir-demo-aacae.firebaseapp.com",
  databaseURL: "https://fir-demo-aacae-default-rtdb.firebaseio.com",
  projectId: "fir-demo-aacae",
  storageBucket: "fir-demo-aacae.firebasestorage.app",
  messagingSenderId: "963659526187",
  appId: "1:963659526187:web:5d154cb8b51f10b0863a6e",
  measurementId: "G-D51XSB32TP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); // Initialize Realtime Database

export { database };


// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   databaseURL: "your-database-url",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
// };
