<template>
  <div class="modal-attention">
    <div class="btn">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="18px" height="18px" viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
      </metadata>
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="rgb(155, 155, 155)" stroke="none">
      <path d="M2484 4469 c-80 -23 -66 -1 -1077 -1799 -530 -943 -970 -1732 -977
      -1754 -34 -104 31 -229 139 -265 49 -16 3933 -16 3982 0 108 36 173 161 139
      265 -7 22 -447 811 -977 1754 -1019 1814 -997 1776 -1082 1800 -43 12 -104 12
      -147 -1z m167 -1296 c40 -21 61 -40 84 -77 l30 -49 3 -461 c3 -498 2 -518 -49
      -579 -83 -100 -235 -100 -318 0 -51 61 -52 81 -49 579 l3 461 30 49 c35 57
      114 104 175 104 20 0 61 -12 91 -27z m-34 -1478 c92 -27 164 -134 149 -223
      -13 -81 -88 -164 -161 -178 -88 -16 -186 29 -224 104 -48 94 -35 172 39 244
      44 42 66 53 141 67 3 1 28 -6 56 -14z"/>
      </g>
    </svg>
  </div>
  <div class="modaal">
    <div class="title title-fz15">{{ titleText }}</div>
    <p class="text">{{ text }}</p>
  </div>
  </div>
</template>
<script>
export default {
  name: 'ModalAttention',
  data() {
    return {

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
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .btn {
    width: 26px;
    height: 20px;
    cursor: pointer;
    text-align: center;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s all;
    &:hover {
      background: var(--gray);
    }
  }
  .modaal {
    background: var(--light-gray);
    border: 1px solid var(--dark-gray);
    border-radius: 12px;
    text-align: center;
    padding: 10px;
    box-shadow: 0px 0px 8px 0.2px var(--gray-shadow);
    position: absolute;
  }
  .text {
    background: var(--white);
    padding: 10px;
    text-align: left;
    border-radius: 12px;
    margin-top: 20px;
  }
  svg {
    g {
      fill: var(--svg-fray);
    }
  }
</style>