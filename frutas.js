const frutas = ["manzanas", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]

frutas.sort()

function SingularAPlural (palabra) {
    if (palabra.endsWith("s")){

    }
    return palabra + "s"
}

console.log(SingularAPlural(frutas[3]))

