import { createStore } from 'vuex'
import { formRegisterModule } from './formRegisterModule'

export default createStore({
  modules: {
    formRegister: formRegisterModule
  }
})
