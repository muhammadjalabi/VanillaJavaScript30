const allInputs = document.querySelectorAll('.controls input')

function handleUpdate(){
  //the dataset object contains the "data-" attributes
  //"data-sizing='px'" becomes "sizing: px" in the object.
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix )
}

allInputs.forEach(input => input.addEventListener('change', handleUpdate))
allInputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
