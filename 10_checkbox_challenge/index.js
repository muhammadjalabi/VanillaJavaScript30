const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')

let lastChecked;

function handleCheck(e) {
  // check if shift key is pressed
  //and check that the checkbox is checked
  let inBetween = false
  if (e.shiftKey && this.checked) {
      //go ahead and do stuff
      //Loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log('Starting to check inbetween!')
      }
      if (inBetween ) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck)
})
