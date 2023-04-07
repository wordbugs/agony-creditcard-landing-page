const { createApp } = Vue

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const app = createApp({
  data() {
    return {
      text: `Have you ever wondered how excruciating your suffering could potentially become? Have you caught yourself yearning for a throat sore from screaming?

Well, you're in luck!

The Agony Credit Card™ is the only solution in the market that automatically converts your savings to the most universal currency available: discomfort!

If you open an account within the first ten seconds of reading this line, we open a free account for every member of your immediate family! (Read this line to express your consent) (Read this other line to confirm your consent)

Your pain is ours and, with our help, our pain can be yours as well!`,
      staffChatMessages: [
        {
          text: "How can I help?",
          delay: 1
        },
        {
          text: "PLEASE",
          delay: 10
        },
        {
          text: "MAKE ITSTOP",
          delay: 17
        },
        {
          text: "FUCKING",
          delay: 21
        },
        {
          text: "AAAAAAAAAAAAAAAAAAA",
          delay: 27
        },
        {
          text: "I hope I was of assistance. Have a good day!",
          delay: 60
        }
      ],
      userChatMessages: [],
      visibleChatMessages: [],
      userText: "",
      replacement: "pain ",
      tideLevel: 0
    }
  },
  methods: {
    rain() {
      if (this.text.length > 5000) return
      const divider = Math.floor(Math.random() * this.text.length);
      const letter = this.replacement.charAt(divider % this.replacement.length);
      const beginning = this.text.slice(0, divider);
      const ending = this.text.slice(divider + 1);
      this.text = beginning + letter + ending
    },
    tide() {
      if (this.text.length > 5000) return
      let divider = null, letter = null;
      do {
        divider = this.tideLevel++;
        letter = this.replacement.charAt(divider % this.replacement.length);
      } while (letter == this.text.charAt(divider))
      const beginning = this.text.slice(0, divider);
      const ending = this.text.slice(divider + 1);
      this.text = beginning + letter + ending
    },
    enterMessage() {
      this.visibleChatMessages.push({
        source: "user",
        text: this.userText
      });
      this.userText = "";
    },
    addStaffMessage(text) {
      this.visibleChatMessages.push({
        source: "staff",
        text
      })
    },
    tryToCloseChat() {
      alert("You are not sure you want to close this.")
    }
  },
  mounted() {
    setInterval(this.rain, 30);
    setInterval(this.tide, 100);
    for (const message of this.staffChatMessages) {
      setTimeout(this.addStaffMessage, message.delay * 1000, message.text)
    }
  }
}).mount('#app')