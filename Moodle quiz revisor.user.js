// ==UserScript==
// @name         Moodle quiz revisor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to not fail
// @author       IcAcTech
// @include      /^https?://ummoodle\.um\.edu\.mo/mod/quiz/review\.php
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $("input[type='radio'], input[type='checkbox']").attr('checked', false);
    $("input[type='radio'], input[type='checkbox']").attr('disabled', false);
    $(".icon.fa.fa-check[title='Correct'], .icon.fa.fa-remove[title='Incorrect']").remove();

    $.fn.shuffleChildren = function() {
        $.each(this.get(), function(index, el) {
            var $el = $(el);
            var $find = $el.children();

            $find.sort(function() {
                return 0.5 - Math.random();
            });

            $el.empty();
            $find.appendTo($el);
        });
    };

    $(".answer").shuffleChildren();

    $(".outcome").attr("style", "opacity: 0.1");

    $("form.questionflagsaveform > div").shuffleChildren();
})();