function bgImageGallery(array, selector1, selector2) {
  // Stop the image gallery.
  if(array === 'stop') {
    clearInterval(window.bgInterval);
    clearTimeout(window.bgTimeout);
    return;
  }

  var photos = array.slice(); // Copy the array, preserving the original.
  var bg1 = document.querySelector(selector1);
  var bg2 = document.querySelector(selector2);

  // Add on / off classes.
  bg1.classList.add('off');
  bg2.classList.add('on');

  var ranPhotos = []; // Holder array for randomizing the set of photos.

  // Loop through our photos array in a randomized manner, pushing to our holder array.
  while(photos.length > 0) {
    var num = Math.floor(Math.random() * photos.length);
    ranPhotos.push(photos[num]);
    photos.splice(num,1);
  }

  var bg1showing = false;
  var i = ranPhotos.length;

  // Initial photos.
  bg1.style.backgroundImage = 'url(' + ranPhotos[i - 2] + ')';
  bg2.style.backgroundImage = 'url(' + ranPhotos[i - 1] + ')';

  // Swap the background image.
  window.bgInterval = setInterval(function() { // Assign to the window object for the ability to cancel.
    bg1.classList.toggle('on');
    bg2.classList.toggle('on');
    bg1.classList.toggle('off');
    bg2.classList.toggle('off');

    bg1showing = !bg1showing;

    // Change invisible div's background.
    window.bgTimeout = setTimeout(function() { // Assign to the window object for the ability to cancel.
      // Start the counter over if we've cycled through the photos.
      if(i === ranPhotos.length) i = 0;

      if(bg1showing) { // for even numbers...
        bg2.style.backgroundImage = 'url(' + ranPhotos[i] + ')';
      } else {
        bg1.style.backgroundImage = 'url(' + ranPhotos[i] + ')';
      }

      i++;

    }, 5000); // Wait time to change the invisible div's background (set to css transition time + 1 sec).
  }, 10000); // Wait time to change the image.
};