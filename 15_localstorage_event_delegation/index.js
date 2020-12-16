const addItemsForm = document.querySelector('.add-items')
const itemsList = document.querySelector('.pizzas')
const items = JSON.parse(localStorage.getItem('items'))|| []

function addItem(e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false,
  }
  items.push(item)
  populateList(items, itemsList)
  /* 
  Just setting items array to localStorage 
  will not work cause it only accepts string in form of
  Key values. So a workaround would be to JSON.stringify
  
  */
 localStorage.setItem('items', JSON.stringify(items))
   /* 
    So when you want to get the items (onPageload)
    you wanna JSON.parse so you get it in its correct format
    So you can map and display the data
    (check --> const items <--)
    */
  this.reset();
  console.log(items)
}

function populateList(listOfItems = [], htmlElement) {
  htmlElement.innerHTML = listOfItems.map((item, index) => {
    return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" ${item.done ? 'checked': ''} />
        <label for="item${index}">${item.text}</label>
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


/* Event delegation = responsible parents, negligent children who dont necessarily hear instructions from parents */
function toggleDone(e){
/* So in this case, console.log(e.target) will give you two items:
the label, and the checkbox input
So from an event delegation perspective, basically
We listen for something higher, and then
inside of it, we check if it's the actual thing that we want
  */
  if(!e.target.matches('input')) return;
  
  const el = e.target
  const index = el.dataset.index // Here is the point of why we gave the checkboxes data-index attributes
  items[index].done = !items[index].done
  localStorage.setItem('items', JSON.stringify(items))
  populateList(items, itemsList)

}

addItemsForm.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)
