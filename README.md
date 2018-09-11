# Background Image Gallery

Fullscreen fading image goodness! This is a tiny JavaScript library for creating a fullscreen background image gallery where the images fade from one to the other. Made with nothing but *love* and *vanilla JavaScript* (redundant, I know).


## Installation

### Manually

Simply include `styles.css` in the `<head>`...

```html
<head>
  ...
  <link rel="stylesheet" href="styles.css">
  <!-- Via Unpkg CDN -->
  <!-- <link rel="stylesheet" href="https://unpkg.com/background-image-gallery/dist/styles.css"> -->
</head>
```

and include `big.js` just above your closing `</body>` tag...

```html
<body>
  ...
  <script src="big.js"></script>
  <!-- Via Unpkg CDN -->
  <!-- <script src="https://unpkg.com/background-image-gallery/dist/big.js"></script> -->
</body>
```

### Via NPM

```
npm install background-image-gallery
```


## What It's Doing

Is this magic?! All code is magic. The gallery simply creates a new `<div>` for each photo you supply, appends it to `document.body`, and applies some necessary inline CSS. A class will be toggled on each div to show/hide the images. The included CSS file takes care of the rest (such as full-screen coverage, width & heights, etc.).


## Usage

```javascript
// Store in a variable to stop the gallery later on (see below).
const gallery = big({
  photos: [{ image: 'photo1.jpg'}, { image: 'http://example.com/photo2.png'}],
  interval: 5000,
  fade: 3000,
  random: true
})
```

### Options

The gallery takes an `{ options }` object as its only argument:

#### photos

Supply an array of objects that take the shape of `{ image: <file/location>.png }`.

The image locations can be local to wherever you're running the code or out there on the interwebs:

```javascript
[
  { image: './location/to/local/image.png' },
  { image: 'https://i.imgur.com/M0IIqJ2.jpg' }
]
```

Why isn't it an array of just file locations, you ask? Because I plan on adding other features that will require objects to be used instead... that's why.

#### interval

How long do you want each photo to show before fading into the next? Tell me in milliseconds.

#### fade

How fast do you want one image to fade into the next? Again, milliseconds please.

#### random

If you provide `true`, your array will be randomized and everyone will think you're awesome.

### Stopping The Gallery / Cleanup

Ok, so you've got the gallery running on the page but enough's enough. How do we stop this thing? And who's gonna put away all those `<div>`'s this thing took out? Simple. The `big` function returns an object with 2 simple methods - `stop` and `clean`:

```javascript
const gallery = big({ ... })

/* Time passes by... */

// The gallery stops but the images are still in the DOM.
gallery.stop()

// The gallery stops and the images are removed from the DOM.
gallery.clean()
```
