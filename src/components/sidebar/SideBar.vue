<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="/" class="simple-text logo__container">
          <div class="logo-img">
              <img src="../../assets/logo.png" alt="">
          </div>
          {{ title }}
        </a>
      </div>
    </div>

    <slot name="content"></slot>

    <ul class="nav nav-main__links">
      <slot>
        <sidebar-link v-for="(link, index) in Links" :key="link.name + index" :to="link.path" :link="link.path">
          <i :class="link.icon"></i>
          <p>{{ link.name }}</p>
        </sidebar-link>
      </slot>
    </ul>

    <ul class="nav nav-bottom" v-if="$slots['bottom-links']">
      <slot name="bottom-links"></slot>
    </ul>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
export default {
  components: { SidebarLink },
  data () {
    return {
      // sidebarLinks: {
      //   type: Array,
      //   default: () => []
      // }
      Links: [
        { name: 'Home', path: '/', icon: 'table' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar .sidebar-wrapper {
  display: flex;
  flex-direction: column;
}
.sidebar .nav-main__links {
  flex: 1;
}
.sidebar .sidebar-wrapper .logo .logo__container {
  padding-left: 10px;
}
</style>
