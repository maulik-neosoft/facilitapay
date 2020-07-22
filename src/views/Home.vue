<template>
  <Layout></Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/views/layout/Main.vue'
export default {
  name: 'Home',
  components: {
    Layout
  },
  created() {
    this.$store.dispatch('SignIn', {
      user: {
        username: 'jonh@email.com',
        password: 'somepass'
      }
    }).then(response => {
      console.log('RESPONSE : ', response)
    }).catch(error => {
      console.log('ERROR : ', error)
    })
  }
}
</script>
