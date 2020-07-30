/**
 * Use to register all plugins to register in main.js
 *
 */

import GlobalComponents from './GlobalComponents'
import SideBar from './components/sidebar/sidebar'

// Styling
import './assets/bootstrap/bootstrap.css'
import './assets/sass/light-bootstrap-dashboard.scss'

export default {
  install (Vue) {
    Vue.use(SideBar)
    Vue.use(GlobalComponents)
  }
}
