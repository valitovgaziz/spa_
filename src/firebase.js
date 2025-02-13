// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC960id5BeQAFLFbwQRvcYv3AiCiyMJkVo",
    authDomain: "yalarba-8e87a.firebaseapp.com",
    projectId: "yalarba-8e87a",
    storageBucket: "yalarba-8e87a.firebasestorage.app",
    messagingSenderId: "387444810053",
    appId: "1:387444810053:web:57bfdb89fb8c1509ea5e2c",
    measurementId: "G-CLV7HRVRFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);