let reinicar=document.getElementById("boton2") 

let operacion = function () {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let calcular=(peso/(altura**2)).toFixed(1)
    document.getElementById('resultado').textContent=calcular

    if(calcular<=18.5){
        document.getElementById('resultado').style.backgroundColor="rgb(255, 255, 0)"
    }else if(calcular>18.5 && calcular<=24.9){
        document.getElementById('resultado').style.backgroundColor="rgb(0, 0, 255)"
        document.getElementById('resultado').style.color="#ffffff"
    }else if(calcular>24.9 && calcular<=29.9){
        document.getElementById('resultado').style.backgroundColor="rgb(255, 128, 0)"
    }else if(calcular>29.9 && calcular<=40){
        document.getElementById('resultado').style.backgroundColor="rgb(255,0,0)" 
    }
}

let reset=function(){
    document.getElementById("peso").value=``
    document.getElementById("altura").value=``
    document.getElementById("resultado").textContent=``
}

let boton=document.getElementById("calcular")
boton.addEventListener('click',operacion)
reinicar.addEventListener('click',reset)