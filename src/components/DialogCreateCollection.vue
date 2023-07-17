<template>
  <OverlayDialog 
    v-bind:isOpened="isOpened"
    v-bind:actionIsOpened="changeIsOpened"
  >
    <div class="dialog">
      <div class="dialog__header">
        <div 
          class="title-fz14-light dialog__btn hover"
          v-on:click="changeIsOpened"
        >
          Назад
        </div>
        <div class="dialog__title title-fz15">
          Создать новую коллекцию
        </div>
        <div class="title-fz14-light dialog__btn dialog__btn-disabled hover">
          Создать
        </div>
      </div>

      <div class="dialog__name-collection">
        Введите название
      </div>
      <div class="dialog__members">
        Участники
      </div>
    </div>
  </OverlayDialog>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('dialogCreateCollection', ['isOpened']),
  },
  methods: {
    ...mapActions('dialogCreateCollection', ['changeIsOpened'])
  }
}
</script>
<style lang="scss" scoped>
  .dialog {
    padding: 10px 10px 20px 10px;
    width: 680px;
    min-height: 100px;
    background-color: var(--white);
    border-radius: 12px;
    margin-top: 80px;
    display: grid;
    grid-template-rows: repeat(3, auto);
    row-gap: 15px;
    &__title {
      text-align: center;
      display: flex;
      align-items: center;
    }
    &__header {
      display: grid;
      justify-content: space-between;
      grid-template-columns: minmax(20px, auto) 200px minmax(20px, auto);
    }
    &__btn {
      padding: 5px 5px;
      cursor: pointer;
      color: var(--green);
    }
    &__btn-disabled {
      cursor: default;
      color: var(--light-green);
    }
  }

  .hover {
    transition: 0.4s all;
    &:hover {
      background: var(--gray);
      border-radius: 4px;
    }
  }
</style>