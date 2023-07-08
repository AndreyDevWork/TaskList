<template>
  <div>
    <input 
      type="checkbox" 
      v-bind:id="id" 
      v-bind:name="name"
      v-bind:requiered="requiered"
      >

    <label 
      v-bind:for="id">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBoxMain',
  props: {
    id: {
      required: true 
    },
    name: {
      requiered: true
    },
    label: {
      required: true
    },
    requiered: {
      type: Boolean,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
  div {
    height: 40px;
  }
  input {
    display: none;
  }
  label {
    padding-left: 20px; 
    font-weight: 400;
    line-height: 17px;
    font-size: 12px;
  }
  label::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-left: -10px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid var(--blue);
    transition: all 0.2s;
  }
  input:checked + label::before {
    text-align: center;
    align-items: center;
    color: var(--white);
    background-color: var(--blue);
    background-size: 100%;
    background-image: url('@/assets/icons/check_box.svg');
  }
</style>