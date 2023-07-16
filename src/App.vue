<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>
<script>
import auth from '@/router/auth';
export default {
  beforeCreate() {
    const isAuthenticated = auth.auth()
    .then(response => {
      if(response) {
        this.$store.commit('setIsAuth', true)
        const currentDate = new Date();
        const expirationDate = new Date(currentDate.getTime() + 100 * 60 * 60 * 1000);
        const expirationDateString = expirationDate.toUTCString();
        document.cookie = "auth=true; expires=" + expirationDateString + "; path=/";
      } else {
        this.$store.commit('setIsAuth', false)
        document.cookie = "auth=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      }
      
    })
  }
}
</script>
<style lang="scss">
  @import '@/style/for_import.scss';
  .main {
    background: url('assets/img/bg.jpg') no-repeat 50%/cover;;
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
</style>