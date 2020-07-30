<template>
  <form method="POST">
    <div v-for="field in fields" :key="field.id" class="form-control">
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      fields: {
        type: Array
      }
    }
  }
}
</script>
