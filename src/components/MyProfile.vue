<template>
  <div class="position">
    <transition name="bounce">
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
    </transition>
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
  .position {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .wrapper {
    padding: 40px 0 0 0;
  }
  .profile {
    padding: 20px 10px;
    width: 680px;
    min-height: 100px;
    margin: auto;
    background-color: var(--white);
    border-radius: 12px;
  }



  .bounce-enter-active {
  animation: bounce-in 0.2s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 100%;
    }
  }
</style>