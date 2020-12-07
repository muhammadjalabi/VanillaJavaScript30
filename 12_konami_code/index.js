const pressed = []
const secretCode = 'modi'
window.addEventListener('keyup', (e) => {
  pressed.push(e.key)
  // console.log('1',-secretCode.length)
  // console.log('2',-secretCode.length - 1)
  // console.log('3',pressed.length)
  // console.log('4',pressed.length - secretCode.length)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if(pressed.join('').includes(secretCode)) {
    console.log('Correct!')
  }
  console.log(pressed)
})
