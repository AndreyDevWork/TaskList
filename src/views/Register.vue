<template>
  <PanelWithLogo/>

  <transition name="bounce">
    <div v-if="show">
      <div 
      v-if="!isRegister"
      class="register"
      >
        <div class="register__header">
          <h1 class="title-h1-light">Создать учетную запись</h1>
          <p class="title-fz16-light">Или <router-link class="register__link" to="/login">войдите в Вашу учетную запись</router-link>.</p>
        </div>
        <FormRegister/>
        <RegisterWith 
          google="Зарегестрироваться с Google"
          vKontacte="Зарегестрироваться с Вконтакте"
        />
      </div>
      <WelcomeTaskList
        v-if="isRegister"
      />
      <div class="register__overlay"
        v-if="isRegister"
      >
      </div>
    </div>
  </transition>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
import PanelWithLogo from '@/components/PanelWithLogo.vue';
import RegisterWith from '@/components/RegisterWith.vue';
import WelcomeTaskList from '@/components/WelcomeTaskList.vue';
export default {
  data() {
    return {
      show: false
    }
  },  
  components: {
    FormRegister,
    PanelWithLogo,
    RegisterWith,
    WelcomeTaskList
  },
  computed: {
    isRegister() {
      return this.$store.getters.isRegister;
    }
  },
  mounted() {
    this.show = true
  }
  
}
</script>

<style lang="scss" scoped>
  .register {
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
    &__overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background: black;
      top: 0;
      opacity: 0.2;
      z-index: 0;
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