<template>
  <PanelWithLogo/>

  <transition name="bounce">
    <div v-if="show" class="login">
      <div class="login__header">
        <h1 class="title-h1-light">Вход в Task List</h1>
        <p class="title-fz16-light">Или <router-link class="login__link" to="/register">создайте учетную запись</router-link>.</p>
      </div>
      <FormLogin/>
      <RegisterWith/>
    </div>
  </transition>

</template>
<script>
import PanelWithLogo from '@/components/PanelWithLogo.vue';
import RegisterWith from '@/components/RegisterWith.vue';
import FormLogin from '@/components/FormLogin.vue';
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    PanelWithLogo,
    RegisterWith,
    FormLogin
  },
  mounted() {
    this.show = true
  }
}
</script>
<style lang="scss" scoped>
  .login {
    padding: 20px 10px 40px 10px;
    width: 680px;
    min-height: 100px;
    background: var(--white);
    border-radius: 12px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(20px, auto));
    margin-top: 40px;
    &__header {
      grid-column: 1 / 3;
    }
    &__link {
      color: var(--green);
      text-decoration: none;
      &:hover {
        color: var(--green-hover);
      }
    }
  }
  .title-h1-light {
    text-align: center;
  }
  .title-fz16-light {
    text-align: center;
    margin-top: 20px;
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
    }
  }
</style>