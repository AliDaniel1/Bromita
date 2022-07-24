var Titulo = document.getElementById("Title");
var Texto = document.getElementById("Text");

setTimeout(()=>
Titulo.innerText="Solo un momento mas",10000);
setTimeout(()=>
Titulo.innerText="",14000)
setTimeout(()=>
Texto.innerText="Toca aqui!",14000);

Texto.addEventListener("click", ()=>{
    Texto.innerText = "Gracias por tocarme el huevo,que rico ;)";
    Texto.style.pointerEvents="none"
})