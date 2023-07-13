<template>
  <button
    class="btn title-fz14">
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'ButtonWideWhite',
}
</script>
<style lang="scss" scoped>
  .btn {
    width: 100%;
    height: 40px;
    padding: 8px 0px;
    border: none;
    border-radius: 10px;
    background: var(--white);
    color: var(--green);
    cursor: pointer;
  }

  
</style>