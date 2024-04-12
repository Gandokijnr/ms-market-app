// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAuEuC9oYVjTAL-VPe56Ar4Dsc3SRSfspY",
  authDomain: "msapp-5a44e.firebaseapp.com",
  projectId: "msapp-5a44e",
  storageBucket: "msapp-5a44e.appspot.com",
  messagingSenderId: "335257294942",
  appId: "1:335257294942:web:7285b1915b555dfba5fccf",
  measurementId: "G-MMBVGZRHJ4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
// const analytics = getAnalytics(app);