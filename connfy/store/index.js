import meetingsJson from '~/mock/meetings.json';

export const state = () => ({
  meetings: new Array(meetingsJson)
})

export const mutations = {
  add(state, meeting) {
    state.meetings[0].push(meeting)
  },

}

export const getters = {
  getById: (state) => (id) => {
    console.log(state.meetings[0].find(meeting => meeting.id == id))
    return state.meetings[0].find(meeting => meeting.id == id)
  }
}
