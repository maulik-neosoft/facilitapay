
<template>
  <div id="layout-wrapper">
    <Header />
    <Sidebar />
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <!-- <RightBar /> -->
  </div>
</template>

<script>
import router from '@/router'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
// import Sidebar from "@/components/sidebar";
import Footer from '@/components/Footer'
// import RightBar from "@/components/right-bar";
export default {
  components: {
    Header,
    Sidebar,
    Footer
    // RightBar
  },
  methods: {
    toggleMenu() {
      document.body.classList.toggle('sidebar-enable')
      document.body.classList.toggle('vertical-collpsed')

      if (window.screen.width <= 768) {
        document.body.classList.remove('vertical-collpsed')
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove('sidebar-enable')
        })
      }
    }
  }
}
</script>
