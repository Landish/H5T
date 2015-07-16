var elixir = require('laravel-elixir');
require('laravel-elixir-sass-compass');

// Elixir configuration.
elixir.config.assetsDir = 'src/';
elixir.config.cssOutput = 'src/css';
elixir.config.publicDir = 'dist';

elixir(function(mix) {

    // Compass
    mix.compass('*.scss', null, {
        require: ['gridle', 'sass-globbing'],
        image: 'dist/images',
        sourcemap: elixir.config.sourcemaps
    });

    // Combine all *.css files into app.css
    mix.stylesIn(elixir.config.cssOutput, elixir.config.publicDir + '/css/app.css');

});