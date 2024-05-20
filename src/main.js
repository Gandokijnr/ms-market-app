import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {

  
  // include your own config file from firebase to use this app


  };
  
  initializeApp(firebaseConfig);
  const db = getFirestore();
  export default db;


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
