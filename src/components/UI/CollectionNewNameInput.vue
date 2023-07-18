<template>
  <div class="model">
    <div class="model__icon"><CubeIcon class="size"/></div>
    <div class="model__block">
      <label class="model__label title-fz12-light" for="name">Название</label>
      <input 
        v-focus 
        class="model__input title-fz15-light" 
        id="name" 
        name="name" 
        type="text" 
        placeholder="Введите название для Вашей коллекции (например: Клиенты, Задачи, Документы)"
        v-on:input="$emit('handleValue', value)"
        v-model="value"
        >
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollectionNewNameInput',
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  .model {
    display: grid;
    grid-template-columns: 23px 592px;
    column-gap: 15px;
    padding: 5px 15px;
    background-color: var(--light-gray);
    border-radius: 12px;
    &__icon {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
    }
    &__block {
      display: grid;
      grid-template-rows: 15px 30px;
    }
    &__label {
      color: var(--green);
    }
    &__input {
      width: 100%;
      border: none;
      background-color: var(--light-gray);
      outline: none;
      &::placeholder  {
        color: var(--text-gray);
      }
    }
  }

  .size {
    height: 23px;
    width: 23px;
  }
</style>