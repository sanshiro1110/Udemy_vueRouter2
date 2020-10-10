<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
      >
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>

<script>
export default {
  methods: {
    beforeEnter() {
      this.$root.$emit('triggerScroll');
    }
  }
}
</script>
