let images = [ '../images/board1.jpg',
             '../images/board2.jpg',
            '../images/board3.jpg',
        '../images/board4.jpg'];

let imageTag = document.querySelector('.imgTag');
let i = 0;

function next(){
    if(i >= images.length-1) {
        i = 0;
    }
    i++;
    imageTag.setAttribute('src', images[i]);
}
function back(){
    if(i <= 0) {
        i = 4;
    }
    i--;
    imageTag.setAttribute('src', images[i]);
}
setInterval(function() {
    next()
  }, 5000);

let btn = document.querySelector('.nav-btn');

btn.addEventListener('click',() =>{
    document.getElementById('united').classList.toggle('active');
})

let close = document.querySelector('#close');

close.addEventListener('click',() =>{
    document.querySelector('input').value = '';
})

let inp = document.querySelector('input');

inp.addEventListener('input',() =>{
    if(inp.value.toLowerCase() == 'computer'){
        location.href = 'computer.html';
    }
    else if(inp.value.toLowerCase() == 'laptop'){
        location.href = 'laptops.html';
    }
    else if(inp.value.toLowerCase() == 'dress' || inp.value.toLowerCase() == 'cloth'){
        location.href = 'dress.html';
    }
    else if(inp.value.toLowerCase() == 'mobile' || inp.value.toLowerCase() == 'smartphone'){
        location.href = 'mobiles.html';
    }
    else if(inp.value.toLowerCase() == 'book' || inp.value.toLowerCase() == 'copy'){
        location.href = 'books.html';
    }
    else if(inp.value.toLowerCase() == 'fruit' || inp.value.toLowerCase() == 'vegetable'){
        location.href = 'fruits.html';
    }
    else if(inp.value.toLowerCase() == 'about'){
        location.href = 'about.html';
    }
})