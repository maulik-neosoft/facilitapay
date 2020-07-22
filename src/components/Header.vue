<script>

/**
 * Topbar component
 */
export default {
  data() {
    return {}
  },
  methods: {
    initFullScreen() {
      document.body.classList.toggle('fullscreen-enable')
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen()
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen()
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          )
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        }
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu()
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar()
    }
  }
}
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link tag="a" to="/" class="logo">
            <span class="logo-sm">
              <img src="@/assets/logo.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/logo.png" alt height="50" />
            </span>
          </router-link>
        </div>

        <button
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item"
          id="vertical-menu-btn"
          @click="toggleMenu()"
        >
          <i class="mdi mdi-menu"></i>
        </button>
      </div>

      <div class="d-flex">
        <!-- App Search-->
        <div class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="fa fa-search"></span>
          </div>
        </div>

        <b-dropdown
          class="d-inline-block"
          right
          toggle-class="header-item"
          variant="white"
        >
          <template v-slot:button-content>
            <!-- <img
              class="rounded-circle header-profile-user"
              src=""
              alt="Header Avatar"
            /> -->
          </template>
          <a class="dropdown-item" href="#">
            <i
              class="mdi mdi-account-circle font-size-17 align-middle mr-1"
            ></i>
            Profile
          </a>

          <div class="dropdown-divider"></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i
              class="bx bx-power-off font-size-17 align-middle mr-1 text-danger"
            ></i>
            Logout
          </a>
        </b-dropdown>

      </div>
    </div>
  </header>
</template>

