
<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <router-link tag="a" to="/" class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/logo.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/logo.png" alt height="17" />
            </span>
          </router-link>

          <router-link tag="a" to="/" class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/logo.png" alt height="22" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/logo.png" alt height="18" />
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

        <!-- <div class="d-none d-sm-block">
          <b-dropdown variant="secondary" class="pt-3 d-inline-block">
            <template v-slot:button-content>
              Create
              <i class="mdi mdi-chevron-down"></i>
            </template>
            <a class="dropdown-item" href="javascript: void(0);">Action</a>
            <a class="dropdown-item" href="javascript: void(0);"
              >Another action</a
            >
            <a class="dropdown-item" href="javascript: void(0);"
              >Something else here</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="javascript: void(0);"
              >Separated link</a
            >
          </b-dropdown>
        </div> -->
      </div>

      <div class="d-flex">
        <!-- App Search-->
        <div class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input type="text" class="form-control" placeholder="Search..." />
            <span class="fa fa-search"></span>
          </div>
        </div>

        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="mdi mdi-magnify"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search ..."
                    aria-label="Recipient's username"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="mdi mdi-magnify"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle toggle-right"
          >
            <i class="mdi mdi-settings-outline toggle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

