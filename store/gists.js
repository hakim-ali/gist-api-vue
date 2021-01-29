export const state = () => ({
  loading: false,
  gists: [],
  files: [],
  forks: [],
})

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  SET_GISTS(state, data) {
    state.gists = data
  },
  SET_FILES(state, data) {
    state.files = data
  },
  SET_FORKS(state, data) {
    state.forks = data
  },
}
export const actions = {
  async getAllGists({ commit }, data) {
    commit('SET_LOADING', true)
    try {
      console.log(data)
      const url = `users/${data.username}/gists`
      const res = await this.$axios.get(url)
      commit('SET_GISTS', res.data)
      return res
    } catch (err) {
      console.log(err)
      commit('SET_GISTS', [])
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async getGistDetails({ commit }, data) {
    commit('SET_LOADING', true)
    try {
      console.log(data)
      const url = `gists/${data.gistId}`
      const res = await this.$axios.get(url)

      const gistDetails = res.data
      let files = []
      let forks = []
      if (gistDetails.files && Object.keys(gistDetails.files).length > 0) {
        files = Object.keys(gistDetails.files).map((key) => {
          return gistDetails.files[key]
        })
      }
      forks =
        gistDetails.forks && gistDetails.forks.length > 0
          ? gistDetails.forks.slice(0, 3)
          : []
      commit('SET_FILES', files)
      commit('SET_FORKS', forks)
      return res
    } catch (err) {
      console.log(err)
      commit('SET_FILES', [])
      commit('SET_FORKS', [])
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
