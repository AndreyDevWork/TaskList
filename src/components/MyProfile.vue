<template>
  <OverlayDialog
    v-bind:isOpened="profile"
    v-bind:actionIsOpened="setProfile"
  >
    <div class="profile">
      <button class="btn"
        v-on:click="logout"
        >
        Выход
      </button>
    </div>

  </OverlayDialog>


</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('sideBar', ['profile'])
  },
  methods: {
    ...mapMutations('sideBar', ['setProfile']),
    logout() {
      const result = this.$store.dispatch('logout')
      .then(result => {
        if(result) {
          this.$router.push('/login')
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
  .profile {
    margin-top: 80px;
    padding: 20px 10px;
    width: 680px;
    min-height: 100px;
    background-color: var(--white);
    border-radius: 12px;
  }

</style>