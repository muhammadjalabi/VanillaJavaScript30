const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream
      video.play()
    }).catch(error => {
      console.error(error.message)
      video.src = window.URL.createObjectURL(localMediaStream)
    })
}

function paintToCanvas() {
  console.log(video)
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width
  canvas.height = height
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)

    //Take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height)
    //Mess with them
    // pixels = redEffect(pixels)

    pixels = rgbSplit(pixels);
    // pixels = greenScreen(pixels);

    // Add another alpha on top, try playing
    // ctx.globalAlpha = 0.1

    // Put them back
    ctx.putImageData(pixels, 0, 0)
  }, 16)

  //We return the interval because if we want to stop the canvas from painting
  // we have access to that interval with clearInterval on it
}

function takePhoto() {
  // Play the snap camera sound
  snap.currentTime = 0;
  snap.play()

  //Take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg') // base 64 image
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'good_looking_image')
  link.innerHTML = `<img src="${data}" alt="" />`
  strip.insertBefore(link, strip.firstChild)
}

function redEffect(pixels) {
  /*
  The pixels = ctx.getImageData(0,0, width, height) is going to create what looks like an array
  with R, G, B, A, values and then repeat them, which is why we will increment with 4 in our for loop
  */
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100// pixels[i] //r
    pixels.data[i + 1] = pixels.data[i + 1] - 50 // pixels[i + 1] //g
    pixels.data[i + 2] = pixels.data[i + 2] - 0.5 // pixels[i + 2] //b
    // // we dont really need to touch the alpha
  }
  return pixels
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] // RED
    pixels.data[i + 100] = pixels.data[i + 1] // GREEN
    pixels.data[i - 150] = pixels.data[i + 2] // BLUE
  }
  return pixels
}

function greenScreen(pixels) {
  //New level object to use for the sliders
  const levels = {}
  
  //Collect all RGB sliders
  const allRGBs = document.querySelectorAll('.rgb input')
  //Map through and add their respective values to the object
  allRGBs.forEach((input) => {
    levels[input.name] = input.value
  })

  //What our Levels-object now contain
  console.log('levels object: ', levels)
  
  //Loop over every single pixel
  for (let i = 0; i < pixels.data.length; i += 4) {
    //Figure out what the r, g, b and alpha are
    red = pixels.data[i + 0]
    green = pixels.data[i + 1]
    blue = pixels.data[i + 2]
    alpha = pixels.data[i + 3]

    //and if the red and the green and the blue are anywhere between the min and max values
    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red >= levels.rmax
      && green >= levels.gmax
      && blue >= levels.bmax
    ) {
      //we take it out, cause the fourth pixel is the alpha
      // the transparency pixel. 0 = totally transparent
      pixels.data[i + 3] = 0
    }

  }
return pixels
}


getVideo()

video.addEventListener('canplay', paintToCanvas)
