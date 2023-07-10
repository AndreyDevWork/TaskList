<template>
  <PanelWithLogo/>
  <div class="register">
    <div class="header">
      <h1 class="title-h1-light">Создать учетную запись</h1>
      <p class="title-fz16-light">Или <a class="link" href="">войдите в Вашу учетную запись</a>.</p>
    </div>
    <FormRegister/>
    <RegisterWith/>
  </div>
  <BouceAnimate/>
</template>

<script>
import FormRegister from '@/components/FormRegister.vue';
import PanelWithLogo from '@/components/PanelWithLogo.vue';
import RegisterWith from '@/components/RegisterWith.vue';
export default {
  components: {
    FormRegister,
    PanelWithLogo,
    RegisterWith
  }
}
</script>

<style lang="scss" scoped>
  .register {
    padding: 20px 10px;
    width: 680px;
    min-height: 100px;
    background: var(--white);
    border-radius: 12px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, minmax(20px, auto));
    margin-top: 40px;
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
    text-decoration: none;
    &:hover {
      color: var(--green-hover);
    }
  }
  
</style>