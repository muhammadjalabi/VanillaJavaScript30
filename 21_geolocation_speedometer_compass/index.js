const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

//Gets only once
// navigator.geolocation.getCurrentPosition

//Watches all the time
navigator.geolocation.watchPosition((data) => {
  console.log(data)
  speed.textContent = Math.round(data.coords.speed)
  arrow.style.transform = `rotate(${data.coords.heading}deg)` 
}, (error) => {
  console.log(error)
  console.error('You have to allow geolocation')
}
)

