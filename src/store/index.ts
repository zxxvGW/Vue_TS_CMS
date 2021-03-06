import { getPageListData } from '@/service/main/system/system'
import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './@types'
import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      age: 0,
      entireDepartment: [],
      entireRole: []
    }
  },
  getters: {},
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },

    changeEntireRole(state, list) {
      state.entireRole = list
    }
  },
  actions: {
    async getInitialDateAction({ commit }) {
      // 请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })

      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })

      const { list: departmentList } = departmentResult.data
      const { list: roleList } = roleResult.data

      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch('login/loadLoaclLogin')
  store.dispatch('getInitialDateAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
