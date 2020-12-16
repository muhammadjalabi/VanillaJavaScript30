const hero = document.querySelector('.hero')
const text = document.querySelector('h1')
const walk = 100 // 100px

function shadow(e) {
  //Alternative 1
  // // const width = hero.offsetWidth
  // // const height = hero.offsetHeight

  //Alternative 2
  const { offsetHeight: height, offsetWidth: width } = hero
  
  //Position of where the cursor is
  let { offsetX: x, offsetY: y } = e

  //If you have nested elements inside, a little bit of logic helps
  if(this !== e.target){
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }
  console.log(x, y)
  /* 
  if 100 is as high as we can go, 0 isn't as low as we can go
  if 100 is our walk, then 50 is as high as we go, and -50 as low as we go
  */
  const xShadowCast =  (x / width * walk ) - (walk / 2)
  const yShadowCast = (y / height * walk) - (walk / 2)
  text.style.textShadow = `
  ${xShadowCast}px ${yShadowCast}px 0 rgba(255, 0, 255, 0.76),
  ${xShadowCast * -1}px ${yShadowCast}px 0 rgba(0, 255, 255, 0.83),
  ${yShadowCast}px ${xShadowCast * -1}px 0 rgba(0, 255, 0, 0.64),
  ${yShadowCast * -1}px ${xShadowCast}px 0 rgba(255, 255, 0, 0.87)
  `
}


hero.addEventListener('mousemove', shadow)
