// Example photo array.
var photos = [
  { image: 'http://goo.gl/VniNwE', credits: 'Photo by IJK' },
  { image: 'http://goo.gl/a3vvho' },
  { image: 'http://goo.gl/PVqsfK', credits: 'Photo by <a href="http://google.com">ABC</a>' }
];

bgImageGallery(photos, '.bg1', '.bg2', '.bg-credits');