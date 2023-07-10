<template>
  <div class="wrapper">
    <div class="block">
      <div class="wrapper-icon">
        <GoogleIcon/>
      </div>
      <p class="title-fz16-light">Зарегестрироваться с Google</p>
    </div>
    <div class="block">
      <div class="wrapper-icon">
        <VkIcon/>
      </div>
      <p class="title-fz16-light">Зарегестрироваться с Вконтакте</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .wrapper {
    margin-top: 40px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .block {
    cursor: pointer;
    border-radius: 8px;
    padding: 0 15px;
    height: 48px;
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 30px minmax(20px, auto);
    column-gap: 10px;
    user-select: none;
    border: 1px solid var(--dark-gray);
    property: user-select;
    background: white;
    transition: 0.4s all;
    &:hover {
      background: var(--light-gray);
    }
  }
  .wrapper-icon {
    width: 30px;
    height: 30px;
  }

</style>