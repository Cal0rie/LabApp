import { createStore } from 'vuex'
import storeApp from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
//import permission from './modules/permission'
//import settings from './modules/settings'
import customize from './modules/customize'
import getters from './getters'

const store = createStore({
  modules: {
    storeApp,
    user,
    tagsView,
    customize,
    //permission,
    //settings
  },
  getters
})

export default store
