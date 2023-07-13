<template>
<transition name="bounce">
  <div class="bounce-enter-active">
    <main class="welcome">
    <h1 class="welcome__title title-fz16">Поздравляем!</h1>
    <p class="welcome__text title-fz15-light">
      Благодарим Вас за то, что Вы присоединились к Task List.<br>
      Теперь вы можете авторизироваться.
    </p>
    <router-link class="title-fz14 welcome__link" to="/login">Перейти в учетную запись</router-link>
  </main>
  </div>
</transition>
</template>


<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .welcome {
    display: grid;
    width: 680px;
    padding: 15px 10px;
    min-height: 60px;
    border-radius: 12px;
    background: var(--white);
    margin: auto;
    margin-top: 40px;
    position: relative;
    z-index: 1;
    &__title {
      text-align: center;
    }
    &__text {
      background: var(--light-gray);
      border-radius: 12px;
      margin-top: 30px;
      padding: 10px 15px 10px 15px;
    }
    &__link {
      background: var(--light-gray);
      border-radius: 12px;
      margin-top: 10px;
      padding: 10px 15px 10px 15px;
      text-decoration: none;
      color: var(--green);
      transition: 0.4s all;
      &:hover {
        background: var(--gray);
      }
    }
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