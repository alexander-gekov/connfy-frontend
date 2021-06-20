import groupChannels from '~/mock/groupChannels.json';

export const state = () => ({
  channels: new Array(groupChannels)
})

export const mutations = {
  add(state, channel) {
    state.channels[0].push(channel)
  },

}

export const getters = {
  getById: (state) => (id) => {
    console.log(state.channels[0].find(channel => channel.id == id))
    return state.channels[0].find(channel => channel.id == id)
  }
}
