<template>
  <table class="table">
    <thead>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </slot>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>x</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductsTable',
  props: {
    columns: Array,
    products: Array
  },
  methods: {
  }
}
</script>
