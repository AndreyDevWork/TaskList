<template>
  <OverlayDialog 
    v-bind:isOpened="isOpened"
    v-bind:actionIsOpened="changeIsOpened"
  >
    <div class="dialog">
      <div class="dialog__header">
        <div class="dialog__backward">
          Назад
        </div>
        <div class="dialog__title title-fz15">
          Создать новую коллекцию
        </div>
        <div class="dialog__create">
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
    padding: 20px 10px;
    width: 680px;
    min-height: 100px;
    background-color: var(--white);
    border-radius: 12px;
    margin-top: 40px;
    display: grid;
    grid-template-rows: repeat(3, auto);
    row-gap: 20px;
    &__title {
      text-align: center;
    }
    &__header {
      display: grid;
      justify-content: space-between;
      grid-template-columns: 60px 200px 60px;
    }
  }
</style>