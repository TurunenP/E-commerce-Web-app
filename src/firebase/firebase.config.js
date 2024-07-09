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

// Log the environment variables for debugging
console.log("API Key:", import.meta.env.VITE_APIKEY);
console.log("Auth Domain:", import.meta.env.VITE_AUTHDOMAIN);
console.log("Project ID:", import.meta.env.VITE_PROJECTID);
console.log("Storage Bucket:", import.meta.env.VITE_STORAGEBUCKET);
console.log("Messaging Sender ID:", import.meta.env.VITE_MESSAGINGSENDERID);
console.log("App ID:", import.meta.env.VITE_APPID);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: "AIzaSyAkWN5hDjNpH7dgjVUwnvFWq0VV-VLZWhM",
//   authDomain: "ecommerce-react-js-a69a4.firebaseapp.com",
//   projectId: "ecommerce-react-js-a69a4",
//   storageBucket: "ecommerce-react-js-a69a4.appspot.com",
//   messagingSenderId: "567300993491",
//   appId: "1:567300993491:web:2929f36c98aedf0a5f3f26",
