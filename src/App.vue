<template>
  <div class="main">
    <ButtonWideGreen>fsada</ButtonWideGreen>
    <CheckBoxMain
      v-bind:label="'ddd'"
      v-bind:name="'check'"
      v-bind:id="'id'"
    />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  @import '@/style/for_import.scss';
  .main {
    background: url('assets/img/bg.jpg') no-repeat 50%/cover;;
    width: 100%;
    min-height: 100vh;
  }
</style>