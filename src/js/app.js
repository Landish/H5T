//noinspection JSUnresolvedFunction
require('./bootstrap');

$(function () {

    // remove no-js class from html tag
    $('html').removeClass('no-js');

    // Cache the Body Tag
    var body = $('body');

    // init jquery modal
    $('[data-modal]').click(function () {
        $(this).modal();
        return false;
    });
});