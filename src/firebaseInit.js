import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyXq9zm-cInAZrpB0m3zTvYtQFSTBwx6A",
  authDomain: "memories-e8aa6.firebaseapp.com",
  projectId: "memories-e8aa6",
  storageBucket: "memories-e8aa6.appspot.com",
  messagingSenderId: "158525222617",
  appId: "1:158525222617:web:b616ba56000a005b9a18c8",
  measurementId: "G-MD897R3BLB",
  databaseURL: "https://memories-e8aa6-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getDatabase(firebaseApp)