

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// Uncomment and look at it for learning purposes. Raw data
// fetch(endpoint).then(blob => console.log(blob))

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
  return cities.filter(element => {
    const regex = new RegExp(wordToMatch, 'gi')
    return element.city.match(regex) || element.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray.map(element => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = element.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = element.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
    <li>
      <span class="name">
      ${cityName}, ${stateName}
      <span>
      <span class="population">
      ${numberWithCommas(element.population)}
      <span>
    </li>
    `
  }).join('')

  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('keyup', displayMatches)
searchInput.addEventListener('change', displayMatches)
