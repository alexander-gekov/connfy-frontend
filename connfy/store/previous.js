export const state = () => ({
    previousPage: "pastMeetings"
  })
  
  export const mutations = {
    change(state, text) {
        state.previousPage = text
    }
  }