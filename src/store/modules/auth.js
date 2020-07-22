import { SignIn } from '@/api/signin.js'
import Cookies from 'vue-cookies'

export default {
  state: {
    token: Cookies.get('token')
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    SetToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    SignIn({ commit }, credentials) {
      return SignIn(credentials)
    }
  },
  getters: {
    token: state => {
      return state.token
    }
  }
}
