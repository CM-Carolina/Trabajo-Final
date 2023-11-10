/* --------SECCION VIDEO------------ */

let video= document.querySelector("#video");
let zonaTiempo=document.querySelector(".tiempo");
let tiempoActual;



const transformacion=(tiempo)=>{
    let minutos;
    let segundos;

    if(tiempo<60){
        minutos=0;
        segundos=tiempo.toFixed(0);
    }else{
        minutos = Math.floor(tiempo / 60);
        segundos = (tiempo % 60).toFixed(0);

        minutos = minutos.toFixed(0);
        segundos = segundos < 10 ? "0" + segundos : segundos;
    }


    return minutos + ":" + segundos;
}

window.addEventListener("load",()=>{
    /* console.dir(video.duration); */
    zonaTiempo.textContent=transformacion(video.duration);
    /* transformacion(video.duration) */
})

const inicioVideo=()=>{
    video.play();
   
    tiempoActual=setInterval(()=>{
        let tActual=document.querySelector(".tActual");
        tActual.textContent=transformacion(video.currentTime);

    },1000);
}

const pausaVideo=()=>{
    video.pause();
    
    clearInterval(tiempoActual)
}

/* ---------------ROMPECABEZAS------------------------------ */

function inicioFuncionesDrag(){
    var imagenes=document.querySelectorAll('.img-juegos img');
     destino=document.getElementById('cajadestino');  
     destino2  =document.getElementById('cajadestino2'); 
     destino3 = document.getElementById('cajasdestino3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', desplazoCajatoCaja, false);
    }

    destino.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    destino.addEventListener('drop', destinoFinal, false);

    destino2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    destino2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    destino2.addEventListener('drop', destinoFinal, false);


    destino3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    destino3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    destino3.addEventListener('drop', destinoFinal, false);

}
function desplazoCajatoCaja(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function destinoFinal(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++


}

function reiniciar() {
    window.location.reload();
}

inicioFuncionesDrag();


