(function(root, returnBackgroundGallery) {
  if (typeof exports === 'object') return module.exports = returnBackgroundGallery()
  if (typeof define === 'function' && define.amd) return define(function() { return returnBackgroundGallery() })
  return root.backgroundGallery = returnBackgroundGallery()
})(this, function() {
  // A helper function to randomize an array.
  function randomizeArray(arr) {
    const randomized = []
    let copy = arr.slice() // Avoid mutating the original array.

    while (copy.length) {
      const num = Math.floor(Math.random() * copy.length)
      randomized.push(copy.splice(num, 1)[0])
    }

    return randomized
  }

  return function backgroundGallery({ photos, interval, fade, random }) {
    // Conditionally randomize the photos.
    if (random) photos = randomizeArray(photos)

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

    // Return a function that stops the gallery.
    return function killGallery() {
      clearInterval(recurring)
    }
  }
})
