// * This script requires jQuery.
// Provide an array of photos to the function. Can be a mixture of relative and absolute urls.
// CAUTION: if the absolute url fails, your background for that slide will be white.

// Example photo array.
var photos = [
	'http://goo.gl/VniNwE',
	'http://goo.gl/a3vvho',
	'http://goo.gl/PVqsfK'
];

function backgroundImageGallery(photos) {
	var ranPhotos = []; // Holder array for randomizing the set of photos.

	// Loop through our photos array in a randomized manner, pushing to our holder array.
	while(photos.length > 0) {
		var randomNum = Math.floor(Math.random() * photos.length);
		ranPhotos.push(photos[randomNum]);
		photos.splice(randomNum,1);
	}

	var bg1showing = false;
	var index = 2; // Counter always starts at the 3rd photo in the array.

	// Initial photos.
	$('.bg1').css('background-image','url("'+ ranPhotos[0] +'")');
	$('.bg2').css('background-image','url("'+ ranPhotos[1] +'")');

	setInterval(function() { // Swap the background image.
		$('.bg1').toggleClass('on off');
		$('.bg2').toggleClass('on off');
		bg1showing = !bg1showing;

		setTimeout(function() { // Change invisible div's background.
			if(bg1showing) { // for even numbers...
				$('.bg2').css('background-image','url("'+ ranPhotos[index] +'")');
			} else {
				$('.bg1').css('background-image','url("'+ ranPhotos[index] +'")');
			}
			index += 1;

			// Start the counter over if we've cycled through the photos.
			if(index === ranPhotos.length){index = 0};
		}, 5000); // Wait 5 seconds to change the invisible div's background (set to css transition time + 1 sec).
	}, 10000); // Swap backgrounds every 10 seconds.
};

window.onload = function() {
	backgroundImageGallery(photos);
};