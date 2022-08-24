
const btns = document.querySelector('button');
      overlay = document.querySelector('.overlay');


// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };


// btn.addEventListener('click', () => {
//     alert('Click');
// });


// let i = 0;
const deleteElement = (e) => {
    console.log(e.Target);
    console.log(e.type);

    // i++;
    // if (i ==1) {
    //     btn.addEventListener('click', deleteElement);
    // }
    
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);

});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);

});
    
