<template>
  <div class="sidebar">
    <div class="sidebar__icon">
      <div class="sidebar__icon-wrapper">
        <MenuBurgerIcon/>
      </div>
    </div>
    <div v-bind:class="{'sidebar__icon': $store.getters['sideBar/current'] != 'main', 'current': $store.getters['sideBar/current'] == 'main' }">
      <div class="sidebar__icon-wrapper">
        <LogoIcon/>
      </div>
    </div>

    <div class="flex-one"></div>

    <ButtonOpenProfile/>
  </div>
</template>
<script>
import MyProfile from '@/components/MyProfile.vue'
export default {
  components: {
    MyProfile
  },
}
</script>
<style lang="scss" scoped>
  .sidebar {
    width: 50px;
    height: 100vh;
    background-color: var(--light-gray);
    position: absolute;
    display: flex;
    flex-direction: column;
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      cursor: pointer;
      &:hover {
        background-color: var(--white);
      }
    }
    &__icon-wrapper {
      height: 23px;
      width: 23px;
    }
    &__user {
      background-color: var(--blue);
      border-radius: 100%;
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .flex-one {
    flex: 1;
  }

  .current {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: var(--light-blue);
  }
</style>