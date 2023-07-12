<template>
  <div>
    <div class="wrapper">
      <div 
        class="btn"
        v-on:click="toggleModal($event)"
      >
        <AttentionIcon/>
      </div>
    </div>
    <BouceAnimate
      v-bind:show="active"
    >
      <div 
        v-if="active" 
        v-on:mouseenter="CloseBtn = true"
        v-on:mouseleave="CloseBtn = false"
        class="modal"
        ref="modal"
      >
        <div class="modal__title title-fz15">{{ titleText }}</div>
        <p class="title-fz14-light modal__text">{{ text }}</p>
        <div 
          v-on:click.stop="closeModal"
          class="modal__close-btn"
          v-bind:class="{'modal__close-btn_hiden': !CloseBtn}"
        >
          <XIcon/>
        </div>
      </div>
    </BouceAnimate>
  </div>
</template>

<script>
export default {
  name: 'ModalAttention',
  data() {
    return {
      active: false,
      CloseBtn: false,
    }
  },
  methods: {
    toggleModal(event) {
      event.stopPropagation();
      this.active = !this.active;
      this.CloseBtn = false;
    },
    closeModal() {
      this.active = false;
      this.CloseBtn = false;
    },
    handleClickOutside(event) {
      if (this.$refs.modal && !this.$refs.modal.contains(event.target)) {
        this.closeModal();
      }
    }
  },
  props: {
    titleText: {
      required: true,
    },
    text: {
      required: true,
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>
<style lang="scss" scoped>
  div {
    height: 100%;
    position: relative;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .btn {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    transition: 0.4s all;
    border-radius: 4px;
    &:hover {
      background: var(--dark-gray);
    }
  }
  .modal {
    position: absolute;
    height: auto;
    width: 280px;
    border: 1px solid var(--dark-gray);
    box-shadow: 0px 0px 8px 0.2px var(--gray-shadow);
    border-radius: 12px;
    padding: 10px;
    background: var(--light-gray);
    left: -250px;
    &__title {
      height: 20px;
      text-align: center;
    }
    &__text {
      margin-top: 10px;
      padding: 10px;
      background: var(--white);
      border-radius: 12px;
    }
    &__close-btn {
      height: 26px;
      width: 26px;
      position: absolute;
      top: 7px;
      right: 10px;
      padding: 4px;
      border-radius: 4px;
      transition: 0.4s all;
      opacity: 1;
      &:hover {
        background: var(--dark-gray);
      }
      &_hiden {
        opacity: 0;
      }
    }
  }


</style>