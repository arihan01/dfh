// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_w8VqKY7fUIjYVfkc5sriaQmVaPuYidM",
  authDomain: "dfh-reels-6b9dd.firebaseapp.com",
  projectId: "dfh-reels-6b9dd",
  storageBucket: "dfh-reels-6b9dd.appspot.com",
  messagingSenderId: "465012890599",
  appId: "1:465012890599:web:425484c7dd172f23ea7b42",
  measurementId: "G-0145TBPTV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };