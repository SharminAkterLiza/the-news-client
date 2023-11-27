// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGeiOIC_EeJo6xPRi0LTd3iEb7oKjzeyc",
  authDomain: "the-news-client-86bbe.firebaseapp.com",
  projectId: "the-news-client-86bbe",
  storageBucket: "the-news-client-86bbe.appspot.com",
  messagingSenderId: "911257445471",
  appId: "1:911257445471:web:74d567f177da504e4427ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;