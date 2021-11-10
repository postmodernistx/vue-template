import { createApp } from 'vue';
import { initializeApp, getApps } from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
// ------------------------------------------------------------------------
// ------------------------------------ 🗃️ SETUP DATABASE -----------------
// ------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

let firebaseApp;
const firebaseApps = getApps();
if (!firebaseApps.length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  // eslint-disable-next-line no-unused-vars,prefer-destructuring
  firebaseApp = firebaseApps[0];
}


createApp(App).use(store).use(router).mount('#app');
