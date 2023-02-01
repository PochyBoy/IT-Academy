
//NIVEL 1

//*Ejercicio 1*//
function nombre (nombre){
    console.log(nombre)
}

nombre('Paul Vargas Portugal')
nombre('Juan Perez')
nombre('Maria Mercedez')

//NIVEL 2

//*Ejercicio 1*//
function nombreCompleto (nombre, apellidos){
    let nombreCompleto = `${nombre} ${apellidos}`
    console.log(nombreCompleto)
}

nombreCompleto('Paul', 'Vargas Portugal')

//*Ejercicio 2*//
function retornoDato (dato){
    return `Este es el dato que haz escrito en la función: ${dato}`
}

console.log(retornoDato('Este un dato innecesario'))

//NIVEL 3




/* Ejercicio 1 */

let matrizDeFunciones= []

if(matrizDeFunciones.length == 0){
    function funcionesMatriz(){
        for (let i = 0; i < 10; i++) {
            console.log(i)
            
        }
    }

    for (let i = 0; i < 10; i++) {
        matrizDeFunciones.push(funcionesMatriz())
    }
}



/* Ejercicio 2 */

let funcionAnonima = function(nombre){
    
    console.log(nombre)
}

funcionAnonima('Paul Vargas Portugal uwu')
