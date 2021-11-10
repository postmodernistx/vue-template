<template>
  <template v-if="loading">
    Loading…
  </template>
  <template v-else>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="!user">
      <h1>Login</h1>
      <button @click="login">Login</button>
    </div>
    <div v-else>
      <nav id="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <button @click="logout">Logout</button>
      </nav>
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </main>
      <footer><!--    <Footer v-once />--></footer>
    </div>
  </template>
</template>

<script>
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export default {
  name: 'App',
  data() {
    return {
      provider: new GoogleAuthProvider(),
      auth: getAuth(),
      user: null,
      error: '',
      loading: true,
    };
  },
  beforeMount() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
      this.loading = false;
    });
  },
  methods: {
    login() {
      signInWithPopup(this.auth, this.provider)
        .then((result) => {
          this.user = result.user;
          console.log(result);
        })
        .catch((error) => {
          this.error = `An error occurred when logging in: ${error}`;
          console.error(error);
        });
    },
    logout() {
      signOut(this.auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          this.error = `An error occurred when logging out: ${error}`;
          console.error(error);
        });
    },
  },
};
</script>
