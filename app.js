const btn = document.querySelector('#change');
const body = document.querySelector('body');
const h1 = document.querySelector('h1')

btn.addEventListener('click', ()=>{
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    h1.innerText = `rgb(${red}, ${green}, ${blue})`;
})

const btn2 = document.querySelector('#reset');
btn2.addEventListener('click', ()=>{
    body.style.backgroundColor = 'white';
    h1.innerText = 'Click Me'
})
