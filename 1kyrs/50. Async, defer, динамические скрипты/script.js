'use strict';

const p = document.querySelectorAll('p');
console.log(p);



function loadScrit(src) {
    const script = document.createElement('script');
script.src = src;
script.async = false;
document.body.append(script);

}

loadScrit('test.js');
loadScrit('some.js');