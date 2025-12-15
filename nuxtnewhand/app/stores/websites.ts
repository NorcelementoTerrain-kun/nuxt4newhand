
// import { defineStore } from 'pinia'

// // 定义接口（根据你期望的 API 响应）
// interface ModuleInfo {
//   name: string
//   description: string
//   // 其他字段可选...
// }
// 定义接口（根据你期望的 API 响应）
interface ModuleInfo {
  name: string
  description: string
  // 其他字段可选...
}

export const useWebsiteStore = defineStore('websiteStore', {
  state: () => ({
    name: '',
    description: '',
  }),
  
  actions: {
    async fetch () {
      const infos = await $fetch<ModuleInfo>('https://api.nuxt.com/modules/pinia')

      this.name = infos.name
      this.description = infos.description
    },
  },
})