const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Write something!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');
