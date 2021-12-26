import { createStore } from 'vuex'
import { IRootState } from './@types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'shy',
      age: 12
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLoaclLogin')
}

export default store
