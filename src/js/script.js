import "../scss/bundle.scss";

window.$ = window.jQuery = require('jquery');
require('animatescroll.js');
require('popper.js');
require('bootstrap');
require('@fortawesome/fontawesome-free/js/all');




$(function () {

    // scrollspy

    // take this in css
    $('.one').hover(function () {
        $('.box-footer .one').css("color", "#5bc5f4");
    }, function () {
        $('.box-footer .one').css("color", "#353535");
    });

    $('.two').hover(function () {
        $('.box-footer .two').css("color", "#5bc5f4");
    }, function () {
        $('.box-footer .two').css("color", "#353535");
    });

    $('.three').hover(function () {
        $('.box-footer .three').css("color", "#5bc5f4");
    }, function () {
        $('.box-footer .three').css("color", "#353535");
    });

    $('.four').hover(function () {
        $('.box-footer .four').css("color", "#5bc5f4");
    }, function () {
        $('.box-footer .four').css("color", "#353535");
    });

});