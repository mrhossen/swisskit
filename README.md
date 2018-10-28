## What is Swisskit?

Swisskit is a frontend web pack based on SASS & some jQuery library. 

Swisskit will help to build any kind of frontend responsive project and trying to add all of the 3rd party libraries which make the frontend development easier & quicker. 

## 3rd party library include on Swisskit

<a href="https://getbootstrap.com/">**Bootstrap:** Front-end framework.</a>

<a href="https://github.com/OwlCarousel2/OwlCarousel2">**Owl Carousel:** Responsive carousel slide.</a>

<a href="https://github.com/jsor/lity">**Lity:** Responsive lightbox.</a>

<a href="https://github.com/michalsnik/aos">**AOS:** Animate On Scroll Library.</a>

## How to use

### How to modify SASS

*SASS Compile path should be:*

**CSS Path:** /assets/style/css
**Min Path**  /assets/style/min

*Easy way to do with VSCODE*

1. Install <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass">Live Sass Compiler</a> VSCODE extension. 
2. Use bellow configuration on VSCODE settings.json

```
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

## SASS folder stracture

**Main SASS folder:** assets/style/saas

- swisskit
    -- elements (Contains some extra elements style.)
        --- _buttons.scss
        --- _contact.scss
        --- _heading.scss

    -- helpers (Contains functions, mixing, and variables.)
        --- _colors.scss
        --- _functions.scss
        --- _mixins.scss
        --- _parameters.scss
        --- __responsive.scss

    -- modules (Contains all the modules we will use in our code.)

- theme ()

- _swisskit-config.scss (Overwrite SASS variables)
- swisskit.scss (Call all of sub SASS files)

## Documentation

Coming Soon...

## License

MIT License

Copyright (c) 2018 Rahat Hossen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
