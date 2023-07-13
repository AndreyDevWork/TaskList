<template>
  <form novalidate class="form"
    v-on:submit.prevent="sendData"
  >
    <div class="form__inputs">

      <div class="form__wrapper-input">
        <UserIcon/>
        <input class="form__input title-fz14-light title_letter-spacing" type="text" placeholder="Name" name="name"
          v-model.trim="nameValue"
        >
        <OkayIcon
          v-if="validatedName"
        />
      </div>

      <div class="form__wrapper-input">
        <EmailIcon/>
        <input class="form__input title-fz14-light title_letter-spacing" type="email" placeholder="Email" name="email" 
          v-model.trim="emailValue"
        >
        <OkayIcon
          v-if="validatedEmail"
        />
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
        <modal-attention
          v-if="!validatedPassword"
          titleText="Пароль"
          text="Пароль должен состоять из более чем 6 символов и должен содержать хотя бы 1 цифру или букву."
        />
        <OkayIcon
          v-if="validatedPassword"
        />
      </div>
    </div>

    <p class="form__policy title-fz12-light">
      * Нажимая создать аккаунт я соглашаюсь с <a href="" class="form__policy-link">Политикой конфиденциальности</a> и <a href="" class="form__policy-link">Условиями предоставления услуг.</a>
    </p>

    <ButtonWideGreen
      LoadingIcon
      class="form__btn"
      v-bind:disabled="btnDisabled"
    >
    <LoadingIcon v-if="loading"/>
      <div v-if="!loading">Создать аккаунт</div>
    </ButtonWideGreen>
  </form>
</template>
<script>
export default {
  data() {
    return {
      inputType: 'password',

      nameValue: '',
      emailValue: '',
      passwordValue: '',
      loading: false,
    }
  },
  methods: {
    sendData() {
      this.loading = true;
      const formData = {
        name: this.nameValue,
        email: this.emailValue,
        password: this.passwordValue
      }
      
      this.$store.dispatch('sendRegisterData', formData);
    },
    onChangeInputType() {
      if(this.inputType == 'password') {
        this.inputType = 'text'
      } else {
        this.inputType = 'password'
      }
    }
  },
  computed: {
    validatedName() {
      const regexName = /^[a-zA-Zа-яА-Я0-9_\s]{2,32}$/
      return this.passwordValid = regexName.test(this.nameValue)
    },
    validatedEmail() {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return regexEmail.test(this.emailValue)
    },
    validatedPassword() {
      const regexPassword = /^(?=.*[a-zA-Zа-яА-Я0-9])(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9]).{6,}$/
      return this.passwordValid = regexPassword.test(this.passwordValue)
    },
    btnDisabled() {
      return !(this.validatedName && this.validatedEmail && this.validatedPassword)
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
      grid-column: 2 / 4;
      padding: 8px 0;
      border: none;
      background: var(--light-gray);
      outline: none;
      border-bottom: 1px solid var(--dark-gray);
    }
    &__password {
      grid-column: 2 / 3;
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
    &__policy {
      margin-top: 20px;
      padding: 10px 0 10px 15px;
      transition: 0.4s all;
      border-radius: 12px;
      &:hover {
        background: var(--light-gray);
      }
    }
    &__policy-link {
      color: var(--green);
      text-decoration: none;
      transition: 0.4s all;
      &:hover {
        color: var(--green-hover);
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