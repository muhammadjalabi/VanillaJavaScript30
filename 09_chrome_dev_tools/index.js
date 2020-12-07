const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello')

// Interpolated
console.log('Hello I am a %s string!', '✂️')
//Or: 
let scissor = '✂️'
console.log(`Hello, I am a ${scissor} string`)

// Styled
console.log('%c I am some styled text', 'font-style: italic; color: red; background: palegoldenrod;')

// warning!
console.warn('Uh-oh, ')

// Error :|
console.error('ERROR!? WHERE!?')

// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 2, 'Incorrect. 1 is not 2')
console.assert(1 === 1, 'This will not log because it is true!')
const p = document.querySelector('p')
console.assert(p.classList.contains('yoyoyo'), 'False! P tag does not contain class of "yoyoyo"')

// clearing
// console.clear('this will clear the console')

// Viewing DOM Elements 
console.log(p) //this shows the element itself
console.dir(p) // gives all methods, and stuff that lives inside


// Grouping together
console.clear()
dogs.forEach(dog => {
  // console.group(`${dog.name}`)
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} year(s) old`)
  console.log(`${dog.name} is ${dog.age * 7} year(s) old in dog years`)
  console.groupEnd(`${dog.name}`)

})

// counting
console.count('Muhammad')
console.count('Jalabi')
console.count('Muhammad')
console.count('Muhammad')
console.count('Jalabi')
console.count('Jalabi')
console.count('Muhammad')
console.count('Jalabi')
console.count('Jalabi')

// timing
console.time('fetching data...')
fetch('https://api.github.com/users/muhammadjalabi')
  .then(blob => blob.json())
  .then(data => {
    console.timeEnd('fetching data...')
    console.log(data)
  })


//Table
console.table(dogs)
