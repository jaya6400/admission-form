import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBNdwSl4VxdMYpUDsGsIpEX4kBpNHMxTPY",
  authDomain: "admission-form-63a0b.firebaseapp.com",
  databaseURL: "https://admission-form-63a0b-default-rtdb.firebaseio.com",
  projectId: "admission-form-63a0b",
  storageBucket: "admission-form-63a0b.appspot.com",
  messagingSenderId: "614366156955",
  appId: "1:614366156955:web:2a4e56ab34a070f8f58e3e",
  measurementId: "G-91M80RM0J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);