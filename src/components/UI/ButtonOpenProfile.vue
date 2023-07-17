<template>
  <div class="btn"
    v-on:click="handleClick"
  >
    <div class="btn__wrapper sidebar__user title-fz10-light">
      АО
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ButtonOpenProfile',
  methods: {
    ...mapMutations('sideBar', ['setProfile']),
    handleClick() {
      this.setProfile()
    },
  },
}
</script>
<style lang="scss" scoped>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    &:hover {
      background-color: var(--white);
    }
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