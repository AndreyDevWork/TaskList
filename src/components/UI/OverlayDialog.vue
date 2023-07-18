<template>
  <div
    class="overlay"
    v-bind:class="{'overlay-true' : overlayColor, 'overlay-false' : !overlayColor}"
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
    },
    overlayColor: {
      type: Boolean, 
      required: false,
      default: true
    }
  },
  name: 'OverlayDialog'
}
</script>
<style lang="scss" scoped>
  .wrapper {
    position: absolute;
    width: 680px;
    left: 50%;
    transform: translateX(-50%);

  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0
  }
  .overlay-true {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .overaly-false {
    background-color: white;
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