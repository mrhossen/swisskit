## Documentation of Swisskit

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

## How to use:

You can easily reconfigure colors & typography from `swisskit_config.scss`

File path: `assets/style/sass/_swisskit_config.scss`

Then to add/update your own style use `theme` folder & `theme.scss`

```
Don't change / overwrite anything from 
assets/style/sass/swisskit, swisskit.scss 
assets/style/css/swisskit.css, assets/style/min/swisskit.min.css
assets/js/lib/swisskit.js, assets/js/lib/swisskit.min.js
```
It's highly recommand to use your own style under `theme` folder & `theme.scss`

------------------------------

## Preloader style

Swisskit have 7 prelaoder style 

**Preloader 1**

<img src="https://user-images.githubusercontent.com/3492658/47774766-1836d380-dd18-11e8-8207-cac692e7b319.gif" alt="preloader 1" width="60">

```
<div id="sk_preloader">
<div class="loader spinner1"></div>
</div>
```