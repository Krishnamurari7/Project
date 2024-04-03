

const target = document.getElementsByClassName('second');

// const yes = document.getElementsByClassName("first");
// var no = document.getElementsByClassName('second'); // Assuming 'myElement' is the ID of the element you want to target
// target.addEventListener('click', function() {
//     // Your event handling code here
// });



// yes.addEventListener('click', () => {
//     alert("I Love You too Jaan Mere babu ❤️💕");
// })



function btn(){
    alert("I Love You too Jaan Mere babu ❤️💕");
}

function moveTarget(){
    const maxWidth = 400;
    const maxHeight = 400;

    const randomX = Math.floor(Math.random() * maxWidth)+1;
    const randomY = Math.floor(Math.random() * maxHeight)+1;

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

// no.addEventListener('mousehover',function(){
//     moveTarget();
// })
// target.addEventListener("mouseover", function(){
//      moveTarget()
//     });



