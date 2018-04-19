import axios from 'axios'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    msg: 'Hello Vue World!',
    data: [],
    loading: false,
    err: {}
  },
  actions: {
    async fetchData ({ commit, state }) {
      commit('home/fetch/request', { loading: true })
      try {
        const response = await axios.get('/api/news')
        commit('home/fetch/success', { loading: false, err: {}, data: response.data.data })
      } catch (err) {
        commit('home/fetch/failure', { loading: false, err })
      }
    }
  },
  mutations: {
    ...buildMutations4Action('home', 'fetch')
  }
}
