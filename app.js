// Example photo array.
var images = [
  { image: 'https://i.imgur.com/zoHQJSB.jpg', credits: 'Wolverine' },
  { image: 'https://i.imgur.com/M0IIqJ2.jpg', credits: 'Iron Man'},
  { image: 'https://i.imgur.com/WzfRnDE.jpg' },
  { image: 'http://goo.gl/PVqsfK', credits: 'Photo by <a href="http://google.com">Hulk</a>' }
];

// bgImageGallery(images, '.test', 4000, true, true);
backgroundGallery({
  photos: images,
  interval: 4000,
  fade: 3000,
  random: true
})
