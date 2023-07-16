<template>
  <div
    class="overlay"
    v-if="isOpened"
    v-on:click="actionIsOpened"
  >
  </div>
  <div class="wrapper">
    <transition name="bounce">
    <slot
      v-if="isOpened"
      class="position"
    >
    </slot>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      required: true
    },
    actionIsOpened: {
      type: Function,
      required: true
    }
  },
  name: 'OverlayDialog'
}
</script>
<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 0
  }
  .position {
    position: absolute;
    z-index: 1;
  }


  .bounce-enter-active {
  animation: bounce-in .2s;
  }
  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>