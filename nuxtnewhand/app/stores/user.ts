// stores/user.ts


export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    isAuthenticated: false
  }),
  actions: {
    async fetchProfile() {
      // 示例：从 API 获取用户数据
      const res = {"name":"guohahad","email":"1234"}
      this.name = res.name
      this.email = res.email
      this.isAuthenticated = true
    }
  }
})