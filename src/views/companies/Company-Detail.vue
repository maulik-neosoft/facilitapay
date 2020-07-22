<template>
  <Layout>

  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from '@/views/layout/Main.vue'
// import PageHeader from '@/components/Page-Header'
export default {
  name: 'Companies',
  components: {
    Layout
    // PageHeader
  },
  data() {
    return {
      items: [
        {
          text: 'Subject',
          href: '/'
        },
        {
          text: 'Company',
          href: '/subject/companies'
        },
        {
          text: 'Detail',
          active: true
        }
      ]
    }
  }
}
</script>
