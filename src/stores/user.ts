import { defineStore } from 'pinia'

interface UserState {
  username: string;
  isSignedIn: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    username: '',
    isSignedIn: false
  }),
  actions: {
    setUsername(username: string) {
      this.username = username
    }
  },
  getters: {
    formattedUsername(): string {
      return `@${this.username}`
    },
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ["username", "isSignedIn"] },
    ],
  },
})
