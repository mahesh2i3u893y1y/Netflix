// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoc0TX4dEoCO8f6ho1ONQMMnqfvqBgS1Q",
  authDomain: "netflix-aa13d.firebaseapp.com",
  projectId: "netflix-aa13d",
  storageBucket: "netflix-aa13d.appspot.com",
  messagingSenderId: "319411298396",
  appId: "1:319411298396:web:f5ca354f3f2edceb074699",
  measurementId: "G-4733B0PZRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();