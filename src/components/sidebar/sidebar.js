import SideBar from './SideBar.vue'
import SidebarLink from './SidebarLink.vue'

const SidebarStore = {
  Links: [
    {
      name: 'Dashboard',
      icon: 'fa fa-home',
      path: '/'
    }
  ]
}

export default {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          SidebarStore: SidebarStore
        }
      }
    })

    Vue.component('side-bar', SideBar)
    Vue.component('sidebar-link', SidebarLink)
  }
}
