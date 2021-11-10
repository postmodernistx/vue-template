import { initializeApp, getApps } from 'firebase/app';

import { createApp, h } from 'vue';

import 'what-input';

import 'normalize.css';
import '@/styles/style.scss';

import App from './App.vue';
import router from './router';
import store from './store';
import appMixins from './mixins';

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

// ------------------------------------------------------------------------
// ------------------------------------ 🚀️ SETUP APPLICATION --------------
// ------------------------------------------------------------------------
const app = createApp({
  mixins: [appMixins],
  render() {
    return h(App);
  },
});

app.use(store);
app.use(router);

// router.beforeEach(() => {
//   store.commit('colorScheme', { data: 'white' });
// });

// ------------------------------------------------------------------------
// ------------------------------------ 📦 IMPORT ALL COMPONENTS ----------
// ------------------------------------------------------------------------
// app.component('SomeGlobalComponent', SomeGlobalComponent);

// ------------------------------------------------------------------------
// ------------------------------------ 👽️ FETCH CONTENT & MOUNT APP ------
// ------------------------------------------------------------------------
Promise.all([
  // store.dispatch('fetchSettings'),
])
  .then(() => {
    app.mount('#app');
    if (process.env.NODE_ENV === 'development') {
      console.log('App mounted');
    }
  })
  .then(() => {
    Promise.all([
      // store.dispatch('fetchSomeMoreStuffMaybe'),
    ])
      .then(() => {
        store.commit('initDataLoaded', true);
      });
  })
  .catch((error) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error when fetching data', error);
    }
  });
