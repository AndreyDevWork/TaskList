<template>
  <div class="btn">
    <div class="btn__wrapper sidebar__user title-fz10-light">
      АО
    </div>
  </div>
</template>
<script>
export default {
  name: 'ButtonOpenProfile',
}
</script>
<style lang="scss" scoped>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    &__wrapper {
      height: 23px;
      width: 23px;
      background-color: var(--blue);
      border-radius: 100%;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>