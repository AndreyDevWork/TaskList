import { createStore } from 'vuex'

import { formRegisterModule } from '@/store/formRegisterModule'
import { formLoginModule } from '@/store/formLoginModule'

export default createStore({
  modules: {
    formRegister: formRegisterModule,
    formLogin: formLoginModule
  }
})
