# Background Image Gallery
A JavaScript background gallery that fades from one image to the next. Options include randomizing the order of the supplied images and displaying credits to the image's author.


## Installation

### via NPM

`npm install background-image-gallery --save`

The CSS file will be located at `./node_modules/background-image-gallery/BGimageGallery.css`.

### Manually

Include `BGimageGallery.css` and `BGimageGallery.js` in your HTML file:

```html
<head>
  ...
  <link rel="stylesheet" href="bgImageGallery.css">
</head>
<body>
  ...
  <script src="bgImageGallery.js"></script>
</body>
```


## Usage

```javascript
bgImageGallery(arrayOfImageObjects, containerSelector, speed, random);
```

`bgImageGallery` can take up to four arguments, the fourth being optional:

1. `arrayOfImageObjects`: an array of objects, each containing at least an `image` property with a url as a string for the value: `{image: 'some/url/here.jpg'}`. If you pass in a `credits` property, a small credit in the lower right-hand corner of the screen will show the contents you provide. You _can_ provide html here so as to link to the author's site, etc.

2. `containerSelector`: any valid CSS selector as a string for where you would like the gallery to live. For example, providing `body` will have the gallery create its elements and append them to the body. For a full-page gallery, set the container's width & height to 100vw and 100vh respectively in your CSS.

3. `speed`: a value in milliseconds representing how long each image will be shown before moving on to the next. The gallery does the fading calculations on the fly based on the number you provide.

4. `random`: _(optional)_ a value of `true` will cause the supplied array of images to be randomized.


### Example:

```javascript
var images = [
  {image: 'http://example.com/images/01.png'},
  {image: 'images/02.png', credits: 'Photo by Yours Truly'},
  {image: 'images/03.png', credits: 'Photo by <a href="http://me.com">Me</a>'
];

bgImageGallery(images, 'body', 8000, true);
```

## 'killGallery' Feature
If you would like to stop the iteration of images, simply fire off a `killGallery` event from the body. Keep in mind that if you have multiple galleries on a page, they will all be killed with this single event:

```javascript
document.body.dispatchEvent(new Event('killGallery'));
```