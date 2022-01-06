import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './@types'
import login from './login/login'
import system from './main/system/system'

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
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLoaclLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
