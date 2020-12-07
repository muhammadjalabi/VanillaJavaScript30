const canvas = document.querySelector('#draw')
const context = canvas.getContext('2d') 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BAD'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 25
// context.globalCompositeOperation = 'multiply'

let isDrawing = false
let lastX = 0
let lastY = 0
let hslHue = 0
let direction = true

function draw(e) {
  if(!isDrawing) return //If not drawing just get out
  
  context.strokeStyle = `hsl(${hslHue}, 100%, 50%)`

  
  context.beginPath()
  //start from
  context.moveTo(lastX, lastY)
  //go to
  context.lineTo(e.offsetX, e.offsetY)
  context.stroke()
  lastX = e.offsetX
  lastY = e.offsetY
  // [lastX, lastY] = [e.offsetX, e.offsetY]
  
  hslHue > 360
  ? hslHue = 0
  : hslHue++

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction  
  }
  direction 
  ? context.lineWidth ++ 
  : context.lineWidth --

  

}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
