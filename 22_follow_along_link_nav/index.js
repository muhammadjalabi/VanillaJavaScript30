const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function higlightLink(){
  const linkCoordinates = this.getBoundingClientRect()
  const coordinates = {
    width: linkCoordinates.width,
    height: linkCoordinates.height,
    top: linkCoordinates.top + window.scrollY,
    left: linkCoordinates.left + window.scrollX,
  }
  console.log(linkCoordinates)
  highlight.style.width = `${coordinates.width}px`
  highlight.style.height = `${coordinates.height}px`
  highlight.style.transform = `translate(${coordinates.left}px, ${coordinates.top}px)`
}

triggers.forEach(link => link.addEventListener('mouseenter', higlightLink))
