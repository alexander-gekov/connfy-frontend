<template>
  <div>
    <Title class="py-3" pageTitle="Shared notes" />
    <div class="max-w-4xl mx-auto px-5">
      <div class="speech-to-txt" @click="startSpeechToTxt">Speech to txt</div>
      <p>{{ transcription_ }}</p>
    </div>
    <div
      class="fixed flex justify-between p-2 pb-0 bg-white"
      style="bottom: 0px; right: 0px; left: 0px"
    >
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
      <button>
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
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          autio: true,
        })
        .then(
          (stream) => {
            this.status = 'DONE'
          },
          (err) => {
            console.error(err)
          }
        )
      // navigator.permissions
      //   .query({ name: 'microphone' })
      //   .then((permissionObj) => {
      //     console.log(permissionObj.state)
      //   })
      //   .catch((error) => {
      //     console.log('Got error :', error)
      //   })
    }
  },
  data() {
    return {
      message: '',
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

      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition
      const recognition = new window.SpeechRecognition()
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
        this.runtimeTranscription_ = ''
        recognition.stop()
      })
      recognition.start()
    },
  },
}
</script>

<style scoped></style>
