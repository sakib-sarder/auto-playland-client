// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// apiKey: "AIzaSyBNGFStauakGRs7a4tMaHbDecWjRw1lNYk",
// authDomain: "autoplayland.firebaseapp.com",
// projectId: "autoplayland",
// storageBucket: "autoplayland.appspot.com",
// messagingSenderId: "576805537815",
// appId: "1:576805537815:web:9be82d1627f799aafd3452",