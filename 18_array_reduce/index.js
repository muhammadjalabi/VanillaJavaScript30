const timeNodes = document.querySelectorAll('[data-time]')
// const seconds = timeNodes.map(node => node.dataset.time)
//Will not work!

//Why?
//Timenodes is now a nodelist, so if
// we wanna turn nodelist to array:
// A. By spreading (...)
const timeNodes2 = [...document.querySelectorAll('[data-time]')]
// B. Array.from()
const timeNodes3 = Array.from(document.querySelectorAll('[data-time]'))

// console.log('seeeeecs2',seconds2)
const seconds = timeNodes2
  .map(node => node.dataset.time)
  .map(time => {
    const [min, sec] = time.split(':').map(parseFloat)
    return (min * 60) + sec
  }).reduce((total, videoSeconds) => total + videoSeconds)

let secondsLeft = seconds

const hours = Math.floor(secondsLeft / 3600) // Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600 // How many seconds left after

const minutes = Math.floor(secondsLeft / 60) // Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60 // How many seconds left after

console.log(hours, minutes, secondsLeft)

