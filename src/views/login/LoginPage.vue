<template>
  <div class="relative h-screen">
    <div
      class="absolute max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
    <div id="firebaseui-auth-container"></div>
    <div id="loader">Loading...</div>
    <br>
    <div v-if="user.isSignedIn">
      <button @click="handleSignOut">Sign Out</button>
    </div>
  </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

// Firebase
import firebaseConfig from '@/firebaseConfig.js';

// Pinia
import { useUserStore } from '@/stores/user'

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig);
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default {
  setup() {
    const router = useRouter();
    const user = useUserStore();

    const uiConfig = {
      signInFlow: 'popup',
      signinSuccessUrl: 'http://localhost:8080/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult) {
          user.value = authResult.user.displayName;
          user.setUsername(authResult.user.displayName)
          user.isSignedIn = true;
          // localStorage.setItem('user', JSON.stringify(user));
          router.push('/');
 
          // so it doesn't refresh the page
          return false;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      }
    }

    // Initialize the FirebaseUI Widget using Firebase.
    try {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    } catch {
      window.location.reload();
    }

    const handleSignOut = () => {
      signOut(auth).then(() => {
       // Sign-out successful.
       user.value = null;
       user.isSignedIn = false;
       console.log('Signed out');
       ui.start('#firebaseui-auth-container', uiConfig);
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }

    return {
      user,
      handleSignOut,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
