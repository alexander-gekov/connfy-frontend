import meetingsJson from '~/mock/meetings.json'
export const strict = false

export const state = () => ({
  meetings: new Array(meetingsJson),
})

export const mutations = {
  add(state, meeting) {
    meeting.route.distance = 1.2
    state.meetings[0].push(meeting)
  },
  updateMeeting(state, data) {
    state.meetings[0][data.meetingId] = data.meeting
  },
  addTopic(state, data) {
    console.log(data.topic)
    state.meetings[0][data.meetingId].sharedTopics.push(data.topic)
  },
  changeNameOfTopic(state, data) {
    var index = state.meetings[0][data.meetingId].sharedTopics.length - 1
    state.meetings[0][data.meetingId].sharedTopics[index].name = data.name
  },
  addNote(state, note) {
    state.meetings[0].sharedNotes.push(note)
  },
  addNoteToTopic(state, name, note) {
    var index = state.meetings[0].sharedTopics.findIndex(
      (topic) => topic.name == name
    )
    state.meetings[0].sharedTopics[index].notes.push(note)
  },
}

export const getters = {
  getById: (state) => (id) => {
    console.log(state.meetings[0].find((meeting) => meeting.id == id))
    return state.meetings[0].find((meeting) => meeting.id == id)
  },
}
