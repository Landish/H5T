# HTML5 Boilerplate
*Custom HTML5 Boilerplate*

### Dependencies and 3rd-party Libraries
* [reset.css](https://github.com/adamstac/meyer-reset)
* [sass-bem](https://github.com/zgabievi/sass-bem)
* [jQuery](http://jquery.com/)
* [slick](http://kenwheeler.github.io/slick/) (slider)
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/)
* [HTML5 CSS Sticky Footer](http://ryanfait.com/html5-sticky-footer/) (optional)
* [Hamburgers](https://github.com/jonsuh/hamburgers)
* [animate.css](https://github.com/daneden/animate.css)
* [GRIDLE{.SCSS}](http://gridle.org/)
* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)


### Google Maps Usage
```html
<div id="map" data-zoom="15" data-zoom-control="true|false" data-scroll-wheel="true|false" data-disable-default-ui="true|false" data-lat="41.728216225923" data-lng="44.760446548462"></div>
```

### Hamburger Menu
```html
<button class="hamburger hamburger--collapse" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
```


### NPM Packages

Install all packages:

```
$ npm install
# or just run 
$ yarn
```


### Images
Put your images into directory:

```
/src/images/
```

### Commands

Compile assets:

```
$ npm run webpack
```

Watch for changes in all assets:

```
$ npm run dev
```

Build (combine and minify) for production:

```
$ npm run production
```
