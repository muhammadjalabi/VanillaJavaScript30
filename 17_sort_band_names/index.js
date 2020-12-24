const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripWord(title){
  //an, the, a <- are not ok
  return title.replace(/^(a |the |an )/i, '').trim() //remove trailing spaces
}

const sortedBands = bands.sort((a, b) => stripWord(a) > stripWord(b) ? 1 : -1 )
console.table(sortedBands)
document.querySelector('#bands').innerHTML = 
sortedBands
  .map(band => `<li>${band}</li>`)
  .join('')
