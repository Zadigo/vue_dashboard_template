/**
 * Use to register global components
 * that we can then all import as one
 * file in GlobalPlugins
 *
 */

import Card from './components/cards/Card.vue'
import TopNav from './components/TopNav.vue'
import ContentFooter from './components/ContentFooter.vue'
import Content from './components/Content.vue'
import Form from './components/Form.vue'

const GlobalComponents = {
  install (Vue) {
    Vue.component('card', Card)
    Vue.component('top-navbar', TopNav)
    Vue.component('form', Form)
    Vue.component('content-footer', ContentFooter)
    Vue.component('dashboard-content', Content)
  }
}

export default GlobalComponents
