<template>
  <SideBarIcons/>
  <MyProfile/>
  <DialogCreateCollection/>
  <div class="main-page">
    <h1 class="main-page__title title-h1">Добро пожаловать в Taskl List</h1>
    <div class="main-page__collections">
      <CollectionNew class="create-new"/>
    </div>
  </div>

</template>
<script>
import SideBarIcons from '@/components/SideBarIcons.vue'
import MyProfile from '@/components/MyProfile.vue'
import DialogCreateCollection from '@/components/DialogCreateCollection'
export default {
  components: {
    SideBarIcons,
    MyProfile,
    DialogCreateCollection
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style lang="scss" scoped>
  .main-page {
    padding: 60px 0 0 0;
    width: 600px;
    margin: auto;
    display: grid;
    grid-template-rows: 63px minmax(20px, auto);
    row-gap: 20px;
    &__title {
      padding: 15px 10px;
      text-align: center;
      background-color: var(--light-gray);
      width: 100%;
      border-radius: 12px;
    }
    &__collections {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(5, 100px);
      row-gap: 20px;
      margin-top: 20px;
    }
  }
  .create-new {
    grid-column: span 5;
  }
</style>