window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()
//So we can see what we are saying as we are saying it. Otherwise we have to stop speaking for it to show
recognition.interimResults = true;

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    // Take out the result where the transcript is stored
    .map(result => result[0])
    // Take out the transcript from the speech
    .map(speech => speech.transcript)
    // Join together into a sentence
    .join('')
    p.textContent = transcript
    if(e.results[0].isFinal){
      p = document.createElement('p')
      words.appendChild(p)
    }

    //Idea: If someone would say "What is the weather"
    //Then you could get the weather from API owm etc
    if(transcript.includes('weather')){
      console.log('Getting the weather')
      console.log('Loading..')
      console.log("It's 🌞 today")

    }
})

//Since the above runs on result, there is nothing to start it when it finished
//So we ask for it to be started again when it ends for continuous speech recognition
recognition.addEventListener('end', recognition.start)

recognition.start()


