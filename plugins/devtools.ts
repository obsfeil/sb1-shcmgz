export default defineNuxtPlugin((nuxtApp) => {
  if (process.dev) {
    nuxtApp.hook('app:created', () => {
      const { $pinia } = nuxtApp
      
      if ($pinia) {
        $pinia.use(({ store }) => {
          store.$subscribe((mutation, state) => {
            console.log(`[🤖 Robot Store] ${mutation.type}`, mutation.payload)
          })
        })
      }
    })
  }
})