<template>
  <div 
    class="newCollection"
    v-on:click="changeIsOpened"
    v-on:mouseenter="isHovered = true"
    v-on:mouseleave="isHovered = false"
  >
    <div
      v-bind:class="[{'hover-item': isHovered}, 'newCollection__item']"
    >
      <PlusIcon class="icon"/>
    </div>
    <div
      v-bind:class="[{'hover-text': isHovered}, 'newCollection__title title-fz14']"
    >Новая Коллекция</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isHovered: false
    }
  },
  methods: {
    ...mapActions('dialogCreateCollection', ['changeIsOpened']),
  },
  name: 'CollectionNew'
}
</script>
<style lang="scss" scoped>
  .newCollection {
    height: 115px;
    width: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    &__item {
      width: 70px;
      height: 70px;
      background-color: var(--light-gray);
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__title {
      margin-top: 5px;
      width: 100%;
      height: 40px;
      overflow-wrap: break-word;
      text-align: center;
    }
  }

  .hover-text {
    color: var(--blue-hover-text);
  }
  .hover-item {
    background-color: var(--white);
  }

  .icon {
    width: 27px;
    height: 27px;
  }
</style>