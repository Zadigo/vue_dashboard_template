<template>
  <card>
    <slot name="header">
      <button class="btn btn-large grey">Importer</button>
      <button class="btn btn-large grey">Exporter</button>
      <router-link :to="{path: '/products/new'}" class="btn btn-large btn-primary">Nouveau</router-link>
    </slot>
    <slot>
      <ProductsTable v-bind:products="products" v-bind:columns="columns" />
    </slot>
  </card>
</template>

<script>
import ProductsTable from '../components/tables/ProductsTable.vue'
export default {
  components: { ProductsTable },
  data () {
    return {
      columns: ['a', 'b', 'c'],
      products: [
        { id: 1, name: 'Sac Vuitton' },
        { id: 2, name: 'Sac Gucci' }
      ]
    }
  }
}
</script>
