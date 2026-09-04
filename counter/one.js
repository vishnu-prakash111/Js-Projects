
const main=document.querySelector('#title')
let curvalue=0;

const btndecrement=document.querySelector('#decrement')
const btnreset=document.querySelector('#reset')
const btnincrement=document.querySelector('#increment')


document.body.addEventListener('click', (e) => {
    if (e.target.tagName ==='BUTTON') return;
    curvalue++;
    main.textContent = curvalue;
});

btnincrement.addEventListener('click',(e)=>{
    curvalue++;
    main.textContent=curvalue;
});

btndecrement.addEventListener('click',()=>{
    curvalue--;
    main.textContent=curvalue;
});

btnreset.addEventListener('click',()=>{
    curvalue=0;
    main.textContent=curvalue;
});