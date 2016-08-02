function bgImageGallery(photos, containerSelector, time, random) {
  var container = document.querySelector(containerSelector);
  var bg1 = document.createElement('div');
  var bg2 = document.createElement('div');
  var credits = document.createElement('div');
  var images = photos.slice(); // Clone array so as not to manipulate the original object.
  var randomized = [];
  var fade = time / 2;
  var transitionTime = fade * .75 / 1000;
  var bg1Showing = true;
  var i = 2;
  var timing = {};
  var num;

  // Responsible for displaying image credits on the screen.
  function processCredits(image) {
    credits.innerHTML = image.credits ? image.credits : '';
  }

  if (images.length < 2) {
    throw new Error('You need to supply at least 2 images to the gallery.');
  }

  // 'killGallery' listener: stops the iterations stored in the `timing` object.
  document.body.addEventListener('killGallery', function killGallery(e) {
    document.body.removeEventListener(e.type, killGallery); // 1-time listener.

    clearInterval(timing.interval);
    clearTimeout(timing.timeout);
  });


  // If randomization requested, randomize the array.
  if (random) {
    while (images.length > 0) {
      num = Math.floor(Math.random() * images.length);

      randomized.push(images[num]);
      images.splice(num, 1);
    }

    images = randomized.slice();
  }

  // Append the elements to the container.
  container.appendChild(bg1);
  container.appendChild(bg2);
  container.appendChild(credits);

  // Add the necessary classes classes.
  bg1.classList.add('bg1');
  bg1.classList.add('on');
  bg2.classList.add('bg2');
  bg2.classList.add('off');
  credits.classList.add('bg-credits');

  // The page loads with the first background loaded & showing,
  // the second background loaded & not showing.
  bg1.style.backgroundImage = 'url(' + images[0].image + ')';
  bg2.style.backgroundImage = 'url(' + images[1].image + ')';

  // Set the transition time on the background elements.
  bg1.style.transition = 'opacity ' + transitionTime + 's';
  bg2.style.transition = 'opacity ' + transitionTime + 's';

  // Set the credits on the first image (if available).
  processCredits(images[0]);

  // Start the gallery!
  timing.interval = setInterval(function() {
    if (i === images.length) i = 0;

    processCredits(i === 0 ? images[images.length - 1] : images[i - 1]);

    bg1.classList.toggle('on');
    bg1.classList.toggle('off');
    bg2.classList.toggle('on');
    bg2.classList.toggle('off');

    bg1Showing = !bg1Showing;

    timing.timout = setTimeout(function() {
      if (bg1Showing) {
        bg2.style.backgroundImage = 'url(' + images[i].image + ')';
      } else {
        bg1.style.backgroundImage = 'url(' + images[i].image + ')';
      }

      i++;
    }, fade);
  }, time);
}
