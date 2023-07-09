<template>
  <transition name="bounce">
    <slot v-if="show"/>
  </transition>
</template>
<script>
export default {
  name: 'BouceAnimate',
  props: {
    show: {
      type: Boolean,
    }
  }
}
</script>
<style lang="scss">
  .bounce-enter-active {
  animation: bounce-in 0.1s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>