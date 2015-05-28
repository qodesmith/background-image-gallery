# Background Image Gallery

#### Key features
* Randomized the order of images in the gallery each page load
* Background changes every 10 seconds
* Background image fades into the next with a 4s transition

The goal here was a simple background gallery that would both change the background every so often but also randomize the order for each visit to the page. This script makes use of jQuery so, as you will see, the included example.html file loads the latest version of jQuery from cdnjs.com.

#### How it works
There are two `<div>` elements included right after the opening `<body>` tag. JavaScript is controlling the CSS of those div's. Only one is visible at a time. The visibility is "swapped" on both div's using jQuery to toggle various classes. CSS transitioning allows us to create a fade-in / fade-out effect as one div becomes visible while other fades to transparent. While one div is completely invisible, it's background property is changed.

#### What you need to do
See the included `example.html` file. Just include jQuery in your html file.

#### What you can tweak
There are 3 main settings you can / should customize:<br>
1. **Background change delay**: this can be found on on line 45 of the script. It's set to 10 seconds.<br>
2. **Transition time**: this is a CSS thing. Change the transition properties of *both* the `.on` and `.off` classes to your liking. They can be found in the included CSS file.<br>
3. **Invisible div background change**: to avoid weird things, set this to 1 second *more* than the above transition time.

Please feel free to checkout my other projects here on Github. If you use this script, drop me a line!
