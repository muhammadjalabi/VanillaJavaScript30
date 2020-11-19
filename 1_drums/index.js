
const playAudio = event => {
  const keyWrapper = document.querySelector(`.key[data-key="${event.key}"]`)
  const audio = document.querySelector(`audio[data-key="${event.key}"]`)
  const kbdElement = document.querySelector(`div[data-key="${event.key}"] kbd`)
  const soundSpan = document.querySelector(`div[data-key="${event.key}"] .sound`)
  if (!audio) return
  audio.currentTime = 0 //rewinds to beginning for spamming
  audio.play()

  kbdElement.classList.add('pressed')
  soundSpan.classList.add('focused')
  keyWrapper.classList.add('playing')
}


//Need to be old function, arrow function will not let the this-keyword be executed
function removeTransform(event) {
  if (event.propertyName !== 'transform') return
  this.classList.remove('playing')
  //e.target.classList.remove('playing')

}

function removeKbdColor(event) {
  if (event.propertyName !== 'color') return
  this.classList.remove('pressed')
  //e.target.classList.remove('pressed')

}

function removeSpanColor(event) {
  if (event.propertyName !== 'color') return
  this.classList.remove('focused')
  // this.classList.remove('pressed')

}


const allKeys = document.querySelectorAll('.key')
const allKbds = document.querySelectorAll('.kbd')
const allSpans = document.querySelectorAll('.sound')
allKeys.forEach(key => key.addEventListener('transitionend', removeTransform))
allKbds.forEach(kbd => kbd.addEventListener('transitionend', removeKbdColor ))
allSpans.forEach(span => span.addEventListener('transitionend', removeSpanColor ))
window.addEventListener('keydown', playAudio)
