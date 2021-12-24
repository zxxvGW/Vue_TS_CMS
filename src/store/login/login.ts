import { Module } from 'vuex'
import { ILoginState, IRootState } from '../@types'
import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      console.log(id)
      commit('changeToken', token)
    }
  }
}

export default loginModule
