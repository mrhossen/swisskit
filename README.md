## What is Swisskit?

Swisskit is a frontend web pack based on SASS & some jQuery library. 

Swisskit will help to build any kind of frontend responsive project and trying to add all of the 3rd party libraries which make the frontend development easier & quicker. 

## 3rd party library include on Swisskit

<a href="https://getbootstrap.com/">**Bootstrap:** Front-end framework.</a>

<a href="https://github.com/OwlCarousel2/OwlCarousel2">**Owl Carousel:** Responsive carousel slide.</a>

<a href="https://github.com/jsor/lity">**Lity:** Responsive lightbox.</a>

<a href="https://github.com/michalsnik/aos">**AOS:** Animate On Scroll Library.</a>

------------------------------

## Installation

### Swisskit

Add styles in `<head>`:

```html
<link rel="stylesheet" href="assets/style/min/swisskit.min.css">
```

Add script right before closing `</body>` tag:

```html
 <script src="assets/js/lib/swisskit.min.js"></script>
```

### 3rd party library CSS

Add styles in `<head>` (add only what you need.)

```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="assets/style/lib/bootstrap.min.css">
<!-- Owl Carousel CSS -->
<link rel="stylesheet" href="assets/style/lib/owl.carousel.min.css">
<!-- Animate On Scroll CSS -->
<link rel="stylesheet" href="assets/style/lib/aos.css">
<!-- Responsive lightbox CSS -->
<link rel="stylesheet" href="assets/style/lib/lity.min.css">
<!-- Ico Font CSS -->
<link rel="stylesheet" href="assets/icofont/icofont.min.css">

```
### 3rd party library JS

Add script right before closing </body> tag: (add only what you need.)

```html
<!-- jQuery -->
<script src="assets/js/lib/jquery-3.3.1.min.js"></script>
<!-- Popper JS -->
<script src="assets/js/lib/popper.min.js"></script>
<!-- Bootsttrap JS -->
<script src="assets/js/lib/bootstrap.min.js"></script>
<!-- Owl Carousel JS -->
<script src="assets/js/lib/owl.carousel.min.js"></script>
<!-- Animate On Scroll JS -->
<script src="assets/js/lib/aos.js"></script>
<!-- Responsive lightbox JS -->
<script src="assets/js/lib/lity.min.js"></script>

```

------------------------------

### How to modify SASS

*SASS Compile path should be:*
```
CSS Path: /assets/style/css
Min Path: /assets/style/min
```

*Easy way to do with VSCODE*

1. Install <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass">Live Sass Compiler</a> VSCODE extension. 
2. Use bellow configuration on VSCODE settings.json

```json
"liveSassCompile.settings.formats":[
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/assets/style/css"
        },
        {
            "extensionName": ".min.css",
            "format": "compressed",
            "savePath": "/assets/style/min"
        }
    ]
```
Now it's ready to go. 

------------------------------

## SASS folder stracture

```
SASS folder path: assets/style/saas

- swisskit

    -- elements (Contains some extra elements style.)
        --- _buttons.scss
        --- _contact.scss
        --- _heading.scss
        --- _nav.scss

    -- helpers (Contains functions, mixing, and variables.)
        --- _colors.scss
        --- _functions.scss
        --- _mixins.scss
        --- _parameters.scss
        --- _responsive.scss

    -- modules (Contains all the modules we will use in our code.)
        --- _base.scss
        --- _border.scss
        --- _hover.scss
        --- _keyframes.scss
        --- _margin.scss
        --- _padding.scss
        --- _preloader.scss
        --- _fontsize.scss
        --- _align.scss
        --- _width.scss

- theme (Your own theme SASS files)

    -- elements (Custom elements for your theme.)

    -- modules (Custom modules for your theme.)

- _swisskit-config.scss (Overwrite SASS variables)

- swisskit.scss (Call all of sub SASS files)

- theme.scss (Call all of sub SASS file for your theme)
```

------------------------------

## Documentation

Coming Soon...

------------------------------

## License

MIT License

Copyright (c) 2018 Rahat Hossen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
