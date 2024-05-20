import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
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
  
  initializeApp(firebaseConfig);
  const db = getFirestore();
  export default db;


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
