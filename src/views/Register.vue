<template>
  <div class="register">
    <div class="header">
      <h1 class="title-h1">Create a free Task List account</h1>
      <p class="title-fz16">Or <a class="link" href="">login to your account</a>.</p>
    </div>
    <FormRegister/>
  </div>
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
  .title-h1 {
    text-align: center;
  }
  .title-fz16 {
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