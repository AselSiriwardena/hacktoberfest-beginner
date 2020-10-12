// AUTHOR: Ruan Sena
// LANGUAGE: JavaScript
// GITHUB: https://github.com/ruansenadev

const greetings = {
  words: ['Hello', 'World'],
  speech() {
    console.log(this.words.join(' ') + '!');
  }
}

greetings.speech();