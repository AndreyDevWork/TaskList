<template >
  <SideBarIcons/>
  <button class="btn"
    v-on:click="logout"
  >Выход</button>
</template>
<script>
import SideBarIcons from '@/components/SideBarIcons.vue'
export default {
  components: {
    SideBarIcons
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>
  .btn {
    margin-left: 100px;
  }
</style>