# Documentation of Swisskit

------------------------------

## Table of contents

[Installation](https://github.com/mrhossen/swisskit/blob/master/DOCUMENTATION.md#installation)

[How to modify SASS](https://github.com/mrhossen/swisskit/blob/master/DOCUMENTATION.md#how-to-modify-sass)

[SASS folder stracture](https://github.com/mrhossen/swisskit/blob/master/DOCUMENTATION.md#sass-folder-stracture)

[How to use:](https://github.com/mrhossen/swisskit/blob/master/DOCUMENTATION.md#how-to-use)

[Preloader style](https://github.com/mrhossen/swisskit/blob/master/DOCUMENTATION.md#preloader-style)

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

## How to modify SASS

*SASS Compile path should be:*
```
CSS Path: /assets/style/css
Min Path: /assets/style/min
```

*Easy way to do with VSCODE*

1. Install [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) VSCODE extension. 
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

```html
<div id="sk_preloader">
<div class="loader spinner1"></div>
</div>
```

**Preloader 2**

<img src="https://user-images.githubusercontent.com/3492658/47774785-2c7ad080-dd18-11e8-97ac-285441d60535.gif" alt="preloader 2" width="60">

```html
<div id="sk_preloader">
<div class="loader spinner2">
<div class="double-bounce1"></div>
<div class="double-bounce2"></div>
</div>
</div>
```

**Preloader 3**

<img src="https://user-images.githubusercontent.com/3492658/47774803-38ff2900-dd18-11e8-87b4-e7b308710dcb.gif" alt="preloader 3" width="60">

```html
<div id="sk_preloader">
<div class="loader spinner3">
<div class="rect1"></div>
<div class="rect2"></div>
<div class="rect3"></div>
<div class="rect4"></div>
<div class="rect5"></div>
</div>
</div>
```

**Preloader 4**

<img src="https://user-images.githubusercontent.com/3492658/47774824-461c1800-dd18-11e8-8513-f02443f222a3.gif" alt="preloader 4" width="60">

```html
<div id="sk_preloader">
<div class="loader spinner4">
<div class="cube1"></div>
<div class="cube2"></div>
</div>
</div>
```

**Preloader 5**

<img src="https://user-images.githubusercontent.com/3492658/47774833-516f4380-dd18-11e8-801c-eb907535dfb9.gif" alt="preloader 5" width="60">

```html
<div id="sk_preloader">
<div class="loader sk-circle">
<div class="sk-circle1 sk-child"></div>
<div class="sk-circle2 sk-child"></div>
<div class="sk-circle3 sk-child"></div>
<div class="sk-circle4 sk-child"></div>
<div class="sk-circle5 sk-child"></div>
<div class="sk-circle6 sk-child"></div>
<div class="sk-circle7 sk-child"></div>
<div class="sk-circle8 sk-child"></div>
<div class="sk-circle9 sk-child"></div>
<div class="sk-circle10 sk-child"></div>
<div class="sk-circle11 sk-child"></div>
<div class="sk-circle12 sk-child"></div>
</div>
</div>
```

**Preloader 6**

<img src="https://user-images.githubusercontent.com/3492658/47774845-5af8ab80-dd18-11e8-8ed2-e3a49b2dfec2.gif" alt="preloader 6" width="60">

```html
<div id="sk_preloader">
<div class="loader sk-cube-grid">
<div class="sk-cube sk-cube1"></div>
<div class="sk-cube sk-cube2"></div>
<div class="sk-cube sk-cube3"></div>
<div class="sk-cube sk-cube4"></div>
<div class="sk-cube sk-cube5"></div>
<div class="sk-cube sk-cube6"></div>
<div class="sk-cube sk-cube7"></div>
<div class="sk-cube sk-cube8"></div>
<div class="sk-cube sk-cube9"></div>
</div>
</div>
```

**Preloader 7**

<img src="https://user-images.githubusercontent.com/3492658/47774868-66e46d80-dd18-11e8-904b-0bca001895be.gif" alt="preloader 7" width="60">

```html
<div id="sk_preloader">
<div class="loader sk-folding-cube">
<div class="sk-cube1 sk-cube"></div>
<div class="sk-cube2 sk-cube"></div>
<div class="sk-cube4 sk-cube"></div>
<div class="sk-cube3 sk-cube"></div>
</div>
</div>
```
------------------------------

## Alignment Class

1. Text left will be simply `left`
2. Text right will be simply `right`
3. Text center will be simply `center`
4. Float left align `alignleft`
4. Float right align `alignright`

