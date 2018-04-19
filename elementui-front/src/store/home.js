import axios from 'axios'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    msg: 'Hello Vue World!',
    loading: false,
    err: {}
  },
  actions: {
    async fetchData ({ commit, state }) {
      commit('home/fetch/request', { loading: true })
      try {
        const response = await axios.get('http://127.0.0.1:7001')
        const response2 = await axios.get('http://127.0.0.1:7001/api/news')
        console.log(response2)
        commit('home/fetch/success', { loading: false, err: {}, msg: response.data })
      } catch (err) {
        commit('home/fetch/failure', { loading: false, err })
      }
    }
  },
  mutations: {
    ...buildMutations4Action('home', 'fetch')
  }
}
