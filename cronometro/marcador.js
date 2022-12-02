/*class Controlador{
    iniciar(){	
        this.boton = document.getElementById("botonClick")
        this.puntos = document.getElementById("areaContador")
        let contador = 0

        this.boton.onclick = function () {
            contador = contador + 200
            document.body.appendChild(contador);   
        }
    }
}

const app = new Controlador()
window.onload = app.iniciar.bind(app)

*/
/* Variables del marcador */ 

let boton = document.getElementById("botonClick")
let botonBorrar = document.getElementById("botonBorrar")
let puntos = document.getElementById("puntos")
let contador = 0

/* Variables del temporizador */ 

let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")

/* Segundos comienzan desde cero */ 
let totalSegundos = 0   
let myInterval = setInterval(setTime, 1000)

/* Suma los puntos de 200 en 200 */ 

boton.onclick = function () {
    contador = contador + 200
    puntos.textContent = contador
}

/* Reinicio de contador, pone el contador a 0 */ 

botonBorrar.onclick = reiniciar
function reiniciar() {
    contador = 0
    puntos.textContent = contador
}

/* Función que calcula minutos y segundos */ 

function setTime() {
    totalSegundos++
    segundos.innerHTML = pad(totalSegundos % 60)
    minutos.innerHTML = pad(parseInt(totalSegundos / 60))
}

/* Función que nos sirve para que el temporizador nos sume los segundos de 1 en 1 */ 

function pad(valor) {
    let valorString = valor + ""
    if (valorString.length < 2) {
        return "0" + valorString
    } else {
        return valorString
    }
}