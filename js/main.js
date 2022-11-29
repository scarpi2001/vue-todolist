const { createApp } = Vue;

createApp({
  data() {
    return {
        newTask: "",
        error: false,
        tasks: [
            { text: 'Fare i compiti', done: false }, 
            { text: 'Fare la spesa', done: true }, 
            { text: 'Fare il bucato', done: false }
        ]
    }
  },
  methods: {
    add() {

        if (this.newTask === "") {
            this.error = true;
        } else {
            this.tasks.push({text: this.newTask, done: false});
            this.error = false;
        }

        this.newTask = "";
        
    }
  }
}).mount('#app')

