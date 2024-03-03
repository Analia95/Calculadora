let intentos = 6;
let palabra = "APPLE";
window.addEventListener('load', init);
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function intentar(){
    console.log("Intento!")
}
const input = document.getElementById('guess-input');
const valor = input.value;
function intentar(){
    const INTENTO = leerIntento();
    console.log(INTENTO)
}
function leerIntento(){
    let intento = document.getElementById('guess-input');
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
for (let i in palabra){
    console.log(palabra[i]);
}
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra){
        console.log("GANASTE!")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if (palabra.includes(INTENTO[i])){
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "Gris")
        }
    }
    intentos--
    if(intentos==0){
        console.log("PERDISTE! :(")
    }
    if (INTENTO === palabra){
        terminar ("<h1>GANASTE!</h1>")
        return
    }
    if(intentos == 0){
        terminar ("<h1> PERDISTE! :(</h1>")
    }
    function terminar(mensaje){
        const INPUT = document.getElementById("guess-input");
        INPUT.disabled = true;
        BOTON.disabled = true;
        let contenedor = document.getElementById('guesses');
        contenedor.innerHTML = mensaje;
}
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

for ( let i in palabra){
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
if (INTENTO[i]===palabra[i]){ //verde
    SPAN.innerHTML = INTENTO[i];
    SPAN.style.backgroundColor = 'green';
}
else if (palabra.includes(INTENTO[i])){ //amarillo
    SPAN.innerHTML = INTENTO[i];
    SPAN.style.backgroundColor = 'yellow';
}
else { //gris
SPAN.innerHTML = INTENTO[i];
SPAN.style.backgroundColor = 'grey';
}
ROW.appendChild(SPAN)
}
GRID.appendChild(ROW)

let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
0=APPLE
1=HURLS
2=WINGS
3=YOUTH
Math.floor(Math.random() * max - min + 1) + min;
const palabra = diccionario[Math.floor(Math.random()*diccionario.length)];
}