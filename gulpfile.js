var elixir = require('laravel-elixir');

// Elixir configuration.
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {

    mix.sass('app.scss');
    mix.sass('grid.scss');

});