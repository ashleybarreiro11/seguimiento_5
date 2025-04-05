const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

let jugar = true

while (jugar) {

    let computadora = opciones[getRandomInt(3)]
    console.log ("La computadora eligió " + computadora)
    
    let usuario = prompt("Juega PIEDRA, PAPEL O TIJERA").toUpperCase();
    console.log ("El usuario eligió " + usuario)

    if (usuario === computadora) {
        console.log("¡ESTAMOS EMPATADOS!");
    } else if (
        (usuario === "PIEDRA" && computadora === "TIJERA") ||
        (usuario === "PAPEL" && computadora === "PIEDRA") ||
        (usuario === "TIJERA" && computadora === "PAPEL")) 
        {
        console.log("¡FELICIDADES ... GANASTE!");
    } else {
        console.log("LO SIENTO ... PERDISTE");
    }

    //Opción volver a jugar
    let reanudar = prompt("¿Quieres jugar de nuevo? (S/N)").toUpperCase();
    if (reanudar === 'N') {
        jugar = false
        console.log("¡GRACIAS POR JUGAR!");
        break;
    }
}