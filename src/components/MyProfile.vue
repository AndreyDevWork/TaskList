<template>
  <div class="wrapper"
    v-if="active"
  >
    <div class="profile">
      <button class="btn"
      v-on:click="logout"
      >
        Выход
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    active() {
      return this.$store.getters['sideBar/profile'];
    },
  },
  methods: {
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
  .wrapper {
    padding: 40px 0 0 0;
  }
  .profile {
    padding: 20px 10px 40px 10px;
    width: 680px;
    min-height: 100px;
    margin: auto;
    background-color: var(--white);
    border-radius: 12px;
  }
</style>