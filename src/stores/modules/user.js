import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  // id必填，且需要唯一
  state: () => {
    return {
      name: '以和为贵',
      age: 20
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    },
    updateAge(age) {
      this.age = age
    }
  }
})
