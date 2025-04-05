const frutas = ["manzana", "banano", "uva", "pera", "sandia", "kiwi", "naranja"]
console.log("Arreglo inicial de frutas: " + frutas)

frutas.sort()
console.log ("Frutas en orden alfabético: " + frutas)

function SingularAPlural (palabra) {
    if (palabra.endsWith("s")){

    }
    return palabra + "s"
}
console.log(SingularAPlural(frutas[3]))

const frutasPlural = [];
for (const fruta of frutas) {
    frutasPlural.push (SingularAPlural (fruta));
}
console.log ("Frutas en plural: " + frutasPlural)

function existeFruta (fruta) {
    return frutas.includes(fruta)
}
console.log("¿Existe mango?: " + existeFruta("mango"));
console.log("¿Existe uva?: " + existeFruta("uva"));

const frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con menos o igual a 4 letras: " + frutasCortas);

function eliminarFruta(fruta) {
    if (existeFruta(fruta)) {
        const index = frutas.indexOf(fruta);
        frutas.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

console.log("Eliminar mango: " + eliminarFruta("mango"));
console.log("Eliminar uva: " + eliminarFruta("uva"));
console.log("Arreglo tras eliminar uva: " + frutas)