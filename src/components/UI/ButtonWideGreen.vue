<template>
  <button
    class="btn title-fz14"
    v-bind:class="{focused: isActive}"
    v-on:mousedown="handleMousedown"
    v-on:mouseleave="handleMouseleave"
    v-on:mouseup="handleMouseup"
    >
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'ButtonWideGreen',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    handleMousedown() {
      this.isActive = true
    },
    handleMouseup() {
      this.isActive = false
    },
    handleMouseleave() {
      this.isActive = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn {
    width: 100%;
    height: 40px;
    padding: 8px 0px;
    border: none;
    border-radius: 10px;
    background: var(--green);
    color: var(--light-green);
    cursor: pointer;
  }

  .focused {
    color: var(--very-light-green);
  }
  
</style>