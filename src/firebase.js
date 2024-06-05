// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxLmOee-Oy8dj74I_GVuQCdyH04jLn2qk",
  authDomain: "c241-ms01.firebaseapp.com",
  projectId: "c241-ms01",
  storageBucket: "c241-ms01.appspot.com",
  messagingSenderId: "306433322621",
  appId: "1:306433322621:web:55f04b06cd7adbe0118b14",
  measurementId: "G-LNKFB7P682",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;