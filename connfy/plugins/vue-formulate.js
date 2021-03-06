import Vue from 'vue'
import VueFormulate from '@braid/vue-formulate'

Vue.use(VueFormulate, {
  classes: {
    input: (context, classes) => {
      return classes.concat(['bg-white'])
    },
  },
})
