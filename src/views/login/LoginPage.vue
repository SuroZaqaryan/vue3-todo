<template>
  <div class="relative h-screen">
    <div
      class="absolute max-w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        v-if="!Vue3GoogleOauth.isInit"
        width="100"
        height="100"
        class="m-auto"
        src="@/assets/icons/loader.svg"
      />

      <button
        v-if="Vue3GoogleOauth.isInit"
        @click="handleClickSignIn"
        class="flex justify-center items-center w-72 hover:bg-gray-50 max-w-full p-3 rounded"
      >
        <img
          class="mr-3"
          width="20"
          height="20"
          src="@/assets/icons/google-icon.svg"
        />
        <span class="c91e62612">Continue with Google</span>
      </button>

      <!-- <button
        @click="handleClickSignOut"
        :disabled="!Vue3GoogleOauth.isAuthorized"
      >
        sign out
      </button> -->
    </div>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
  data() {
    return {
      user: "",
    };
  },

  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        localStorage.setItem("user", this.Vue3GoogleOauth.isAuthorized);
        this.user = googleUser.getBasicProfile().getEmail();
        this.$router.push("/");
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickGetAuthCode() {
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        localStorage.setItem("user", this.Vue3GoogleOauth.isAuthorized);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect() {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
  },

  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
    };
  },
};
</script>

<style>
button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 1em;
}

button:disabled {
  background: #fff;
  color: #ddd;
  cursor: not-allowed;
}
</style>
