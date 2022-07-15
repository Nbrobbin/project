// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сит!');
// }

// console.log ((hamburger && fries));


const hamburger = 3;
const fries = 1;
const cola = 1;
const nuggets = 2;

console.log(hamburger === 3 && cola && fries)

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 0);
// console.log(0 && 'hhtrhrrtyrtyrty');


if (hamburger === 3 && cola === 1 && fries) {
    console.log('все сити!');
} else {
    console.log('Ми йдем');
}


let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport);
