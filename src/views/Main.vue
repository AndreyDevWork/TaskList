<template>
  <SideBarIcons/>
  <MyProfile/>

</template>
<script>
import SideBarIcons from '@/components/SideBarIcons.vue'
import MyProfile from '@/components/MyProfile.vue'
export default {
  components: {
    SideBarIcons,
    MyProfile
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>