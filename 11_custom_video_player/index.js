// get elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const fullscreenButton = player.querySelector('.full_screen')
const skipButtons = player.querySelectorAll('[data-skip]')
const rangeSliders = player.querySelectorAll('.player__slider')

// build functions
function togglePlay() {
  video.paused 
  ? video.play()
  : video.pause()
  //Alternatives: 
  // 1:
  // const method = video.paused ? 'play' : 'pause'
  // video[method]()

  //2:
  // // video[video.paused ? 'play' : 'pause']()
}

function toggleFull(){
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  // video.requestFullscreen()
}

function updateButtonLabel() {
  const icon = this.paused ? '▶' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
video[this.name] = this.value
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}

// hook eventlisteners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButtonLabel)
video.addEventListener('pause', updateButtonLabel)
video.addEventListener('timeupdate', handleProgress)
// video.addEventListener('progress', handleProgress)

function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
video.currentTime = scrubTime
}

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))

rangeSliders.forEach(range => range.addEventListener('change', handleRangeUpdate))
rangeSliders.forEach(range => range.addEventListener('input', handleRangeUpdate))
progress.addEventListener('click', scrub)

let mouseDown = false
progress.addEventListener('mousemove', (event) => mouseDown && scrub(event))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

fullscreenButton.addEventListener('click', toggleFull)
