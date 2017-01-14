// Disable Desktop notifications.
process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
require('laravel-elixir-icons');

// Elixir configuration.
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function (mix) {

    // mix sass
    mix.sass('app.scss');
    mix.sass('print.scss');

    // create custom icons
    mix.icons({
        relativeCssDir: "../fonts/",
        iconFontName: "Icon",
        sassFileName: "base/_icons.scss"
    });

    // copy fonts
    mix.copy(
        elixir.config.assetsPath + '/fonts/*{.eot,.svg,.ttf,.woff,.woff2}',
        elixir.config.publicPath + '/fonts'
    );

    // copy images
    mix.copy(
        elixir.config.assetsPath + '/images/*{.png,.jpg,.gif}',
        elixir.config.publicPath + '/images'
    );

    // mix scripts
    mix.scripts([

        // 3rd party libraries
        './node_modules/jquery/dist/jquery.js',
        './node_modules/slick-carousel/slick/slick.js',
        './node_modules/jquery-modal/jquery.modal.js',

        'map.js',
        'app.js'
    ], 'dist/js/app.js');

});