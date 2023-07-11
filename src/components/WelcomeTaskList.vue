<template>
  <main class="welcome">
    <h1 class="welcome__title title-fz16">Поздравляем!</h1>
    <p class="welcome__text title-fz15-light">
      Благодарим Вас за то, что Вы присоединились к TaskList.<br>
      Теперь вы можете авторизироваться.
    </p>
    <a href="" class="title-fz14 welcome__link">Перейти в учетную запись</a>
  </main>
  <div class="overlay"></div>
</template>

<script>
  export default {
    data() {
      return {
        active: false
      }
    },
    computed: {
      
    }
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
    margin-top: 20px;
    position: relative;
    z-index: 1;
    &__title {
      text-align: center;
    }
    &__text {
      background: var(--light-gray);
      border-radius: 12px;
      margin-top: 30px;
      padding: 10px;
    }
    &__link {
      background: var(--light-gray);
      border-radius: 12px;
      margin-top: 30px;
      padding: 10px;
      text-decoration: none;
      color: var(--green);
      transition: 0.4s all;
      &:hover {
        background: var(--gray);
      }
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background: black;
    top: 0;
    opacity: 0.2;
    z-index: 0;
  }
</style>