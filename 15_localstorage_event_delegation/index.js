const addItemsForm = document.querySelector('.add-items')
const itemsList = document.querySelector('.pizzas')
const items = []

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false,
  }
  items.push(item)
  populateList(items, itemsList)
  this.reset();
  console.log(items)
}

function populateList(listOfItems = [], htmlElement) {
  htmlElement.innerHTML = listOfItems.map((item, index) => {
    return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" />
        <label for="${item.text}">${item.text}</label>
      </li>
    `
  })
  .join('') // We join to get this as "text", i.e. elements instead of array
}

/* 
  CAVEATS of populateList-function:
    Every time we add an item through the populateList-fn 
    It recreates the entire list,
    (
      COULD BE A PERFORMANCE ISSUE, 
      NOT FOR THIS TINY EXAMPLE THOUGH,
      BUT WITH A LOT OF ANIMATIONS YOU MIGHT WANT
      REACT OR ANGULAR
    )

*/

addItemsForm.addEventListener('submit', addItem)
