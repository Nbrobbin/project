'use strict';

function first() {
   // Do something
   setTimeout(function() {
    console.log(1);
   }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошол этот урок!')
});