'use strict';


const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 400px';

btns[1].style.borderRadius = '100%';
btns[0].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут був я');

div.classList.add('black');


// document.body.append(div);

wrapper.append(div);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.prepend(div);

// hearts[0].after(div);

// circle[0].remove();
// hearts[0].replaceWith(circle[0]);

// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circle[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');