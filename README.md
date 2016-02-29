# Background Image Gallery
A full-screen background gallery that both fades one image into the next and randomizes the order of images each time the page is loaded.

## Installation
Include `bgImageGallery.css` and `bgImageGallery.js` in your HTML file:

```html
<head>
  <link rel="stylesheet" href="bgImageGallery.css">
</head>
<body>
  ...
  <script src="bgImageGallery.js"></script>
</body>
```

*Note: be sure to either change the* `.bg1` *and* `.bg2` *selectors in the CSS file to match those in your document or use those class names on your elements.*

## Usage

```javascript
/* bgImageGallery(array, selector1, selector2); */
var arr = ['images/01.png', 'images/02.png', 'images/02.png'];
bgImageGallery(arr, '.class1', '.class2');
```

#### array
Provide an array of url's to images as strings.

#### selector1 / selector2
Provide any valid CSS selector as the 2nd and 3rd arguments.

## Stop feature
If you would like to stop the gallery from changing the images, pass the string `'stop'` to the function:
```javascript
bgImageGallery('stop');