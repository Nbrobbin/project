'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(String(5 + '')));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const FontSize = 26 + 'px';

// To number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));


let answer = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN;
// 1 спосіб
let switcher = null;
switcher = 1;

if (switcher) {
    console.log('Working...');
}



// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'44444'));



