<template>
  <div class="position">
    <transition name="bounce">
      <div class="dialog" v-if="isOpened">
        <div class="dialog__header">
          <div class="dialog__backward">Назад</div>
          <div class="dialog__title title-fz15">
            Создать новую коллекцию
          </div>
          <div class="dialog__create">Создать</div>
        </div>
        <div class="dialog__name-collection">
          Введите название
        </div>
        <div class="dialog__members">
          Участники
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('dialogCreateCollection', ['isOpened']),
  }
}
</script>
<style lang="scss">
  .position {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
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

  .bounce-enter-active {
  animation: bounce-in 0.2s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 100%;
    }
  }
</style>