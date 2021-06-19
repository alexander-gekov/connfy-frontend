<template>
  <div>
    <Title class="py-3" pageTitle="Shared notes" />
    <div class="max-w-4xl mx-auto px-5">
      <div v-for="note in notes" :key="note.id" class="flex flex-col mb-5">
        <div class="text-sm text-black ml-4">Simon Cowell</div>
        <div
          class="
            bg-white
            px-4
            py-2
            rounded-2xl
            shadow-lg
            text-black
            flex
            justify-between
          "
        >
          <div class="">{{ note.message }}</div>
          <div class="p-2 flex flex-col">
            <svg
              class="w-6 h-6 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              @click="speak(note.message)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed flex items-center justify-between p-2 pb-0 bg-white"
      style="bottom: 0px; right: 0px; left: 0px"
    >
      <transition name="fade">
        <button
          v-if="isAddOpen"
          class="
            transition
            duration-750
            ease-in
            absolute
            -top-12
            left-14
            bg-blue
            rounded-full
            text-white
            px-4
            py-2
          "
        >
          Note
        </button>
      </transition>
      <transition name="fade">
        <button
          v-if="isAddOpen"
          class="
            transition
            duration-750
            ease-in
            absolute
            -top-24
            left-5
            bg-blue
            rounded-full
            text-white
            px-4
            py-2
          "
        >
          Topic
        </button>
      </transition>
      <svg
        @click="isAddOpen = !isAddOpen"
        class="w-12 h-12 text-blue"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        ></path>
      </svg>
      <textarea
        class="
          flex-grow
          m-2
          py-2
          px-6
          pr-8
          mr-3
          rounded-full
          border border-gray-300
          bg-gray-200
          resize-none
        "
        v-model="message"
        v-on:keyup.enter="sendMessage"
        rows="1"
        placeholder="Message..."
        style="outline: none"
      ></textarea>
      <button class="p-2" style="outline: none" v-on:click="sendMessage">
        <svg
          class="svg-inline--fa text-blue fa-paper-plane w-6 h-6 mr-2"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
      </button>
      <button @click="startSpeechToTxt">
        <div v-if="isRecording" class="absolute right-4 -top-1 flex h-4 w-4">
          <span
            class="
              animate-ping
              absolute
              inline-flex
              h-full
              w-full
              rounded-full
              bg-red-400
              opacity-75
            "
          ></span>
          <span
            class="relative inline-flex rounded-full h-4 w-4 bg-red-500"
          ></span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-inline--fa text-blue fa-paper-plane w-7 h-7 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import CircleImage from '@/components/CircleImage'
export default {
  layout: 'notes',
  name: 'notes.vue',
  components: {
    CircleImage,
  },
  created() {
    if (process.browser) {
      // navigator.mediaDevices
      //   .getUserMedia({
      //     video: true,
      //     autio: true,
      //   })
      //   .then(
      //     (stream) => {
      //       this.status = 'DONE'
      //     },
      //     (err) => {
      //       console.error(err)
      //     }
      //   )
      navigator.permissions
        .query({ name: 'microphone' })
        .then((permissionObj) => {
          console.log(permissionObj.state)
        })
        .catch((error) => {
          console.log('Got error :', error)
        })
    }
  },
  mounted() {
    if (process.browser) {
      this.greetingSpeech = new window.SpeechSynthesisUtterance()
      this.synth = window.speechSynthesis
    }

    this.voiceList = this.synth.getVoices()
    console.log(this.voiceList)

    if (this.voiceList.length) {
      this.isLoading = false
    }

    this.synth.onvoiceschanged = () => {
      this.voiceList = this.synth.getVoices()
      // give a bit of delay to show loading screen
      // just for the sake of it, I suppose. Not the best reason
      setTimeout(() => {
        this.isLoading = false
      }, 800)
    }

    this.listenForSpeechEvents()
  },
  data() {
    return {
      message: '',
      isAddOpen: false,
      isRecording: false,
      notes: [
        {
          id: 0,
          message:
            'This is a basic mobile chat layout, build with tailwind css',
        },
        {
          id: 1,
          message:
            'It will be used for a full tutorial about building a chat app with vue, tailwind and firebase.',
        },
      ],
      runtimeTranscription_: '',
      transcription_: [],
      lang_: 'en-EN',
      isLoading: true,
      selectedVoice: 1,
      synth: '',
      voiceList: [],
      greetingSpeech: '',
    }
  },
  methods: {
    sendMessage() {
      if (this.message != '') {
        let msg = { id: 11, message: this.message }
        this.notes.push(msg)
        this.message = ''
      }
    },
    startSpeechToTxt() {
      // initialisation of voicereco
      this.isRecording = true
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new window.webkitSpeechRecognition()
      recognition.lang = this.lang_
      recognition.interimResults = true

      // event current voice reco word
      recognition.addEventListener('result', (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('')
        this.runtimeTranscription_ = text
      })
      // end of transcription
      recognition.addEventListener('end', () => {
        this.transcription_.push(this.runtimeTranscription_)
        this.notes.push({ id: 1, message: this.runtimeTranscription_ })
        this.runtimeTranscription_ = ''
        recognition.stop()
        this.isRecording = false
      })
      recognition.start()
    },
    /**
     * React to speech events
     */
    listenForSpeechEvents() {
      this.greetingSpeech.onstart = () => {
        this.isLoading = true
      }

      this.greetingSpeech.onend = () => {
        this.isLoading = false
      }
    },

    /**
     * Shout at the user
     */
    speak(text) {
      // it should be 'craic', but it doesn't sound right
      this.greetingSpeech.text = text

      this.greetingSpeech.voice = this.voiceList[this.selectedVoice]
      if (process.browser) {
        this.synth = window.speechSynthesis
      }

      this.synth.speak(this.greetingSpeech)
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
