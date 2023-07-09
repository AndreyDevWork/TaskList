<template>
  <form  novalidate class="wrapper-form"
    v-on:submit.prevent="sendForm"
  >
    <div class="block-inputs">

      <div class="wrapper-input">
        <UserIcon/>
        <input class="input title-fz12-light" type="text" placeholder="Name" name="name">
      </div>

      <div class="wrapper-input">
        <EmailIcon/>
        <input class="input title-fz12-light" type="email" placeholder="Email" name="email" >
      </div>
      
      <div class="wrapper-input">
        <PassLockIcon/>
        <input class="input input-password title-fz12-light " type="password" placeholder="Password" name="password">
        <modal-attention
          titleText="Пароль"
          text="Пароль должен состоять из более чем 6 символов и должен содержать хотя бы 1 цифру или букву."
        />
        <CloseEyeIcon/>
      </div>

    </div>

    <div class="wrapper-checkboxes">

      
    </div>

    <ButtonWideGreen>Create free account</ButtonWideGreen>
  </form>
</template>
<script>
export default {
  methods: {
    sendForm() {
      console.log('send')
    }
  }
}
</script>
<style lang="scss" scoped>
  .wrapper-form {
    margin-top: 40px;
    display: grid;
    padding-right: 10px;
    grid-template-rows: repeat(3, minmax(20px, auto));
  }
  .block-inputs {
    background: var(--light-gray);
    padding: 0px 15px;
    border-radius: 12px;
  }
  .wrapper-input {
    display: grid;
    grid-template-columns: 20px minmax(100px, auto) 20px 20px;
    column-gap: 15px;
  }
  .input {
    grid-column: 2 / 6;
    padding: 8px 0;
    border: none;
    background: var(--light-gray);
    outline: none;
    border-bottom: 1px solid var(--dark-gray);
  }
  .input-password {
    grid-column: 2 / 3;
    border-bottom: none;
  }

</style>