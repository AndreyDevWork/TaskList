<template >
  <div class="members">
    <div class="members__title title-fz14">Участники коллекции</div>
    <div class="members__block">
      <ButtonOpenProfile class="profile-icon"/>
      <div class="members__owner">
        <div class="member__owner-name  title-fz14-light">Имя</div>
        <div class="title-fz12-light members__status">Владелец коллекции</div>
        <div class="hr"></div>
      </div>
      <div class="members__add">
        <div class="wrapper-icon">
          <PlusIcon
          green="true"
          />
        </div>
        <div class="members__add-text title-fz14-light">Добавить участника</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollectionNewMembers'
}
</script>
<style lang="scss" scoped>
  .members {
    margin-top: 10px;
    &__title {
      padding: 0px 10px;
    }
    &__block {
      margin-top: 10px;
      display: grid;
      grid-template-columns: 23px 592px;
      grid-template-rows: repeat(2, minmax(23px, auto));
      column-gap: 15px;
      row-gap: 5px;
      padding: 10px 15px;
      background-color: var(--light-gray);
      border-radius: 12px;
    }
    &__status {
      color: var(--text-gray);
    }
    &__add {
      grid-column: 1 / 3;
      display: grid;
      grid-template-columns: 23px 592px;
      column-gap: 15px;
      cursor: pointer;
    }
    &__add-text {
      color: var(--green);
      margin-top: 2px;
      &:hover {
        color: var(--green-hover);
      }
    }
  }

  .hr {
    height: 1px;
    width: 100%;
    margin-top: 5px;
    background-color: var(--gray-shadow);
  }
  .wrapper-icon {
    padding: 2px;
    width: 23px;
    height: 23px;
  }
  .profile-icon {
    align-items: start;
  }
</style>