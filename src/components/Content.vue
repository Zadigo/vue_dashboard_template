<template>
  <transition name="fade" mode="out-in">
    <div class="container">
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss">
.fade {
  &-enter-active, &-leave-active {
    transition: opacity .1s;
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
}
</style>
