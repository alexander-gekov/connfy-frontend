<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <Nuxt class="bg-gray-100 h-5/6 font-montserrat mx-auto pb-5" />
    <NavigationBar class="footer sticky w-full bottom-0 z-30 bg-white" />
    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
export default {
  name: 'my-tour',
  data() {
    return {
      steps: [
        {
          target: '#v-step-0', // We're using document.querySelector() under the hood
          header: {
            title: 'Welcome',
          },
          content: `In this page you can see all your upcoming meetings.`,
        },
        {
          target: '#v-step-1',
          content: 'You can create a new meeting.',
        },
        {
          target: '#v-step-2',
          content: 'And also see more detailed info per meeting.',
        },
        {
          target: '#v-step-3',
          content:
            'This is the past meetings tab.Here you can see past meetings through calendar and also see your groups. You can also see past notes and edit, organize them.',
        },
        {
          target: '#v-step-4',
          content:
            'This is the open meetings tab. Here you can see meetings happening near you and join people from other companies for a meeting.',
        },
        {
          target: '#v-step-5',
          content: 'This is the upcoming meetings tab. You are on it now.',
        },
      ],
    }
  },
  mounted: function () {
    this.$tours['myTour'].start()
  },
}
</script>

<style>
html {
  font-family: 'Montserrat', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.container {
  padding: 10px;
}

.primaryColor {
  color: #63aed9;
}
.accentColor {
  color: #e79f37;
}
darkColor {
  color: #414042;
}
</style>
