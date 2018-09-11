const randomizeArray = require('randomize-array')

function backgroundImageGallery({ photos, interval, fade, random }) {
  if (random) photos = randomizeArray(photos)
  if (!photos.length) throw 'Please provide an array of photos.'

  /*
    For each photo:
      * create a <div>
      * apply the correct class name
      * apply inline css for the background image
      * apply inline css for the opacity transition
      * append the <div> to the body
  */
  const divs = photos.map((photo, i) => {
    const div = document.createElement('div')
    const on = i ? '' : ' qs-on'

    div.className = `qs-photo${on}`
    div.style.cssText = [
      `background-image: url('${photo.image}');`,
      `transition: opacity ${fade / 1000}s;`
    ].join('')
    document.body.append(div)

    return div
  })

  // `index` serves as a tracker for which <div> we're working with.
  let index = 0

  // Start the interval of changing the image that is shown.
  const recurring = setInterval(() => {
    // On the currently showing photo, remove that class that shows it.
    divs[index].classList.remove('qs-on')

    // Increment our tracking number.
    index++
    if (index === divs.length) index = 0

    // Add a class to the new photo that will show it.
    divs[index].classList.add('qs-on')
  }, interval)

  // Return a small API that can stop the gallery and/or remove the div's created.
  return {
    stop() {
      clearInterval(recurring)
    },
    clean() {
      clearInterval(recurring)
      divs.forEach(div => div.remove())
    }
  }
}

module.exports = backgroundImageGallery
