<template>
  <div class="panel">
    <div class="panel__wrapper-icon">
      <LogoIcon/>
    </div>
    <div class="panel__text title-fz18-light"><span class="title-fz18">Task</span> List</div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">
  .panel {
    background: var(--white);
    height: 50px;
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    grid-template-columns:  minmax(25px, auto) minmax(30px, auto);
    &__wrapper-icon {
      height: 25px;
      width: 25px;
    }
  }

</style>