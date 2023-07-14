import { createStore } from 'vuex'

import { formRegisterModule } from '@/store/formRegisterModule'
import { formLoginModule } from '@/store/formLoginModule'
import { sideBarModule } from '@/store/sideBarModule'

export default createStore({
  modules: {
    formRegister: formRegisterModule,
    formLogin: formLoginModule,
    sideBar: sideBarModule,
  }
})
