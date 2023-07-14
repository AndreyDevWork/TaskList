<template>
  <form novalidate class="form"
    v-on:submit.prevent="sendData"
  >

    <div class="form__inputs">

      <div class="form__wrapper-input">
        <EmailIcon/>
        <input class="form__input title-fz14-light title_letter-spacing" type="email" placeholder="Email" name="email" 
          v-model.trim="emailValue"
        >
      </div>

      <div class="form__wrapper-input">
        <PassLockIcon/>
        <input class="form__input form__password title-fz14-light title_letter-spacing" placeholder="Password" name="password"
          v-bind:type="inputType"
          v-model.trim="passwordValue"
        >
        <div
          class="form__show-hide-password"
          v-on:click="onChangeInputType"
        >
          <CloseEyeIcon
            v-if="inputType == 'password'"
          />
          <OpenEyeIcon
            v-if="inputType == 'text'"
          />
        </div>

      </div>

    </div>

    <ButtonWideGreen class="form__btn">
      <LoadingIcon v-if="loading"/>
      <div v-if="!loading">
        Войти
      </div>
    </ButtonWideGreen>
    <ButtonWideWhite class="form__btn" type="button">
      Забыли пароль?
    </ButtonWideWhite>
  </form>
</template>
<script>

export default {
  data() {
    return {
      inputType: 'password',

      emailValue: '',
      passwordValue: '',
      loading: false,
    }
  },
  methods: {
    sendData() {
      this.loading = true
      const formData = {
        email: this.emailValue,
        password: this.passwordValue
      }
      const result = this.$store.dispatch('sendLoginData', formData)
      if(result) {
        this.$router.push('/')
      }
    },
    onChangeInputType() {
      if(this.inputType == 'password') {
        this.inputType = 'text'
      } else {
        this.inputType = 'password'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .form {
    margin-top: 40px;
    display: grid;
    padding-right: 10px;
    grid-template-rows: repeat(3, minmax(20px, auto));
    position: relative;
    &:after {
      position: absolute;
      content: '';
      width: 1px;
      height: 100%;
      right: 0;
      background: var(--gray);
    }
    &__inputs {
      background: var(--light-gray);
      padding: 0px 15px;
      border-radius: 12px;
    }
    &__wrapper-input {
      display: grid;
      grid-template-columns: 20px minmax(100px, auto) 20px 20px;
      column-gap: 15px;
      align-items: center;
    }
    &__input {
      grid-column: 2 / 6;
      padding: 8px 0;
      border: none;
      background: var(--light-gray);
      outline: none;
      border-bottom: 1px solid var(--dark-gray);
    }
    &__password {
      grid-column: 2 / 4;
      border-bottom: none;
    }
    &__show-hide-password {
      transition: 0.4s all;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      &:hover {
        background: var(--dark-gray);
      }
    }
    &__btn {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>