
const div=document.querySelector('div');
setInterval(()=>{
    const time=new Date();
    div.textContent=time.toLocaleString()

},1000)