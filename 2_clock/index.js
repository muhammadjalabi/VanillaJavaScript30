const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setTime(){ 
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()
  const secondsToDegrees = ((seconds / 60) * 360) + 90  //90 comes from initial 90degrees that are on the hand-divs transform
  const minutesToDegrees = ((minutes / 60) * 360) + 90 
  const hoursToDegrees = ((hours / 12) * 360) + 90 
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`
  minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`
  hourHand.style.transform = `rotate(${hoursToDegrees}deg)`
}


setInterval(setTime, 1000)
