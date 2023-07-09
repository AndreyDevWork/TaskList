<template>
  <div class="register">
    <div class="header">
      <h1 class="title-h1-light">Создать учетную запись Task List</h1>
      <p class="title-fz16-light">Или <a class="link" href="">войдите в Вашу учетную запись</a>.</p>
    </div>
    <FormRegister/>
  </div>
  <BouceAnimate/>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
export default {
  components: {
    FormRegister
  }
}
</script>

<style lang="scss" scoped>
  .register {
    padding: 40px 10px;
    width: 680px;
    min-height: 100px;
    background: var(--white);
    border-radius: 12px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, minmax(20px, auto));
  }
  .header {
    grid-column: 1 / 3;
  }
  .title-h1-light {
    text-align: center;
  }
  .title-fz16-light {
    text-align: center;
    margin-top: 20px;
  }
  .link {
    color: var(--green);
    &:hover {
      color: var(--green-hover);
    }
  }
  
</style>