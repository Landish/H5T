var elixir = require('laravel-elixir');
require('laravel-elixir-sass-compass');

elixir(function(mix) {

    mix.compass('app.scss', null, {
        image: 'dist/images',
        sourcemap: true
    });
});